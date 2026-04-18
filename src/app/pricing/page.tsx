"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import { CheckCircle, RocketLaunch, Verified } from '@mui/icons-material';

type BillingCycle = 'monthly' | 'annual';

interface PricingTier {
  name: string;
  tagline: string;
  price: { monthly: number; annual: number };
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    tagline: 'Dip your toes in and see the difference.',
    price: { monthly: 0, annual: 0 },
    features: [
      'Basic resume analysis',
      'Limited ATS score checks',
      'Resume Builder — 1 template',
      'Resume checklist',
    ],
    ctaLabel: 'Start free',
    ctaHref: '/resume-analyzer',
  },
  {
    name: 'Pro',
    tagline: 'Everything you need to land interviews.',
    price: { monthly: 12, annual: 8 },
    features: [
      'Advanced resume analysis',
      'Unlimited ATS score checks',
      'Resume Builder — all 50+ templates',
      'Full resume checklist',
      'Priority support',
      'Job-specific recommendations',
    ],
    ctaLabel: 'Try Pro free',
    ctaHref: '/resume-analyzer',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    tagline: 'For teams and career coaches.',
    price: { monthly: 29, annual: 24 },
    features: [
      'Everything in Pro',
      'Team management',
      'API access',
      'Custom branding',
      'Dedicated support',
      'Advanced analytics',
    ],
    ctaLabel: 'Talk to sales',
    ctaHref: 'mailto:support@resumecheckers.com',
  },
];

