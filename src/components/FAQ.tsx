'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is ResuAI?",
    answer:
      "ResuAI is an AI-powered platform that helps you build, analyze, and optimize your resume end-to-end. Whether you're shipping your first draft or tuning a senior-level resume, our four tools — Resume Builder, Analyzer, ATS Score, and Checklist — work together to get you interviews faster.",
  },
  {
    question: "How does ResuAI work?",
    answer:
      "Our models read your resume the way modern hiring tools do. You get strengths, gaps, keyword coverage, an ATS compatibility score, and a prioritized action plan — usually in under 60 seconds. Every suggestion is specific to your resume, so you spend your time improving rather than guessing.",
  },
  {
    question: "Who is ResuAI for?",
    answer:
      "Job seekers at every level — students shipping their first resume, mid-career professionals switching roles, and executives sharpening their positioning. The tools adapt to your target title and industry, so advice at every career stage stays relevant.",
  },
  {
    question: "What does the Resume Builder do?",
    answer:
      "The Builder ships a resume from scratch using 50+ recruiter-approved templates. Pick a layout, drop in your experience, and our AI rewrites each bullet until it reads tight and measurable. Every export is ATS-safe by default — no images, weird tables, or parsing traps.",
  },
  {
    question: "What does the Analyzer tell me?",
    answer:
      "The Analyzer inspects content quality, keyword alignment, formatting, and impact language. You get a score, a list of strengths to preserve, and a ranked list of fixes — each with specific before/after suggestions so you know exactly what to change.",
  },
];

export default function FAQ({
  eyebrow = "Good questions",
  title = "Frequently asked questions",
  subtitle = "Everything you might be wondering before you try ResuAI. Still curious? Email us any time.",
  faqs = defaultFaqs,
}: FAQProps) {
  const [expandedPanel, setExpandedPanel] = React.useState<number | false>(0);

  const handleAccordionChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: 640, mx: 'auto' }}>
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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => {
            const isOpen = expandedPanel === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Accordion
                  expanded={isOpen}
                  onChange={handleAccordionChange(index)}
                  disableGutters
                  elevation={0}
                  sx={{
                    '&:before': { display: 'none' },
                    borderRadius: '14px !important',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(245, 247, 250, 0.04)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: isOpen ? 'rgba(0, 229, 255, 0.4)' : 'rgba(245, 247, 250, 0.08)',
                    boxShadow: isOpen
                      ? '0 14px 34px -22px rgba(0, 229, 255, 0.35), ' +
                        'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)'
                      : 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                    transition:
                      'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                    '&:hover': !isOpen
                      ? {
                          borderColor: 'rgba(245, 247, 250, 0.15)',
                          backgroundColor: 'rgba(245, 247, 250, 0.06)',
                        }
                      : {},
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isOpen ? '#0B0D10' : 'info.main',
                          bgcolor: isOpen ? 'info.main' : 'rgba(0, 229, 255, 0.08)',
                          transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.15)',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                      >
                        <AddIcon sx={{ fontSize: 20 }} />
                      </Box>
                    }
                    sx={{
                      px: { xs: 2.5, md: 3 },
                      py: 1.5,
                      minHeight: 72,
                      '& .MuiAccordionSummary-content': {
                        my: 1.5,
                      },
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        transform: 'none',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        color: isOpen ? 'text.primary' : 'text.primary',
                        fontSize: { xs: '1.05rem', md: '1.15rem' },
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.35,
                        pr: 2,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 2.5, md: 3 }, pb: 3, pt: 0 }}>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}