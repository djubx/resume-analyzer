import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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

// ResuAI Design System
// Primary: #3F51B5 (Indigo)
// Secondary: #70778B (Slate)
// Tertiary: #00E5FF (Cyan — accent)
// Neutral / Surface: #1A1C1E (Near-black)
// Fonts: Space Grotesk (headlines), Manrope (body + labels)

const HEADLINE_FONT = '"Space Grotesk", "Inter", system-ui, sans-serif';
const BODY_FONT = '"Manrope", "Inter", system-ui, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3F51B5',
      light: '#6573C3',
      dark: '#2C387E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#70778B',
      light: '#8F95A6',
      dark: '#4E5362',
      contrastText: '#FFFFFF',
    },
    info: {
      // Tertiary accent
      main: '#00E5FF',
      light: '#6EFFFF',
      dark: '#00B2CC',
      contrastText: '#0B0D10',
    },
    success: {
      main: '#22D3A4',
      contrastText: '#0B0D10',
    },
    warning: {
      main: '#F5B544',
      contrastText: '#0B0D10',
    },
    error: {
      main: '#EF4F6B',
    },
    background: {
      default: '#1A1C1E',
      paper: '#22262B',
    },
    text: {
      primary: '#F5F7FA',
      secondary: '#B4BAC7',
      disabled: '#70778B',
    },
    divider: 'rgba(245, 247, 250, 0.08)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: BODY_FONT,
    h0: {
      fontFamily: HEADLINE_FONT,
      fontSize: '56px',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
    },
    h1: {
      fontFamily: HEADLINE_FONT,
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: HEADLINE_FONT,
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontFamily: HEADLINE_FONT,
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: HEADLINE_FONT,
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body0: {
      fontFamily: BODY_FONT,
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: BODY_FONT,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: BODY_FONT,
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    accent: {
      fontFamily: BODY_FONT,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: BODY_FONT,
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#1A1C1E',
          color: '#F5F7FA',
        },
        '::selection': {
          backgroundColor: '#00E5FF',
          color: '#0B0D10',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          fontWeight: 600,
          paddingInline: '20px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #3F51B5 0%, #5468D6 100%)',
          boxShadow: '0 10px 30px -12px rgba(63, 81, 181, 0.65)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2C387E 0%, #3F51B5 100%)',
            boxShadow: '0 12px 34px -10px rgba(63, 81, 181, 0.85)',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#4E5362',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(63, 81, 181, 0.6)',
          '&:hover': {
            borderColor: '#3F51B5',
            backgroundColor: 'rgba(63, 81, 181, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#22262B',
          border: '1px solid rgba(245, 247, 250, 0.06)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 28, 30, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#22262B',
          backgroundImage: 'none',
          border: '1px solid rgba(245, 247, 250, 0.06)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h0: 'h1',
          body0: 'p',
          accent: 'span',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme); 