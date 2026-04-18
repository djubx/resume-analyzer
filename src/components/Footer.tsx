'use client';

import { Box, Container, Typography, Grid, Link as MuiLink, Divider, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

// Shared style tokens for this file — footer link palette + transitions.
const FOOTER_BG = '#141618';
const LINK_MUTED = 'rgba(245, 247, 250, 0.62)';
const LINK_HOVER = '#00E5FF';           // cyan info.main
const HEADER_MUTED = 'rgba(245, 247, 250, 0.92)';
const LINK_TRANSITION = 'color 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.15), transform 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.15)';

interface FooterLink {
  label: string;
  href: string;
  /** Render as an anchor (external/mailto) rather than a next/link. */
  external?: boolean;
}

interface FooterColumn {
  eyebrow: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    eyebrow: 'Products',
    links: [
      { label: 'Resume Builder', href: '/create-resume' },
      { label: 'Resume Analyzer', href: '/resume-analyzer' },
      { label: 'ATS Score', href: '/ats-score' },
      { label: 'Resume Checklist', href: '/resume-checklist' },
    ],
  },
  {
    eyebrow: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Support', href: 'mailto:support@resumecheckers.com', external: true },
    ],
  },
  {
    eyebrow: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
];

/**
 * Shared link style: muted at rest, cyan with a 2px nudge-right on hover.
 * Using `sx` directly so next/link + MuiLink both receive identical treatment.
 */
const linkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  color: LINK_MUTED,
  textDecoration: 'none',
  fontSize: '0.925rem',
  lineHeight: 1.5,
  transition: LINK_TRANSITION,
  willChange: 'transform, color',
  '&:hover': {
    color: LINK_HOVER,
    transform: 'translateX(2px)',
  },
  '&:focus-visible': {
    color: LINK_HOVER,
    outline: '2px solid rgba(0, 229, 255, 0.35)',
    outlineOffset: 4,
    borderRadius: 2,
  },
} as const;

function FooterNavLink({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <MuiLink href={link.href} sx={linkSx}>
        {link.label}
      </MuiLink>
    );
  }
  return (
    <Link href={link.href} passHref legacyBehavior>
      <MuiLink sx={linkSx}>{link.label}</MuiLink>
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: FOOTER_BG,
        color: 'text.primary',
        py: { xs: 8, md: 10 },
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        // Subtle cyan accent line on the top edge — echoes the hero divider.
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -1,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.5), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            {/* Logo — same asset as navbar, slightly smaller for footer rhythm. */}
            <Box
              component={Link}
              href="/"
              aria-label="ResuAI — Home"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                height: 38,
                mb: 2.5,
                transition: 'opacity 0.25s ease',
                '&:hover': { opacity: 0.85 },
              }}
            >
              <Image
                src="/resuai-logo.png"
                alt="ResuAI"
                width={969}
                height={429}
                style={{
                  height: '100%',
                  width: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            <Typography
              sx={{
                color: LINK_MUTED,
                fontSize: '0.95rem',
                lineHeight: 1.6,
                maxWidth: 340,
              }}
            >
              Your AI co-pilot for resumes. Build, analyze, and optimize in minutes — not days.
            </Typography>
          </Grid>

          {/* Nav columns */}
          {columns.map((col) => (
            <Grid key={col.eyebrow} item xs={12} sm={4} md={col.eyebrow === 'Company' ? 2 : 3}>
              <Typography
                sx={{
                  display: 'block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: HEADER_MUTED,
                  mb: 2.5,
                }}
              >
                {col.eyebrow}
              </Typography>
              <Stack spacing={1.25} alignItems="flex-start">
                {col.links.map((link) => (
                  <FooterNavLink key={link.label} link={link} />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: { xs: 5, md: 6 }, borderColor: 'divider' }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography sx={{ color: LINK_MUTED, fontSize: '0.85rem' }}>
            © {currentYear} ResuAI. All rights reserved.
          </Typography>
          <Typography
            sx={{
              color: LINK_MUTED,
              fontSize: '0.85rem',
              textAlign: { xs: 'left', sm: 'right' },
            }}
          >
            Payments processed by Paddle, our Merchant of Record.
          </Typography>
        </Box>

        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography
            sx={{
              color: 'rgba(245, 247, 250, 0.42)',
              display: 'block',
              textAlign: 'center',
              fontSize: '0.78rem',
              lineHeight: 1.6,
              maxWidth: 680,
              mx: 'auto',
            }}
          >
            ResuAI is an AI-powered software platform. All services are delivered digitally via automated tools.
            No human-driven consulting services are provided.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
