import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: 'Terms of Service | Resume Checkers' },
  description: 'Terms of Service for Resume Checkers. Learn about our AI-powered software platform terms, user obligations, payment processing via Paddle, and legal agreements.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'legal terms'],
  openGraph: {
    title: 'Terms of Service | Resume Checkers',
    description: 'Terms of Service for Resume Checkers AI-powered resume analysis platform.',
    url: 'https://resumecheckers.com/terms',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resume Checkers Terms of Service',
      },
    ],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
