import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Resume Checkers',
  description: 'AI-powered resume analysis and feedback',
  keywords: 'resume, analysis, AI, career, job search',
  openGraph: {
    title: 'Resume Checkers',
    description: 'Get AI-powered feedback on your resume',
    type: 'website',
    url: 'https://realflutter.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
