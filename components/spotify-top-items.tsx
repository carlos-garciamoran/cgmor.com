'use client'

import { useEffect, useState } from 'react'

import type { SpotifyTopItem, SpotifyTopItems } from '@/app/_lib/spotify'

const SKELETON_ROW_KEYS = ['first', 'second', 'third', 'fourth', 'fifth']

export function SpotifyTopRankings() {
  const [topItems, setTopItems] = useState<SpotifyTopItems | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchTopItems = async () => {
      try {
        const response = await fetch('/api/spotify-top')

        if (!response.ok) {
          throw new Error(`Spotify top-items request failed (${response.status})`)
        }

        setTopItems(await response.json())
      } catch (error) {
        console.error(error)
        setHasError(true)
      }
    }

    fetchTopItems()
  }, [])

  if (hasError) {
    return (
      <section className="col-span-full py-8 text-muted-foreground text-sm">
        Spotify rankings are temporarily unavailable.
      </section>
    )
  }

  return (
    <section
      aria-label="Spotify top items from the last four weeks"
      className="col-span-full grid gap-8 py-8 xl:grid-cols-2"
    >
      <TopItemsTable title="Top 5 tracks" items={topItems?.tracks} />
      <TopItemsTable title="Top 5 artists" items={topItems?.artists} isArtist />
    </section>
  )
}

interface TopItemsTableProps {
  title: string
  items?: SpotifyTopItem[]
  isArtist?: boolean
}

function TopItemsTable({ title, items, isArtist = false }: TopItemsTableProps) {
  return (
    <div className="min-w-0">
      <h2 className="mb-3 font-light text-lg">{title}</h2>
      <table className="w-full table-fixed border-collapse">
        <thead className="sr-only">
          <tr>
            <th scope="col">{isArtist ? 'Artist' : 'Track'}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/30">
          {items
            ? items.map((item) => <TopItemRow key={item.id} item={item} isArtist={isArtist} />)
            : SKELETON_ROW_KEYS.map((key) => <TopItemRowSkeleton key={key} />)}
        </tbody>
      </table>
    </div>
  )
}

function TopItemRow({ item, isArtist }: { item: SpotifyTopItem; isArtist: boolean }) {
  return (
    <tr>
      <td className="min-w-0 py-2.5">
        <a
          href={item.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center gap-3 hover:opacity-75"
        >
          {item.imageUrl ? (
            // biome-ignore lint/performance/noImgElement: spotify-hosted artwork
            <img
              src={item.imageUrl}
              alt=""
              className={`size-10 shrink-0 object-cover ${isArtist ? 'rounded-full' : 'rounded-xs'}`}
            />
          ) : (
            <span
              aria-hidden="true"
              className={`size-10 shrink-0 bg-muted ${isArtist ? 'rounded-full' : 'rounded-xs'}`}
            />
          )}
          <span className="truncate font-light text-sm">{item.name}</span>
        </a>
      </td>
    </tr>
  )
}

function TopItemRowSkeleton() {
  return (
    <tr>
      <td className="py-2.5">
        <div className="flex items-center gap-3">
          <div className="size-10 shrink-0 animate-pulse rounded-xs bg-muted" />
          <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        </div>
      </td>
    </tr>
  )
}
