import type { Metadata } from 'next';
import clsx from 'clsx';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

import { projects, type Project } from '@/app/_lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Stuff I have built',
};

// TODO: swap bg-color smoothly (:hover) > https://stackoverflow.com/a/67853821
// TODO: on page load, fade in cards (Framer Motion?)
// IDEA: make border color a linear gradient
export default function Projects() {
  return (
    <div id="projects" className="size-full">
      <div className="grid flex-1 grid-cols-1 justify-center gap-2 p-5 px-6 transition-all duration-200 sm:p-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-1.5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { name, tags, description, url } = project;
  const isExternal = url !== '#';

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : '_self'}
      rel="noreferrer"
      className={clsx(
        'group flex animate-mutate-border flex-col justify-center border border-neutral-900 bg-transparent p-6 shadow-md transition delay-75 duration-500 ease-in-out dark:border-neutral-200 sm:h-52 sm:p-8 sm:shadow-lg lg:p-10 xl:h-[calc((100dvh-48px-68px-32px-6px)/3)] xl:px-12 xl:shadow-2xl 2xl:px-14',
        {
          'hover:bg-slate-300 dark:hover:bg-slate-800 xl:order-1':
            name === 'nativecn-ui',
          'hover:bg-orange-300 dark:hover:bg-orange-600 xl:order-2':
            name === 'swiftcn-ui',
          'hover:bg-indigo-300 dark:hover:bg-indigo-700 xl:order-3':
            name === 'CoLive',
          'hover:bg-yellow-300 dark:hover:bg-yellow-600 xl:order-4':
            name === 'Hermes',
          'hover:bg-neutral-100 dark:hover:bg-neutral-800 xl:order-5':
            name === 'stealth',
          'hover:bg-sky-300 dark:hover:bg-sky-600 xl:order-6':
            name === 'TweetWidget',
          'hover:bg-cyan-300 dark:hover:bg-cyan-600 xl:order-7':
            name === 'CNCPT',
          'hover:bg-fuchsia-300 dark:hover:bg-fuchsia-700 xl:order-8':
            name === 'Delfos',
          'hover:bg-emerald-300 dark:hover:bg-emerald-600 xl:order-9':
            name === 'Matrix',
        }
      )}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <h2 className="text-2xl font-extralight decoration-2 underline-offset-4 group-hover:underline sm:text-3xl md:text-4xl">
          {name}
        </h2>
        {isExternal && (
          <ExternalLinkIcon className="mt-px size-4 stroke-[1.5] transition-all delay-100 duration-500 group-hover:stroke-2 sm:size-5" />
        )}
      </div>
      <div className="mt-3 flex gap-x-1">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center rounded-full bg-gradient-to-tr from-transparent to-neutral-100 px-2 py-1 text-center font-mono dark:to-neutral-900 sm:px-3"
          >
            <span className="text-xs">{tag}</span>
          </div>
        ))}
      </div>
      <p className="mt-4">{description}</p>
    </a>
  );
}
