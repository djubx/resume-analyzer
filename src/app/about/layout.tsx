import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us | ResuAI — AI-Powered Resume Tools',
  description: 'Learn about ResuAI — our mission to help job seekers succeed with AI-powered resume analysis, ATS checking, and professional resume building tools. 100% automated software platform.',
  keywords: [
    'about resuai',
    'AI resume tools',
    'resume optimization company',
    'automated resume analysis',
  ],
  openGraph: {
    title: 'About Us | ResuAI',
    description: 'Learn about ResuAI and our mission to help job seekers succeed with AI-powered tools.',
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
