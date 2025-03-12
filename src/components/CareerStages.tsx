'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
} from '@mui/material';
import { School, Work, Business } from '@mui/icons-material';

interface CareerStage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultCareerStages: CareerStage[] = [
  {
    title: "New Graduates",
    description: "Stand out in entry-level job applications and highlight your skills",
    icon: <School sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "Mid-Career Professionals",
    description: "Highlight your growing expertise and achievements",
    icon: <Work sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "Executives",
    description: "Showcase your leadership and industry impact",
    icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />
  }
];

export default function CareerStages() {
  const theme = useTheme();

  return (
    <>
      {/* Career Stages Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              sx={{ 
                mb: 8, 
                color: 'text.primary', 
                fontWeight: 600 
              }}
            >
              Tailored For Every Career Stage
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {defaultCareerStages.map((stage, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: '16px',
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100px',
                        background: 'radial-gradient(circle at center top, rgba(0, 168, 150, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
                        zIndex: 0,
                      }
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0, 168, 150, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                      }}
                    >
                      {stage.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'primary.main',
                        zIndex: 1,
                      }}
                    >
                      {stage.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        zIndex: 1,
                      }}
                    >
                      {stage.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Resume Upload Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #1976d2 0%, #0288d1 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'white',
                  }}
                >
                  Ready to supercharge your job search?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Be among the first to supercharge your job search with our AI-powered tools—your dream job is just a click away.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0, 168, 150, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        src="/resume-icon.svg"
                        alt="Resume Icon"
                        width={40}
                        height={40}
                        style={{ opacity: 0.8 }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    Drop your resume here or choose file
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                    }}
                  >
                    PDF (Max 5MB)
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '8px',
                      fontWeight: 500,
                    }}
                  >
                    Upload Resume
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
} 