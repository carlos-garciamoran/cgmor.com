'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import type { SpotifyNowPlayingData } from '@/app/_lib/spotify'

interface SpotifyNowPlayingProps {
  hasPlaceholder?: boolean
}

export function SpotifyNowPlaying({ hasPlaceholder = false }: SpotifyNowPlayingProps) {
  const [nowPlaying, setNowPlaying] = useState<SpotifyNowPlayingData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/now-playing')
        const data: SpotifyNowPlayingData = await response.json()
        setNowPlaying(data)
      } catch (error) {
        console.error('Error fetching now playing:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNowPlaying()
    // Poll every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    if (hasPlaceholder) {
      return <Skeleton />
    }
    return <div className="size-12" />
  }

  if (!nowPlaying?.isPlaying) {
    if (hasPlaceholder) {
      return <NotPlaying />
    }
    return <div className="size-12" />
  }

  return (
    <a
      href={nowPlaying.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-card/50 backdrop-blur-sm transition-all hover:bg-card/70 light:hover:shadow-md"
    >
      {nowPlaying.albumImageUrl && (
        // biome-ignore lint/performance/noImgElement: spotify album art
        <img
          src={nowPlaying.albumImageUrl}
          alt={`${nowPlaying.album} album art`}
          className="size-12 rounded-xs object-cover shadow-sm"
        />
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="truncate font-light text-foreground text-sm">{nowPlaying.title}</p>
        <p className="truncate font-light text-muted-foreground text-xs">{nowPlaying.artist}</p>
      </div>
    </a>
  )
}

function Skeleton() {
  return (
    <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm">
      <div className="size-12 animate-pulse rounded-xs bg-muted" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
      </div>
    </div>
  )
}

function NotPlaying() {
  return (
    <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm">
      <div className="flex size-12 items-center justify-center rounded-xs bg-muted">
        <SpotifyIcon className="size-8" />
      </div>
      <div className="flex-1 text-muted-foreground text-sm">
        <p>Not playing</p>
        <p>:(</p>
      </div>
    </div>
  )
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={clsx('text-muted-foreground', className)}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Spotify</title>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}
