interface PlaylistProps extends Omit<React.HTMLAttributes<HTMLIFrameElement>, 'src'> {
  playlistId: string
}

export function Playlist({ playlistId, ...props }: PlaylistProps) {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
      width="100%"
      height="500"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      {...props}
    />
  )
}
