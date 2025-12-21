'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const pages = ['home', 'about', 'projects', 'muses']

export function Nav() {
  const pathname = usePathname()
  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1]

  // TODO: yellow for highlight
  return (
    <ul className="flex justify-evenly">
      {pages.map((page) => (
        <li key={page} className="grow transition duration-300 sm:hover:underline">
          <Link
            href={page === 'home' ? '/' : `/${page}`}
            className={clsx(
              'flex cursor-default justify-center py-3 font-light tracking-wide underline-offset-4 hover:underline sm:hover:no-underline',
              {
                'underline sm:bg-foreground sm:text-background sm:no-underline':
                  page === currentPage,
              },
            )}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  )
}
