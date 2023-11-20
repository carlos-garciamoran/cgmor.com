import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inspiration',
  description: 'Books | Movies',
};

const titleClasses =
  'font-bold tracking-tight text-3xl xl:text-4xl uppercase xl:mb-3';

export default function Page() {
  return (
    <div>
      <div className="mb-3 flex h-fit border-l-2 border-neutral-700 dark:border-neutral-300 xl:h-14 xl:border-l-4">
        <h2 className="pl-2 text-lg font-extralight italic dark:border-neutral-300 lg:text-2xl lg:leading-none">
          A non-exhaustive list of works that have inspired me...
        </h2>
      </div>
      <div className="grid grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-16 lg:space-y-0">
        <div>
          <h2 className={titleClasses}>Books</h2>
          <div className="space-y-3 sm:space-y-2">
            <div>
              <h3>Philosophy</h3>
              <ul className="ml-8 list-disc">
                <li>Thus Spoke Zarathustra, Friedrich Nietzsche</li>
                <li>Sophie's World, Jostein Gaarder</li>
                <li>Meditations, Marcus Aurelius</li>
                <li>The Prince, Niccolo Machiavelli</li>
                <li>El Extranjero, Albert Camus</li>
                <li>The Sufis, Idries Shah (The Islanders)</li>
              </ul>
            </div>
            <div>
              <h3>Meditation / Spirituality</h3>
              <ul className="ml-8 list-disc">
                <li>Biografía del silencio, Pablo d'Ors</li>
                <li>Siddhartha, Herman Hesse</li>
                <li>
                  Los Cuatro Acuerdos (Un libro de la sabiduría tolteca), Don
                  Miguel Ruiz
                </li>
                <li>El Lobo Estepario, Herman Hesse</li>
                <li>The Untethered Soul, Michael Alan Singer</li>
                <li>El Alquimista, Paulo Coelho</li>
                <li>Think on These Things, Jiddu Krishnamurti</li>
              </ul>
            </div>
            <div>
              <h3>Makes you think</h3>
              <ul className="ml-8 list-disc">
                <li>Ensayo sobre la ceguera, José Saramago</li>
                <li>Momo, Michael Ende</li>
                <li>Nosotros somos una parte de la Tierra, Chief Seattle</li>
                <li>The Art of War, Sun Tzu</li>
                <li>Bajo las Ruedas, Herman Hesse</li>
                <li>Brave New World, Aldous Huxley</li>
                <li>Island, Aldous Huxley</li>
                <li>Slaughterhouse-Five, Kurt Vonnegut</li>
              </ul>
            </div>
            <div>
              <h3>Building</h3>
              <ul className="ml-8 list-disc">
                <li>Zero to One, Peter Thiel</li>
                <li>Hackers & Painters, Paul Graham</li>
                <li>Shoe Dog, Phil Knight</li>
              </ul>
            </div>
            <div>
              <h3>Science / Engineering</h3>
              <ul className="ml-8 list-disc">
                <li>
                  Superintelligence. Paths, dangers, strategies, Nick Bostrom
                </li>
                <li>Hacking: The Art of Exploitation, Jon Erickson</li>
                <li>Silence on the Wire, Michael Zalewski*</li>
                <li>The Pragmatic Programmer, Andy Hunt & Dave Thomas*</li>
              </ul>
            </div>
            <div>
              <h3>Misc</h3>
              <ul className="ml-8 list-disc">
                <li>Sapiens: A Brief History of Humankind, Yuval Harari</li>
                <li>Atomic Habits, James Clear</li>
                <li>The Lessons of History, Ariel & Will Durant</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className={titleClasses}>Films</h2>
          <div>
            <div>
              <h3>Movies</h3>
              <ul className="ml-8 list-disc">
                <li>The Matrix</li>
                <li>Fight Club</li>
                <li>Shutter Island</li>
                <li>Ex Machina</li>
                <li>Memento</li>
                <li>Interstellar</li>
                <li>La grande bellezza</li>
                <li>Mulholland Drive</li>
                <li>The Big Short</li>
                <li>Eyes Wide Shut</li>
              </ul>
            </div>
            <div className="mt-2">
              <h3>TV Shows</h3>
              <ul className="ml-8 list-disc">
                <li>Black Mirror</li>
                <li>Westworld (S1)</li>
                <li>Mr. Robot</li>
                <li>WeCrashed</li>
                <li>The White Lotus</li>
                <li>Ozark</li>
                <li>True Detective (S1)</li>
                <li>House of Cards</li>
                <li>Succession</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
