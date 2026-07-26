import { NextResponse } from 'next/server'

import { getSpotifyTopItems, SpotifyApiError, type SpotifyTopItems } from '@/app/_lib/spotify'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const topItems = await getSpotifyTopItems()

    return NextResponse.json<SpotifyTopItems>(topItems, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    if (error instanceof SpotifyApiError) {
      console.error('Spotify top-items request failed', {
        code: error.code,
        status: error.status,
        message: error.message,
      })
    } else {
      console.error('Spotify top-items request failed', error)
    }

    return NextResponse.json<SpotifyTopItems>(
      { tracks: [], artists: [] },
      {
        status: 503,
        headers: {
          'Cache-Control': 'no-store',
        },
      },
    )
  }
}