const pricingFaqs = [
  {
    question: 'How long will the free promotion last?',
    answer:
      "We haven't set an end date. We want as many people as possible to benefit during the promotional period, and we'll give plenty of advance notice before anything changes.",
  },
  {
    question: 'Are there any usage limits during the free period?',
    answer:
      'No. During this promotional period, you have unlimited access to every feature across every plan. Use it, stress-test it, and tell us what to build next.',
  },
  {
    question: 'Will I be charged automatically when the free period ends?',
    answer:
      "No. We don't collect payment information during the free period. When the promotion ends you'll have the option to subscribe if you want to keep the premium features.",
  },
  {
    question: 'Can I share this offer with friends?',
    answer:
      "Yes, please do. The more job seekers we can help, the better. Send them to resuai.com/pricing and they'll get the same access you do.",
  },
  {
    question: 'Do you offer refunds if I subscribe later?',
    answer:
      'Yes. Every paid plan comes with a 14-day refund window, no questions asked. See our refund policy for the details.',
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>('annual');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Navbar />

      {/* ========= HERO ========= */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 10 },
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Ambient blobs */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -140,
            left: -140,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(63, 81, 181, 0.3), transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: -160,
            right: -160,
            width: 540,
            height: 540,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.28), transparent 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              Pricing
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: 'text.primary',
                mb: 2.5,
              }}
            >
              Simple plans.
              <br />
              <Box component="span" sx={{ color: 'info.main' }}>Free while we launch.</Box>
            </Typography>
            <Typography
              sx={{
                maxWidth: 640,
                mx: 'auto',
                mb: 5,
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.6,
              }}
            >
              Every paid feature is unlocked during our promotional period — use the whole platform, no credit
              card needed. Pricing below is what you&apos;ll pay once the promo ends.
            </Typography>

            {/* Promo pill */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                display: 'inline-flex',
                px: 2.25,
                py: 1,
                mb: 5,
                borderRadius: '999px',
                backgroundColor: 'rgba(0, 229, 255, 0.08)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <Verified sx={{ color: 'info.main', fontSize: 18 }} />
              <Typography sx={{ color: 'info.main', fontWeight: 600, fontSize: '0.9rem' }}>
                Limited time — every plan is free right now
              </Typography>
            </Stack>

            {/* Billing toggle — segmented control */}
            <BillingToggle billing={billing} onChange={setBilling} />
          </motion.div>
        </Container>
      </Box>

      {/* ========= PRICING GRID ========= */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 3, md: 3.5 }} alignItems="stretch">
          {pricingTiers.map((tier, index) => (
            <Grid item xs={12} md={4} key={tier.name}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <PricingCard tier={tier} billing={billing} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ========= FAQ ========= */}
      <FAQ
        eyebrow="Pricing FAQ"
        title="Everything about the free promo"
        subtitle="If you don't see your question here, email hello@resuai.com and we'll get back the same day."
        faqs={pricingFaqs}
      />

      {/* ========= FINAL CTA ========= */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 14 },
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 680,
            height: 680,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.16), transparent 65%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
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
              Try it free
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'text.primary',
                mb: 2.5,
              }}
            >
              Start optimizing your resume today.
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                mb: 5,
                maxWidth: 560,
                mx: 'auto',
              }}
            >
              No credit card. No commitments. Just drop in your resume and see what we can do together.
            </Typography>
            <Button
              component={Link}
              href="/create-resume"
              className="hero-cta-orbit"
              variant="contained"
              size="large"
              startIcon={<RocketLaunch />}
              sx={{
                py: 1.6,
                px: 3.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '10px',
                letterSpacing: '0.01em',
                textTransform: 'none',
                backgroundImage:
                  'linear-gradient(135deg, #3F51B5 0%, #1E2A78 100%)',
                boxShadow:
                  '0 10px 24px -12px rgba(0, 229, 255, 0.18), ' +
                  'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
                transition:
                  'transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                  'box-shadow 0.28s ease, ' +
                  'background-image 0.28s ease',
                '&:hover': {
                  backgroundImage:
                    'linear-gradient(135deg, #4A5CC5 0%, #2A3890 100%)',
                  boxShadow:
                    '0 14px 38px -10px rgba(0, 229, 255, 0.38), ' +
                    'inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get started for free
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/*  Billing segmented control                                         */
/* ------------------------------------------------------------------ */
function BillingToggle({
  billing,
  onChange,
}: {
  billing: BillingCycle;
  onChange: (b: BillingCycle) => void;
}) {
  return (
    <Box
      role="tablist"
      aria-label="Billing cycle"
      sx={{
        position: 'relative',
        display: 'inline-flex',
        p: 0.5,
        borderRadius: '999px',
        backgroundColor: 'rgba(245, 247, 250, 0.04)',
        border: '1px solid rgba(245, 247, 250, 0.08)',
        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      {(['monthly', 'annual'] as BillingCycle[]).map((cycle) => {
        const isActive = billing === cycle;
        return (
          <Box
            key={cycle}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cycle)}
            sx={{
              position: 'relative',
              px: 3,
              py: 1.25,
              borderRadius: '999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              cursor: 'pointer',
              color: isActive ? 'text.primary' : 'text.secondary',
              transition: 'color 0.3s ease',
              '&:hover': { color: 'text.primary' },
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              zIndex: 1,
              textTransform: 'capitalize',
            }}
          >
            {isActive && (
              <motion.div
                layoutId="billing-pill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 999,
                  background: 'linear-gradient(135deg, #3F51B5 0%, #1E2A78 100%)',
                  boxShadow:
                    '0 8px 20px -10px rgba(0, 229, 255, 0.4), ' +
                    'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
                  zIndex: -1,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            {cycle === 'annual' ? 'Annual' : 'Monthly'}
            {cycle === 'annual' && (
              <Box
                component="span"
                sx={{
                  fontSize: '0.7rem',
                  px: 0.875,
                  py: 0.25,
                  ml: 0.5,
                  borderRadius: '999px',
                  bgcolor: isActive ? 'rgba(255,255,255,0.18)' : 'rgba(0, 229, 255, 0.15)',
                  color: isActive ? '#F5F7FA' : 'info.main',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                Save 20%
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing card                                                      */
/* ------------------------------------------------------------------ */
function PricingCard({ tier, billing }: { tier: PricingTier; billing: BillingCycle }) {
  const price = billing === 'annual' ? tier.price.annual : tier.price.monthly;
  const suffix = billing === 'annual' ? '/mo · billed yearly' : '/month';

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 3.5, md: 4 },
        borderRadius: '18px',
        overflow: 'hidden',
        backgroundColor: tier.highlighted
          ? 'rgba(63, 81, 181, 0.1)'
          : 'rgba(245, 247, 250, 0.04)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: tier.highlighted ? 'rgba(0, 229, 255, 0.45)' : 'rgba(245, 247, 250, 0.08)',
        boxShadow: tier.highlighted
          ? '0 22px 60px -28px rgba(0, 229, 255, 0.4), ' +
            'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)'
          : 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        transition:
          'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
          'border-color 0.4s ease, ' +
          'box-shadow 0.4s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(0, 229, 255, 0.5)',
          boxShadow:
            '0 22px 60px -22px rgba(0, 229, 255, 0.4), ' +
            'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      {tier.badge && (
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            px: 1.5,
            py: 0.5,
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #3F51B5 0%, #00E5FF 100%)',
            color: '#0B0D10',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 6px 14px -6px rgba(0, 229, 255, 0.55)',
          }}
        >
          {tier.badge}
        </Box>
      )}

      <Typography
        sx={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '1.25rem',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          color: tier.highlighted ? 'info.main' : 'text.primary',
          mb: 0.75,
        }}
      >
        {tier.name}
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.5, mb: 3 }}>
        {tier.tagline}
      </Typography>

      {/* Price */}
      <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1.5 }}>
        <Typography
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: '3rem',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: 'text.primary',
          }}
        >
          ${price}
        </Typography>
        <Typography sx={{ ml: 1, color: 'text.secondary', fontSize: '0.85rem' }}>
          {suffix}
        </Typography>
      </Box>

      {/* Free-right-now pill */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.75}
        sx={{
          alignSelf: 'flex-start',
          px: 1.5,
          py: 0.5,
          mb: 3,
          borderRadius: '999px',
          backgroundColor: 'rgba(0, 229, 255, 0.08)',
          border: '1px solid rgba(0, 229, 255, 0.28)',
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: 'info.main',
            boxShadow: '0 0 8px rgba(0, 229, 255, 0.8)',
          }}
        />
        <Typography sx={{ color: 'info.main', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.02em' }}>
          Free during promo
        </Typography>
      </Stack>

      {/* Feature list */}
      <Stack spacing={1.25} sx={{ mb: 4, flex: 1 }}>
        {tier.features.map((feature) => (
          <Stack key={feature} direction="row" alignItems="flex-start" spacing={1.25}>
            <CheckCircle sx={{ fontSize: 18, color: 'info.main', mt: '2px', flexShrink: 0 }} />
            <Typography sx={{ color: 'text.primary', fontSize: '0.925rem', lineHeight: 1.55 }}>
              {feature}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Button
        component={Link}
        href={tier.ctaHref}
        variant={tier.highlighted ? 'contained' : 'outlined'}
        size="large"
        fullWidth
        sx={{
          py: 1.4,
          fontSize: '0.95rem',
          fontWeight: 600,
          borderRadius: '10px',
          letterSpacing: '0.01em',
          textTransform: 'none',
          ...(tier.highlighted
            ? {
                backgroundImage: 'linear-gradient(135deg, #3F51B5 0%, #1E2A78 100%)',
                color: '#F5F7FA',
                boxShadow:
                  '0 10px 24px -12px rgba(0, 229, 255, 0.28), ' +
                  'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
                '&:hover': {
                  backgroundImage: 'linear-gradient(135deg, #4A5CC5 0%, #2A3890 100%)',
                  boxShadow:
                    '0 14px 38px -10px rgba(0, 229, 255, 0.45), ' +
                    'inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
                  transform: 'translateY(-2px)',
                },
              }
            : {
                color: 'text.primary',
                borderColor: 'rgba(245, 247, 250, 0.18)',
                backgroundColor: 'rgba(245, 247, 250, 0.04)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'rgba(0, 229, 255, 0.45)',
                  backgroundColor: 'rgba(245, 247, 250, 0.08)',
                  transform: 'translateY(-2px)',
                },
              }),
          transition:
            'transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
            'box-shadow 0.28s ease, ' +
            'background-color 0.28s ease, ' +
            'border-color 0.28s ease',
        }}
      >
        {tier.ctaLabel}
      </Button>
    </Box>
  );
}
