import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing | ResuAI — Free AI Resume Tools',
  description: 'ResuAI pricing plans. All features currently FREE during our promotional period — AI resume analyzer, ATS scanner, resume builder with 50+ templates, and more. No credit card required.',
  keywords: [
    'resuai pricing',
    'free resume tools',
    'resume builder pricing',
    'ATS checker cost',
    'free AI resume analysis',
  ],
  openGraph: {
    title: 'Pricing | ResuAI — Free AI Resume Tools',
    description: 'All features currently FREE — AI resume analyzer, ATS scanner, resume builder with 50+ templates. No credit card required.',
    url: 'https://resumecheckers.com/pricing',
    type: 'website',
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
