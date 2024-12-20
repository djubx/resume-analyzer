'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
