"use client";

import { Container, Typography, Grid, Paper, Box, Button, useTheme, alpha } from '@mui/material';
import { RocketLaunch, Lightbulb, People, Handshake } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: "Innovation",
    description: "Leveraging cutting-edge AI technology to revolutionize resume optimization.",
    icon: <RocketLaunch sx={{ fontSize: 48, color: 'primary.main' }} />,
  },
  {
    title: "Smart Analysis",
    description: "Advanced algorithms that understand what recruiters and ATS systems look for.",
    icon: <Lightbulb sx={{ fontSize: 48, color: 'warning.main' }} />,
  },
  {
    title: "User-Focused",
    description: "Designed with real job seekers needs in mind.",
    icon: <People sx={{ fontSize: 48, color: 'success.main' }} />,
  },
  {
    title: "Results-Driven",
    description: "Committed to helping you land your dream job.",
    icon: <Handshake sx={{ fontSize: 48, color: 'secondary.main' }} />,
  },
];

export default function About() {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: 12, 
          pb: 10, 
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(240, 248, 245, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Elements */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            opacity: 0.05,
            zIndex: 0,
            background: 'radial-gradient(circle at 20% 30%, rgba(0, 168, 150, 0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 168, 150, 0.4) 0%, transparent 40%)'
          }} 
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography 
              variant="h1" 
              component="h1"
              sx={{ 
                mb: 3, 
                color: 'primary.main', 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              About Resume Checkers
            </Typography>
            <Typography 
              component="p"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                mb: 6,
                color: 'text.secondary',
                fontSize: '1.25rem',
                lineHeight: 1.6
              }}
            >
              We're on a mission to revolutionize how job seekers approach their career journey, 
              providing cutting-edge AI tools that make resume optimization accessible to everyone.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Mission Section */}
          <Box sx={{ textAlign: 'center', mb: 10, mt: 4 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 4, 
                color: 'primary.main', 
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  bgcolor: 'primary.main',
                  borderRadius: 2
                }
              }}
            >
              Our Mission
            </Typography>
            <Typography 
              component="p" 
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                mb: 6,
                color: 'text.secondary',
                textAlign: 'center',
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                lineHeight: 1.5,
                fontWeight: 500
              }}
            >
              To empower job seekers with AI-driven tools that transform their resumes into powerful assets for career success.
            </Typography>
          </Box>

          {/* Values Grid */}
          <Box sx={{ mb: 12 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 6, 
                textAlign: 'center',
                color: 'text.primary', 
                fontWeight: 600
              }}
            >
              Our Core Values
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: 320,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        textAlign: 'center',
                        bgcolor: 'background.paper',
                        borderRadius: '16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 10px 20px rgba(0, 168, 150, 0.1)',
                          borderColor: 'primary.main',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          mb: 3,
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 80,
                          height: 80
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography 
                        variant="h4" 
                        component="h3" 
                        sx={{ 
                          mb: 2, 
                          color: 'text.primary',
                          fontWeight: 600,
                          fontSize: '1.5rem'
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        component="p" 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          flexGrow: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box sx={{ textAlign: 'center', mb: 12 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 4, 
                color: 'text.primary',
                fontWeight: 600
              }}
            >
              Our Team
            </Typography>
            <Typography 
              component="p" 
              sx={{ 
                mb: 6, 
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              We're a dedicated team of professionals committed to helping you succeed in your career journey.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: 350,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: 'background.paper',
                      borderRadius: '16px',
                      border: '1px solid',
                      borderColor: 'divider',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '6px',
                        background: 'linear-gradient(90deg, #00A896 0%, #02C39A 100%)'
                      }}
                    />
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid',
                        borderColor: alpha(theme.palette.primary.main, 0.2)
                      }}
                    >
                      <Typography 
                        variant="h3" 
                        component="span" 
                        sx={{ 
                          color: 'primary.main',
                          fontWeight: 700
                        }}
                      >
                        RJ
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h4" 
                      component="h3" 
                      sx={{ 
                        mb: 1,
                        fontWeight: 600,
                        fontSize: '1.5rem'
                      }}
                    >
                      Ranju Jha
                    </Typography>
                    <Typography 
                      component="p" 
                      sx={{ 
                        mb: 2,
                        color: 'primary.main',
                        fontWeight: 500,
                        fontSize: '1.125rem'
                      }}
                    >
                      CEO & Founder
                    </Typography>
                    <Typography 
                      component="p" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '1rem',
                        lineHeight: 1.6
                      }}
                    >
                      15+ years of experience in HR and recruitment, passionate about helping job seekers succeed.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          {/* Call to Action */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: 10,
              py: 8,
              px: 4,
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(0, 168, 150, 0.1) 0%, rgba(2, 195, 154, 0.05) 100%)',
              border: '1px solid',
              borderColor: alpha(theme.palette.primary.main, 0.2)
            }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                mb: 3, 
                color: 'text.primary',
                fontWeight: 600,
                fontSize: { xs: '1.75rem', md: '2.25rem' }
              }}
            >
              Ready to Transform Your Resume?
            </Typography>
            <Typography 
              component="p" 
              sx={{ 
                mb: 4, 
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              Join thousands of successful job seekers who've improved their resumes with our AI-powered tools.
            </Typography>
            <Button
              component={Link}
              href="/resume-analyzer"
              variant="contained"
              color="primary"
              size="large"
              sx={{ 
                px: 5, 
                py: 1.5, 
                borderRadius: '100px',
                fontSize: '1.1rem',
                fontWeight: 500,
                boxShadow: '0 4px 14px rgba(0, 168, 150, 0.4)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0, 168, 150, 0.6)',
                }
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}