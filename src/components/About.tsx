import React from 'react';
import { Box, Grid, Typography, Avatar, Chip, Link, IconButton } from '@mui/material';
import { Github, Linkedin, Youtube } from 'lucide-react';

const founders = [
  {
    name: 'Mohammad Al Hennawi',
    role: 'AI Solutions Consulting',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHwmfIl1f0Ozg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730755802709?e=1738195200&v=beta&t=xiloaNAAiJ0Yb8CsUn4LzkzEmTbkpUJw3_2IlE0dYo4',
    bio: `Seasoned professional experienced in delivering business outcomes through the strategic application of reliable, enterprise-grade AI software.

With nearly a decade of experience in B2B SaaS and solo-entrepreneurship, Mohammad developed a unique ability to identify and distill complex business challenges then craft lasting solutions that have benefited numerous clients worldwide.`,
    expertise: ['Solutions Consulting', 'Generative AI', 'RAG', 'LLMs', 'Advisory', 'Training'],
    social: {
      linkedin: 'https://www.linkedin.com/in/hennawi/',
      youtube: 'https://www.youtube.com/@hennawitalksbusiness'
    }
  },
  {
    name: 'Abdelrahman Elbarbary',
    role: 'Technical Architecture & Security',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGcBrHZN0D7Xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719584511561?e=1738195200&v=beta&t=Denr146ZJJLn1VG3k2zTo3lKE1JYeRAkX0UCIOSgbGU',
    bio: `A full-stack software engineer and tech lead with over 20 years of experience, including roles at Oracle and Microsoft. Specializes in building AI chatbots, Retrieval-Augmented Generation (RAG) systems, and optimizing cloud architectures. Skilled in full-stack development, cybersecurity, and cloud optimization, with expertise in tools like Fortify, Nessus, and Sonatype to deliver secure and scalable solutions.`,
    expertise: ['Full-Stack Development', 'Cybersecurity', 'System Architecture', 'Tech Leadership'],
    social: {
      linkedin: 'https://www.linkedin.com/in/aelbarb/',
      github: 'https://github.com/aelbarbary'
    }
  }
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        px: 3,
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        color: 'white'
      }}
    >
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Meet Our Founders
        </Typography>
        <Typography variant="body1" maxWidth="600px" mx="auto" color="rgba(255, 255, 255, 0.8)">
          Combining decades of experience in AI, solutions consulting, and technical excellence
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {founders.map((founder, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: 3,
                p: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                '&:hover': { borderColor: '#4fc3f7' }
              }}
            >
              <Box textAlign="center" mb={3}>
                <Avatar
                  src={founder.image}
                  alt={founder.name}
                  sx={{ width: 100, height: 100, margin: '0 auto' }}
                />
                <Typography variant="h5" fontWeight="bold" mt={2}>
                  {founder.name}
                </Typography>
                <Typography variant="body2" color="skyblue">
                  {founder.role}
                </Typography>
              </Box>

              <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" mb={3}>
                {founder.bio}
              </Typography>

              <Box mb={3}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Expertise
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {founder.expertise.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box display="flex" justifyContent="center" gap={2}>
                {founder.social.github && (
                  <IconButton
                    component="a"
                    href={founder.social.github}
                    target="_blank"
                    sx={{ color: 'white', '&:hover': { color: '#4fc3f7' } }}
                  >
                    <Github />
                  </IconButton>
                )}
                {founder.social.linkedin && (
                  <IconButton
                    component="a"
                    href={founder.social.linkedin}
                    target="_blank"
                    sx={{ color: 'white', '&:hover': { color: '#4fc3f7' } }}
                  >
                    <Linkedin />
                  </IconButton>
                )}
                {founder.social.youtube && (
                  <IconButton
                    component="a"
                    href={founder.social.youtube}
                    target="_blank"
                    sx={{ color: 'white', '&:hover': { color: '#4fc3f7' } }}
                  >
                    <Youtube />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
