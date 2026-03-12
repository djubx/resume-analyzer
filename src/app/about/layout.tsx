import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: 'About Us | Resume Checkers - AI-Powered Resume Tools' },
  description: 'Learn about Resume Checkers and our mission to help job seekers succeed with AI-powered resume tools. 100% automated software platform.',
  keywords: [
    'about resume checkers',
    'AI resume tools',
    'resume optimization company',
    'automated resume analysis',
  ],
  openGraph: {
    title: 'About Us | Resume Checkers - AI-Powered Resume Tools',
    description: 'Learn about Resume Checkers and our mission to help job seekers succeed with AI-powered tools.',
    url: 'https://resumecheckers.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Resume Checkers - AI-Powered Resume Tools',
      },
    ],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
