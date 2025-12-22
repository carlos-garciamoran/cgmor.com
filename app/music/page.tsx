import type { Metadata } from 'next'

import { Playlist } from '@/components/playlist'
import { SpotifyNowPlaying } from '@/components/spotify-now-playing'

export const metadata: Metadata = {
  title: 'Music',
}

export default function MusicPage() {
  return (
    <div className="grid size-full grid-cols-1 gap-4 p-3.5 sm:p-8 xl:grid-cols-2">
      {/* laser focus */}
      {/* <Playlist playlistId="0mmoKbStV3tF96HqqtphKQ" /> */}
      {/* experimental dance */}
      <Playlist playlistId="4jeYwv1Dj8YqB1fX2Aslgm" />
      {/* Barry can't curate */}
      {/* <Playlist playlistId="73d8XZr4SE9FsEfQ1cky9b" /> */}
      <div className="w-full max-w-sm">
        <SpotifyNowPlaying />
      </div>
    </div>
  )
}
