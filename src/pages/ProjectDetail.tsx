import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, TrendingUp, Users, Brain, ExternalLink } from 'lucide-react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const caseStudies = {
  'enterprise-rag': {
    title: 'Enterprise RAG Implementation',
    client: 'Fortune 500 Financial Institution',
    description: 'Implemented a Retrieval Augmented Generation system that improved document search accuracy by 85% and reduced response time by 60%',
    fullDescription: `Our client, a leading financial institution, faced challenges with their document search and retrieval system. The existing solution was slow, inaccurate, and required significant manual intervention.

We implemented a custom RAG system that combines the power of large language models with a specialized retrieval mechanism tailored to their document structure.

The solution includes:
- Custom document embeddings
- Semantic search capabilities
- Real-time query processing
- Integration with existing workflows`,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
    impact: [
      'Reduced search time from minutes to seconds',
      '85% improvement in search accuracy',
      '40% reduction in support tickets',
      'Improved employee satisfaction by 65%',
      '$1.2M annual cost savings'
    ],
    challenges: [
      'Complex document hierarchy',
      'Strict security requirements',
      'Integration with legacy systems',
      'High accuracy requirements'
    ],
    solution: [
      'Custom embedding model',
      'Secure document processing pipeline',
      'Real-time indexing system',
      'API-first architecture'
    ],
    tags: ['RAG', 'LLMs', 'Enterprise AI'],
    industry: 'Financial Services',
    timeline: '6 months',
    team: '4 AI engineers, 2 solution architects'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <Box py={10} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Project Not Found
        </Typography>
        <Button variant="outlined" component={Link} to="/projects">
          Return to Project
        </Button>
      </Box>
    );
  }

  return (
    <Box py={10}>
      <Box maxWidth="lg" mx="auto" px={3}>
        <Button
          variant="text"
          component={Link}
          to="/projects"
          startIcon={<ArrowLeft />}
          sx={{ mb: 3 }}
        >
          Back to Projects
        </Button>

        <Card sx={{ mb: 5 }}>
          <CardMedia
            component="img"
            height="300"
            image={study.image}
            alt={study.title}
          />
        </Card>

        <Box display="flex" gap={2} mb={3}>
          <Chip label={study.industry} icon={<Building2 />} color="primary" />
          <Chip label={study.team} icon={<Users />} variant="outlined" />
        </Box>

        <Typography variant="h3" gutterBottom>
          {study.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {study.description}
        </Typography>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom>
            Overview
          </Typography>
          {study.fullDescription.split('\n\n').map((paragraph, i) => (
            <Typography key={i} paragraph color="textSecondary">
              {paragraph}
            </Typography>
          ))}
        </Box>

        <Grid container spacing={4} mb={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Challenges
            </Typography>
            <List>
              {study.challenges.map((challenge, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <Brain color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={challenge} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Solution
            </Typography>
            <List>
              {study.solution.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <ExternalLink color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom>
            Impact
          </Typography>
          <List>
            {study.impact.map((impact, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <TrendingUp color="primary" />
                </ListItemIcon>
                <ListItemText primary={impact} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box display="flex" gap={1} flexWrap="wrap">
          {study.tags.map((tag) => (
            <Chip key={tag} label={tag} color="primary" variant="outlined" />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetail;
