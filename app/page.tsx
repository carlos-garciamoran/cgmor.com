import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carlos García Morán',
  description: 'Software | Design',
}

export default function Home() {
  return (
    <div className="flex flex-1 grow cursor-default flex-col items-center justify-center px-4">
      <div className="font-thin first-line:leading-none">
        <div className="text-3xl leading-tight tracking-tight">
          <p className="text-secondary-foreground">
            Hey, my name is{' '}
            <span className="font-normal text-foreground tracking-tighter">Carlos</span>
          </p>
        </div>
        <p className="mt-3 font-thin text-base text-secondary-foreground sm:mt-4 sm:tracking-wide">
          I'm into <span className="font-normal text-foreground">programming</span> &{' '}
          <span className="font-normal text-foreground">designing</span>
        </p>
      </div>
    </div>
  )
}
