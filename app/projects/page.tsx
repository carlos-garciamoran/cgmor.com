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
    name: 'TweetWidget',
    bg: 'sky-600',
    description: 'Glance at tweets from your home screen',
    url: 'https://github.com/carlos-garciamoran/tweetwidget',
    tech: ['Swift', 'SwiftUI', 'Supabase'],
  },
  {
    name: 'CoLive',
    bg: 'violet-600',
    description: 'Find sublets and roommates easily',
    url: 'https://www.getcolive.com',
    tech: ['Next.js', 'Typescript', 'TailwindCSS'],
  },
  {
    name: 'Hermes',
    bg: 'cyan-600',
    description: 'Binance USD-M Futures trading bot',
    url: 'https://github.com/carlos-garciamoran/hermes',
    tech: ['Go', 'WebSockets'],
  },
  {
    name: 'Delfos',
    bg: 'fuchsia-700',
    description: 'Cryptocurrency trading bot',
    url: 'https://github.com/carlos-garciamoran/delfos',
    tech: ['Python', 'Binance API'],
  },
  {
    name: 'Matrix',
    bg: 'emerald-700',
    description: 'Student information system built for UWC ISAK Japan',
    url: 'https://github.com/carlos-garciamoran/matrix',
    tech: ['PHP', 'Laravel', 'Bootstrap'],
  },
  {
    name: 'CNCPT',
    bg: 'pink-600',
    description: 'Connecting media with social good',
    url: 'https://apps.apple.com/us/app/cncpt/id1662094973',
    tech: ['React Native', 'Typescript', 'Firebase'],
  },
];

// TODO: swap colors on hover smoothly > https://stackoverflow.com/a/67853821
// TODO: add KLOC
// TODO: on xl, animate floating (scale-95 - scale-105, maybe translate-y-1)
// TODO: add dates to projects
// TODO: on page load, display projects with fade in (Framer Motion?)
// NOTE: it'd be cool if the cards `were draggable and could be rearranged` (thx Copilot)
export default function Page() {
  return (
    <div className="grid gap-y-3 sm:gap-y-6 md:gap-y-8 lg:mt-8 lg:grid-cols-2 lg:gap-x-6 xl:gap-x-28 xl:gap-y-10">
      {projects.map((project) => (
        <a
          key={project.name}
          href={`${project.url}/`}
          target="_blank"
          rel="noreferrer"
          className={clsx({
            'order-first lg:order-none': project.name === 'CoLive',
            'order-last lg:order-none': project.name === 'Matrix',
          })}
        >
          <div
            className={clsx({
              'delay-50 group flex flex-grow flex-col justify-center rounded-3xl bg-gradient-to-tl from-zinc-800 px-6 py-7 shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 sm:px-8 sm:py-8 sm:shadow-lg sm:hover:to-zinc-900 lg:h-56 lg:px-12 lg:py-10':
                true,
              'to-emerald-600 sm:hover:from-emerald-600':
                project.bg === 'emerald-700',
              'to-cyan-600 sm:hover:from-cyan-600': project.bg === 'cyan-600',
              'to-sky-600 sm:hover:from-sky-600': project.bg === 'sky-600',
              'to-violet-600 sm:hover:from-violet-600':
                project.bg === 'violet-600',
              'order-1 to-fuchsia-700 sm:order-none sm:hover:from-fuchsia-700':
                project.bg === 'fuchsia-700',
              'to-pink-600 sm:hover:from-pink-600': project.bg === 'pink-600',
            })}
          >
            <h2 className="text-4xl font-extralight underline decoration-2 underline-offset-4">
              {project.name}
            </h2>
            <div className="mt-2 flex space-x-1 lg:mt-3">
              {project.tech.map((language) => (
                <div
                  key={language}
                  className={clsx({
                    'rounded-lg bg-zinc-800 px-3 py-1 group-hover:bg-gradient-to-r md:px-4':
                      true,
                    'from-amber-400 to-amber-600': language === 'Binance API',
                    'from-purple-600 to-purple-800': language === 'Bootstrap',
                    'from-amber-500 to-amber-600': language === 'Firebase',
                    'from-sky-400 to-sky-500': language === 'Go',
                    'from-zinc-300 to-zinc-900': language === 'Next.js',
                    'from-red-400 to-red-500': language === 'Laravel',
                    'from-violet-600 to-violet-800': language === 'PHP',
                    'from-yellow-500 to-yellow-600': language === 'Python',
                    'from-[#4fc7e8] to-[#3493ae]': language === 'React Native',
                    'from-orange-600 to-orange-700': language === 'Swift',
                    'from-cyan-500 to-cyan-600': language === 'SwiftUI',
                    'from-[#3fcf8e] to-[#2b825b]': language === 'Supabase',
                    'from-sky-500 to-cyan-600': language === 'TailwindCSS',
                    'from-[#378be5] to-[#195ea9]': language === 'Typescript',
                    'from-zinc-900 to-zinc-300': language === 'WebSockets',
                  })}
                >
                  <span className="text-sm">{language}</span>
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
