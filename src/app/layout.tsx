import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://resumecheckers.com'),
  title: {
    default: 'Resume Checkers | Free AI Resume Checker & ATS Scanner',
    template: '%s | Resume Checkers'
  },
  description: 'Free AI Resume Checker & ATS Scanner - Analyze your resume instantly with our AI-powered tool. Get your resume score, ATS compatibility check, and expert feedback in 60 seconds. 100% free resume analysis.',
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
