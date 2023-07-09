'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const pages = ['home', 'about', 'projects', 'muses'];

export default function Navbar() {
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1];

  return (
    <nav className="select-none">
      <ul className="flex justify-evenly sm:border-b sm:divide-x">
        {pages.map(page => (
          <li
            key={page}
            className="flex-grow transition ease-in-out duration-300 hover:text-black hover:bg-white"
          >
            <Link
              href={page === 'home' ? '/' : '/' + page}
              className={clsx({
                'flex justify-center h-full w-full py-3 underline sm:no-underline':
                  true,
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
  );
}
