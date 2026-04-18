'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { FaFileAlt, FaWrench, FaListAlt, FaChartLine } from 'react-icons/fa';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  /** Optional CTA label; falls back to "Get started" if omitted. */
  cta?: string;
}

interface ServicesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

// Priority-ordered services: Builder → Analyzer → ATS → Checklist
const defaultServices: ServiceItem[] = [
  {
    icon: <FaWrench />,
    title: "Resume Builder",
    description:
      "Craft a standout resume from 50+ expert-designed templates, powered by AI suggestions for every bullet.",
    href: "/create-resume",
    cta: "Build a resume",
  },
  {
    icon: <FaFileAlt />,
    title: "AI Resume Analyzer",
    description:
      "Instant, deep-dive insights that show exactly what to improve — line by line, with before/after rewrites.",
    href: "/resume-analyzer",
    cta: "Analyze my resume",
  },
  {
    icon: <FaChartLine />,
    title: "ATS Score",
    description:
      "See how your resume scores against the Applicant Tracking Systems used by 95% of modern recruiters.",
    href: "/ats-score",
    cta: "Get my ATS score",
  },
  {
    icon: <FaListAlt />,
    title: "Resume Checklist",
    description:
      "A smart, personalized checklist that ensures nothing essential is missing before you hit send.",
    href: "/resume-checklist",
    cta: "Open checklist",
  },
];

export default function Services({
  eyebrow = "Our toolkit",
  title = "Four tools, one momentum.",
  subtitle = "Pick the stage of your job search, drop in your resume, and move forward. Each tool sharpens the next.",
  services = defaultServices,
}: ServicesProps) {
  return (
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

        <Grid container spacing={{ xs: 3, md: 3.5 }} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                style={{ height: '100%' }}
              >
                <Box
                  component={Link}
                  href={service.href}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    minHeight: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    p: { xs: 3, md: 3.5 },
                    borderRadius: '16px',
                    overflow: 'hidden',
                    textDecoration: 'none',
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
                      '& .service-arrow': {
                        transform: 'translateX(4px)',
                      },
                    },
                    // Corner gradient wash
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 160,
                      height: 160,
                      borderBottomRightRadius: '100%',
                      background:
                        'radial-gradient(circle at top left, rgba(63, 81, 181, 0.22), transparent 65%)',
                      pointerEvents: 'none',
                    },
                  }}
                >
                  {/* Icon tile */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '12px',
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'linear-gradient(135deg, rgba(63, 81, 181, 0.25), rgba(0, 229, 255, 0.18))',
                      border: '1px solid rgba(0, 229, 255, 0.28)',
                      color: 'info.main',
                      fontSize: '1.4rem',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      letterSpacing: '-0.01em',
                      color: 'text.primary',
                      mb: 1.25,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      flex: 1,
                      mb: 2.5,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.75}
                    sx={{
                      color: 'info.main',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Box>{service.cta ?? 'Get started'}</Box>
                    <ArrowForward
                      className="service-arrow"
                      sx={{
                        fontSize: 16,
                        transition: 'transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.3)',
                      }}
                    />
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}