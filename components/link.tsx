import clsx from 'clsx'

export function ExternalLink({
  href,
  title,
  alwaysUnderline = true,
}: {
  href: string
  title: string
  alwaysUnderline?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('underline', {
        'sm:no-underline sm:hover:underline': !alwaysUnderline,
      })}
    >
      {title}
    </a>
  )
}
