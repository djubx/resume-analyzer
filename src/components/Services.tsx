'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';

// Define service icons
import { FaFileAlt, FaWrench, FaListAlt, FaChartLine } from 'react-icons/fa';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface ServicesProps {
  title?: string;
  services?: ServiceItem[];
}

// Priority-ordered services: Builder → Analyzer → ATS → Checklist
const defaultServices = [
  {
    icon: <FaWrench />,
    title: "Resume Builder",
    description: "Craft a standout resume from 50+ expert-designed templates, powered by AI suggestions.",
    href: "/create-resume"
  },
  {
    icon: <FaFileAlt />,
    title: "AI Resume Analyzer",
    description: "Instant, deep-dive insights that show you exactly what to improve — line by line.",
    href: "/resume-analyzer"
  },
  {
    icon: <FaChartLine />,
    title: "ATS Score",
    description: "Check how your resume scores against Applicant Tracking Systems used by 95% of recruiters.",
    href: "/ats-score"
  },
  {
    icon: <FaListAlt />,
    title: "Resume Checklist",
    description: "A smart, personalized checklist that ensures nothing essential is missing.",
    href: "/resume-checklist"
  }
];

export default function Services({ title = "Our Services", services = defaultServices }: ServicesProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" sx={{ mb: 8, color: 'text.primary', fontWeight: 600 }}>
        {title}
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 'none',
                overflow: 'hidden',
                backgroundColor: 'background.paper',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 18px 40px -18px rgba(0, 229, 255, 0.25)',
                  borderColor: 'rgba(0, 229, 255, 0.4)',
                }
              }}
            >
              {/* Background Shape */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '70%',
                  height: '35%',
                  borderBottomRightRadius: '100%',
                  background: 'radial-gradient(circle at top left, rgba(63, 81, 181, 0.22), transparent 70%)',
                  zIndex: 0,
                }}
              />
              
              {/* Icon Circle */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 40,
                  left: 40,
                  width: 72,
                  height: 72,
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.25), rgba(0, 229, 255, 0.15))',
                  border: '1px solid rgba(0, 229, 255, 0.25)',
                  color: 'info.main',
                  fontSize: '1.75rem',
                  zIndex: 1,
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '.MuiCard-root:hover &': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                {service.icon}
              </Box>
              
              <CardContent sx={{ 
                p: 4, 
                pt: '160px', 
                pb: 5,
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                zIndex: 1,
                position: 'relative',
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600,
                    fontSize: '1.75rem',
                    color: 'text.primary',
                  }}
                >
                  {service.title}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 3,
                    flexGrow: 1,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
                
                <Button
                  component={Link}
                  href={service.href}
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 'auto',
                    py: 1.5,
                    borderRadius: '100px',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 