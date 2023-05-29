'use client';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { HamburgerIcon, XIcon } from './Icons';

const pages = ['home', 'about', 'projects', 'muses'];

export default function Navbar() {
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1];

  const [hasMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row-reverse sm:block">
      {/* DESIGN: animate opening mobile menu (<ul>). */}
      {/* TODO: remove button outline when tapping it. */}
      <button
        aria-label="Open nav menu"
        className="inline-flex bg-transparent p-2 text-neutral-100 mt-2 mr-2 sm:hidden"
        onClick={() => setMenuOpen(prevState => !prevState)}
      >
        {hasMenuOpen ? <XIcon /> : <HamburgerIcon />}
      </button>
      <ul
        className={clsx({
          'border-b justify-evenly': true,
          'hidden sm:flex divide-x flex-row': !hasMenuOpen,
          // DESIGN: try inverted gradient as background.
          'absolute inset-0 flex flex-col divide-y bg-gradient-to-br from-slate-800 to-neutral-900 mt-14 top-0':
            hasMenuOpen,
        })}
      >
        {pages.map(page => (
          <li
            key={page}
            className={clsx({
              'flex-grow hover:text-black hover:bg-white ': true,
              'transition ease-in-out duration-300': !hasMenuOpen,
              'flex flex-col justify-center': hasMenuOpen,
            })}
          >
            <Link
              href={page === 'home' ? '/' : '/' + page}
              className={clsx({
                'flex justify-center h-full w-full': true,
                'py-3': !hasMenuOpen,
                'flex-col text-center': hasMenuOpen,
                uppercase: page === currentPage,
              })}
              onClick={() => setMenuOpen(false)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
