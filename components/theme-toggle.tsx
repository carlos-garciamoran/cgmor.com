'use client';

import { useTheme } from 'next-themes';
import { Lightbulb, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === 'light' ? (
    <button aria-label="Aria Name" onClick={() => setTheme('dark')}>
      <Moon className="h-5 w-5" />
    </button>
  ) : (
    <button aria-label="Aria Name" onClick={() => setTheme('light')}>
      <Lightbulb className="h-5 w-5" />
    </button>
  );
}
