import { ExternalLink } from './Link';

export function Footer() {
  return (
    <footer className="flex justify-center gap-6 py-4 text-center text-sm font-extralight xl:py-6">
      <ExternalLink
        href="https://github.com/carlos-garciamoran"
        title="GitHub"
      />
      <ExternalLink href="https://x.com/cgarciamoran" title="X" />
    </footer>
  );
}
