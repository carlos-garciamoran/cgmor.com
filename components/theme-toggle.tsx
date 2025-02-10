'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return resolvedTheme === 'light' ? (
    <button aria-label="Toggle theme" onClick={() => setTheme('dark')} type="button">
      <MoonIcon className="size-4" />
    </button>
  ) : (
    <button aria-label="Toggle theme" onClick={() => setTheme('light')} type="button">
      <SunIcon className="size-4" />
    </button>
  )
}
