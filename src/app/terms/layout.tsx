import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service | Resume Checkers',
  description: 'Terms of Service for Resume Checkers. Learn about our AI-powered software platform terms, user obligations, payment processing via Paddle, and legal agreements.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'legal terms'],
  openGraph: {
    title: 'Terms of Service | Resume Checkers',
    description: 'Terms of Service for Resume Checkers AI-powered resume analysis platform.',
    url: 'https://resumecheckers.com/terms',
    type: 'website',
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
