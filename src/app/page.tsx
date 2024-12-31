"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
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

export default function Home() {
  const theme = useTheme();

  const services = [
    {
      icon: <FaFileAlt />,
      title: "AI Resume Analyzer",
      description: "Get detailed insights from our AI to make your resume stand out.",
      href: "/resume-analyzer"
    },
    {
      icon: <FaChartLine />,
      title: "Resume Builder",
      description: "Create a professional resume with our easy-to-use builder.",
      href: "/create-resume"
    },
    {
      icon: <FaCheckCircle />,
      title: "Beat the ATS",
      description: "Optimize your resume to pass ATS filters with confidence.",
      href: "/ats-score"
    },
    {
      icon: <FaListAlt />,
      title: "ATS Score",
      description: "Get your resume's ATS compatibility score instantly.",
      href: "/resume-checklist"
    }
  ];

  const faqs = [
    {
      question: "What is Resume Checkers?",
      answer: "Resume Checkers is an AI-powered platform that helps you create, analyze, and optimize your resume for better job search success."
    },
    {
      question: "How does Pass ATS Checker work?",
      answer: "Our ATS checker analyzes your resume against common ATS systems and provides feedback to improve compatibility and visibility."
    },
    {
      question: "Why use our Free Checklist?",
      answer: "Our comprehensive checklist ensures your resume includes all essential elements for maximum impact and professionalism."
    },
    {
      question: "What does the Analyzer feature do?",
      answer: "The Analyzer provides detailed feedback on your resume's content, format, and effectiveness, with specific suggestions for improvement."
    }
  ];

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
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  component={Link}
                  href={service.href}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', fontSize: '2.5rem', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            Why Choose Us?
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* AI Resume Analyzer */}
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    AI Resume Analyzer
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Get instant feedback on your resume with our advanced AI analysis. Understand what works and what needs improvement.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src="/analyzer-preview.png"
                    alt="AI Resume Analyzer"
                    width={500}
                    height={300}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* Resume Builder */}
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Grid container spacing={4} alignItems="center" direction="row-reverse">
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    Resume Builder
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Create professional resumes with our intuitive builder. Choose from expert-designed templates and customize to your needs.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image
                    src="/builder-preview.png"
                    alt="Resume Builder"
                    width={500}
                    height={300}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h4">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

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
