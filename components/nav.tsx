'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = ['about', 'projects', 'muses']

export function Nav() {
  const pathname = usePathname()
  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1]

  return (
    <ul className="flex text-sm sm:pt-1">
      {pages.map((page) => (
        <li key={page} className="grow transition duration-300 sm:hover:underline">
          <Link
            href={page === 'home' ? '/' : `/${page}`}
            className={clsx(
              'flex cursor-default justify-center py-3 font-light capitalize tracking-wide underline-offset-4 hover:underline sm:hover:no-underline',
              { 'text-yellow-500 dark:text-yellow-400': page === currentPage },
            )}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  )
}
