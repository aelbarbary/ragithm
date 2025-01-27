import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a202c', // Dark Gray
    },
    secondary: {
      main: '#718096', // Mid Gray
    },
    text: {
      primary: '#2d3748', // Darker Gray for primary text
      secondary: '#4a5568', // Medium Gray for secondary text
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f7fafc', // Light Gray for paper surfaces
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Professional font
    h1: {
      fontSize: '2.5rem', // 40px
      fontWeight: 700,
      color: '#1a202c', // Dark Gray
    },
    h2: {
      fontSize: '2rem', // 32px
      fontWeight: 600,
      color: '#2d3748',
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
      color: '#4a5568', // Medium Gray
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '10px 20px',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          backgroundColor: '#1a202c', // Dark Gray
          color: '#ffffff', // White text
          '&:hover': {
            backgroundColor: '#2d3748', // Slightly lighter Dark Gray
          },
        },
        outlinedPrimary: {
          border: '1px solid #1a202c',
          color: '#1a202c',
          '&:hover': {
            backgroundColor: '#edf2f7', // Very light Gray
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          backgroundColor: '#f7fafc', // Light Gray for paper surfaces
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
