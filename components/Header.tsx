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
        <ul className="flex justify-evenly divide-x border-b">
          {pages.map((page) => (
            <li
              key={page}
              className="grow transition duration-300 ease-in-out hover:bg-foreground hover:text-background"
            >
              <Link
                href={page === 'home' ? '/' : `/${page}`}
                className={clsx('flex justify-center py-3', {
                  'bg-foreground text-background no-underline':
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
