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

// Default services data
const defaultServices = [
  {
    icon: <FaFileAlt />,
    title: "AI Resume Analyzer",
    description: "Get personalized insights to make your resume stand out",
    href: "/resume-analyzer"
  },
  {
    icon: <FaWrench />,
    title: "Resume Builder",
    description: "Craft your resume with tools tailored to your career goals.",
    href: "/create-resume"
  },
  {
    icon: <FaListAlt />,
    title: "Resume Checklist",
    description: "Ensure your resume covers all essential elements",
    href: "/resume-checklist"
  },
  {
    icon: <FaChartLine />,
    title: "ATS Score",
    description: "Optimize your resume to pass 95% of ATS filters",
    href: "/ats-score"
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
                borderColor: 'rgba(0, 168, 150, 0.4)',
                boxShadow: 'none',
                overflow: 'hidden',
                backgroundColor: 'rgba(240, 248, 245, 0.5)',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 20px rgba(0, 168, 150, 0.1)',
                  borderColor: 'rgba(0, 168, 150, 0.6)',
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
                  backgroundColor: 'rgba(0, 168, 150, 0.08)',
                  zIndex: 0,
                }}
              />
              
              {/* Icon Circle */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 40,
                  left: 40,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 168, 150, 0.15)',
                  color: 'primary.main',
                  fontSize: '2rem',
                  zIndex: 1,
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '.MuiCard-root:hover &': {
                    transform: 'scale(1.05)',
                    backgroundColor: 'rgba(0, 168, 150, 0.2)',
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