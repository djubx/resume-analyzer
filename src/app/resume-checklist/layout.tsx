import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Resume Checklist | Essential Resume Elements & Quality Check',
  description: 'Free interactive resume checklist. Ensure your resume includes all essential elements, proper formatting, keywords, and best practices to pass ATS systems and impress recruiters.',
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
    description: 'Free interactive resume checklist. Ensure your resume includes all essential elements and best practices.',
    url: 'https://resumecheckers.com/resume-checklist',
    type: 'website',
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
