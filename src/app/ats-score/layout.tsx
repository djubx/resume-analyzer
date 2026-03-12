import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: 'Free ATS Resume Checker & Scanner | Check ATS Compatibility' },
  description: 'Check if your resume is ATS-friendly. Get instant ATS score, keyword analysis, and formatting recommendations to beat applicant tracking systems.',
  keywords: [
    'ATS resume checker',
    'ATS scanner',
    'ATS compatible resume',
    'ATS friendly resume',
    'applicant tracking system',
    'ATS resume test',
    'ATS optimization',
    'ATS resume score',
    'beat ATS systems',
  ],
  openGraph: {
    title: 'Free ATS Resume Checker & Scanner | Check ATS Compatibility',
    description: 'Test your resume against ATS systems. Get instant compatibility score and recommendations to pass applicant tracking systems.',
    url: 'https://resumecheckers.com/ats-score',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ATS Resume Checker and Scanner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ATS Resume Checker & Scanner | Check ATS Compatibility',
    description: 'Test your resume against ATS systems. Get instant compatibility score and recommendations.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/ats-score',
  },
};

export default function ATSScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
