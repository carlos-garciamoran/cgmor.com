const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOP_ITEMS_ENDPOINT = 'https://api.spotify.com/v1/me/top'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const RETRYABLE_SPOTIFY_STATUSES = new Set([429, 500, 502, 503, 504])

type SpotifyErrorCode =
  | 'credentials_missing'
  | 'reauthorization_required'
  | 'token_request_failed'
  | 'api_request_failed'

export class SpotifyApiError extends Error {
  constructor(
    public readonly code: SpotifyErrorCode,
    message: string,
    public readonly status?: number,
  ) {
    super(message)
    this.name = 'SpotifyApiError'
  }
}

const getCredentials = () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    throw new SpotifyApiError('credentials_missing', 'Spotify credentials are not configured')
  }

  return { clientId, clientSecret, refreshToken }
}

const getAccessToken = async () => {
  const { clientId, clientSecret, refreshToken } = getCredentials()
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    cache: 'no-store',
  })

  const data = (await response.json()) as {
    access_token?: string
    error?: string
    error_description?: string
  }

  if (!response.ok || !data.access_token) {
    const code =
      data.error === 'invalid_grant' ? 'reauthorization_required' : 'token_request_failed'

    throw new SpotifyApiError(
      code,
      data.error_description || data.error || `Spotify token request failed (${response.status})`,
      response.status,
    )
  }

  return data.access_token
}

export const getNowPlaying = async () => {
  const accessToken = await getAccessToken()

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  })

  if (response.status !== 204 && !response.ok) {
    throw new SpotifyApiError(
      'api_request_failed',
      `Spotify currently-playing request failed (${response.status})`,
      response.status,
    )
  }

  return response
}

export const getSpotifyTopItems = async (): Promise<SpotifyTopItems> => {
  const accessToken = await getAccessToken()
  const query = new URLSearchParams({
    time_range: 'short_term',
    limit: '5',
  })
  const tracksResponse = await spotifyFetch(`${TOP_ITEMS_ENDPOINT}/tracks?${query}`, accessToken)
  const tracksData = (await tracksResponse.json()) as SpotifyTopTracksResponse
  const artistsResponse = await spotifyFetch(`${TOP_ITEMS_ENDPOINT}/artists?${query}`, accessToken)
  const artistsData = (await artistsResponse.json()) as SpotifyTopArtistsResponse

  return {
    tracks: tracksData.items.map((track) => ({
      id: track.id,
      name: track.name,
      imageUrl: track.album.images[0]?.url,
      spotifyUrl: track.external_urls.spotify,
    })),
    artists: artistsData.items.map((artist) => ({
      id: artist.id,
      name: artist.name,
      imageUrl: artist.images[0]?.url,
      spotifyUrl: artist.external_urls.spotify,
    })),
  }
}

const spotifyFetch = async (url: string, accessToken: string) => {
  let response: Response | undefined

  for (let attempt = 0; attempt < 3; attempt += 1) {
    response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    })

    if (response.ok) {
      return response
    }

    if (!RETRYABLE_SPOTIFY_STATUSES.has(response.status) || attempt === 2) {
      break
    }

    const retryAfter = Number(response.headers.get('Retry-After'))
    const delay =
      Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 250 * 2 ** attempt
    await new Promise((resolve) => setTimeout(resolve, Math.min(delay, 2000)))
  }

  throw new SpotifyApiError(
    'api_request_failed',
    `Spotify API request failed (${response?.status ?? 'unknown'})`,
    response?.status,
  )
}

export interface SpotifyNowPlayingData {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  songUrl?: string
}

export interface SpotifyTopItem {
  id: string
  name: string
  imageUrl?: string
  spotifyUrl: string
}

export interface SpotifyTopItems {
  tracks: SpotifyTopItem[]
  artists: SpotifyTopItem[]
}

interface SpotifyTopTracksResponse {
  items: Array<{
    id: string
    name: string
    external_urls: {
      spotify: string
    }
    album: {
      images: Array<{
        url: string
      }>
    }
  }>
}

interface SpotifyTopArtistsResponse {
  items: Array<{
    id: string
    name: string
    images: Array<{
      url: string
    }>
    external_urls: {
      spotify: string
    }
  }>
}
