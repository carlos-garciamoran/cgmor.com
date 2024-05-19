import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Carlos García Morán',
  description: 'Software | Design',
};

/**
 * To try:
 * - iMessage UI -> timed messages
 *
 *
 * Ideas:
 * - animate words and move them around randomly, then have them come back
 * - make underline animation on name, as if it was handwritten
 */

export default function Home() {
  return (
    <div className="flex flex-1 grow select-none flex-col items-center justify-center px-8 sm:px-0">
      <div className="flex items-start justify-center gap-4 transition-all duration-300 sm:gap-8 md:gap-10">
        <Image
          alt="Me"
          src="/img/me.webp"
          className="h-auto w-[4.5rem] rounded-br-[2.5rem] rounded-tl-[2.5rem] shadow-lg transition-all duration-300 ease-in sm:w-[6.5rem] md:w-36"
          width={300}
          height={300}
        />
        <div>
          <div className="-mt-1 text-4xl font-thin leading-tight tracking-tighter first-line:leading-none sm:text-5xl md:text-7xl">
            <p>Hi, my name</p>
            <p className="mt-px sm:mt-2 md:mt-3">
              is <span className="font-normal tracking-tight">Carlos</span>
            </p>
          </div>
          <p className="mt-3 text-sm font-extralight sm:mt-8 sm:text-base sm:tracking-wide">
            I am a software engineer who enjoys{' '}
            <span className="font-medium">design</span> &{' '}
            <span className="font-medium">building</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
