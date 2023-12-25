import type { Metadata } from 'next';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Stuff I have built',
};

type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: 'stealth',
    description: '...',
    url: '#',
    tags: ['React', 'Next.js', 'Supabase'],
  },
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
    tags: ['shadcn/ui', 'Swift', 'SwiftUI'],
  },
  {
    name: 'CoLive',
    description: 'Find sublets and roommates easily',
    url: 'https://www.getcolive.com',
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
    name: 'Delfos',
    description: 'Cryptocurrency trading bot',
    url: 'https://github.com/carlos-garciamoran/delfos',
    tags: ['Python', 'Binance API'],
  },
  {
    name: 'CNCPT',
    description: 'Connecting media with social good',
    url: 'https://apps.apple.com/us/app/cncpt/id1662094973',
    tags: ['React Native', 'Typescript', 'Firebase'],
  },
  {
    name: 'Matrix',
    description: 'Student information system built for UWC ISAK Japan',
    url: 'https://github.com/carlos-garciamoran/matrix',
    tags: ['PHP', 'Laravel', 'Bootstrap'],
  },
];

// TODO: add github icon for repo links
// TODO: categorize by current / past
// TODO: swap colors on hover smoothly > https://stackoverflow.com/a/67853821
// TODO: on xl, animate floating (scale-95 to scale-105, maybe translate-y-1)
// TODO: on page load, display projects with fade in (Framer Motion?)
export default function Page() {
  return (
    <div className="grid grid-cols-1 items-start gap-2 pb-4 md:grid-cols-2 md:gap-6 md:pt-4 lg:h-full xl:gap-10 xl:pt-6 2xl:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.url}
          target={project.url === '#' ? '_self' : '_blank'}
          rel="noreferrer"
        >
          <div
            className={clsx({
              'group flex grow flex-col justify-center rounded-3xl border border-neutral-100 bg-gradient-to-tl from-neutral-200 px-6 py-7 shadow-sm transition duration-500 ease-in-out dark:border-neutral-900 dark:from-neutral-800 sm:px-8 sm:py-8 sm:shadow-lg sm:hover:scale-105 sm:hover:to-neutral-200 dark:sm:hover:to-neutral-900 md:hover:-translate-y-1 md:hover:scale-110 lg:h-56 lg:px-10 lg:py-10 xl:px-12 2xl:pr-6':
                true,
              'to-slate-200 dark:to-slate-400 sm:hover:from-slate-200 dark:sm:hover:from-slate-400':
                project.name === 'nativecn-ui',
              'to-indigo-200 dark:to-indigo-400 sm:hover:from-indigo-200 dark:sm:hover:from-indigo-400':
                project.name === 'swiftcn-ui',
              'to-orange-200 dark:to-orange-700 sm:order-none sm:hover:from-orange-200 dark:sm:hover:from-orange-700':
                project.name === 'Delfos',
              'to-cyan-200 dark:to-cyan-600 sm:hover:from-cyan-200 dark:sm:hover:from-cyan-600':
                project.name === 'Hermes',
              'to-sky-200 dark:to-sky-600 sm:hover:from-sky-200 dark:sm:hover:from-sky-600':
                project.name === 'TweetWidget',
              'to-violet-200 dark:to-violet-600 sm:hover:from-violet-200 dark:sm:hover:from-violet-600':
                project.name === 'CoLive',
              'to-pink-200 dark:to-pink-600 sm:hover:from-pink-200 dark:sm:hover:from-pink-600':
                project.name === 'CNCPT',
              'to-emerald-200 dark:to-emerald-600 sm:hover:from-emerald-200 dark:sm:hover:from-emerald-600':
                project.name === 'Matrix',
            })}
          >
            <h2 className="text-3xl font-extralight underline decoration-2 underline-offset-4 sm:text-4xl">
              {project.name}
            </h2>
            <div className="mt-2 flex gap-x-1 lg:mt-3">
              {project.tags.map((language) => (
                <div
                  key={language}
                  className="flex items-center rounded-full bg-gradient-to-tr from-transparent to-neutral-100 px-2 py-1 text-center dark:to-neutral-900 sm:px-3 md:px-4"
                >
                  <span className="text-xs">{language}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 lg:mt-4">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
