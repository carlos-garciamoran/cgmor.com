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
  // TODO: on mobile, position menu (<Header />) at the bottom of the screen
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-[100dvh] flex-col bg-gradient-to-b from-neutral-100 to-neutral-300 text-black dark:from-neutral-700 dark:to-black dark:text-white sm:bg-gradient-to-br xl:from-neutral-300">
            <Header />
            <main className="mx-8 mt-6 flex grow flex-col sm:mx-16 sm:my-6 md:my-8 lg:mx-36 xl:mx-auto xl:max-w-screen-xl">
              {children}
            </main>
            <Footer />
            <Analytics />
            <div className="fixed bottom-2 right-1 pb-2 xl:right-4">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
