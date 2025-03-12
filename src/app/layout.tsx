'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import Auth0Provider from '@/components/Auth0Provider';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth0Provider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Auth0Provider>
      </body>
    </html>
  );
}
