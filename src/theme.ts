// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6', // Blue 500
    },
    secondary: {
      main: '#8b5cf6', // Purple 600
    },
    text: {
      primary: '#9ca3af', // Gray 400
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: '2.25rem', // 36px
      fontWeight: 700,
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    body1: {
      fontSize: '1.125rem', // 18px
      color: '#9ca3af',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#2563eb', // Darker blue
          },
        },
        outlinedPrimary: {
          border: '1px solid #3b82f6',
          '&:hover': {
            backgroundColor: 'rgba(59, 130, 246, 0.1)', // Blue with 10% opacity
          },
        },
      },
    },
  },
});

export default theme;
