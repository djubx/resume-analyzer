import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: 'Pricing | Resume Checkers - Free AI Resume Tools' },
  description: 'All features currently FREE! AI resume checker, ATS scanner, resume builder with 50+ templates, and more. No credit card required.',
  keywords: [
    'resume checker pricing',
    'free resume tools',
    'resume builder pricing',
    'ATS checker cost',
    'free AI resume analysis',
  ],
  openGraph: {
    title: 'Pricing | Resume Checkers - Free AI Resume Tools',
    description: 'All features currently FREE! AI resume checker, ATS scanner, resume builder with 50+ templates. No credit card required.',
    url: 'https://resumecheckers.com/pricing',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resume Checkers Pricing Plans',
      },
    ],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
