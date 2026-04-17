import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://resumecheckers.com'),
  title: {
    default: 'ResuAI | AI Resume Builder, Analyzer & ATS Scanner',
    template: '%s | ResuAI'
  },
  description: 'ResuAI is your AI co-pilot for resumes. Build, analyze, and optimize your resume with an ATS score checker and smart checklist — all in under 60 seconds.',
  keywords: [
    'ResuAI',
    'AI resume builder',
    'AI resume analyzer',
    'ATS resume scanner',
    'resume checklist',
    'AI resume checker',
    'resume optimization tool',
    'ATS friendly resume',
    'resume templates',
    'resume score'
  ],
  authors: [{ name: 'ResuAI' }],
  creator: 'ResuAI',
  publisher: 'ResuAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resumecheckers.com',
    siteName: 'ResuAI',
    title: 'ResuAI | AI Resume Builder, Analyzer & ATS Scanner',
    description: 'Build, analyze, and optimize your resume with AI. Get an instant ATS score and a personalized checklist — in 60 seconds.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ResuAI — AI-Powered Resume Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@resuai',
    creator: '@resuai',
    title: 'ResuAI | AI Resume Builder, Analyzer & ATS Scanner',
    description: 'Build, analyze, and optimize your resume with AI. Get an instant ATS score — in 60 seconds.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://resumecheckers.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className={manrope.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
