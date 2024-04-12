import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { Header } from './_components/header';
import { Footer } from './_components/footer';
import { ThemeProvider } from './_components/theme-provider';
import { ThemeToggle } from './_components/theme-toggle';
import { siteUrl } from './_lib/data';

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
            className="flex h-dvh flex-col sm:h-full sm:min-h-screen"
            id="root"
          >
            <Header />
            <main className="mx-auto flex flex-1">{children}</main>
            <Footer />
            <Analytics />
            <div className="fixed bottom-1 right-1 sm:bottom-2 sm:right-2 lg:bottom-4 lg:right-6">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
