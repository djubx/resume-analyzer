import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Free AI Resume Checker & Analyzer | Instant Resume Score',
  description: 'Get instant AI-powered resume analysis and feedback. Upload your resume and receive a detailed score, ATS compatibility check, and expert recommendations to improve your job search success. 100% free.',
  keywords: [
    'AI resume checker',
    'resume analyzer',
    'free resume analysis',
    'resume score',
    'resume feedback',
    'AI resume review',
    'resume optimization',
    'resume improvement tips',
  ],
  openGraph: {
    title: 'Free AI Resume Checker & Analyzer | Instant Resume Score',
    description: 'Upload your resume and get instant AI-powered analysis, score, and expert recommendations. 100% free resume checker.',
    url: 'https://resumecheckers.com/resume-analyzer',
    type: 'website',
    images: [
      {
        url: '/analyzer-preview.png',
        width: 1200,
        height: 630,
        alt: 'AI Resume Checker and Analyzer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Resume Checker & Analyzer | Instant Resume Score',
    description: 'Upload your resume and get instant AI-powered analysis, score, and expert recommendations. 100% free.',
    images: ['/analyzer-preview.png'],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/resume-analyzer',
  },
};

export default function ResumeAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
