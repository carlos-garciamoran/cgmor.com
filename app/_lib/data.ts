export type Book = {
  title: string
  author: string
}

export const books: Record<string, Book[]> = {
  now: [
    { title: 'Hunger', author: 'Knut Hamsun' },
    { title: 'The Design of Everyday Things', author: 'Don Norman' },
    { title: 'Jony Ive', author: 'Leander Kahney' },
    { title: 'Thinking in Systems: A Primer', author: 'Donella H. Meadows' },
    {
      title: 'Zero: The Biography of a Dangerous Idea',
      author: 'Charles Seife',
    },
    { title: 'The Black Swan', author: 'Nassim Nicholas Taleb' },
    { title: 'The Secret Garden', author: 'Frances Hodgson Burnett' },
  ],
  philosophy: [
    { title: 'Meditaciones', author: 'Marco Aurelio' },
    { title: 'The Sufis (The Islanders)', author: 'Idries Shah' },
    { title: 'El Extranjero', author: 'Albert Camus' },
    { title: 'El arte de tener razón', author: 'Arthur Schopenhauer' },
    { title: 'El arte de ser feliz', author: 'Arthur Schopenhauer' },
    { title: 'El Príncipe', author: 'Niccolo Machiavelli' },
    { title: 'El Arte de la Guerra', author: 'Sun Tzu' },
    { title: 'Así habló Zaratustra', author: 'Friedrich Nietzsche' },
    { title: 'El mundo de Sofía', author: 'Jostein Gaarder' },
  ],
  meditation: [
    { title: 'Zen Mind, Beginner’s Mind', author: 'Shunryu Suzuki' },
    { title: 'Biografía del silencio', author: "Pablo d'Ors" },
    {
      title: 'Los Cuatro Acuerdos (Un libro de la sabiduría tolteca)',
      author: 'Don Miguel Ruiz',
    },
    { title: 'Be Here Now', author: 'Ram Dass' },
    { title: 'Think on These Things', author: 'Jiddu Krishnamurti' },
    { title: 'The Unthered Soul', author: 'Michael A. Singer' },
  ],
  fiction: [
    { title: 'El Alquimista', author: 'Paulo Coelho' },
    { title: 'Slaghterhouse-Five', author: 'Kurt Vonnegut' },
    { title: 'Siddhartha', author: 'Herman Hesse' },
    { title: 'El Lobo Estepario', author: 'Herman Hesse' },
    { title: 'Bajo las Ruedas', author: 'Herman Hesse' },
    { title: 'El hombre que fue jueves', author: 'G. K. Chesterton' },
    { title: 'Diario de un seductor', author: 'Søren Kierkegaard' },
    { title: 'La isla', author: 'Aldous Huxley' },
    { title: 'Un mundo feliz', author: 'Aldous Huxley' },
    { title: 'Momo', author: 'Michael Ende' },
    { title: 'Ensayo sobre la ceguera', author: 'José Saramago' },
  ],
  startup: [
    { title: 'Hackers & Painters', author: 'Paul Graham' },
    { title: 'Shoe Dog', author: 'Phil Knight' },
    { title: 'The Almanack Of Naval Ravikant', author: 'Eric Jorgenson' },
    { title: 'Zero to One', author: 'Peter Thiel' },
  ],
  engineering: [
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    {
      title: 'Superintelligence. Paths, dangers, strategies',
      author: 'Nick Bostrom',
    },
    {
      title: 'Practical Malware Analysis',
      author: 'Michael Sikorski, Andrew Honig',
    },
    { title: 'Hacking: The Art of Exploitation', author: 'Jon Erickson' },
  ],
  history: [
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
    },
    { title: 'The Lessons of History', author: 'Will Durant, Ariel Durant' },
  ],
  misc: [
    { title: 'Four Thousand Weeks: Time Management for Mortals', author: 'Oliver Burkeman' },
    { title: 'Nature', author: 'Ralph Waldo Emerson' },
    { title: 'The Creative Act', author: 'Rick Rubin' },
    {
      title: 'How to Win Friends and Influence People',
      author: 'Dale Carnegie',
    },
    { title: 'Atomic Habits', author: 'James Clear' },
  ],
}

export const films = {
  movies: [
    'Memento',
    'The Matrix',
    'The Departed',
    'Fight Club',
    'Interstellar',
    'Ex Machina',
    'Perfect Days',
    'Shutter Island',
    'Eyes Wide Shut',
    'The Tree of Life',
    'Mulholland Drive',
    'La grande bellezza',
  ],
  shows: [
    'Silo',
    'Ozark',
    'Mr. Robot',
    'Succession',
    'WeCrashed',
    'Black Mirror',
    'Westworld, S1',
    'House of Cards',
    'The White Lotus',
    'True Detective, S1',
  ],
}

type Project = {
  name: string
  description: string
  url: string
  tags: string[]
}
export const projects: Project[] = [
  {
    name: 'nativecn-ui',
    description: 'shadcn/ui for React Native',
    url: 'https://github.com/Mobilecn-UI/nativecn-ui',
    tags: ['shadcn/ui', 'React Native', 'Typescript'],
  },
  {
    name: 'swiftcn-ui',
    description: 'Beautiful mobile UI components',
    url: 'https://github.com/Mobilecn-UI/swiftcn-ui',
    tags: ['Swift', 'SwiftUI'],
  },
  {
    name: 'CoLive',
    description: 'Find sublets and roommates easily',
    url: '#',
    tags: ['Next.js', 'Typescript', 'TailwindCSS'],
  },
  {
    name: 'Hermes',
    description: 'Binance USD-M Futures trading bot',
    url: 'https://github.com/carlos-garciamoran/hermes',
    tags: ['Go', 'WebSockets'],
  },
  {
    name: 'TweetWidget',
    description: 'Glance at tweets from your home screen',
    url: 'https://github.com/carlos-garciamoran/tweetwidget',
    tags: ['Swift', 'SwiftUI', 'Supabase'],
  },
  {
    // The Concept Project, "https://www.theconceptproject.org"
    name: 'CNCPT',
    description: 'Connecting media with social good',
    url: 'https://apps.apple.com/us/app/cncpt/id1662094973',
    tags: ['React Native', 'Typescript', 'Firebase'],
  },
  {
    name: 'Delfos',
    description: 'Cryptocurrency trading bot',
    url: 'https://github.com/carlos-garciamoran/delfos',
    tags: ['Python', 'Binance API'],
  },
  {
    name: 'Matrix',
    description: 'Student information system built for UWC ISAK Japan',
    url: 'https://github.com/carlos-garciamoran/matrix',
    tags: ['PHP', 'Laravel', 'Bootstrap'],
  },
]
