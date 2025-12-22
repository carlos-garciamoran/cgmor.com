import { ExternalLinkIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import type { Metadata } from 'next'
import Link from 'next/link'

import { projects } from '@/app/_lib/data'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Stuff I have built',
}

// TODO: add dates to projects
// TODO: enable links on description (MD?) -> link CNCPT to The Concept Project
export default function Projects() {
  return (
    <div
      id="projects"
      className="flex size-full flex-col items-center justify-center py-8 md:py-12"
    >
      <div className="mx-auto w-full px-6 xl:px-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const { name, tags, description, url } = project
  const isExternal = url !== '#'

  return (
    <section className="border-[.5px] border-border p-4 hover:bg-secondary">
      <div className="flex items-start gap-2">
        <Link
          href={url}
          className={clsx('flex cursor-default items-start gap-2', isExternal && 'hover:underline')}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          <h2 className="font-normal text-lg">{name}</h2>
          {isExternal && <ExternalLinkIcon className="mt-px size-3.5 stroke-[1.5]" />}
        </Link>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center justify-center rounded-sm border border-border px-1.5 py-px"
          >
            <span className="font-mono text-[10px]">{tag}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 font-light text-sm">{description}</p>
    </section>
  )
}
