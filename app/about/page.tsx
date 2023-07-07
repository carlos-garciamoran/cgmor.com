import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

const socials = [
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: `https://linkedin.com/in/carlos-garcia-moran`,
    hoverColor: 'sky-700',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: `https://github.com/carlos-garciamoran`,
    hoverColor: 'zinc-700',
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    url: `https://twitter.com/cgarciamoran`,
    hoverColor: 'sky-400',
  },
];

export const metadata = {
  title: 'About',
  description: 'Software | Design',
};

// TODO: set up markdown/MDX
// DESIGN: try using close-up of J. Pollock's painting as background (repeat pattern)
// DESIGN: make chronology with achievements/places (add years in left column or something)
export default function Page() {
  return (
    <div className="xl:mt-8">
      <div className="text-justify space-y-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-48">
        <p>
          I'm a software engineer originally from Madrid, Spain. Since middle
          school, I have been tinkering with computers and reading{' '}
          <Link href="/muses" className="underline">
            books
          </Link>
          . High school was boring, so I began learning programming and security
          to satisfy my curiosity. OverTheWire, CTFs, and writing Python became
          my go-to hobby during late nights. I started using Linux and getting
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
          liberal arts school —Lewis & Clark College. In the Summer of 2022, I
          interned at LinkedIn as an SRE (Site Reliability Engineer). My project
          focused on rebalancing traffic between data centers during scheduled
          load tests.
        </p>
        <p>
          During the Fall of 2022, I traveled to 11 countries through the
          Semester at Sea study abroad program. Throughout the voyage, I learned
          how to develop mobile applications using React Native and TypeScript.
          To put it into practice, I built the{' '}
          <a
            href="https://apps.apple.com/us/app/cncpt/id1662094973"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CNCPT iOS app
          </a>
          , inspired by{' '}
          <a
            href="https://www.theconceptproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            The Concept Project
          </a>{' '}
          —a platform created by a fellow voyager and friend.
        </p>
        <p>
          This summer, I am interning at LinkedIn's NYENG-SRE org working on
          tooling to help developers identify application issues faster. During
          my spare time, I'm building{' '}
          <a
            href="https://www.getcolive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CoLive
          </a>
          : a hub to help college students and new grads find sublets easily.
        </p>
      </div>
      <div className="flex justify-center mt-6 lg:mt-8 space-x-6">
        {socials.map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={`hover:text-${social.hoverColor}`}
              icon={social.icon}
              size="2x"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
