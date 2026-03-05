import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Refund Policy | Resume Checkers',
  description: 'Resume Checkers Refund Policy. Learn about our 7-day money-back guarantee, refund eligibility, and process. All refunds processed by Paddle, our Merchant of Record.',
  keywords: ['refund policy', 'money back guarantee', 'cancellation policy', 'refund process'],
  openGraph: {
    title: 'Refund Policy | Resume Checkers',
    description: '7-day money-back guarantee. Learn about refund eligibility and process.',
    url: 'https://resumecheckers.com/refund-policy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://resumecheckers.com/refund-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
