import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: {
    absolute: "Carlos García Morán",
    template: "%s - Carlos García Morán",
  },
  description: "Software | Design | Reads",
};

export const viewport = {
  themeColor: "dark",
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
          <div className="flex flex-col h-[100dvh] bg-gradient-to-b sm:bg-gradient-to-br from-neutral-100 xl:from-neutral-300 to-neutral-300 dark:from-neutral-700 dark:to-black text-black dark:text-white">
            <Header />
            <main className="flex flex-col flex-grow mx-8 sm:mx-16 lg:mx-36 xl:mx-auto xl:max-w-screen-xl mt-6 sm:my-6 md:my-8">
              {children}
            </main>
            <Footer />
            <Analytics />
            <div className="fixed pb-2 bottom-2 right-1 xl:right-4">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
