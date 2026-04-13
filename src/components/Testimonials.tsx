'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, useTheme, useMediaQuery, Chip } from '@mui/material';
import { Star, Verified, FormatQuote } from '@mui/icons-material';
import { trackEvent } from '@/lib/amplitude';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  result: string; // the measurable win
  image: string;
  stars: number;
  timeAgo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus T.",
    title: "Product Manager",
    company: "Google",
    quote: "My resume had a 34/100 ATS score — I didn't even know that was a thing. Fixed the keywords Resume Checkers flagged, resubmitted the same application, and got a call back within 48 hours.",
    result: "34 → 91 ATS score",
    image: "/testimonials/marcus.png",
    stars: 5,
    timeAgo: "2 weeks ago",
  },
  {
    name: "Priya S.",
    title: "Senior Data Scientist",
    company: "Stripe",
    quote: "I'd been applying for 3 months with zero callbacks. Uploaded my resume here, got a brutal-but-honest score. Spent 2 hours making the suggested changes. Three interviews the next week.",
    result: "0 → 3 interviews in 1 week",
    image: "/testimonials/priya.png",
    stars: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "James W.",
    title: "Software Engineer",
    company: "Shopify",
    quote: "The AI told me my bullet points were weak — 'responsible for X' instead of 'increased X by Y%'. Simple change. Total difference. Landed a 22% salary bump on the new role.",
    result: "+22% salary increase",
    image: "/testimonials/james.png",
    stars: 5,
    timeAgo: "3 weeks ago",
  },
  {
    name: "Aisha K.",
    title: "UX Designer",
    company: "Figma",
    quote: "Fresh grad, no idea how to write a resume. The template + AI suggestions turned my internship experience into a story that actually got attention. First real job in 6 weeks.",
    result: "First job offer in 6 weeks",
    image: "/testimonials/aisha.png",
    stars: 5,
    timeAgo: "5 weeks ago",
  },
  {
    name: "David L.",
    title: "Engineering Manager",
    company: "Atlassian",
    quote: "Switching from IC to management. Wasn't sure how to position my leadership experience. The AI restructured my resume framing perfectly. Got into the hiring loop at 4 of 5 companies I applied to.",
    result: "4/5 application responses",
    image: "/testimonials/david.png",
    stars: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Sofia R.",
    title: "Marketing Director",
    company: "HubSpot",
    quote: "I thought my resume was fine. Resume Checkers showed me 12 specific issues. Fixed them in one sitting. Two weeks later I had offers from two companies and negotiated $15k above the first offer.",
    result: "+$15k above initial offer",
    image: "/testimonials/sofia.png",
    stars: 5,
    timeAgo: "3 weeks ago",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <Box sx={{ display: 'flex', gap: 0.25 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} sx={{ fontSize: 16, color: '#F59E0B' }} />
      ))}
    </Box>
  );
}

function TestimonialCard({ t, active }: { t: Testimonial; active?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: '16px',
        p: { xs: 3, md: 3.5 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: active ? '2px solid #009688' : '1px solid #f0f0f0',
        boxShadow: active
          ? '0 8px 32px rgba(0,150,136,0.15)'
          : '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Quote mark watermark */}
      <FormatQuote
        sx={{
          position: 'absolute',
          top: 12,
          right: 16,
          fontSize: 64,
          color: '#009688',
          opacity: 0.08,
          transform: 'scaleX(-1)',
        }}
      />

      {/* Stars + time */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <StarRating count={t.stars} />
        <Typography sx={{ fontSize: '0.75rem', color: '#aaa' }}>{t.timeAgo}</Typography>
      </Box>

      {/* Result chip — the Aha moment */}
      <Chip
        label={t.result}
        size="small"
        sx={{
          mb: 2,
          alignSelf: 'flex-start',
          bgcolor: '#E8F5E9',
          color: '#2E7D32',
          fontWeight: 700,
          fontSize: '0.78rem',
          borderRadius: '6px',
          height: 26,
        }}
      />

      {/* Quote */}
      <Typography
        sx={{
          color: '#444',
          lineHeight: 1.65,
          fontSize: '0.93rem',
          flex: 1,
          mb: 3,
        }}
      >
        "{t.quote}"
      </Typography>

      {/* Author */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box sx={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
          {imgError ? (
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                bgcolor: '#009688',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
              }}
            >
              {t.name[0]}
            </Box>
          ) : (
            <Image
              src={t.image}
              alt={t.name}
              width={44}
              height={44}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              onError={() => setImgError(true)}
            />
          )}
        </Box>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#111' }}>
              {t.name}
            </Typography>
            <Verified sx={{ fontSize: 14, color: '#009688' }} />
          </Box>
          <Typography sx={{ fontSize: '0.78rem', color: '#888' }}>
            {t.title} · {t.company}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function Testimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleDotClick = (i: number) => {
    setActiveIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoPlay();
    trackEvent('Testimonials - Dot Clicked', { index: i, name: testimonials[i].name });
  };

  // Show 3 visible on desktop in a rolling window
  const visibleIndices = isMobile
    ? [activeIndex]
    : [
        activeIndex % testimonials.length,
        (activeIndex + 1) % testimonials.length,
        (activeIndex + 2) % testimonials.length,
      ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FAFAFA' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onViewportEnter={() => trackEvent('Testimonials - Section Viewed')}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            {/* Social proof bar */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: '#FFF8E1',
                border: '1px solid #FFE082',
                borderRadius: '100px',
                px: 2,
                py: 0.75,
                mb: 2.5,
              }}
            >
              <Box sx={{ display: 'flex', gap: 0.25 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} sx={{ fontSize: 14, color: '#F59E0B' }} />
                ))}
              </Box>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#92400E' }}>
                4.9 · 10,000+ job seekers helped
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{ fontWeight: 700, color: '#111', mb: 1.5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
            >
              Real people. Real results.
            </Typography>
            <Typography sx={{ color: '#666', fontSize: '1rem', maxWidth: 480, mx: 'auto' }}>
              Not marketing copy — these are actual outcomes from people who used Resume Checkers.
            </Typography>
          </Box>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: 3,
              }}
            >
              {visibleIndices.map((idx, pos) => (
                <TestimonialCard
                  key={`${idx}-${pos}`}
                  t={testimonials[idx]}
                  active={pos === 0}
                />
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => handleDotClick(i)}
              sx={{
                width: i === activeIndex ? 28 : 8,
                height: 8,
                borderRadius: '100px',
                bgcolor: i === activeIndex ? '#009688' : '#ddd',
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
