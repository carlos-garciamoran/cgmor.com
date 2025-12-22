import clsx from 'clsx'
import Link from 'next/link'

export function ExternalLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('sm:no-underline sm:hover:underline', className)}
      {...props}
    />
  )
}

export function InternalLink({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={clsx(
        'cursor-default underline decoration-1 underline-offset-[3px] hover:text-yellow-400',
        className,
      )}
      {...props}
    />
  )
}
