import type { Metadata } from 'next'

import { PEAKS, QUITO } from '@/app/_lib/peaks'
import { type Observer, PeaksView } from './peaks-view'

export const metadata: Metadata = {
  title: 'Peaks',
  description: 'Name the mountains on your horizon through the camera',
}

const num = (v: string | string[] | undefined) => {
  const n = Number(Array.isArray(v) ? v[0] : v)
  return Number.isFinite(n) ? n : null
}

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> }

export default async function PeaksPage({ searchParams }: Props) {
  const params = await searchParams

  // ?lat=&lon=&alt= stands in until the first GPS fix, which makes the overlay
  // testable from a desk instead of only from a balcony in Quito.
  const fallback: Observer = {
    lat: num(params.lat) ?? QUITO.lat,
    lon: num(params.lon) ?? QUITO.lon,
    alt: num(params.alt) ?? QUITO.alt,
    accuracy: null,
    altSource: 'assumed',
  }

  return <PeaksView peaks={PEAKS} fallback={fallback} />
}
