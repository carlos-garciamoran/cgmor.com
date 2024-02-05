'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === 'light' ? (
    <button aria-label="Toggle theme" onClick={() => setTheme('dark')}>
      <Moon className="size-5" />
    </button>
  ) : (
    <button aria-label="Toggle theme" onClick={() => setTheme('light')}>
      <Sun className="size-5" />
    </button>
  );
}
