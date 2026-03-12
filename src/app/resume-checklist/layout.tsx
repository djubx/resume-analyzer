import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: 'Resume Checklist | Essential Resume Elements & Quality Check' },
  description: 'Free interactive resume checklist. Ensure your resume covers all essential elements, best practices, and keywords to pass ATS systems and impress recruiters.',
  keywords: [
    'resume checklist',
    'resume quality check',
    'resume essentials',
    'resume best practices',
    'resume requirements',
    'what to include in resume',
  ],
  openGraph: {
    title: 'Resume Checklist | Essential Resume Elements & Quality Check',
    description: 'Free interactive resume checklist. Ensure your resume covers all essential elements, best practices, and keywords.',
    url: 'https://resumecheckers.com/resume-checklist',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resume Checklist - Essential Resume Elements',
      },
    ],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/resume-checklist',
  },
};

export default function ResumeChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
