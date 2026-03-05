'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import Auth0Provider from '@/components/Auth0Provider';
import { Amplitude } from '@/lib/amplitude';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Amplitude />
      <Auth0Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Auth0Provider>
    </>
  );
}
