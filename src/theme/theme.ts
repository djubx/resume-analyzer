import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#009688', // Teal - Primary Color
      light: '#33ab9f',
      dark: '#00796B', // Hover State
    },
    secondary: {
      main: '#003366', // Navy Blue - Secondary Color
      light: '#336699',
      dark: '#002244',
    },
    info: {
      main: '#66CCFF', // Light Blue - Accent Color
      light: '#99ddff',
      dark: '#33bbff',
    },
    background: {
      default: '#FFFFFF', // White background
      paper: '#F7F7F7', // Light Gray for backgrounds
    },
    text: {
      primary: '#333333', // Dark Gray for text
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h0: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '44px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    body0: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    accent: {
      fontFamily: '"Source Sans Pro", sans-serif',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: '"Roboto", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px', // Rounded-full equivalent
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#00796B',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#002244',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#F7F7F7',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #003366, #336699, #66CCFF)',
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

export default theme; 