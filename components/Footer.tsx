import { ExternalLink } from "./Link";

export function Footer() {
  return (
    <footer className="flex justify-center gap-6 text-center font-extralight text-sm py-4 xl:py-6">
      <ExternalLink
        href="https://github.com/carlos-garciamoran"
        title="GitHub"
      />
      <ExternalLink href="https://x.com/cgarciamoran" title="X" />
    </footer>
  );
}
