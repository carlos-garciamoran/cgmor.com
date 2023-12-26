import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Home - Carlos García Morán',
  description: 'Software | Design',
};

/**
 * To-do:
 * - animate diagonal borders separately
 * - make border color a linear gradient
 * - add quick intro + projects
 *
 * Ideas:
 * - animate words and move them around randomly, then have them come back
 * - make underline animation on name, as if it was handwritten
 */

export default function Home() {
  return (
    <div className="flex flex-1 grow select-none flex-col items-center justify-center">
      {/* Card container */}
      <div className="flex animate-mutate-border flex-row items-start justify-center border-2 border-neutral-800 pr-2 dark:border-neutral-200 sm:border-none 2xl:text-xl">
        <Image
          className="h-auto w-20 animate-mutate-border-tl border-2 border-black shadow-2xl transition-transform duration-500 ease-in dark:shadow-none sm:w-32 sm:rounded-full sm:border-[8px] xl:w-36 2xl:w-40"
          src="/img/me.webp"
          alt="Me"
          width={300}
          height={300}
        />
        {/* Text container */}
        <div className="ml-4 pb-2 pt-[0.4rem] sm:ml-8 sm:py-0 md:ml-8 xl:ml-14">
          <div className="text-[33px] font-thin leading-tight tracking-tighter md:text-4xl lg:text-5xl 2xl:text-7xl">
            <p>Hello, my name</p>
            <p className="xl:mt-4">
              is <span className="font-normal tracking-tight">Carlos</span>
            </p>
          </div>
          <p className="mt-2 text-base font-extralight xl:mt-6 xl:text-lg xl:tracking-wide">
            I am a software <span className="font-medium">tinkerer</span> who
            enjoys <span className="font-medium">design</span> &{' '}
            <span className="font-medium">building</span>.
          </p>
          {/* <br />
          <br /> */}
        </div>
      </div>
    </div>
  );
}
