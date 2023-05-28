import Image from 'next/image';

export const metadata = {
  title: 'Home',
  description: 'Home page',
};

// NOTE: make this interactive (e.g., rotate/animate image on hover)
export default function Home() {
  // className={`transition-colors duration-500 bg-gradient-to-b from-[${hexCodes[currentColorIndex]}] to-black flex flex-col min-h-screen text-white`}
  return (
    <div className="flex flex-col flex-grow sm:justify-center">
      <div className="flex items-center justify-center flex-col sm:flex-row">
        <Image
          className="rounded-full shadow-2xl h-auto w-52 sm:w-80 2xl:w-96"
          src="/img/me.webp"
          alt="Just a pic of me"
          width={200}
          height={200}
        />
        <div className="font-thin text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 sm:mt-0 sm:ml-10">
          <h2 className="mb-4 inline-block">Hello,</h2>
          {/* DESIGN: underline name with an animation, as if it was handwritten. */}
          <h2 className="sm:mt-4">
            my name is <span className="font-medium">Carlos</span>.
          </h2>
        </div>
      </div>

      {/* TODO: align with text (img | text) */}
      {/* DESIGN: animate words and move them around randomly, then have them come back. */}
      {/* DESIGN: make border color a linear gradient. */}
      <div className="animate-mutate border-4 border-cyan-500 mt-8 sm:mt-12 p-5 mx-auto">
        <h3 className="text-xl text-center">
          I am a software <span className="italic">tinkerer</span> who enjoys{' '}
          <span className="underline">designing</span> &{' '}
          <span className="underline">building</span>
        </h3>
      </div>
    </div>
  );
}
