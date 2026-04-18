"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Chip,
} from '@mui/material';
import {
  AutoAwesome,
  RocketLaunch,
  Verified,
  ArrowForward,
  Bolt,
  FiberManualRecord,
} from '@mui/icons-material';
import { FaWrench, FaFileAlt, FaChartLine, FaListAlt } from 'react-icons/fa';
import React, { useEffect, useMemo, useRef } from 'react';

const HERO_GRID_COLS = 22;
const HERO_GRID_ROWS = 12;

// Priority-ordered pillars: Builder → Analyzer → ATS → Checklist
const pillars = [
  {
    step: '01',
    priority: 'Flagship',
    icon: <FaWrench />,
    title: 'Resume Builder',
    blurb: 'Craft recruiter-magnet resumes from 50+ ATS-ready templates, with AI rewriting each bullet until it lands.',
    href: '/create-resume',
    cta: 'Start building',
    highlight: true,
  },
  {
    step: '02',
    priority: 'Insight engine',
    icon: <FaFileAlt />,
    title: 'Resume Analyzer',
    blurb: 'Upload your resume and get a line-by-line AI audit — strengths, gaps, rewrites, and a 0-100 score in seconds.',
    href: '/resume-analyzer',
    cta: 'Analyze my resume',
    highlight: false,
  },
  {
    step: '03',
    priority: 'Beat the bots',
    icon: <FaChartLine />,
    title: 'ATS Score',
    blurb: 'See how your resume scores against the Applicant Tracking Systems that screen 95% of real applications.',
    href: '/ats-score',
    cta: 'Check ATS score',
    highlight: false,
  },
  {
    step: '04',
    priority: 'Zero oversights',
    icon: <FaListAlt />,
    title: 'Resume Checklist',
    blurb: 'A smart, personalized checklist that walks you through every detail a hiring manager expects to see.',
    href: '/resume-checklist',
    cta: 'Open checklist',
    highlight: false,
  },
];

const trustStats = [
  { value: '60s', label: 'Avg. time to first insight' },
  { value: '95%', label: 'ATS compatibility rate' },
  { value: '50+', label: 'Recruiter-approved templates' },
  { value: '4.8★', label: 'Rated by 1,200+ job seekers' },
];

