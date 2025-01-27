import React from 'react';
import { Box, Container, Divider, Typography, IconButton } from '@mui/material';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ backgroundColor: theme.palette.background.default, py: 4 }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" mb={{ xs: 2, md: 0 }}>
            <Brain style={{ height: 32, width: 32, color: theme.palette.primary.main }} />
            <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
              Ragithm
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            <IconButton href="#" aria-label="GitHub" sx={{ color: theme.palette.text.secondary }}>
              <Github />
            </IconButton>
            <IconButton href="#" aria-label="LinkedIn" sx={{ color: theme.palette.text.secondary }}>
              <Linkedin />
            </IconButton>
            <IconButton href="#" aria-label="Mail" sx={{ color: theme.palette.text.secondary }}>
              <Mail />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 3, backgroundColor: theme.palette.divider }} />

        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Ragithm. All rights reserved. Version 1.0.0
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;