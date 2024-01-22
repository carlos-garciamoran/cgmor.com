import { books, films } from '@/config/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inspiration',
  description: 'Books | Movies',
};

const titleClasses =
  'font-black tracking-tight text-4xl xl:text-5xl uppercase mb-1 xl:mb-4';

export default function Page() {
  return (
    <div className="sm:pt-4">
      <div className="mb-3 flex min-h-8 border-l-2 border-neutral-700 dark:border-neutral-300">
        <h2 className="pl-2 text-base font-thin italic first-line:leading-none dark:border-neutral-300 sm:text-lg">
          A non-exhaustive list of works that have inspired me...
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
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
          <div className="flex flex-col gap-2 sm:w-full sm:flex-row sm:justify-between">
            <div>
              <h3 className="mb-0.5 font-extralight">Movies</h3>
              <ul className="ml-8 list-[square] text-sm">
                {films.movies.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-0.5 font-extralight">Shows</h3>
              <ul className="ml-8 list-[square] text-sm">
                {films.tv.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Book = {
  title: string;
  author: string;
};
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
      <ul className="ml-8 list-disc text-sm">
        {books.map((item, i) => (
          <li key={i}>
            {item.title}, {item.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
