import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Resume Checkers | AI-powered Resume Analysis',
  description: 'Get expert AI-powered resume analysis and feedback to improve your job search success. Optimize your resume with Resume Checkers.',
  keywords: 'resume analysis, AI resume checker, career optimization, job search tools, professional resume feedback',
  openGraph: {
    title: 'Resume Checkers | AI-powered Resume Analysis',
    description: 'Get expert AI-powered resume analysis and feedback to improve your job search success.',
    type: 'website',
    url: 'https://resumecheckers.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resume Checkers AI Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@resumecheckers',
    creator: '@resumecheckers',
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
}; 