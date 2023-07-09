import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Carlos García Morán',
  description: 'Software | Design',
};

export default function Home() {
  return (
    <div className="flex flex-col flex-grow mt-4 sm:mt-0 mx-2 sm:mx-0 sm:justify-center select-none">
      <div className="flex items-center justify-center flex-col sm:flex-row">
        <img
          className="border-4 border-black rounded-full shadow-2xl h-auto w-40 sm:w-56 md:w-64 lg:w-72 hover:scale-110 hover:rotate-3 transition-transform duration-500 ease-in"
          src="/img/me.webp"
          alt="Just a pic of me"
          width={300}
          height={300}
        />
        <div className="font-thin tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 sm:mt-0 sm:ml-8 md:ml-10 lg:ml-12">
          <h2 className="mb-1 sm:mb-4">Hello,</h2>
          {/* DESIGN: underline name with an animation, as if it was handwritten. */}
          <h2>
            {/* TODO: rotate name 360 on click (nice animation) */}
            my name is{' '}
            <span className="font-medium tracking-tight">Carlos</span>
          </h2>
        </div>
      </div>
      {/* TODO: align with text (img | text) */}
      {/* DESIGN: animate words and move them around randomly, then have them come back. */}
      {/* DESIGN: make border color a linear gradient. */}
      <div className="animate-mutate border-4 border-cyan-500 mx-auto mt-6 sm:mt-12 px-4 py-6 sm:px-6 lg:p-8">
        <h3 className="text-center sm:text-left">
          I am a software <span className="italic">tinkerer</span> who enjoys{' '}
          <span className="font-semibold">design</span> &{' '}
          <span className="font-semibold">building</span>
        </h3>
      </div>
    </div>
  );
}
