import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Resume Checkers' },
  description: 'Resume Checkers Privacy Policy. Learn how we collect, use, and protect your resume data. GDPR and CCPA compliant. We do NOT sell your personal information.',
  keywords: ['privacy policy', 'data privacy', 'GDPR', 'CCPA', 'data protection'],
  openGraph: {
    title: 'Privacy Policy | Resume Checkers',
    description: 'Resume Checkers Privacy Policy. GDPR and CCPA compliant. We do NOT sell your data.',
    url: 'https://resumecheckers.com/privacy-policy',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resume Checkers Privacy Policy',
      },
    ],
  },
  alternates: {
    canonical: 'https://resumecheckers.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
