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
      <div className='font-thin text-2xl first-line:leading-none'>
        <div className="leading-tight tracking-tight">
          <p>Hey, my name is <span className="font-medium tracking-tighter">Carlos</span></p>
        </div>
        <p className="mt-3 font-extralight text-base sm:mt-4 sm:tracking-wide">
          I'm into <span className="font-medium">programming</span> &{' '}
          <span className="font-medium">designing</span>
        </p>
      </div>
    </div>
  )
}
