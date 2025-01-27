import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { Brain, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 10, sm: 20 },
        pb: { xs: 10, sm: 32 },
        textAlign: 'center',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" mb={4}>
          <Brain style={{ height: 64, width: 64, color: '#1a202c', animation: 'pulse 2s infinite' }} />
        </Box>
        <Typography variant="h1" gutterBottom>
          Engineering AI Solutions
          <br /> for Tomorrow
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: '1.25rem',
            maxWidth: 700,
            mx: 'auto',
            mb: 4,
          }}
        >
          With a combined expertise in engineering and solutions consulting, Mohammad Al Hennawi and Abdelrahman Elbarbary lead the way in transforming businesses using battle-tested AI technologies.
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowRight />}
            sx={{ px: 4, py: 1.5 }}
            href="#contact"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
            href="#services"
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
  