import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Cormorant } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { siteUrl } from './_lib/data'

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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${cormorant.variable}`}>
        <ThemeProvider attribute="class">
          <div className="flex h-dvh flex-col sm:h-full sm:min-h-screen" id="root">
            <Header />
            <main className="flex flex-1">{children}</main>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
