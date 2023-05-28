import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Stuff I have built',
};

type Project = {
  name: string;
  bg: string;
  description: string;
  url: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: 'CoLive',
    bg: 'violet-600',
    description: 'Find sublets and roommates easily',
    url: 'https://www.getcolive.com',
    tech: ['next.js', 'typescript', 'tailwindcss'],
  },
  {
    name: 'TweetWidget',
    bg: 'sky-600',
    description: 'Glance at tweets from your home screen',
    url: 'https://apps.apple.com/us/app/tweetwidget/id1671704240',
    tech: ['swift', 'SwiftUI', 'supabase'],
  },
  {
    name: 'CNCPT',
    bg: 'pink-600',
    description: 'Connecting media with social good',
    url: 'https://apps.apple.com/us/app/cncpt/id1662094973',
    tech: ['react-native', 'typescript', 'firebase'],
  },
  {
    name: 'Hermes',
    bg: 'cyan-600',
    description: 'Binance USD-M Futures trading bot',
    url: 'https://github.com/carlos-garciamoran/hermes',
    tech: ['go', 'websockets'],
  },
  {
    name: 'Delfos',
    bg: 'fuchsia-700',
    description: 'Cryptocurrency trading bot',
    url: 'https://github.com/carlos-garciamoran/delfos',
    tech: ['python', 'numpy', 'ta-lib'],
  },
  {
    name: 'Matrix',
    bg: 'emerald-700',
    description: 'Student information system built for UWC ISAK Japan',
    url: 'https://github.com/carlos-garciamoran/matrix',
    tech: ['laravel', 'bootstrap', 'php'],
  },
];

// TODO: display language with FA icons
// TODO: add dates to projects
// TODO: on GitHub projects, display stars.
// TODO: add external link icon next to each link
// TODO: on page load, display projects with fade in
// TODO: change colors more smoothly: https://stackoverflow.com/a/67853821
export default function Page() {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-6 gap-y-6 md:mt-8">
      {projects.map(project => (
        <a href={`${project.url}/`} target="_blank" rel="noreferrer">
          <div
            className={clsx({
              'transition ease-in-out delay-75 bg-gradient-to-tl from-zinc-800 hover:to-zinc-800 hover:-translate-y-1 hover:scale-105 duration-300 md:h-52 rounded-3xl px-8 py-8 shadow-lg':
                true,
              'to-emerald-600 hover:from-emerald-600':
                project.bg === 'emerald-700',
              'to-cyan-600 hover:from-cyan-600': project.bg === 'cyan-600',
              'to-sky-600 hover:from-sky-600': project.bg === 'sky-600',
              'to-violet-600 hover:from-violet-600':
                project.bg === 'violet-600',
              'to-fuchsia-700 hover:from-fuchsia-700':
                project.bg === 'fuchsia-700',
              'to-pink-600 hover:from-pink-600': project.bg === 'pink-600',
            })}
          >
            <h2 className="text-4xl font-extralight hover:underline underline-offset-4 decoration-2">
              {project.name}
            </h2>
            <div className="flex flex-row mt-2 space-x-1">
              {project.tech.map(language => (
                <div
                  className={clsx({
                    'bg-zinc-800 rounded-full px-3 py-1': true,
                    // 'from-sky-600 to-cyan-600': language === 'swift',
                    // 'from-purple-700 to-purple-800': language === 'python',
                  })}
                >
                  <span className="text-sm">{language}</span>
                </div>
              ))}
            </div>
            <p className="mt-2">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
