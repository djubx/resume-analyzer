import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';
import SkipNav from '@/components/SkipNav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://resumecheckers.com'),
  title: {
    default: 'Resume Checkers | Free AI Resume Checker & ATS Scanner',
    template: '%s | Resume Checkers'
  },
  description: 'Free AI Resume Checker & ATS Scanner. Get your resume score, ATS compatibility check, and expert feedback in 60 seconds. 100% free resume analysis.',
  keywords: [
    'AI resume checker',
    'resume ATS checker',
    'free resume analysis',
    'resume builder',
    'ATS resume scanner',
    'resume score checker',
    'resume optimization tool',
    'ATS friendly resume',
    'resume templates',
    'resume analyzer'
  ],
  authors: [{ name: 'Resume Checkers' }],
  creator: 'Resume Checkers',
  publisher: 'Resume Checkers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resumecheckers.com',
    siteName: 'Resume Checkers',
    title: 'Resume Checkers | Free AI Resume Checker & ATS Scanner',
    description: 'Free AI Resume Checker & ATS Scanner - Analyze your resume instantly with our AI-powered tool. Get your resume score, ATS compatibility check, and expert feedback in 60 seconds.',
    images: [
      {
        url: '/dashboard-preview.png',
        width: 1200,
        height: 630,
        alt: 'Resume Checkers - AI-Powered Resume Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@resumecheckers',
    creator: '@resumecheckers',
    title: 'Resume Checkers | Free AI Resume Checker & ATS Scanner',
    description: 'Free AI Resume Checker & ATS Scanner - Analyze your resume instantly with our AI-powered tool.',
    images: ['/dashboard-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://resumecheckers.com',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#009688',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to third-party origins to reduce DNS+TLS setup time.
            Saves ~200-400ms per origin on first load, improving TTFB and FCP. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.amplitude.com" />
        <link rel="dns-prefetch" href="https://api.producthunt.com" />
      </head>
      <body className={inter.className}>
        <SkipNav />
        <Providers>
          <div id="main-content">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
