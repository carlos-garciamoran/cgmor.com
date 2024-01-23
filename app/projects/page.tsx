import type { Metadata } from 'next';
import clsx from 'clsx';
import { projects } from '@/config/data';
import { type Project } from '@/config/data';
import { ExternalLink } from 'lucide-react';

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
      <div className="grid flex-1 grid-cols-1 justify-center gap-2 p-5 transition-all duration-200 sm:p-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-1.5">
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
        'group flex animate-mutate-border flex-col justify-center border border-neutral-900 bg-transparent p-6 shadow-md transition delay-150 duration-500 ease-in-out dark:border-neutral-200 sm:h-52 sm:p-8 sm:shadow-lg sm:hover:scale-105 md:hover:scale-110 lg:p-10 xl:h-[calc((100dvh-48px-68px-32px-6px)/3)] xl:px-12 xl:shadow-2xl 2xl:px-14',
        {
          'hover:bg-slate-800 sm:hover:translate-x-6 sm:hover:translate-y-5 xl:order-1':
            name === 'nativecn-ui',
          'hover:bg-orange-700 sm:hover:translate-y-5 xl:order-2':
            name === 'swiftcn-ui',
          'hover:bg-indigo-700 sm:hover:-translate-x-6 sm:hover:translate-y-5 xl:order-3':
            name === 'CoLive',
          'hover:bg-yellow-600 sm:hover:translate-x-6 xl:order-4':
            name === 'Hermes',
          'hover:bg-neutral-800 md:hover:scale-[1.15] xl:order-5':
            name === 'stealth',
          'hover:bg-sky-700 sm:hover:-translate-x-6 xl:order-6':
            name === 'TweetWidget',
          'hover:bg-cyan-700 sm:hover:-translate-y-5 sm:hover:translate-x-6 xl:order-7':
            name === 'CNCPT',
          'hover:bg-fuchsia-800 sm:hover:-translate-y-5 xl:order-8':
            name === 'Delfos',
          'hover:bg-emerald-600 sm:hover:-translate-x-6 sm:hover:-translate-y-5 xl:order-9':
            name === 'Matrix',
        }
      )}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <h2 className="text-2xl font-extralight underline decoration-2 underline-offset-4 sm:text-3xl md:text-4xl">
          {name}
        </h2>
        {isExternal && (
          <ExternalLink className="mt-px size-4 stroke-[1.5] transition-all delay-150 duration-500 group-hover:stroke-2 sm:size-5" />
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
