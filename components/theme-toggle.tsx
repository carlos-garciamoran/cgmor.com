'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === 'light' ? (
    <button onClick={() => setTheme('dark')}>
      <Moon className="h-6 w-6" />
    </button>
  ) : (
    <button onClick={() => setTheme('light')}>
      <Sun className="h-6 w-6" />
    </button>
  );
}
