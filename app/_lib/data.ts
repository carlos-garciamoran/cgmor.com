type Project = {
  name: string
  description: string
  url: string
  tags: string[]
}
export const projects: Project[] = [
  {
    name: 'nativecn-ui',
    description: 'shadcn/ui for React Native',
    url: 'https://github.com/Mobilecn-UI/nativecn-ui',
    tags: ['shadcn/ui', 'React Native', 'Typescript'],
  },
  {
    name: 'swiftcn-ui',
    description: 'Beautiful mobile UI components',
    url: 'https://github.com/Mobilecn-UI/swiftcn-ui',
    tags: ['Swift', 'SwiftUI'],
  },
  {
    name: 'CoLive',
    description: 'Find sublets and roommates easily',
    url: '#',
    tags: ['Next.js', 'Typescript', 'TailwindCSS'],
  },
  {
    name: 'Hermes',
    description: 'Binance USD-M Futures trading bot',
    url: 'https://github.com/carlos-garciamoran/hermes',
    tags: ['Go', 'WebSockets'],
  },
  {
    name: 'TweetWidget',
    description: 'Glance at tweets from your home screen',
    url: 'https://github.com/carlos-garciamoran/tweetwidget',
    tags: ['Swift', 'SwiftUI', 'Supabase'],
  },
  {
    // The Concept Project, "https://www.theconceptproject.org"
    name: 'CNCPT',
    description: 'Connecting media with social good',
    url: 'https://apps.apple.com/us/app/cncpt/id1662094973',
    tags: ['React Native', 'Typescript', 'Firebase'],
  },
  {
    name: 'Delfos',
    description: 'Cryptocurrency trading bot',
    url: 'https://github.com/carlos-garciamoran/delfos',
    tags: ['Python', 'Binance API'],
  },
  {
    name: 'Matrix',
    description: 'Student information system built for UWC ISAK Japan',
    url: 'https://github.com/carlos-garciamoran/matrix',
    tags: ['PHP', 'Laravel', 'Bootstrap'],
  },
]
