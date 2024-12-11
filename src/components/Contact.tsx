import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Box, Button, Container, TextField, Typography, TextareaAutosize } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: 'rgba(24, 24, 24, 0.5)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(38, 38, 38, 0.9)', // Dark background
                borderRadius: 2,
                '& input': {
                  color: 'white', // White text inside the input
                },
              },
              '& .MuiFormLabel-root': {
                color: 'white', // White label text
              },
              '& .MuiFormLabel-root.Mui-focused': {
                color: 'white', // Label stays white when focused
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(38, 38, 38, 0.9)', // Dark background
                borderRadius: 2,
                '& input': {
                  color: 'white', // White text inside the input
                },
              },
              '& .MuiFormLabel-root': {
                color: 'white', // White label text
              },
              '& .MuiFormLabel-root.Mui-focused': {
                color: 'white', // Label stays white when focused
              },
            }}
          />
          <TextareaAutosize
            minRows={4}
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(38, 38, 38, 0.9)',
              borderColor: '#424242',
              color: 'white',
              borderWidth: '1px',
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: 'blue',
              padding: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: 'blue.600',
              },
            }}
          >
            Send Message
            <Send style={{ width: '20px', height: '20px' }} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
