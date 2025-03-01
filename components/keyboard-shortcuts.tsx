'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const routes = ['/', '/about', '/projects', '/muses']

export function KeyboardShortcuts() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Only handle left and right arrow keys
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return
      }

      // Don't trigger navigation when user is typing in an input or textarea
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return
      }

      const currentIndex = routes.indexOf(pathname)
      
      // If current path is not in our routes array, don't do anything
      if (currentIndex === -1) return

      if (event.key === 'ArrowRight') {
        // Navigate to next route, or stay on last route
        const nextIndex = Math.min(currentIndex + 1, routes.length - 1)
        if (nextIndex !== currentIndex) {
          router.push(routes[nextIndex])
        }
      } else if (event.key === 'ArrowLeft') {
        // Navigate to previous route, or stay on first route
        const prevIndex = Math.max(currentIndex - 1, 0)
        if (prevIndex !== currentIndex) {
          router.push(routes[prevIndex])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [pathname, router])

  // This component doesn't render anything
  return null
} 