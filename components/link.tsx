import clsx from 'clsx'

export function ExternalLink({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('sm:no-underline sm:hover:underline', className)}
      {...props}
    />
  )
}
