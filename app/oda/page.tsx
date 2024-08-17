// TODO: move away from layout
export default function OdaPage() {
  return (
    <div className="size-full justify-center items-center p-3.5 sm:p-8 max-w-screen-sm w-4/5 flex flex-col gap-4">
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
