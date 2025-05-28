import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';
//import Header from "@/components/layout/header";
//import Footer from "@/components/layout/footer";
import { ThemeProvider } from '@/providers/theme-provider';

import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'High-Performance Websites & Shopify Apps, Custom-Built - Noovo',
  description:
    'Noovo is a web studio specializing in fast, modern websites and Shopify apps using Next.js, React, and headless technologies. From custom storefronts to full-stack solutions, we build digital experiences that convert.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {/*<Header />*/}
          <main className="pt-[var(--header-height)]">{children}</main>
          {/*<Footer />*/}
        </ThemeProvider>
      </body>
    </html>
  );
}
