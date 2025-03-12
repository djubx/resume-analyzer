"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CareerStages from "@/components/CareerStages";
import Testimonials from "@/components/Testimonials";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { FaFileAlt, FaChartLine, FaCheckCircle, FaListAlt } from 'react-icons/fa';
import React from 'react';

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <SpeedInsights />
      <Analytics />
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f0f7ff 0%, #e6f3ff 100%)',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" sx={{ mb: 3, color: 'primary.main' }}>
                  Craft Your Resume
                </Typography>
                <Typography variant="h4" sx={{ mb: 4, color: 'text.secondary' }}>
                  Transform your resume into a job-winning masterpiece with our AI-powered tools.
                </Typography>
                <Button
                  component={Link}
                  href="/resume-analyzer"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Image
                    src="/dashboard-preview.png"
                    alt="Resume Analysis Dashboard"
                    width={600}
                    height={400}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Career Stages Section */}
      <CareerStages />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ mb: 3, color: 'white' }}>
              Ready to supercharge your job search?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'white' }}>
              Join over 10,000 professionals who've landed their dream jobs with our AI tools.
            </Typography>
            <Button
              component={Link}
              href="/resume-analyzer"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
