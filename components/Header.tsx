"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "./theme-toggle";

const pages = ["home", "about", "projects", "muses"];

export function Header() {
  const pathname = usePathname();
  const currentPage = pathname === "/" ? "home" : pathname.split("/")[1];

  return (
    <header>
      <nav>
        <ul className="flex justify-evenly sm:border-b border-gray-800 dark:border-gray-200 sm:divide-x divide-gray-800 dark:divide-gray-200">
          {pages.map(page => (
            <li
              key={page}
              className="grow transition ease-in-out duration-300 hover:text-black hover:bg-white"
            >
              <Link
                href={page === "home" ? "/" : "/" + page}
                className={clsx(
                  "flex justify-center h-full w-full py-3 underline sm:no-underline",
                  {
                    "bg-white text-black no-underline sm:bg-transparent sm:font-bold sm:text-inherit":
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
