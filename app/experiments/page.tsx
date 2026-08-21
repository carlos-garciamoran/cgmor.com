import Link from 'next/link'

export default function Experiments() {
  return (
    <div className="flex size-full flex-1 flex-col items-center justify-center gap-10 py-8">
      <div className="flex size-64 animate-mutate-border items-center justify-center border">
        <p>trippy border</p>
      </div>
      <Link href="/experiments/peaks" className="underline">
        peaks, name the mountains on your horizon
      </Link>
    </div>
  )
}
