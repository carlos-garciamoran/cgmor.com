import { ExternalLink } from './Link';

export function Footer() {
  return (
    <footer className="flex justify-center gap-6 py-3 text-center text-sm font-extralight md:pb-6">
      <ExternalLink
        href="https://github.com/carlos-garciamoran"
        title="GitHub"
      />
      <ExternalLink href="https://x.com/cgarciamoran" title="X" />
      <ExternalLink
        href="https://linkedin.com/in/carlos-garcia-moran"
        title="LinkedIn"
      />
    </footer>
  );
}
