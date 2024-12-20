import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue color similar to the current blue-300
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#ffd54f', // Yellow color similar to the current yellow-500
      light: '#ffecb3',
      dark: '#ffb300',
    },
    background: {
      default: '#121212', // Dark background similar to gray-900
      paper: '#1e1e1e', // Slightly lighter dark similar to gray-800
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
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
            backgroundColor: '#42a5f5',
          },
        },
        containedSecondary: {
          color: '#121212',
          '&:hover': {
            backgroundColor: '#ffb300',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme; 