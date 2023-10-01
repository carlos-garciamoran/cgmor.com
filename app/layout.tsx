import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    absolute: 'Carlos García Morán',
    template: '%s - Carlos García Morán',
  },
  description: 'Personal website | Software | Design',
  themeColor: '#475569', // Slate 600
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-b sm:bg-gradient-to-br from-slate-600 to-black flex flex-col min-h-screen text-white">
          <Navbar />
          <main className="flex flex-col flex-grow mx-6 sm:mx-16 lg:mx-36 xl:mx-48 mt-6 sm:my-6 md:my-8">
            {children}
          </main>
          <footer className="text-center text-xs py-6 xl:py-8">
            © {new Date().getFullYear()} Carlos García Morán
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
