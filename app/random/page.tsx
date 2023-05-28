import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Random',
  description: 'Random stuff',
};

// TODO: add countries visited?
// TODO: set up markdown/MDX
export default function Page() {
  return (
    <div>
      <div>
        <h2 className="text-2xl">A few books that have inspired me...</h2>
        <div>
          <h3 className="text-xl">Philosophy</h3>
          <ul className="list-disc ml-8">
            <li>Thus Spoke Zarathustra, Friedrich Nietzsche</li>
            <li>Sophie's World, Jostein Gaarder</li>
            <li>Siddhartha, Herman Hesse</li>
            <li>Meditations, Marcus Aurelius</li>
            <li>The Prince, Niccolo Machiavelli</li>
            <li>The Sufis, Idries Shah (The Islanders)</li>
          </ul>
          <h3 className="text-xl mt-2">Makes you think</h3>
          <ul className="list-disc ml-8">
            <li>The Art of War, Sun Tzu</li>
            <li>Steppenwolf, Herman Hesse</li>
            <li>Beneath the Wheel, Herman Hesse</li>
            <li>Brave New World, Aldous Huxley</li>
            <li>Island, Aldous Huxley</li>
            <li>The Alchemist, Paulo Coelho</li>
            <li>Slaughterhouse-Five, Kurt Vonnegut</li>
          </ul>
          <h3 className="text-xl mt-2">Building</h3>
          <ul className="list-disc ml-8">
            <li>Zero to One, Peter Thiel</li>
            <li>Hackers & Painters, Paul Graham</li>
            <li>Shoe Dog, Phil Knight</li>
          </ul>
          <h3 className="text-xl mt-2">Science / Engineering</h3>
          <ul className="list-disc ml-8">
            <li>Superintelligence. Paths, dangers, strategies, Nick Bostrom</li>
            <li>Hacking: The Art of Exploitation, Jon Erickson</li>
            <li>Silence on the Wire, Michael Zalewski</li>
          </ul>
          <h3 className="text-xl mt-2">Misc</h3>
          <ul className="list-disc ml-8">
            <li>Sapiens: A Brief History of Humankind, Yuval Harari</li>
            <li>Atomic Habits, James Clear</li>
            <li>The Untethered Soul, Michael Alan Singer</li>
            <li>The Lessons of History, Ariel & Will Durant</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl mt-8">Movies that I could watch again</h2>
      <ul className="list-disc ml-8">
        <li>The Matrix</li>
        <li>Fight Club</li>
        <li>Shutter Island</li>
        <li>Ex Machina</li>
        <li>Memento</li>
        <li>Interstellar</li>
        <li>Mulholland Drive</li>
      </ul>
    </div>
  );
}
