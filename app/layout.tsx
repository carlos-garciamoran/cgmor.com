import type { Metadata } from 'next';
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
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-[100dvh] flex-col bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black sm:h-full sm:min-h-screen sm:bg-gradient-to-br">
            <Header />
            <main className="flex flex-1 px-6 pt-4 sm:px-8 md:px-16 lg:py-4 xl:mx-auto xl:max-w-screen-xl 2xl:px-6">
              {children}
            </main>
            <Footer />
            <Analytics />
            <div className="fixed bottom-2 right-1 sm:bottom-2 sm:right-2 lg:bottom-4 lg:right-4 xl:right-6">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
