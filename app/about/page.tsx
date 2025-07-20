import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ExternalLink } from '@/components/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software | Design',
}

// DESIGN: use close-up of Pollock's painting as background (CSS repeat pattern)
export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-[560px] cursor-default px-6 py-5 font-light transition-all duration-500 sm:pt-6 md:items-center md:py-0">
      <div className="flex flex-col gap-4 hyphens-auto text-justify text-sm transition-[padding] duration-500 sm:text-[0.95rem]/[1.45rem]">
        <article className="flex gap-4">
          <Image
            alt="Me"
            src="/img/me.webp"
            className="size-16 rounded-[0.1rem] shadow-lg sm:size-[93px]"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-2">
            <p className="font-extralight text-sm italic">TL;DR obsessing over building things 0-1</p>
            <p className="text-[0.95rem]">
              I was born and raised in Madrid, Spain. In my early teens, I developed a curiosity for
              computers. Since then, I have been{' '}
              <Link href="/projects" className="underline decoration-1 underline-offset-[3px]">
                tinkering
              </Link>{' '}
              with software.
            </p>
          </div>
        </article>
        <p>
          Probably due to{' '}
          <Link href="/muses" className="underline decoration-1 underline-offset-[3px]">
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
          getting my sh*t together. I spent considerable time programming and developing my craft.
          At ISAK, I built Matrix —a website simplifying boarding school admin. It was the first
          project I made that people used.
        </p>
        <p>
          In 2020, I moved to the US and got my CS degree. I interned at LinkedIn as a sre and swe.
          Throughout college, I built a few side projects like{' '}
          <ExternalLink href="https://github.com/Mobilecn-UI/nativecn-ui">nativecn-ui</ExternalLink>.
        </p>
        <p>Currently, I live in NYC, where I work at an early-stage startup.</p>
        <hr />
        <div className="flex flex-col gap-0.5 text-xs">
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
