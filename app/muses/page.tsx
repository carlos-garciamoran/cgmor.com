import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Muses' };

// TODO: add countries visited?
// TODO: set up markdown/MDX
export default function Page() {
  return (
    <div>
      <h2 className="font-light italic sm:not-italic mb-3 text-2xl md:text-3xl">
        Some works that have inspired me...
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4 lg:space-x-8 lg:space-y-0">
        <div>
          <h2 className="font-light text-2xl underline sm:no-underline uppercase">
            Books
          </h2>
          <div className="space-y-2">
            <div>
              <h3>Philosophy</h3>
              <ul className="list-disc ml-8">
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
              {/* TODO: add letter from Native Americans to Invader Americans */}
              <ul className="list-disc ml-8">
                <li>Biografía del silencio, Pablo d'Ors</li>
                <li>Siddhartha, Herman Hesse</li>
                <li>
                  Los Cuatro Acuerdos (Un libro de la sabiduría tolteca), Don
                  Miguel Ruiz
                </li>
                <li>Steppenwolf, Herman Hesse</li>
                <li>The Untethered Soul, Michael Alan Singer</li>
                <li>The Alchemist, Paulo Coelho</li>
              </ul>
            </div>
            <div>
              <h3>Makes you think</h3>
              <ul className="list-disc ml-8">
                <li>Ensayo sobre la ceguera, José Saramago</li>
                <li>The Art of War, Sun Tzu</li>
                <li>Beneath the Wheel, Herman Hesse</li>
                <li>Brave New World, Aldous Huxley</li>
                <li>Island, Aldous Huxley</li>
                <li>Slaughterhouse-Five, Kurt Vonnegut</li>
              </ul>
            </div>
            <div>
              <h3>Building</h3>
              <ul className="list-disc ml-8">
                <li>Zero to One, Peter Thiel</li>
                <li>Hackers & Painters, Paul Graham</li>
                <li>Shoe Dog, Phil Knight</li>
              </ul>
            </div>
            <div>
              <h3>Science / Engineering</h3>
              <ul className="list-disc ml-8">
                <li>
                  Superintelligence. Paths, dangers, strategies, Nick Bostrom
                </li>
                <li>Hacking: The Art of Exploitation, Jon Erickson</li>
                <li>Silence on the Wire, Michael Zalewski</li>
              </ul>
            </div>
            <div>
              <h3>Misc</h3>
              <ul className="list-disc ml-8">
                <li>Sapiens: A Brief History of Humankind, Yuval Harari</li>
                <li>Atomic Habits, James Clear</li>
                <li>The Lessons of History, Ariel & Will Durant</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-light underline sm:no-underline uppercase">
            Films
          </h2>
          <div>
            <div>
              <h3>Movies</h3>
              <ul className="list-disc ml-8">
                <li>The Matrix</li>
                <li>Fight Club</li>
                <li>Shutter Island</li>
                <li>Ex Machina</li>
                <li>Memento</li>
                <li>Interstellar</li>
                <li>Mulholland Drive</li>
                <li>The Big Short</li>
              </ul>
            </div>
            <div className="mt-2">
              <h3>TV Shows</h3>
              <ul className="list-disc ml-8">
                <li>Black Mirror</li>
                <li>Westworld</li>
                <li>Mr. Robot</li>
                <li>WeCrashed</li>
                <li>The White Lotus</li>
                <li>Ozark</li>
                <li>True Detective (S1)</li>
                <li>House of Cards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
