import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderTop: 3,
        borderColor: 'primary.main',
      }}
    >
      <Container maxWidth="lg">
        {/* Calendly Embed Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Schedule an Appointment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              mb: 2,
            }}
          >
            Pick a date and time that works best for you. We look forward to connecting!
          </Typography>

          {/* Calendly Embed */}
          <Box
            sx={{
              minWidth: '320px',
              height: '700px',
              margin: '0 auto',
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/abdelrahman-elbarbary/barbary" // Replace with your Calendly URL
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
