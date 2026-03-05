import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | Resume Checkers Support',
  description: 'Get in touch with Resume Checkers support team. Contact us for questions about our AI resume checker, ATS scanner, resume builder, or technical support.',
  keywords: [
    'contact resume checkers',
    'resume checker support',
    'customer support',
    'help',
  ],
  openGraph: {
    title: 'Contact Us | Resume Checkers Support',
    description: 'Get in touch with Resume Checkers support team for questions or assistance.',
    url: 'https://resumecheckers.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://resumecheckers.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
