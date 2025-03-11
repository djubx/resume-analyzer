'use client';

import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container
} from '@mui/material';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
}

// Default FAQ data
const defaultFaqs = [
  {
    question: "What is Resume Checkers?",
    answer: "Resume Checkers is an advanced, AI-powered platform designed to help you create, analyze, and optimize your resume for better job application outcomes. Whether you're just starting your career or aiming for a senior position, our tools can enhance your resume to stand out in a competitive job market."
  },
  {
    question: "How does Resume Checkers work?",
    answer: "We use cutting-edge AI algorithms to thoroughly examine your resume, highlighting strengths, pinpointing areas for improvement, providing an ATS (Applicant Tracking System) score, and generating an action plan. Our goal is to ensure your resume meets modern hiring standards, giving you an edge in today's competitive environment."
  },
  {
    question: "Who can use Resume Checkers?",
    answer: "Resume Checkers is designed for job seekers at all career levels - from students and recent graduates to experienced professionals and executives. Our tools adapt to your specific needs, whether you're creating your first resume or updating an existing one for a senior position."
  },
  {
    question: "What is the Create Resume tool?",
    answer: "Our Create Resume tool is an intuitive resume builder that helps you create professional, ATS-friendly resumes in minutes. Choose from expert-designed templates, customize sections, and receive real-time suggestions to craft a compelling resume that showcases your skills and experience effectively."
  },
  {
    question: "What does the Analyze feature do?",
    answer: "The Analyze feature provides comprehensive feedback on your existing resume. It evaluates content quality, keyword optimization, formatting, and overall effectiveness. You'll receive actionable insights on strengths and areas for improvement, with specific recommendations to enhance your resume's impact."
  }
];

export default function FAQ({ title = "Frequently Asked Questions", faqs = defaultFaqs }: FAQProps) {
  const [expandedPanel, setExpandedPanel] = React.useState<number | false>(0);

  const handleAccordionChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {title && (
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          {title}
        </Typography>
      )}
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            expanded={expandedPanel === index}
            onChange={handleAccordionChange(index)}
            disableGutters
            sx={{ 
              mb: 0, 
              boxShadow: 'none', 
              '&:before': { display: 'none' },
              borderBottom: '1px solid',
              borderColor: 'divider',
              borderRadius: 0,
              bgcolor: 'transparent',
            }}
          >
            <AccordionSummary 
              expandIcon={
                <Box sx={{ 
                  color: expandedPanel === index ? 'primary.main' : 'text.secondary',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {expandedPanel === index ? "−" : "+"}
                </Box>
              }
              sx={{ 
                px: 0,
                py: 2,
                minHeight: '60px',
                '& .MuiAccordionSummary-content': { 
                  margin: '12px 0',
                }
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  color: expandedPanel === index ? 'primary.main' : 'text.primary',
                  fontSize: '1.25rem',
                  fontWeight: 500
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3, pt: 0 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.7
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
} 