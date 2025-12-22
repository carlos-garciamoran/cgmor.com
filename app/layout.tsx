import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Cormorant } from 'next/font/google'

import { Footer } from '@/components/footer'
import { KeyboardShortcuts } from '@/components/keyboard-shortcuts'
import { Nav } from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    absolute: 'Carlos García Morán',
    template: '%s - Carlos García Morán',
  },
  description: 'Software | Design | Reads',
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
          <div className="flex h-dvh max-w-[1000px] flex-col sm:mx-auto sm:min-h-screen">
            <header className="mx-auto w-full max-w-[700px]">
              <nav>
                <Nav />
              </nav>
            </header>
            <main className="flex flex-1 flex-col sm:justify-center sm:px-3.5 xl:px-8">
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
