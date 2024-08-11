import { ExternalLink } from './link'
import { ThemeToggle } from './theme-toggle'

export function Footer() {
  return (
    <footer className="flex justify-center gap-6 pb-3 text-center font-extralight text-xs underline-offset-2 sm:text-sm md:pb-6">
      <ExternalLink href="https://github.com/carlos-garciamoran" title="GitHub" />
      <ExternalLink href="https://x.com/cgarciamoran" title="X" />
      <ExternalLink href="https://linkedin.com/in/carlos-garcia-moran" title="LinkedIn" />
      <div className="fixed right-2 bottom-2 lg:right-6 lg:bottom-4">
        <ThemeToggle />
      </div>
    </footer>
  )
}
