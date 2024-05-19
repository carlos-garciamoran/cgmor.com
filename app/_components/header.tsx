'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const pages = ['home', 'about', 'projects', 'muses'];

export function Header() {
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1];

  return (
    <header>
      <nav>
        <ul className="flex justify-evenly sm:divide-x-[.33px] sm:border-b-[.33px]">
          {pages.map((page) => (
            <li
              key={page}
              className="grow transition duration-300 sm:hover:bg-foreground sm:hover:text-background"
            >
              <Link
                href={page === 'home' ? '/' : `/${page}`}
                className={clsx(
                  'flex justify-center py-3 font-light tracking-wide hover:underline sm:hover:no-underline',
                  {
                    'underline sm:bg-foreground sm:text-background sm:no-underline':
                      page === currentPage,
                  }
                )}
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
