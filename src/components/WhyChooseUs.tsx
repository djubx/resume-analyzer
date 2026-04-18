'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';

interface FeatureItem {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
}

interface WhyChooseUsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}

// Priority-ordered features: Builder → Analyzer → ATS → Checklist
const defaultFeatures: FeatureItem[] = [
  {
    title: "Resume Builder",
    eyebrow: "Craft your resume with AI and modern templates",
    description:
      "Start fresh or upgrade an existing resume in one flow. Upload a PDF or enter details manually, then pick from 50+ recruiter-approved templates. Our AI rewrites every bullet until it reads tight, measurable, and unmistakably you.",
    image: "/builder-preview.png",
    alt: "Resume Builder preview",
  },
  {
    title: "AI Resume Analyzer",
    eyebrow: "Insights that show you exactly what to fix",
    description:
      "Upload your resume and receive a full analysis in seconds — strengths, gaps, scoring, and a prioritized action plan. Every suggestion is tailored, so you spend time improving rather than guessing.",
    image: "/analyzer-preview.png",
    alt: "AI Resume Analyzer preview",
  },
  {
    title: "ATS Score",
    eyebrow: "Beat the filter 95% of recruiters use",
    description:
      "Get an instant ATS compatibility score against the same parsing rules hiring tools use. Pinpoint the exact formatting, keyword, and structure issues dragging you down — and fix them in minutes.",
    image: "/builder-preview.png",
    alt: "ATS Score preview",
  },
  {
    title: "Resume Checklist",
    eyebrow: "Never ship a resume with something missing",
    description:
      "Two checklists in one: a personalized track based on your analysis report, plus a universal list covering essentials like contact info, summary, experience, and impact metrics. Nothing slips through.",
    image: "/analyzer-preview.png",
    alt: "Resume Checklist preview",
  },
];

export default function WhyChooseUs({
  eyebrow = "Deep dive",
  title = "Four tools. One clear path to interviews.",
  subtitle = "Each tool owns a stage of the job-search funnel. Use them together and you skip the guesswork — from first draft to interview-ready.",
  features = defaultFeatures,
}: WhyChooseUsProps) {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper', position: 'relative' }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 }, maxWidth: 760, mx: 'auto' }}>
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
              {eyebrow}
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
              {title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
              {subtitle}
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 10, md: 14 } }}>
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <Grid
                container
                key={feature.title}
                spacing={{ xs: 5, md: 8 }}
                alignItems="center"
                direction={isEven ? 'row' : 'row-reverse'}
              >
                {/* Image — frosted framed preview */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.2, 0.9, 0.3, 1.15] }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        p: 1.25,
                        backgroundColor: 'rgba(245, 247, 250, 0.04)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(245, 247, 250, 0.08)',
                        boxShadow:
                          '0 18px 44px -24px rgba(0, 229, 255, 0.25), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                        transition: 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.15), box-shadow 0.4s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow:
                            '0 22px 52px -22px rgba(0, 229, 255, 0.38), ' +
                            'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
                        },
                        '&::before': {
                          // Subtle directional bloom behind the frame.
                          content: '""',
                          position: 'absolute',
                          inset: -60,
                          background: isEven
                            ? 'radial-gradient(circle at 15% 20%, rgba(63, 81, 181, 0.18), transparent 55%)'
                            : 'radial-gradient(circle at 85% 20%, rgba(0, 229, 255, 0.18), transparent 55%)',
                          zIndex: -1,
                          filter: 'blur(40px)',
                        },
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        width={600}
                        height={400}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '10px',
                          display: 'block',
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>

                {/* Content */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 32 : -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.9, 0.3, 1.15] }}
                  >
                    {/* Step number */}
                    <Typography
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        letterSpacing: '0.08em',
                        color: 'info.main',
                        mb: 1.5,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1.5,
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontSize: { xs: '1.75rem', md: '2.125rem' },
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        mb: 2.5,
                        color: 'text.primary',
                        fontSize: { xs: '1.05rem', md: '1.15rem' },
                        fontWeight: 500,
                        lineHeight: 1.45,
                      }}
                    >
                      {feature.eyebrow}
                    </Typography>

                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}