export default function Home() {
  // The interactive hero grid is driven by two CSS custom properties
  // (`--mx` / `--my`) on the hero container. Children read them via
  // inheritance and compute per-cell transforms in pure CSS.
  // We keep the listeners as refs + rAF so React never re-renders on move.
  const heroRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const pendingRef = useRef<{ x: number; y: number }>({ x: -999, y: -999 });

  const flushHeroVars = () => {
    rafRef.current = 0;
    const el = heroRef.current;
    if (!el) return;
    el.style.setProperty('--mx', String(pendingRef.current.x));
    el.style.setProperty('--my', String(pendingRef.current.y));
  };

  const handleHeroMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pendingRef.current.x = ((e.clientX - rect.left) / rect.width) * HERO_GRID_COLS;
    pendingRef.current.y = ((e.clientY - rect.top) / rect.height) * HERO_GRID_ROWS;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(flushHeroVars);
  };

  const handleHeroLeave = () => {
    pendingRef.current.x = -999;
    pendingRef.current.y = -999;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(flushHeroVars);
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  // The cell array is static — memoize so it's allocated once.
  const heroGridCells = useMemo(
    () =>
      Array.from({ length: HERO_GRID_COLS * HERO_GRID_ROWS }, (_, idx) => ({
        i: idx % HERO_GRID_COLS,
        j: Math.floor(idx / HERO_GRID_COLS),
      })),
    [],
  );

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ResuAI",
    "url": "https://resumecheckers.com",
    "logo": "https://resumecheckers.com/logo.png",
    "description": "ResuAI — AI-powered resume builder, analyzer, and ATS scanner helping job seekers land interviews faster.",
    "sameAs": [
      "https://twitter.com/resuai",
      "https://www.linkedin.com/company/resuai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://resumecheckers.com/contact"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ResuAI",
    "url": "https://resumecheckers.com",
    "description": "AI Resume Builder, Analyzer & ATS Scanner",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ResuAI — AI Resume Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "1247" },
    "description": "AI-powered resume builder, analyzer, ATS checker, and checklist for job seekers."
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <SpeedInsights />
      <Analytics />
      <Navbar />

      {/* ========= HERO ========= */}
      <Box
        ref={heroRef}
        onPointerMove={handleHeroMove}
        onPointerLeave={handleHeroLeave}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 4, md: 7 },
          pb: { xs: 10, md: 16 },
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Decorative gradient blobs */}
        <Box
          aria-hidden
          className="animate-blob"
          sx={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(63, 81, 181, 0.55), transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />
        <Box
          aria-hidden
          className="animate-blob"
          sx={{
            position: 'absolute',
            bottom: -160,
            right: -160,
            width: 540,
            height: 540,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.35), transparent 70%)',
            filter: 'blur(90px)',
            animationDelay: '3s',
            zIndex: 0,
          }}
        />
        {/* Interactive grid — cells scale + glow in a radial halo around the cursor */}
        <Box
          aria-hidden
          className="hero-grid"
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            display: 'grid',
            gridTemplateColumns: `repeat(${HERO_GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${HERO_GRID_ROWS}, 1fr)`,
          }}
        >
          {heroGridCells.map(({ i, j }) => (
            <div
              key={`${i}-${j}`}
              className="hero-grid-cell"
              style={{ ['--i' as string]: i, ['--j' as string]: j } as React.CSSProperties}
            />
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Eyebrow tag */}
                <Chip
                  icon={<AutoAwesome sx={{ fontSize: 16, color: 'info.main !important' }} />}
                  label="AI co-pilot for your career"
                  sx={{
                    mb: 3,
                    borderRadius: '999px',
                    color: 'info.main',
                    bgcolor: 'rgba(0, 229, 255, 0.08)',
                    border: '1px solid rgba(0, 229, 255, 0.25)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontSize: '0.72rem',
                    '& .MuiChip-label': { px: 1.5 },
                  }}
                />

                {/* Massive headline */}
                <Typography
                  variant="h0"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4rem' },
                    lineHeight: 1.05,
                    mb: 2.5,
                    fontWeight: 700,
                  }}
                >
                  Your resume,{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #6573C3 0%, #00E5FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    rewritten by AI
                  </Box>
                  <Box component="span" sx={{ display: 'block' }}>
                    to get you hired.
                  </Box>
                </Typography>

                <Typography
                  variant="body0"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: 560,
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Build, analyze, and optimize your resume in under a minute. ResuAI ships four tools that land you interviews — without the guesswork.
                </Typography>

                {/* CTA row */}
                {/* Shared CTA vocabulary — both buttons match on geometry,
                    rhythm, and motion; only fill intensity differs.
                    Primary = filled hero. Secondary = frosted sibling. */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                  <Button
                    className="hero-cta-orbit"
                    component={Link}
                    href="/create-resume"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      // ---- shared CTA vocabulary ----
                      py: 1.6,
                      px: 3.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '10px',
                      letterSpacing: '0.01em',
                      textTransform: 'none',
                      // ---- primary-specific ----
                      backgroundImage:
                        'linear-gradient(135deg, #3F51B5 0%, #1E2A78 100%)',
                      // Ambient cyan glow + inset top rim light ("lit from above").
                      boxShadow:
                        '0 10px 24px -12px rgba(0, 229, 255, 0.18), ' +
                        'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
                      transition:
                        'transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                        'box-shadow 0.28s ease, ' +
                        'letter-spacing 0.28s ease, ' +
                        'background-image 0.28s ease',
                      '& .MuiButton-endIcon': {
                        transition:
                          'transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.3)',
                      },
                      '&:hover': {
                        backgroundImage:
                          'linear-gradient(135deg, #4A5CC5 0%, #2A3890 100%)',
                        boxShadow:
                          '0 14px 38px -10px rgba(0, 229, 255, 0.38), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
                        transform: 'translateY(-2px)',
                        letterSpacing: '0.02em',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(4px)',
                        },
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                        boxShadow:
                          '0 6px 18px -12px rgba(0, 229, 255, 0.28), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                        transitionDuration: '0.12s',
                      },
                    }}
                  >
                    Build my resume — it's free
                  </Button>
                  <Button
                    className="hero-cta-orbit"
                    component={Link}
                    href="/resume-analyzer"
                    variant="outlined"
                    size="large"
                    startIcon={<Bolt sx={{ color: 'info.main', opacity: 0.8 }} />}
                    sx={{
                      // ---- shared CTA vocabulary ----
                      py: 1.6,
                      px: 3.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '10px',
                      letterSpacing: '0.01em',
                      textTransform: 'none',
                      color: 'text.primary',
                      // ---- frosted-glass ghost secondary (Linear / Raycast style) ----
                      backgroundColor: 'rgba(245, 247, 250, 0.04)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(245, 247, 250, 0.10)',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                      transition:
                        'transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                        'box-shadow 0.28s ease, ' +
                        'letter-spacing 0.28s ease, ' +
                        'background-color 0.28s ease, ' +
                        'border-color 0.28s ease',
                      '& .MuiButton-startIcon': {
                        transition:
                          'transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.3)',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(245, 247, 250, 0.08)',
                        borderColor: 'rgba(0, 229, 255, 0.4)',
                        boxShadow:
                          '0 10px 28px -14px rgba(0, 229, 255, 0.22), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
                        transform: 'translateY(-2px)',
                        letterSpacing: '0.02em',
                        '& .MuiButton-startIcon': {
                          transform: 'translateX(-2px) scale(1.05)',
                        },
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                        boxShadow:
                          '0 4px 14px -12px rgba(0, 229, 255, 0.18), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
                        transitionDuration: '0.12s',
                      },
                    }}
                  >
                    Analyze existing resume
                  </Button>
                </Stack>

                {/* Trust row */}
                <Stack
                  direction="row"
                  spacing={{ xs: 1, sm: 2 }}
                  alignItems="center"
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                >
                  <Stack direction="row" spacing={-1} alignItems="center">
                    {[1,2,3,4].map((i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: 'background.default',
                          background: `linear-gradient(135deg, hsl(${i * 40 + 200}, 60%, 55%), hsl(${i * 40 + 260}, 70%, 45%))`,
                          ml: i === 1 ? 0 : -1,
                        }}
                      />
                    ))}
                  </Stack>
                  <Box sx={{ fontWeight: 600, color: 'text.primary' }}>
                    10,000+ job seekers
                  </Box>
                  <Box component="span" sx={{ opacity: 0.5 }}>•</Box>
                  <Box>★ 4.8 average rating</Box>
                  <Box component="span" sx={{ opacity: 0.5 }}>•</Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Verified sx={{ fontSize: 16, color: 'info.main' }} />
                    No credit card required
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* Hero visual — product mock */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <HeroProductMock />
              </motion.div>
            </Grid>
          </Grid>

          {/* Trust stats strip */}
          <Grid container spacing={3} sx={{ mt: { xs: 6, md: 9 } }}>
            {trustStats.map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Box
                    sx={{
                      py: 2.5,
                      px: 2.5,
                      borderRadius: '16px',
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'rgba(34, 38, 43, 0.6)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Typography variant="h3" sx={{ color: 'info.main', fontWeight: 700, mb: 0.5 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========= FOUR-PILLAR PRIORITY SECTION ========= */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 8 }}>
            <Chip
              label="Four tools. One workflow."
              sx={{
                bgcolor: 'rgba(63, 81, 181, 0.12)',
                color: 'primary.light',
                border: '1px solid rgba(63, 81, 181, 0.35)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
              }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, maxWidth: 720 }}>
              Everything you need to go from draft to <Box component="span" className="text-gradient-resuai">dream offer</Box>.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 620 }}>
              Start where you are. Each tool plugs into the next, so nothing about your resume is left to luck.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {pillars.map((p, i) => (
              <Grid item xs={12} md={6} key={p.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    component={Link}
                    href={p.href}
                    sx={{
                      display: 'block',
                      height: '100%',
                      p: { xs: 3.5, md: 4.5 },
                      borderRadius: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      color: 'inherit',
                      border: '1px solid',
                      borderColor: p.highlight ? 'rgba(0, 229, 255, 0.4)' : 'divider',
                      background: p.highlight
                        ? 'linear-gradient(135deg, rgba(63, 81, 181, 0.22), rgba(0, 229, 255, 0.08))'
                        : 'background.paper',
                      transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: 'rgba(0, 229, 255, 0.55)',
                        boxShadow: '0 30px 60px -30px rgba(0, 229, 255, 0.35)',
                      },
                      '&:hover .pillar-arrow': {
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {p.highlight && (
                      <Box
                        aria-hidden
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.7), transparent)',
                        }}
                      />
                    )}

                    <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: 'info.main',
                          background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.3), rgba(0, 229, 255, 0.12))',
                          border: '1px solid rgba(0, 229, 255, 0.28)',
                        }}
                      >
                        {p.icon}
                      </Box>
                      <Stack alignItems="flex-end" spacing={0.5}>
                        <Typography
                          variant="accent"
                          sx={{ color: 'text.secondary', fontSize: '0.7rem' }}
                        >
                          {p.priority}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontWeight: 700,
                            fontSize: '2rem',
                            color: p.highlight ? 'info.main' : 'text.secondary',
                            opacity: p.highlight ? 1 : 0.35,
                            lineHeight: 1,
                          }}
                        >
                          {p.step}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Typography variant="h3" sx={{ mb: 1.5, fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      {p.blurb}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={1} sx={{ color: p.highlight ? 'info.main' : 'primary.light', fontWeight: 600 }}>
                      <Box>{p.cta}</Box>
                      <ArrowForward className="pillar-arrow" sx={{ fontSize: 18, transition: 'transform 0.3s ease' }} />
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========= DEEP DIVE ========= */}
      <WhyChooseUs />

      {/* ========= SOCIAL PROOF ========= */}
      <Testimonials />

      {/* ========= FAQ ========= */}
      <FAQ />

      {/* ========= FINAL CTA ========= */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 10, md: 14 },
          borderTop: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
        }}
      >
        <Box
          aria-hidden
          className="animate-blob"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 720,
            height: 720,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(63, 81, 181, 0.4), transparent 65%)',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              icon={<RocketLaunch sx={{ fontSize: 16, color: 'info.main !important' }} />}
              label="Start free — ship today"
              sx={{
                mb: 3,
                bgcolor: 'rgba(0, 229, 255, 0.08)',
                border: '1px solid rgba(0, 229, 255, 0.25)',
                color: 'info.main',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 3,
                fontWeight: 700,
              }}
            >
              Your next interview is <Box component="span" className="text-gradient-resuai">60 seconds away</Box>.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.1rem' }}>
              Build the resume. Get the score. Close the gap. Join 10,000+ professionals who trust ResuAI.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href="/create-resume"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ py: 1.8, px: 4, fontSize: '1.05rem' }}
              >
                Build my resume
              </Button>
              <Button
                component={Link}
                href="/pricing"
                variant="outlined"
                size="large"
                sx={{
                  py: 1.8,
                  px: 4,
                  fontSize: '1.05rem',
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'info.main', bgcolor: 'rgba(0, 229, 255, 0.06)' },
                }}
              >
                See pricing
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

