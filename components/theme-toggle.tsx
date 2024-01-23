'use client';

import { useTheme } from 'next-themes';
import { Lightbulb, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === 'light' ? (
    <button aria-label="Toggle theme" onClick={() => setTheme('dark')}>
      <Moon className="size-5" />
    </button>
  ) : (
    <button aria-label="Toggle theme" onClick={() => setTheme('light')}>
      <Lightbulb className="size-5" />
    </button>
  );
}
