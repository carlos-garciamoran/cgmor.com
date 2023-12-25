import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: {
    absolute: 'Carlos García Morán',
    template: '%s - Carlos García Morán',
  },
  description: 'Software | Design | Reads',
};

export const viewport = {
  themeColor: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: move socials to about (no footer -> cleaner UI)
  // TODO: on mobile, position menu (<Header />) at the bottom of the screen
  // TODO: fix height/bg-gradient bug on pages where height exceeds screen height (/muses)
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-[100dvh] flex-col overflow-hidden bg-gradient-to-b from-neutral-100 to-neutral-300 text-black dark:from-neutral-800 dark:to-black dark:text-white sm:bg-gradient-to-br xl:from-neutral-300">
            <Header />
            <main className="mt-6 flex h-full grow flex-col overflow-y-auto px-6 sm:px-8 md:px-16 lg:py-4 xl:mx-auto xl:max-w-screen-xl 2xl:px-6">
              {children}
            </main>
            <Footer />
            <Analytics />
            <div className="fixed bottom-1 right-2 pb-2 lg:bottom-2 lg:right-4">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
