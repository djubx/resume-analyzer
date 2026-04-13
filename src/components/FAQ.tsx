'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Container,
  Collapse,
  Button,
} from '@mui/material';
import { Add, Remove, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  cta: {
    label: string;
    href: string;
  };
}

const faqs: FAQItem[] = [
  {
    question: "Is my ATS score really hurting my chances?",
    answer:
      "Yes — 75% of resumes are rejected by ATS software before a human ever reads them. The system scans for keywords, formatting, and structure. If your resume scores below 70, it's likely being auto-filtered out even when you're qualified. Our analyzer shows you exactly why and what to fix.",
    cta: { label: "Check my ATS score free →", href: "/resume-analyzer" },
  },
  {
    question: "How fast can I actually improve my resume?",
    answer:
      "Most users see a 30–50 point ATS score improvement in under 2 hours. The analyzer identifies your specific issues — weak bullet points, missing keywords, formatting problems — with exact suggestions. You're not guessing; you're making targeted edits that matter.",
    cta: { label: "Analyze my resume now →", href: "/resume-analyzer" },
  },
  {
    question: "What if I need to build a resume from scratch?",
    answer:
      "Our Resume Builder has professional templates pre-optimized for ATS. The AI fills in suggestions as you type, so you're not staring at a blank page. Most users go from zero to a complete, polished resume in under 30 minutes.",
    cta: { label: "Start building for free →", href: "/create-resume" },
  },
  {
    question: "Will this help if I'm switching careers or industries?",
    answer:
      "Especially yes. Career changers struggle most because they use the wrong keywords for their target role. The analyzer compares your resume against the language hiring managers in that industry actually use — and shows you the gap. You'll know exactly what to add to be taken seriously.",
    cta: { label: "See what's missing →", href: "/resume-analyzer" },
  },
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "ChatGPT gives generic advice. We give you a score, a ranked list of specific issues in your actual resume, and line-by-line suggestions. It's the difference between 'eat healthier' and 'here are the 7 things wrong with your diet.' One is useful.",
    cta: { label: "Try it on my resume →", href: "/resume-analyzer" },
  },
  {
    question: "Is it free?",
    answer:
      "The core resume analysis — ATS score, issue breakdown, and improvement suggestions — is completely free. No credit card, no sign-up wall. Advanced features like unlimited analyses and premium templates are available on paid plans.",
    cta: { label: "Get my free score →", href: "/resume-analyzer" },
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, color: '#111', mb: 1.5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
            >
              Questions you're probably thinking
            </Typography>
            <Typography sx={{ color: '#666', fontSize: '1rem' }}>
              Honest answers. No fluff.
            </Typography>
          </Box>
        </motion.div>

        <Box>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Box
                  sx={{
                    borderBottom: '1px solid #F0F0F0',
                    '&:first-of-type': { borderTop: '1px solid #F0F0F0' },
                  }}
                >
                  {/* Question row */}
                  <Box
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      py: 2.5,
                      cursor: 'pointer',
                      gap: 2,
                      userSelect: 'none',
                      '&:hover .faq-question': { color: '#009688' },
                    }}
                  >
                    <Typography
                      className="faq-question"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.05rem' },
                        color: isOpen ? '#009688' : '#111',
                        transition: 'color 0.2s',
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.question}
                    </Typography>
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        bgcolor: isOpen ? '#009688' : '#F5F5F5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}
                    >
                      {isOpen ? (
                        <Remove sx={{ fontSize: 16, color: 'white' }} />
                      ) : (
                        <Add sx={{ fontSize: 16, color: '#555' }} />
                      )}
                    </Box>
                  </Box>

                  {/* Answer + CTA */}
                  <Collapse in={isOpen} timeout={250}>
                    <Box sx={{ pb: 3, pl: 0 }}>
                      <Typography
                        sx={{
                          color: '#555',
                          lineHeight: 1.75,
                          fontSize: '0.95rem',
                          mb: 2.5,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                      <Button
                        component={Link}
                        href={faq.cta.href}
                        variant="contained"
                        endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                        sx={{
                          bgcolor: '#009688',
                          color: 'white',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          borderRadius: '8px',
                          px: 2.5,
                          py: 1,
                          boxShadow: 'none',
                          '&:hover': {
                            bgcolor: '#00796B',
                            boxShadow: '0 4px 12px rgba(0,150,136,0.3)',
                          },
                        }}
                      >
                        {faq.cta.label}
                      </Button>
                    </Box>
                  </Collapse>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
