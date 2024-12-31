"use client";

import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { RocketLaunch, Lightbulb, People, Handshake } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: "Innovation",
    description: "Leveraging cutting-edge AI technology to revolutionize resume optimization.",
    icon: <RocketLaunch sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />,
  },
  {
    title: "Smart Analysis",
    description: "Advanced algorithms that understand what recruiters and ATS systems look for.",
    icon: <Lightbulb sx={{ fontSize: 48, mb: 2, color: 'warning.main' }} />,
  },
  {
    title: "User-Focused",
    description: "Designed with real job seekers needs in mind.",
    icon: <People sx={{ fontSize: 48, mb: 2, color: 'success.main' }} />,
  },
  {
    title: "Results-Driven",
    description: "Committed to helping you land your dream job.",
    icon: <Handshake sx={{ fontSize: 48, mb: 2, color: 'secondary.main' }} />,
  },
];

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mission Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" sx={{ mb: 3, color: 'primary.main', fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              maxWidth: '600px',
              mx: 'auto',
              mb: 6,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            To empower job seekers with AI-driven tools that transform their resumes into powerful assets for career success.
          </Typography>
        </Box>

        {/* Values Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    border: 1,
                    borderColor: 'divider',
                  }}
                >
                  {feature.icon}
                  <Typography variant="h4" sx={{ mb: 1, color: 'primary.main' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Team Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 3, color: 'primary.main' }}>
            Our Team
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            We're a dedicated team of professionals committed to helping you succeed in your career journey.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h4" sx={{ mb: 1 }}>
                  <Box component="span" sx={{ fontWeight: 'bold' }}>CEO:</Box> Ranju Jha
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  15+ years of experience in HR and recruitment
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 3, color: 'primary.main' }}>
            Ready to Transform Your Resume?
          </Typography>
          <Button
            component={Link}
            href="/resume-analyzer"
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Get Started Now
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            Join thousands of successful job seekers who've improved their resumes with our tools.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
}