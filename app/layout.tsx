import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Cormorant } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { KeyboardShortcuts } from '@/components/keyboard-shortcuts'
import { ThemeProvider } from '@/components/theme-provider'
import { siteUrl } from './_lib/data'
import './globals.css'

export const metadata: Metadata = {
  title: {
    absolute: 'Carlos García Morán',
    template: '%s - Carlos García Morán',
  },
  description: 'Software | Design | Reads',
  openGraph: {
    title: 'Carlos García Morán',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/img/og.png`,
        width: 1200,
        height: 630,
        alt: 'Carlos García Morán',
      },
    ],
  },
  metadataBase: new URL(siteUrl),
}

export const viewport = {
  themeColor: 'dark',
}

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

// Idea (mobile): position menu (<Header />) at the bottom of the screen
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${cormorant.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className="flex h-dvh max-w-[1000px] flex-col sm:mx-auto sm:h-full sm:min-h-screen"
            id="root"
          >
            <header>
              <nav className="text-sm">
                <Nav />
              </nav>
            </header>
            <main className="flex flex-1 flex-col sm:justify-center sm:px-3.5 xl:px-12">
              {children}
            </main>
            <Footer />
          </div>
          <KeyboardShortcuts />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
