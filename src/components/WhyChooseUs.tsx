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
  useTheme,
} from '@mui/material';

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface WhyChooseUsProps {
  title?: string;
  features?: FeatureItem[];
}

// Priority-ordered features: Builder → Analyzer → ATS → Checklist
const defaultFeatures = [
  {
    title: "Resume Builder",
    description: "Craft Your Resume with AI and Modern Templates\n\nWhether you want to start fresh or improve your existing resume, our Resume Builder has you covered. Upload your current resume or manually input your details. Choose from a variety of professional and modern templates. Our AI assistant also helps rewrite or re-frame content based on insights from your resume analysis, ensuring your resume is polished and impactful.",
    image: "/builder-preview.png",
    alt: "Resume Builder Preview"
  },
  {
    title: "AI Resume Analyzer",
    description: "Gain AI-Powered Insights to Perfect Your Resume\n\nUpload your resume to receive a comprehensive analysis powered by AI. Discover your strengths, identify areas for improvement, and receive an overall resume score. Plus, get actionable next steps tailored to help you create a standout resume that boosts your chances of landing your dream job.",
    image: "/analyzer-preview.png",
    alt: "AI Resume Analyzer Preview"
  },
  {
    title: "ATS Score",
    description: "Optimize Your Resume for Applicant Tracking Systems\n\nUpload your resume and get an instant ATS compatibility score. See how well your resume aligns with ATS requirements used by recruiters. Use our insights to optimize your resume and increase its chances of getting noticed in automated screenings.",
    image: "/builder-preview.png",
    alt: "ATS Score Preview"
  },
  {
    title: "Resume Checklist",
    description: "Your Guide to a Complete and Refined Resume\n\nStay organized and ensure nothing is missed with our two types of checklists. First, track changes based on recommendations from your analysis report. Second, use our general checklist to include essentials like contact information, a compelling summary, relevant work experience and many more. Simplify the process of refining your resume with our user-friendly checklist tools.",
    image: "/analyzer-preview.png",
    alt: "Resume Checklist Preview"
  }
];

export default function WhyChooseUs({ title = "Why Choose Us?", features = defaultFeatures }: WhyChooseUsProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" sx={{ mb: 8, color: 'text.primary', fontWeight: 600 }}>
            {title}
          </Typography>
        </motion.div>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {features.map((feature, index) => (
            <Grid 
              container 
              key={index} 
              spacing={6} 
              alignItems="center" 
              direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            >
              {/* Image */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 50px -20px rgba(0, 229, 255, 0.2)',
                      border: '1px solid',
                      borderColor: 'divider',
                      background: index % 2 === 0 
                        ? 'linear-gradient(135deg, rgba(63, 81, 181, 0.22) 0%, rgba(0, 229, 255, 0.18) 100%)'
                        : 'linear-gradient(135deg, rgba(0, 229, 255, 0.18) 0%, rgba(63, 81, 181, 0.22) 100%)',
                      p: 2,
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
                        borderRadius: '12px',
                      }}
                      priority
                    />
                  </Box>
                </motion.div>
              </Grid>
              
              {/* Content */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      mb: 3, 
                      fontSize: '2rem',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #6573C3 0%, #00E5FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  {feature.description.split('\n\n').map((paragraph, i) => (
                    <Typography 
                      key={i}
                      variant="body1" 
                      sx={{ 
                        mb: 2,
                        color: 'text.secondary',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </motion.div>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 