import Link from 'next/link';

import { ExternalLink } from '@/components/Link';

export const metadata = {
  title: 'About',
  description: 'Software | Design',
};

// TODO: add TL;DR
// - past work
// - current projects
// DESIGN: try using close-up of J. Pollock's painting as background (repeat pattern)
// DESIGN: make chronology with achievements/places (add years in left column or something)
export default function Page() {
  return (
    <div className="flex flex-col items-center lg:mt-4">
      <div className="w-full space-y-4 text-justify sm:w-5/6 lg:w-3/4 xl:w-1/2">
        <p>
          I'm a software engineer originally from Madrid, Spain. Since middle
          school, I have been{' '}
          <Link href="/projects" className="underline">
            tinkering
          </Link>{' '}
          with computers and reading{' '}
          <Link href="/muses" className="underline">
            books
          </Link>
          . High school was boring, so I began learning programming and security
          to satisfy my curiosity. OverTheWire, CTFs, and writing Python became
          my go-to hobbies during late nights. I started using Linux and getting
          familiarized with the CLI (Windows made it hard to break and fix
          things).
        </p>
        <p>
          At 16, I received a scholarship to study abroad at UWC ISAK Japan.
          Seeing how time-consuming and frustrating many of my school's
          processes were, I built{' '}
          <Link href="/projects#Matrix" className="underline">
            Matrix
          </Link>{' '}
          —ISAK's first student information system. The web application handled
          tasks like sign-in/sign-out, professor absences, and a newsletter.
        </p>
        <p>
          In 2020, I moved to the US to pursue a Computer Science degree at a
          liberal arts school —Lewis & Clark College. In summer 2022, I interned
          at LinkedIn as an SRE. I developed tooling for rebalancing traffic
          between data centers during scheduled load tests.
        </p>
        <p>
          During fall 2022, I traveled to 11 countries through the Semester at
          Sea study abroad program. Throughout the voyage, I learned how to
          develop mobile applications using React Native and TypeScript. To put
          it into practice, I built the{' '}
          <ExternalLink
            href="https://apps.apple.com/us/app/cncpt/id1662094973"
            title="CNCPT app"
          />
          , inspired by{' '}
          <ExternalLink
            href="https://www.theconceptproject.org"
            title="The Concept Project"
          />{' '}
          —a platform created by a fellow voyager and friend.
        </p>
        <p>
          Last summer, I lived in NYC while working at LinkedIn's NYENG org on
          internal tooling to help developers identify and monitor incidents
          faster and more easily. In my spare time, I'm building{' '}
          <ExternalLink
            alwaysUnderline
            href="https://mobilecn.lol"
            title="mobilecn UI"
          />
          . Inspired by shadcn/ui, we are crafting opinionated-yet-customizable
          components for React Native (
          <ExternalLink
            alwaysUnderline
            href="https://github.com/Mobilecn-UI/nativecn-ui"
            title="nativecn-ui"
          />
          ) and SwiftUI (
          <ExternalLink
            alwaysUnderline
            href="https://github.com/Mobilecn-UI/swiftcn-ui"
            title="swiftcn-ui"
          />
          ).
        </p>
      </div>
      <div className="mt-6 text-center text-sm font-light">
        <ExternalLink
          href="https://linkedin.com/in/carlos-garcia-moran"
          title="LinkedIn"
        />
      </div>
    </div>
  );
}
