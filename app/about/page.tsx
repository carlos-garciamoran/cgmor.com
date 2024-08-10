import type { Metadata } from 'next'
import Link from 'next/link'

import { ExternalLink } from '@/app/_components/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software | Design',
}

// DESIGN: use close-up of Pollock's painting as background (CSS repeat pattern)
// DESIGN: timeline for school/work, places, events, etc. (years in left column)
export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-screen-[600px] cursor-default p-6 font-light transition-all duration-500 sm:pt-14 md:max-w-[660px] md:items-center md:py-0">
      <div className="flex flex-col gap-4 hyphens-auto text-justify text-sm transition-[border-width,border-color,padding] duration-500 sm:text-base md:p-12 lg:border lg:p-12">
        <p className="text-sm">TL;DR obsessing over building things 0-1</p>
        <p>
          I was born and raised in Madrid, Spain. In my early teens, I developed a curiosity for
          computers. Since then, I have been{' '}
          <Link href="/projects" className="underline">
            tinkering
          </Link>{' '}
          with programming.{' '}
          <Link href="/muses" className="underline">
            Philosophy books
          </Link>{' '}
          piqued my interest first<sup>1</sup>. School became boring for me rather quickly, so I
          started learning to code. I didn't want to sit in a classroom. I wanted to make things.
          This is when I began spending late nights
          <sup>2</sup> playing CTF challenges or building random programs. I installed Linux and
          bricked my computer often.
        </p>
        <p>
          At 16, I earned a scholarship to study at UWC ISAK Japan. This was a turning point in my
          life. I met some of my best friends and started getting my sh*t together<sup>3</sup>. I
          spent a fair amount of time getting better at programming. Feeling frustrated at the
          campus sign-out system, I built Matrix —a website to make it easier. This was the first
          project I built that people used.
        </p>
        <p>
          In 2020, I moved to Portland, Oregon, where I earned a Computer Science degree at Lewis &
          Clark College ('24). During my sophomore and junior summers, I interned at{' '}
          <ExternalLink href="https://linkedin.com/in/carlos-garcia-moran" title="LinkedIn" /> as a
          site reliability & software engineer, respectively. During my four years in college, I
          spent most building side projects (like{' '}
          <ExternalLink href="https://github.com/Mobilecn-UI/nativecn-ui" title="nativecn-ui" />
          ). However, my senior year was the most intense. I knew I wanted two things: a) build for
          a living, and b) start my own thing or join a startup.
        </p>
        <p>
          Currently, I live in NYC, where I work at an early-stage startup. In my spare time, I am
          currently working on something new...
        </p>
        <hr />
        <div className="space-y-0.5 text-xs">
          <p>
            <sup>1</sup> Nietzsche made me think about my life. Diogenes showed me how simple it is
            to live happily.
          </p>
          <p>
            <sup>2</sup> For worse or better, I started being terminally online.
          </p>
          <p>
            <sup>3</sup> Sink or swim worked out well for me.
          </p>
        </div>
      </div>
    </div>
  )
}
