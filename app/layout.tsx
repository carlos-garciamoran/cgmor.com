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

// TODO: on mobile, position menu (<Header />) at the bottom of the screen
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class">
          <div
            className="flex h-[100dvh] flex-col sm:h-full sm:min-h-screen"
            id="root"
          >
            <Header />
            <main className="flex flex-1">{children}</main>
            <Footer />
            <Analytics />
            <div className="fixed bottom-1 right-0.5 sm:bottom-2 sm:right-2 lg:bottom-4 lg:right-6">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
