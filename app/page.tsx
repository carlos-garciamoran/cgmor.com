import type { Metadata } from 'next'

import { SpotifyNowPlaying } from '@/components/spotify-now-playing'

export const metadata: Metadata = {
  title: 'Carlos García Morán',
  description: 'Software | Design',
}

export default function Home() {
  return (
    <div className="flex flex-1 grow cursor-default flex-col items-center justify-center px-4">
      <div className="first-line:leading-none">
        <div className="font-thin text-2xl leading-tight tracking-tight">
          <p className="text-secondary-foreground">
            Hey, my name is{' '}
            <span className="font-normal text-yellow-500 tracking-tighter dark:text-yellow-300">
              Carlos
            </span>
          </p>
        </div>
        <p className="mt-3 font-thin text-base text-secondary-foreground sm:tracking-wide">
          I'm into <span className="font-normal text-foreground">programming</span> &{' '}
          <span className="font-normal text-foreground">design</span>
        </p>
        <div className="mt-6">
          <SpotifyNowPlaying />
        </div>
      </div>
    </div>
  )
}
