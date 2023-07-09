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
    hoverColor: 'hover:text-[#0a66c2]',
    url: 'https://linkedin.com/in/carlos-garcia-moran',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    hoverColor: 'hover:text-black',
    url: 'https://github.com/carlos-garciamoran',
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    hoverColor: 'hover:text-[#1da1f2]',
    url: 'https://twitter.com/cgarciamoran',
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
    <div className="flex flex-col items-center lg:mt-4">
      <div className="text-justify space-y-4 w-full sm:w-5/6 lg:w-3/4 xl:w-1/2">
        <p>
          I'm a software engineer originally from Madrid, Spain. Since middle
          school, I have been tinkering with computers and reading{' '}
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
          liberal arts school —Lewis & Clark College. In the Summer of 2022, I
          interned at LinkedIn as an SRE (Site Reliability Engineer). My project
          focused on rebalancing traffic between data centers during scheduled
          load tests.
        </p>
        <p>
          During Fall 2022, I traveled to 11 countries through the Semester at
          Sea study abroad program. Throughout the voyage, I learned how to
          develop mobile applications using React Native and TypeScript. To put
          it into practice, I built the{' '}
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
              className={`${social.hoverColor} transition-colors duration-300 ease-in-out`}
              icon={social.icon}
              size="2x"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
