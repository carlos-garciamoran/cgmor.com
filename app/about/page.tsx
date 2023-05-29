import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';

const socials = {
  GitHub: 'carlos-garciamoran',
  LinkedIn: 'carlos-garcia-moran',
  Twitter: 'cgarciamoran',
};

export const metadata = {
  title: 'About',
  description: 'About me',
};

// TODO: set up markdown/MDX
// DESIGN: try using close-up of J. Pollock's painting as background (repeat pattern)
// DESIGN: make chronology with achievements/places (add years in left column or something)
export default function Page() {
  return (
    <div className="xl:mt-8">
      <div className="text-justify space-y-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-48">
        <p>
          Since middle school, I have been tinkering with computers and reading{' '}
          <Link href="/muses" className="underline">
            books
          </Link>
          . High school was boring, so I began learning programming and security
          to satisfy my curiosity. OverTheWire, CTFs, and DEF CON talks became
          my go-to hobby during late nights. Windows restricted most of my
          learning (i.e., made it hard to break and fix things), so I started
          using Linux.
          {/* Around 2014, I built my father's website for his tea shop business. */}
        </p>
        <p>
          At 16, I received a scholarship to study abroad at UWC ISAK Japan,
          completing the IBDP program. Seeing how time-consuming and frustrating
          many of my school's processes were, I built{' '}
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
          </a>
          , a platform created by a fellow voyager and friend.
        </p>
        <p>
          This summer, I am interning at LinkedIn's NYENG-SRE org working on
          tooling to help developers identify application issues faster. During
          my spare time, I am building{' '}
          <a
            href="https://www.getcolive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CoLive
          </a>
          , a platform to help college students and new grads find sublets
          easily.
        </p>
      </div>
      <div className="flex justify-center mt-4 lg:mt-8 space-x-6">
        <a
          href={`https://www.linkedin.com/in/${socials.LinkedIn}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="hover:text-sky-700"
          />
        </a>
        <a
          href={`https://github.com/${socials.GitHub}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="hover:text-zinc-700"
          />
        </a>
        <a
          href={`https://twitter.com/${socials.Twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="hover:text-sky-400"
          />
        </a>
      </div>
    </div>
  );
}
