import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home - Carlos García Morán",
  description: "Software | Design",
};

/**
 * To-do:
 * - make border color a linear gradient
 * - add quick intro + projects
 *
 * Ideas:
 * - animate words and move them around randomly, then have them come back
 * - make underline animation on name, as if it was handwritten
 */

export default function Home() {
  return (
    <div className="flex flex-col flex-grow justify-center select-none">
      {/* Card container */}
      <div className="animate-mutate-border 2xl:text-xl border-2 sm:border-none border-neutral-200 pr-2 flex items-start justify-center flex-row">
        <Image
          className="border-4 border-black animate-mutate-border-tl sm:rounded-full sm:rounded-tl-full shadow-2xl h-auto w-20 sm:w-32 xl:w-36 2xl:w-40 transition-transform duration-500 ease-in"
          src="/img/me.webp"
          alt="Me"
          width={300}
          height={300}
        />
        {/* Text container */}
        <div className="pb-2 sm:pb-0 pt-[0.35rem] sm:pt-0 ml-5 sm:ml-8 md:ml-8 xl:ml-14">
          <div className="text-[34px] leading-tight md:text-4xl lg:text-5xl 2xl:text-7xl tracking-tighter font-thin">
            <p>Hello, my name</p>
            <p className="xl:mt-4">
              is <span className="font-normal tracking-tight">Carlos</span>
            </p>
          </div>
          <p className="font-extralight xl:tracking-wide text-base xl:text-lg mt-2 xl:mt-6">
            I am a software <span className="font-medium">tinkerer</span> who
            enjoys <span className="font-medium">design</span> &{" "}
            <span className="font-medium">building</span>...
          </p>
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br /> */}
        </div>
      </div>
    </div>
  );
}