// ------------- Hero Product Mock -------------
function HeroProductMock() {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '24px',
        background: 'linear-gradient(145deg, rgba(34, 38, 43, 0.9), rgba(26, 28, 30, 0.9))',
        border: '1px solid rgba(245, 247, 250, 0.08)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 40px 80px -40px rgba(0, 229, 255, 0.25), 0 0 0 1px rgba(0, 229, 255, 0.05)',
        overflow: 'hidden',
        p: { xs: 2.5, md: 3 },
      }}
      className="animate-float"
    >
      {/* Window chrome */}
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        {['#EF4F6B', '#F5B544', '#22D3A4'].map((c) => (
          <FiberManualRecord key={c} sx={{ fontSize: 12, color: c, opacity: 0.85 }} />
        ))}
        <Box sx={{ flex: 1 }} />
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.72rem', letterSpacing: '0.06em' }}>
          resuai.app / builder
        </Typography>
      </Stack>

      {/* Score card */}
      <Box
        sx={{
          p: 2.5,
          borderRadius: '16px',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.15), rgba(0, 229, 255, 0.05))',
          mb: 2,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.68rem' }}>
              Resume score
            </Typography>
            <Stack direction="row" alignItems="baseline" spacing={0.5}>
              <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '2.5rem', color: 'info.main', lineHeight: 1 }}>
                92
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontWeight: 500 }}>/100</Typography>
            </Stack>
          </Box>
          <Stack alignItems="flex-end" spacing={0.5}>
            <Chip
              label="ATS Ready"
              size="small"
              sx={{
                bgcolor: 'rgba(34, 211, 164, 0.15)',
                color: '#22D3A4',
                border: '1px solid rgba(34, 211, 164, 0.3)',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
              +14 vs. draft
            </Typography>
          </Stack>
        </Stack>

        {/* Bar */}
        <Box sx={{ mt: 2, height: 8, borderRadius: 4, bgcolor: 'rgba(245,247,250,0.08)', overflow: 'hidden', position: 'relative' }}>
          <Box
            sx={{
              width: '92%',
              height: '100%',
              background: 'linear-gradient(90deg, #3F51B5, #00E5FF)',
              borderRadius: 4,
            }}
          />
          <Box className="shimmer" sx={{ position: 'absolute', inset: 0 }} />
        </Box>
      </Box>

      {/* Bullet insights */}
      <Stack spacing={1.2}>
        {[
          { text: 'Quantify the impact of your Q3 product launch', color: '#22D3A4' },
          { text: 'Add 2 ATS keywords: "SQL", "A/B testing"', color: '#00E5FF' },
          { text: 'Tighten summary: 52 → 28 words', color: '#F5B544' },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}
              sx={{
                p: 1.5,
                borderRadius: '12px',
                bgcolor: 'rgba(245, 247, 250, 0.03)',
                border: '1px solid rgba(245, 247, 250, 0.05)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: line.color,
                  boxShadow: `0 0 12px ${line.color}`,
                  flexShrink: 0,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.875rem' }}>
                {line.text}
              </Typography>
            </Stack>
          </motion.div>
        ))}
      </Stack>

      {/* Footer action */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2.5, pt: 2, borderTop: '1px solid rgba(245,247,250,0.06)' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <AutoAwesome sx={{ fontSize: 16, color: 'info.main' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
            AI rewrote 8 bullet points
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'info.main', fontSize: '0.8rem', fontWeight: 600 }}>
          Apply all →
        </Typography>
      </Stack>
    </Box>
  );
}
