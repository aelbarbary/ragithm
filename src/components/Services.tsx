import React from "react";
import { Code, MessageSquare, Rocket } from "lucide-react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const services = [
  {
    icon: Code,
    title: "Custom GPT Solutions",
    description: "Tailored GPT solutions designed to meet your specific business needs and challenges.",
  },
  {
    icon: MessageSquare,
    title: "GPT Help Desk",
    description: "Dedicated support for all GPT administration, diagnoses, and resolution needs across your organization.",
  },
  {
    icon: Rocket,
    title: "Training",
    description: "Professional training sessions covering theory and practice to upskill your workforce.",
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        py: 10,
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary, maxWidth: "600px", mx: "auto" }}
          >
            Leveraging battle-tested AI technologies to deliver business outcomes.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 2,
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: theme.shadows[4],
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: theme.palette.primary.main,
                      mb: 2,
                    }}
                  >
                    <service.icon size={32} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: theme.palette.text.primary,
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, textAlign: "center" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
