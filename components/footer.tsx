import { ExternalLink } from './links'

export function Footer() {
  return (
    <footer className="flex justify-center gap-6 pb-3.5 text-center font-extralight text-xs underline-offset-2 sm:text-sm md:pb-6">
      <ExternalLink
        className="text-muted-foreground hover:text-secondary-foreground"
        href="https://github.com/carlos-garciamoran"
      >
        GitHub
      </ExternalLink>
      <ExternalLink
        className="text-muted-foreground hover:text-secondary-foreground"
        href="https://x.com/cgarciamoran"
      >
        X
      </ExternalLink>
      <ExternalLink
        className="text-muted-foreground hover:text-secondary-foreground"
        href="https://linkedin.com/in/carlos-garcia-moran"
      >
        LinkedIn
      </ExternalLink>
    </footer>
  )
}
