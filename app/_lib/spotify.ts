const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

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

export interface SpotifyNowPlayingData {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  songUrl?: string
}
