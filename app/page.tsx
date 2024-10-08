import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Carlos García Morán',
  description: 'Software | Design',
}

/**
 * Idea: make underline animation on name, as if it was handwritten
 * Idea: animate text rotation
 */
export default function Home() {
  return (
    <div className="flex flex-1 grow cursor-default flex-col items-center justify-center px-4">
      <div className="flex items-start justify-center gap-4 transition-all duration-300 sm:gap-8 md:gap-10">
        <Image
          alt="Me"
          src="/img/me.webp"
          className="h-auto w-[4.9rem] rounded-tl-[2rem] shadow-lg transition-all duration-300 ease-in sm:w-[6.5rem] md:w-36"
          width={300}
          height={300}
        />
        <div>
          <div className="-mt-1 sm:-mt-1.5 font-thin text-[40px] leading-tight tracking-tighter first-line:leading-none sm:text-[50px] md:text-7xl">
            <p>Hi, my name</p>
            <p className="mt-0.5 sm:mt-2 md:mt-3.5">
              is <span className="font-extrabold tracking-tighter">Carlos</span>
            </p>
          </div>
          <p className="mt-3 font-extralight text-sm sm:mt-6 sm:text-base sm:tracking-wide">
            I'm into <span className="font-medium">design</span> &{' '}
            <span className="font-medium">building software</span>
          </p>
        </div>
      </div>
    </div>
  )
}
