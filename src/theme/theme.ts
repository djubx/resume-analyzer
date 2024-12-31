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
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#333333',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#333333',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#333333',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
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
  },
});

export default theme; 