import type { Metadata } from 'next'
import clsx from 'clsx'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

import { projects, type Project } from '@/app/_lib/data'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Stuff I have built',
}

// TODO: add dates to projects (also continued/discontinued)
// TODO: enable links on description (MD?) -> link CNCPT to The Concept Project
// DESIGN: on page load, fade in cards (Framer Motion)
// IDEA: make border color a linear gradient
export default function Projects() {
  return (
    <div id="projects" className="size-full px-4 xl:px-0">
      <div className="grid flex-1 grid-cols-1 justify-center gap-2 p-4 transition-all duration-200 sm:p-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-1.5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { name, tags, description, url } = project
  const isExternal = url !== '#'

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : '_self'}
      rel="noreferrer"
      className={clsx(
        'project-card animate-mutate-border group flex cursor-default flex-col justify-center from-neutral-200 to-neutral-50 bg-gradient-to-b rounded-md dark:from-[hsl(0,0%,5%)] dark:to-[hsl(0,0%,3%)] bg-transparent p-6 transition duration-200 ease-in-out sm:h-52 sm:p-8 lg:p-10 xl:h-[calc((100dvh-48px-68px-32px-6px)/3)] xl:px-12 2xl:px-14 ',
        {
          'hover:to-slate-300 dark:hover:to-slate-800 xl:order-1': name === 'nativecn-ui',
          'hover:to-orange-300 dark:hover:to-orange-600 xl:order-2': name === 'swiftcn-ui',
          'hover:to-indigo-300 dark:hover:to-indigo-700 xl:order-3': name === 'CoLive',
          'hover:to-yellow-300 dark:hover:to-yellow-500 xl:order-4': name === 'Hermes',
          'hover:to-neutral-100 dark:hover:to-neutral-800 xl:order-5': name === 'stealth',
          'hover:to-sky-300 dark:hover:to-sky-600 xl:order-6': name === 'TweetWidget',
          'hover:to-cyan-300 dark:hover:to-cyan-600 xl:order-7': name === 'CNCPT',
          'hover:to-fuchsia-300 dark:hover:to-fuchsia-700 xl:order-8': name === 'Delfos',
          'hover:to-emerald-300 dark:hover:to-emerald-600 xl:order-9': name === 'Matrix',
        },
      )}
    >
      <div className="flex items-start gap-2 sm:gap-3.5">
        <h2 className="text-2xl font-bold decoration-2 underline-offset-4 group-hover:underline sm:text-3xl md:text-4xl">
          {name}
        </h2>
        {isExternal && (
          <ExternalLinkIcon className="mt-px size-4 stroke-[1.5] transition-all duration-200 sm:size-5" />
        )}
      </div>
      <div className="mt-3.5 flex gap-x-1">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center rounded-full bg-gradient-to-tr from-transparent to-neutral-100 px-2 py-1 text-center font-mono font-light dark:to-neutral-700 sm:px-3"
          >
            <span className="text-xs">{tag}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 font-light">{description}</p>
    </a>
  )
}
