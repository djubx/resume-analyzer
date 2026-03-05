'use client';

import { Box, Container, Typography, Grid, Link as MuiLink, Divider } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#003366',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h3" sx={{ mb: 2, fontSize: '1.2rem', fontWeight: 600 }}>
              Resume Checkers
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
              AI-powered resume analysis and building platform. Create professional resumes in seconds.
            </Typography>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/resume-analyzer" passHref legacyBehavior>
                <MuiLink sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Resume Analyzer
                </MuiLink>
              </Link>
              <Link href="/ats-score" passHref legacyBehavior>
                <MuiLink sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  ATS Score Checker
                </MuiLink>
              </Link>
              <Link href="/create-resume" passHref legacyBehavior>
                <MuiLink sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Resume Builder
                </MuiLink>
              </Link>
              <Link href="/resume-checklist" passHref legacyBehavior>
                <MuiLink sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Resume Checklist
                </MuiLink>
              </Link>
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                href="mailto:support@resumecheckers.com"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}
              >
                Contact Support
              </MuiLink>
              <MuiLink
                href="mailto:privacy@resumecheckers.com"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}
              >
                Privacy Inquiries
              </MuiLink>
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/terms" passHref legacyBehavior>
                <MuiLink sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Terms of Service
                </MuiLink>
              </Link>
              <Link href="/privacy-policy" passHref legacyBehavior>
                <MuiLink sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Privacy Policy
                </MuiLink>
              </Link>
              <Link href="/refund-policy" passHref legacyBehavior>
                <MuiLink sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Refund Policy
                </MuiLink>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Bar */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © {currentYear} Resume Checkers. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: { xs: 'center', sm: 'right' } }}>
            Payments processed by Paddle, our Merchant of Record
          </Typography>
        </Box>

        {/* Service Statement */}
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'block', textAlign: 'center' }}>
            Resume Checkers is an AI-powered software platform. All services are delivered digitally via automated tools.
            No human-driven consulting services are provided.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
