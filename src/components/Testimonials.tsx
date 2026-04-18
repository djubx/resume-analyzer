'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Person, FormatQuote, Star } from '@mui/icons-material';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
  rating?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "John D.",
    title: "Marketing Director, Tech Giant",
    quote:
      "The AI Resume Analyzer revealed exactly where I could strengthen my resume. I revamped my layout, got more recruiter responses, and ultimately secured my dream role.",
    image: "/john.png",
    rating: 5,
  },
  {
    name: "Sarah M.",
    title: "Senior Software Engineer",
    quote:
      "The ATS Score feature was a game-changer. It helped me optimize my resume for automated screenings, and the interview invitations practically doubled.",
    image: "/sarah.png",
    rating: 5,
  },
  {
    name: "Priya R.",
    title: "Senior Product Manager",
    quote:
      "The Resume Builder's templates and AI suggestions were spot on. My resume felt more polished, and I was able to negotiate for a higher title and salary.",
    image: "/john.png",
    rating: 5,
  },
  {
    name: "Alex K.",
    title: "Data Analyst, Startup",
    quote:
      "As a fresh grad, I wasn't sure how to highlight my skills. ResuAI guided me step by step, and I landed an offer within weeks of graduation.",
    image: "/alex.png",
    rating: 5,
  },
];

export default function Testimonials() {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-advance the mobile carousel; desktop grid ignores activeIndex.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % defaultTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              Loved by job seekers
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
              Real people. Real offers.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
              Over 10,000 job seekers have trusted ResuAI to turn their resumes into interview invites. Here's what
              a few of them said.
            </Typography>
          </Box>
        </motion.div>

        {isMobile ? (
          // Single-card carousel on mobile
          <Box sx={{ position: 'relative', minHeight: 340 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
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
          // Two-column grid on desktop
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {defaultTestimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={testimonial.name}>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  style={{ height: '100%' }}
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

        {/* Pagination dots — only meaningful on mobile carousel, but harmless on desktop. */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 5, gap: 1.5 }}>
          {defaultTestimonials.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <Box
                key={index}
                role="button"
                aria-label={`Testimonial ${index + 1}`}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: isActive ? 28 : 10,
                  height: 10,
                  borderRadius: '999px',
                  bgcolor: isActive ? 'info.main' : 'rgba(245, 247, 250, 0.18)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.15)',
                  boxShadow: isActive ? '0 0 12px -2px rgba(0, 229, 255, 0.55)' : 'none',
                }}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

function TestimonialCard({
  testimonial,
  index,
  handleImageError,
  imageErrors,
}: {
  testimonial: Testimonial;
  index: number;
  handleImageError: (index: number) => void;
  imageErrors: Record<number, boolean>;
}) {
  const rating = testimonial.rating ?? 5;
  return (
    <Box
      sx={{
        position: 'relative',
        p: { xs: 3.5, md: 4 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        // Frosted glass surface — same language as hero secondary CTA and pillar cards.
        backgroundColor: 'rgba(245, 247, 250, 0.04)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(245, 247, 250, 0.08)',
        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        transition:
          'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
          'box-shadow 0.4s ease, ' +
          'border-color 0.4s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(0, 229, 255, 0.35)',
          boxShadow:
            '0 18px 44px -22px rgba(0, 229, 255, 0.3), ' +
            'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      {/* Decorative large quote mark, top-left */}
      <FormatQuote
        aria-hidden
        sx={{
          position: 'absolute',
          top: -8,
          right: 16,
          fontSize: 96,
          color: 'info.main',
          opacity: 0.1,
          transform: 'rotate(180deg)',
          pointerEvents: 'none',
        }}
      />

      {/* Star rating */}
      <Box sx={{ display: 'flex', gap: 0.5, mb: 2.5 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            sx={{
              fontSize: 18,
              color: i < rating ? 'info.main' : 'rgba(245, 247, 250, 0.15)',
            }}
          />
        ))}
      </Box>

      {/* Quote */}
      <Typography
        sx={{
          color: 'text.primary',
          fontSize: { xs: '1.05rem', md: '1.125rem' },
          fontWeight: 500,
          lineHeight: 1.6,
          mb: 3.5,
          flex: 1,
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </Typography>

      {/* Author row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 2.5, borderTop: '1px solid', borderColor: 'divider' }}>
        <Avatar
          sx={{
            width: 48,
            height: 48,
            background: 'linear-gradient(135deg, #3F51B5 0%, #00E5FF 100%)',
            color: '#0B0D10',
            boxShadow: '0 0 0 2px rgba(0, 229, 255, 0.2)',
          }}
        >
          {imageErrors[index] ? (
            <Person sx={{ fontSize: 28 }} />
          ) : (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              onError={() => handleImageError(index)}
            />
          )}
        </Avatar>
        <Box>
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              color: 'text.primary',
              fontSize: '1rem',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            {testimonial.name}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', mt: 0.25 }}>
            {testimonial.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}