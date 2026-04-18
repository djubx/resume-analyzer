"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import {
  RocketLaunch,
  Lightbulb,
  People,
  Handshake,
  ArrowForward,
} from '@mui/icons-material';

interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface RoadmapCard {
  title: string;
  eta: string;
  description: string;
  icon: React.ReactNode;
}

const values: ValueCard[] = [
  {
    title: 'Innovation',
    description:
      'Cutting-edge AI, thoughtfully applied. We don\u2019t ship hype — we ship tools that measurably improve your resume.',
    icon: <RocketLaunch sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Smart analysis',
    description:
      'Our models read your resume the way modern ATS parsers and recruiters do — line by line, keyword by keyword.',
    icon: <Lightbulb sx={{ fontSize: 28 }} />,
  },
  {
    title: 'User-first',
    description:
      'Every feature exists because a job seeker needed it. No dark patterns, no upsells disguised as advice.',
    icon: <People sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Results-driven',
    description:
      'Our north star is simple: more interviews, faster. If a feature doesn\u2019t push that number, we cut it.',
    icon: <Handshake sx={{ fontSize: 28 }} />,
  },
];

const roadmap: RoadmapCard[] = [
  {
    title: 'AI Interview Coach',
    eta: 'Coming Q1 2026',
    description:
      'Practice interviews with an AI coach that simulates real scenarios and gives you personalized, specific feedback.',
    icon: <RocketLaunch sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Job Match AI',
    eta: 'Coming Q2 2026',
    description:
      'AI-powered job matching that surfaces the roles most aligned with your resume, skills, and career goals.',
    icon: <Handshake sx={{ fontSize: 28 }} />,
  },
  {
    title: 'Career Path Planner',
    eta: 'Coming Q3 2026',
    description:
      'Map the path from where you are to where you want to be — with the exact skills and milestones to hit next.',
    icon: <Lightbulb sx={{ fontSize: 28 }} />,
  },
];

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Navbar />

      {/* ========= HERO ========= */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Ambient blobs */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -140,
            right: -140,
            width: 540,
            height: 540,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(63, 81, 181, 0.3), transparent 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: -160,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.28), transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                display: 'inline-block',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'info.main',
                mb: 2,
              }}
            >
              About ResuAI
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: 'text.primary',
                mb: 3,
                maxWidth: 880,
                mx: 'auto',
              }}
            >
              Better resumes, <Box component="span" sx={{ color: 'info.main' }}>fewer guesses.</Box>
            </Typography>
            <Typography
              sx={{
                maxWidth: 720,
                mx: 'auto',
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
              }}
            >
              We built ResuAI for the 10,000+ job seekers who told us the same thing: <Box component="em" sx={{ color: 'text.primary', fontStyle: 'normal', fontWeight: 500 }}>&ldquo;I don&apos;t
              know what to fix&rdquo;</Box>. Our AI answers that question in 60 seconds, with specifics you can action today.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ========= MISSION ========= */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }}>
              <Typography
                sx={{
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'info.main',
                  mb: 2,
                }}
              >
                Our mission
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                To make resume-writing the least stressful part of your job search.
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.7,
                }}
              >
                We&apos;re small, opinionated, and relentlessly focused on one thing: turning your resume into
                something that opens doors. Every bullet, every keyword, every layout choice — backed by AI that
                reads resumes the way recruiters and ATS tools actually do.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ========= CORE VALUES ========= */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 }, maxWidth: 680, mx: 'auto' }}>
              <Typography
                sx={{
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'info.main',
                  mb: 2,
                }}
              >
                Core values
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'text.primary',
                  mb: 2.5,
                }}
              >
                How we build, every day.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                These aren&apos;t wall posters — they&apos;re the filter every feature passes through before it ships.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 3.5 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      minHeight: 280,
                      p: { xs: 3, md: 3.5 },
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(245, 247, 250, 0.04)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(245, 247, 250, 0.08)',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                      transition:
                        'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                        'border-color 0.4s ease, ' +
                        'box-shadow 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(0, 229, 255, 0.35)',
                        boxShadow:
                          '0 18px 44px -22px rgba(0, 229, 255, 0.3), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 140,
                        height: 140,
                        borderBottomRightRadius: '100%',
                        background:
                          'radial-gradient(circle at top left, rgba(63, 81, 181, 0.22), transparent 65%)',
                        pointerEvents: 'none',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '12px',
                        mb: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                          'linear-gradient(135deg, rgba(63, 81, 181, 0.25), rgba(0, 229, 255, 0.18))',
                        border: '1px solid rgba(0, 229, 255, 0.28)',
                        color: 'info.main',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        letterSpacing: '-0.01em',
                        color: 'text.primary',
                        mb: 1,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========= ROADMAP ========= */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 }, maxWidth: 680, mx: 'auto' }}>
              <Typography
                sx={{
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'info.main',
                  mb: 2,
                }}
              >
                What&apos;s next
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'text.primary',
                  mb: 2.5,
                }}
              >
                The roadmap beyond the resume.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                A resume is just the first step. Here&apos;s what we&apos;re building to carry you the rest of the way.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 3.5 }} justifyContent="center">
            {roadmap.map((item, index) => (
              <Grid item xs={12} md={4} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      minHeight: 320,
                      p: { xs: 3.5, md: 4 },
                      borderRadius: '16px',
                      overflow: 'hidden',
                      textAlign: 'center',
                      backgroundColor: 'rgba(245, 247, 250, 0.04)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(245, 247, 250, 0.08)',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                      transition:
                        'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                        'border-color 0.4s ease, ' +
                        'box-shadow 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(0, 229, 255, 0.35)',
                        boxShadow:
                          '0 18px 44px -22px rgba(0, 229, 255, 0.3), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
                      },
                      // Top accent strip
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background:
                          'linear-gradient(90deg, transparent, rgba(63, 81, 181, 0.65), rgba(0, 229, 255, 0.65), transparent)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        mx: 'auto',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                          'linear-gradient(135deg, rgba(63, 81, 181, 0.25), rgba(0, 229, 255, 0.18))',
                        border: '1px solid rgba(0, 229, 255, 0.28)',
                        color: 'info.main',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.35rem',
                        letterSpacing: '-0.01em',
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'info.main',
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        mb: 2.5,
                      }}
                    >
                      {item.eta}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========= FINAL CTA ========= */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 14 },
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 680,
            height: 680,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.16), transparent 65%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                display: 'inline-block',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'info.main',
                mb: 2,
              }}
            >
              Join us
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'text.primary',
                mb: 2.5,
              }}
            >
              Ready to transform your resume?
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                mb: 5,
                maxWidth: 540,
                mx: 'auto',
              }}
            >
              Join 10,000+ job seekers who&apos;ve already used ResuAI to turn their resumes into interview invites.
            </Typography>
            <Button
              component={Link}
              href="/create-resume"
              className="hero-cta-orbit"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                py: 1.6,
                px: 3.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '10px',
                letterSpacing: '0.01em',
                textTransform: 'none',
                backgroundImage:
                  'linear-gradient(135deg, #3F51B5 0%, #1E2A78 100%)',
                boxShadow:
                  '0 10px 24px -12px rgba(0, 229, 255, 0.18), ' +
                  'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
                transition:
                  'transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                  'box-shadow 0.28s ease, ' +
                  'background-image 0.28s ease',
                '& .MuiButton-endIcon': {
                  transition: 'transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.3)',
                },
                '&:hover': {
                  backgroundImage:
                    'linear-gradient(135deg, #4A5CC5 0%, #2A3890 100%)',
                  boxShadow:
                    '0 14px 38px -10px rgba(0, 229, 255, 0.38), ' +
                    'inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
                  transform: 'translateY(-2px)',
                  '& .MuiButton-endIcon': {
                    transform: 'translateX(4px)',
                  },
                },
              }}
            >
              Get started now
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
