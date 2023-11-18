import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "Carlos García Morán",
    template: "%s - Carlos García Morán",
  },
  description: "Software | Design | Reads",
  themeColor: "#475569", // Slate 600
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-gradient-to-b sm:bg-gradient-to-br from-slate-300 dark:from-slate-600 to-slate-300 dark:to-black flex flex-col min-h-screen text-black dark:text-white">
            {/* 2xl:max-w-screen-xl mx-auto  */}
            <Header />
            <main className="flex flex-col flex-grow mx-6 sm:mx-16 lg:mx-36 xl:mx-48 xl:max-w-screen-xl mt-6 sm:my-6 md:my-8">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
