"use client";

import { useTheme } from "next-themes";
import { Lightbulb, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === "light" ? (
    <button onClick={() => setTheme("dark")}>
      <Moon className="h-5 w-5" />
    </button>
  ) : (
    <button onClick={() => setTheme("light")}>
      <Lightbulb className="h-5 w-5" />
    </button>
  );
}
