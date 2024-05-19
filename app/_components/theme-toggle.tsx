'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return resolvedTheme === 'light' ? (
    <button aria-label="Toggle theme" onClick={() => setTheme('dark')}>
      <MoonIcon className="size-4" />
    </button>
  ) : (
    <button aria-label="Toggle theme" onClick={() => setTheme('light')}>
      <SunIcon className="size-4" />
    </button>
  );
}
