import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Free Resume Builder | 50+ Professional Resume Templates',
  description: 'Create a professional resume in minutes with our free resume builder. Choose from 50+ ATS-friendly templates, AI-powered suggestions, and instant PDF download. Build your perfect resume today.',
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
    title: 'Free Resume Builder | 50+ Professional Resume Templates',
    description: 'Create a professional resume in minutes. 50+ templates, AI-powered suggestions, instant PDF download. 100% free.',
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
    title: 'Free Resume Builder | 50+ Professional Resume Templates',
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
