import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Resume Builder | ResuAI — 50+ Professional Templates',
  description: 'Create a professional resume in minutes with ResuAI’s AI-powered builder. 50+ ATS-friendly templates, real-time preview, inline AI rewrites, and instant PDF download. Free during our launch.',
  keywords: [
    'free resume builder',
    'resume templates',
    'professional resume builder',
    'ATS resume templates',
    'resume maker',
    'CV builder',
    'create resume online',
    'resume generator',
    'resume builder free download',
  ],
  openGraph: {
    title: 'Resume Builder | ResuAI',
    description: 'Create a professional resume in minutes. 50+ templates, AI-powered suggestions, instant PDF download. Free during launch.',
    url: 'https://resumecheckers.com/create-resume',
    type: 'website',
    images: [
      {
        url: '/builder-preview.png',
        width: 1200,
        height: 630,
        alt: 'Free Resume Builder with 50+ Templates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume Builder | ResuAI',
    description: 'Create a professional resume in minutes. 50+ templates, AI-powered suggestions, instant PDF download.',
    images: ['/builder-preview.png'],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/create-resume',
  },
};

export default function CreateResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
