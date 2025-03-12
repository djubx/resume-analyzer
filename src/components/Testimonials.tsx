'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Person } from '@mui/icons-material';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "John D.",
    title: "Marketing Director, Tech Giant",
    quote: "The AI Resume Analyzer revealed exactly where I could strengthen my resume. I revamped my layout, got more recruiter responses, and ultimately secured my dream role.",
    image: "/john.png"
  },
  {
    name: "Sarah M.",
    title: "Senior Software Engineer",
    quote: "The ATS Score feature was a game-changer. It helped me optimize my resume for automated screenings, and the interview invitations practically doubled.",
    image: "/sarah.png"
  },
  {
    name: "Priya R.",
    title: "Senior Product Manager",
    quote: "The Resume Builder's templates and AI suggestions were spot on. My resume felt more polished, and I was able to negotiate for a higher title and salary.",
    image: "/john.png" // Reusing John's image as a placeholder
  },
  {
    name: "Alex K.",
    title: "Data Analyst, Startup",
    quote: "As a fresh grad, I wasn't sure how to highlight my skills. Resume Checkers guided me step by step, and I landed an offer within weeks of graduation.",
    image: "/alex.png"
  }
];

export default function Testimonials() {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(2);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % defaultTestimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 8, 
              color: 'text.primary', 
              fontWeight: 600 
            }}
          >
            Hear What Our Users Have To Say About Our Tools
          </Typography>
        </motion.div>

        {isMobile ? (
          // Mobile view - show one testimonial at a time with animation
          <Box sx={{ position: 'relative', minHeight: '300px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute', width: '100%' }}
              >
                <TestimonialCard 
                  testimonial={defaultTestimonials[activeIndex]} 
                  index={activeIndex}
                  handleImageError={handleImageError}
                  imageErrors={imageErrors}
                />
              </motion.div>
            </AnimatePresence>
          </Box>
        ) : (
          // Desktop view - show grid of testimonials
          <Grid container spacing={4}>
            {defaultTestimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    index={index}
                    handleImageError={handleImageError}
                    imageErrors={imageErrors}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 6,
            gap: 1.5
          }}
        >
          {defaultTestimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: index === activeIndex ? 24 : 12,
                height: 12,
                borderRadius: '50px',
                bgcolor: index === activeIndex ? '#009688' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Extracted testimonial card component for reuse
function TestimonialCard({ 
  testimonial, 
  index, 
  handleImageError, 
  imageErrors 
}: { 
  testimonial: Testimonial, 
  index: number,
  handleImageError: (index: number) => void,
  imageErrors: Record<number, boolean>
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        bgcolor: '#f8f8f8',
        position: 'relative',
        overflow: 'hidden',
        borderLeft: '4px solid #1976d2',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-4px)',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar
          sx={{ 
            width: 56, 
            height: 56, 
            mr: 2,
            bgcolor: '#009688',
            color: 'white',
          }}
        >
          {imageErrors[index] ? (
            <Person sx={{ fontSize: 32 }} />
          ) : (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={56}
              height={56}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              onError={() => handleImageError(index)}
            />
          )}
        </Avatar>
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              fontSize: '1.1rem',
              mb: 0.5,
            }}
          >
            {testimonial.name}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
            }}
          >
            {testimonial.title}
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ position: 'relative', mb: 2 }}>
          <Typography
            component="span"
            sx={{
              color: '#009688',
              fontStyle: 'italic',
              fontSize: '1.5rem',
              lineHeight: 1,
              display: 'inline',
              mr: 1,
            }}
          >
            "
          </Typography>
          <Typography
            component="span"
            sx={{
              color: '#666',
              lineHeight: 1.7,
              fontStyle: 'italic',
              fontSize: '1rem',
              display: 'inline',
            }}
          >
            {testimonial.quote}
          </Typography>
          <Typography
            component="span"
            sx={{
              color: '#009688',
              fontStyle: 'italic',
              fontSize: '1.5rem',
              lineHeight: 1,
              display: 'inline',
              ml: 1,
            }}
          >
            "
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
} 