import { NextResponse } from 'next/server'

import { getNowPlaying, type SpotifyNowPlayingData } from '@/app/_lib/spotify'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const response = await getNowPlaying()

    if (response.status === 204 || response.status > 400) {
      return NextResponse.json<SpotifyNowPlayingData>({ isPlaying: false })
    }

    const data = await response.json()

    if (!data.item) {
      return NextResponse.json<SpotifyNowPlayingData>({ isPlaying: false })
    }

    const isPlaying = data.is_playing
    const title = data.item.name
    const artist = data.item.artists.map((artist: { name: string }) => artist.name).join(', ')
    const album = data.item.album.name
    const albumImageUrl = data.item.album.images[0]?.url
    const songUrl = data.item.external_urls.spotify

    return NextResponse.json<SpotifyNowPlayingData>({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    })
  } catch (error) {
    console.error('Error fetching now playing:', error)
    return NextResponse.json<SpotifyNowPlayingData>({ isPlaying: false })
  }
}
