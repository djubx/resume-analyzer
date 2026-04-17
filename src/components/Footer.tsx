'use client';

import { Box, Container, Typography, Grid, Link as MuiLink, Divider } from '@mui/material';
import Link from 'next/link';

const muted = 'rgba(245, 247, 250, 0.65)';
const hover = 'rgba(245, 247, 250, 1)';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: '#141618',
        color: 'text.primary',
        py: 8,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -1,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.5), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #3F51B5 0%, #00E5FF 100%)',
                  color: '#0B0D10',
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 800,
                }}
              >
                R
              </Box>
              <Typography
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Resu<Box component="span" sx={{ color: 'info.main' }}>AI</Box>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: muted, mb: 2, maxWidth: 320 }}>
              Your AI co-pilot for resumes. Build, analyze, and optimize in minutes — not days.
            </Typography>
          </Grid>

          {/* Products (priority order) */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="accent" sx={{ mb: 2, display: 'block', color: 'info.main', fontSize: '0.75rem' }}>
              Products
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Link href="/create-resume" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  Resume Builder
                </MuiLink>
              </Link>
              <Link href="/resume-analyzer" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  Resume Analyzer
                </MuiLink>
              </Link>
              <Link href="/ats-score" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  ATS Score
                </MuiLink>
              </Link>
              <Link href="/resume-checklist" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  Resume Checklist
                </MuiLink>
              </Link>
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="accent" sx={{ mb: 2, display: 'block', color: 'info.main', fontSize: '0.75rem' }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Link href="/about" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  About
                </MuiLink>
              </Link>
              <Link href="/pricing" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  Pricing
                </MuiLink>
              </Link>
              <MuiLink
                href="mailto:support@resumecheckers.com"
                sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}
              >
                Support
              </MuiLink>
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="accent" sx={{ mb: 2, display: 'block', color: 'info.main', fontSize: '0.75rem' }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Link href="/terms" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  Terms of Service
                </MuiLink>
              </Link>
              <Link href="/privacy-policy" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  Privacy Policy
                </MuiLink>
              </Link>
              <Link href="/refund-policy" passHref legacyBehavior>
                <MuiLink sx={{ color: muted, textDecoration: 'none', '&:hover': { color: hover } }}>
                  Refund Policy
                </MuiLink>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'divider' }} />

        {/* Bottom Bar */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: muted }}>
            © {currentYear} ResuAI. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: muted, textAlign: { xs: 'center', sm: 'right' } }}>
            Payments processed by Paddle, our Merchant of Record
          </Typography>
        </Box>

        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" sx={{ color: 'rgba(245, 247, 250, 0.45)', display: 'block', textAlign: 'center' }}>
            ResuAI is an AI-powered software platform. All services are delivered digitally via automated tools.
            No human-driven consulting services are provided.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
