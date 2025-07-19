// TODO: move away from layout
export default function MusicPage() {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-4 p-3.5 sm:p-8">
      {/* experimental dance */}
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/4jeYwv1Dj8YqB1fX2Aslgm?utm_source=generator"
        title="Oda Playlist"
        width="100%"
        height="352"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      {/* outro - berlioz */}
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/5tJM4bUjJsgvvlqtsiKaMi?utm_source=generator"
        title="Track #1"
        width="100%"
        height="152"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      {/* Barry can't curate */}
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/73d8XZr4SE9FsEfQ1cky9b?utm_source=generator"
        title="Track #1"
        width="100%"
        height="500"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}
