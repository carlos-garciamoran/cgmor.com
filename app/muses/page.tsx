import { type Book, books, films } from '@/config/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inspiration',
  description: 'Books | Movies',
};

const titleClasses =
  'font-black tracking-tight text-5xl sm:text-6xl uppercase mb-1 sm:mb-2 lg:mb-4';

export default function Muses() {
  return (
    <div className="flex flex-col p-6 sm:py-10 lg:mx-auto lg:max-w-screen-xl xl:px-0">
      <div className="mb-3 flex min-h-8 border-l-2 border-neutral-700 dark:border-neutral-300">
        <h2 className="pl-2 text-base font-thin italic first-line:leading-none dark:border-neutral-300 sm:text-lg">
          A non-exhaustive list of works that have inspired me...
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div>
          <h2 className={titleClasses}>Books</h2>
          <div className="flex flex-col gap-y-3">
            <BookSection title="Currently..." items={books.now} />
            <BookSection title="Philosophy" items={books.philosophy} />
            <BookSection
              title="Meditation / Spirituality"
              items={books.meditation}
            />
            <BookSection title="Fiction" items={books.fiction} />
            <BookSection title="Startup / Building" items={books.startup} />
            <BookSection title="Engineering" items={books.engineering} />
            <BookSection title="History" items={books.history} />
            <BookSection title="Misc" items={books.misc} />
          </div>
        </div>
        <div>
          <h2 className={titleClasses}>Films</h2>
          <div className="flex flex-col gap-4 sm:w-full sm:flex-row sm:justify-between">
            <FilmSection title="Movies" items={films.movies} />
            <FilmSection title="Shows" items={films.tv} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BookSection({
  title,
  items: books,
}: {
  title: string;
  items: Book[];
}) {
  return (
    <div>
      <h3 className="mb-0.5 font-extralight tracking-wide">{title}</h3>
      <ul className="ml-0.5 list-inside list-disc text-sm">
        {books.map((item, i) => (
          <li key={i}>
            {item.title}, {item.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilmSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-0.5 font-extralight">{title}</h3>
      <ul className="ml-0.5 list-inside list-[square] text-sm">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
