import { NextResponse } from 'next/server'

import { getNowPlaying, SpotifyApiError, type SpotifyNowPlayingData } from '@/app/_lib/spotify'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const response = await getNowPlaying()

    if (response.status === 204) {
      return noStoreJson({ isPlaying: false })
    }

    const data = await response.json()

    if (!data.item || !data.is_playing) {
      return noStoreJson({ isPlaying: false })
    }

    const title = data.item.name
    const isEpisode = data.currently_playing_type === 'episode'
    const artist = isEpisode
      ? data.item.show?.name
      : data.item.artists?.map((artist: { name: string }) => artist.name).join(', ')
    const album = isEpisode ? data.item.show?.name : data.item.album?.name
    const albumImageUrl = isEpisode ? data.item.images?.[0]?.url : data.item.album?.images?.[0]?.url
    const songUrl = data.item.external_urls.spotify

    return noStoreJson({
      isPlaying: true,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    })
  } catch (error) {
    if (error instanceof SpotifyApiError) {
      console.error('Spotify now-playing request failed', {
        code: error.code,
        status: error.status,
        message: error.message,
      })
    } else {
      console.error('Spotify now-playing request failed', error)
    }

    return noStoreJson({ isPlaying: false }, 503)
  }
}

function noStoreJson(data: SpotifyNowPlayingData, status = 200) {
  return NextResponse.json<SpotifyNowPlayingData>(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}
