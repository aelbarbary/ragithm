import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(to bottom, #1A202C, #000000)',
        color: 'white',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: '64px', // Adjust depending on Navbar height
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;