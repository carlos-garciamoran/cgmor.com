import { ExternalLink } from './link';
import { ThemeToggle } from './theme-toggle';

export function Footer() {
  return (
    <footer className="flex justify-center gap-6 py-3 text-center text-sm font-extralight underline-offset-2 md:pb-6">
      <ExternalLink
        href="https://github.com/carlos-garciamoran"
        title="GitHub"
      />
      <ExternalLink href="https://x.com/cgarciamoran" title="X" />
      <ExternalLink
        href="https://linkedin.com/in/carlos-garcia-moran"
        title="LinkedIn"
      />
      <div className="fixed bottom-2 right-2 lg:bottom-4 lg:right-6">
        <ThemeToggle />
      </div>
    </footer>
  );
}
