import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Carlos García Morán',
  description: 'Software | Design',
};

export default function Home() {
  return (
    <div className="flex flex-col flex-grow mt-3 sm:mt-0 mx-2 sm:mx-0 sm:justify-center select-none">
      <div className="flex items-center justify-center flex-col sm:flex-row">
        <img
          className="border-4 border-black rounded-full shadow-2xl h-auto w-40 sm:w-56 md:w-64 lg:w-80 hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in"
          src="/img/me.webp"
          alt="Just a pic of me"
          width={300}
          height={300}
        />
        <div className="font-thin tracking-tighter text-6xl md:text-7xl lg:text-8xl mt-4 sm:mt-0 sm:ml-10">
          <h2 className="mb-2 sm:mb-4 inline-block">Hello,</h2>
          {/* DESIGN: underline name with an animation, as if it was handwritten. */}
          <h2>
            {/* TODO: rotate name 360 on click (nice animation) */}
            my name is <span className="font-medium">Carlos</span>
          </h2>
        </div>
      </div>

      {/* TODO: align with text (img | text) */}
      {/* DESIGN: animate words and move them around randomly, then have them come back. */}
      {/* DESIGN: make border color a linear gradient. */}
      <div className="animate-mutate border-4 border-cyan-500 mt-8 sm:mt-12 px-4 py-6 sm:px-6 lg:p-8 mx-auto">
        <h3 className="text-center sm:text-left">
          I am a software <span className="italic">tinkerer</span> who enjoys{' '}
          <span className="font-semibold">design</span> &{' '}
          <span className="font-semibold">building</span>
        </h3>
      </div>
    </div>
  );
}
