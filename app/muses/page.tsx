import type { Metadata } from 'next'

import { type Book, books, films } from '@/app/_lib/data'

export const metadata: Metadata = {
  title: 'Inspiration',
  description: 'Books | Movies',
}

export default function Muses() {
  return (
    <div className="flex flex-col px-6 py-5 sm:py-10 lg:mx-auto lg:max-w-(--breakpoint-xl) xl:px-0">
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-dvh w-px bg-neutral-300 dark:bg-neutral-700 sm:block"
        style={{ transform: 'translateX(-0.5px)' }}
      /> */}
      <div className="mb-4 flex min-h-8 border-neutral-700 border-l-2 dark:border-neutral-300">
        <h2 className="pl-2 font-thin text-base italic first-line:leading-none dark:border-neutral-300">
          Some works that have inspired me...
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-x-36 gap-y-8 lg:grid-cols-2">
        <div>
          <MusesTitle title="Books" />
          <div className="flex flex-col gap-4">
            <BookSection title="Currently..." items={books.now} />
            <BookSection title="Philosophy" items={books.philosophy} />
            <BookSection title="Meditation / Spirituality" items={books.meditation} />
            <BookSection title="Fiction" items={books.fiction} />
            <BookSection title="Startup / Building" items={books.startup} />
            <BookSection title="Engineering" items={books.engineering} />
            <BookSection title="History" items={books.history} />
            <BookSection title="Misc" items={books.misc} />
          </div>
        </div>
        <div>
          <MusesTitle title="Films" />
          <div className="flex flex-col gap-4 sm:w-full sm:flex-row sm:justify-between">
            <FilmSection title="Movies" items={films.movies} />
            <FilmSection title="Shows" items={films.shows} />
          </div>
        </div>
      </div>
    </div>
  )
}

const MusesTitle = ({ title }: { title: string }) => (
  <h2 className="mb-2 font-black text-6xl uppercase tracking-tight sm:text-8xl lg:mb-4">{title}</h2>
)

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="mb-1 font-extralight text-lg sm:text-xl">{title}</h3>
)

const BookSection = ({ title, items: books }: { title: string; items: Book[] }) => (
  <div>
    <SectionTitle title={title} />
    <ul className="ml-px list-inside list-disc space-y-0.5 font-cormorant text-[.95rem]">
      {books.map((item) => (
        <li className="font-light" key={item.title}>
          <span>{item.title}</span>, <span>{item.author}</span>
        </li>
      ))}
    </ul>
  </div>
)

const FilmSection = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <SectionTitle title={title} />
    <ul className="ml-px list-inside list-[square] font-cormorant font-light text-[.95rem]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)
