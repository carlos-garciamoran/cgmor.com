import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { ExternalLink } from '@/components/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software | Design',
}

// DESIGN: use close-up of Pollock's painting as background (CSS repeat pattern)
export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-[600px] cursor-default px-6 py-5 font-light transition-all duration-500 sm:pt-6 md:max-w-(--breakpoint-sm) md:items-center md:py-0">
      <div className="flex flex-col gap-4 hyphens-auto text-justify text-sm transition-[padding] duration-500 sm:text-[0.9rem]/[1.45rem] md:border md:p-10">
        <article className="flex gap-4">
          <Image
            alt="Me"
            src="/img/me.webp"
            className="size-16 sm:size-[93px] rounded-[0.1rem] shadow-lg"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-2">
            <p className="text-sm">TL;DR obsessing over building things 0-1</p>
            <p className="text-[0.9rem]">
              I was born and raised in Madrid, Spain. In my early teens, I developed a curiosity for
              computers. Since then, I have been{' '}
              <Link href="/projects" className="underline">
                tinkering
              </Link>{' '}
              with software.
            </p>
          </div>
        </article>
        <p>
          Probably due to{' '}
          <Link href="/muses" className="underline">
            reading
          </Link>{' '}
          a bit of philosophy
          <sup>1</sup>, school became as boring as dreadful. Luckily, I had the internet. I taught
          myself to code and began spending late nights
          <sup>2</sup> playing CTFs and hacking randomly. I fell down the computer security rabbit
          hole, adopting Linux and bricking my computer often.
        </p>
        <p>
          At 16, I studied abroad at UWC ISAK Japan. I met some of my best friends and started
          getting my sh*t together. I spent a good amount of my time programming and developing my
          craft. At ISAK, I built Matrix —a website simplifying boarding school admin. It was the
          first project I made that people used.
        </p>
        <p>
          In 2020, I moved to the US and got my CS degree. I interned at LinkedIn as a sre and swe.
          Throughout college, I built a few side projects like{' '}
          <ExternalLink href="https://github.com/Mobilecn-UI/nativecn-ui" title="nativecn-ui" />
          .
        </p>
        <p>
          Currently, I live in NYC, where I work at an early-stage startup.
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
        </div>
      </div>
    </div>
  )
}
