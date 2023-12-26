'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const pages = ['home', 'about', 'projects', 'muses'];

export function Header() {
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1];

  return (
    <header>
      <nav>
        <ul className="flex justify-evenly divide-x divide-gray-800 border-b border-gray-800 dark:divide-gray-200 dark:border-gray-200">
          {pages.map((page) => (
            <li
              key={page}
              className="grow transition duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              <Link
                href={page === 'home' ? '/' : `/${page}`}
                className={clsx('flex justify-center py-3', {
                  'bg-white text-black no-underline sm:bg-transparent sm:font-bold sm:text-inherit':
                    page === currentPage,
                })}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
