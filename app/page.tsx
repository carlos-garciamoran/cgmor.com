import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home - Carlos García Morán",
  description: "Software | Design",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-grow mt-4 sm:mt-0 mx-2 sm:mx-0 sm:justify-center select-none">
      <div className="flex items-center justify-center flex-row">
        <Image
          className="border-4 border-black rounded-full shadow-2xl h-auto w-20 sm:w-40 2xl:w-44 hover:scale-105 transition-transform duration-500 ease-in"
          src="/img/me.webp"
          alt="Me"
          width={300}
          height={300}
        />
        <div className="font-thin tracking-tighter text-3xl xl:text-4xl 2xl:text-7xl ml-4 sm:ml-8 md:ml-10 lg:ml-12">
          <p className="mb-3 xl:mb-8">Hello,</p>
          {/* DESIGN: underline name with an animation, as if it was handwritten. */}
          <p>
            My name is{" "}
            <span className="font-normal tracking-tight">Carlos</span>
          </p>
        </div>
      </div>
      {/* TODO: align with text (img | text) */}
      {/* DESIGN: animate words and move them around randomly, then have them come back. */}
      {/* DESIGN: make border color a linear gradient. */}
      <div className="animate-mutate 2xl:text-xl border-4 border-slate-400 mx-auto mt-6 sm:mt-12 px-4 py-6 sm:px-6 lg:p-8">
        <p className="text-center sm:text-left">
          I am a software <span className="underline">tinkerer</span> who enjoys{" "}
          <span className="font-medium">design</span> &{" "}
          <span className="font-medium">building</span>
        </p>
      </div>
    </div>
  );
}
