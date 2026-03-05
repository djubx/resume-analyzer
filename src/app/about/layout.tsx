import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us | Resume Checkers - AI-Powered Resume Tools',
  description: 'Learn about Resume Checkers, our mission to help job seekers succeed with AI-powered resume analysis, ATS checking, and professional resume building tools. 100% automated software platform.',
  keywords: [
    'about resume checkers',
    'AI resume tools',
    'resume optimization company',
    'automated resume analysis',
  ],
  openGraph: {
    title: 'About Us | Resume Checkers',
    description: 'Learn about Resume Checkers and our mission to help job seekers succeed with AI-powered tools.',
    url: 'https://resumecheckers.com/about',
    type: 'website',
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
