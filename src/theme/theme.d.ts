import '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h0: React.CSSProperties;
    body0: React.CSSProperties;
    accent: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h0?: React.CSSProperties;
    body0?: React.CSSProperties;
    accent?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h0: true;
    body0: true;
    accent: true;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
  }
} 