"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Switch,
  FormControlLabel,
  Chip,
  useTheme,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle, Star } from '@mui/icons-material';

interface PricingTier {
  title: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
  chip?: string;
}

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const theme = useTheme();

  const pricingTiers: PricingTier[] = [
    {
      title: "Free",
      price: {
        monthly: "$0",
        annually: "$0",
      },
      description: "Perfect for trying out our services",
      features: [
        "Basic Resume Analysis",
        "Limited ATS Score Checks",
        "Resume Builder (1 template)",
        "Resume Checklist",
      ],
      buttonText: "Get Started",
      buttonLink: "/resume-analyzer",
    },
    {
      title: "Pro",
      price: {
        monthly: "$12",
        annually: "$8",
      },
      description: "Everything you need for job applications",
      features: [
        "Advanced Resume Analysis",
        "Unlimited ATS Score Checks",
        "Resume Builder (All templates)",
        "Resume Checklist",
        "Priority Support",
        "Job-specific Recommendations",
      ],
      buttonText: "Try For Free",
      buttonLink: "/resume-analyzer",
      highlighted: true,
      chip: "Most Popular",
    },
    {
      title: "Enterprise",
      price: {
        monthly: "$29",
        annually: "$24",
      },
      description: "For teams and career professionals",
      features: [
        "Everything in Pro",
        "Team Management",
        "API Access",
        "Custom Branding",
        "Dedicated Support",
        "Advanced Analytics",
      ],
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: 12, 
          pb: 10, 
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(240, 248, 245, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Elements */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            opacity: 0.05,
            zIndex: 0,
            background: 'radial-gradient(circle at 20% 30%, rgba(0, 168, 150, 0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 168, 150, 0.4) 0%, transparent 40%)'
          }} 
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography 
              component="h1"
              sx={{ 
                mb: 3, 
                color: 'primary.main', 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Pricing Plans
            </Typography>
            
            <Box
              sx={{
                display: 'inline-block',
                p: 2,
                px: 4,
                mb: 6,
                borderRadius: '100px',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                border: '1px solid',
                borderColor: alpha(theme.palette.primary.main, 0.2),
              }}
            >
              <Typography 
                component="p"
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                }}
              >
                🎉 Limited Time Offer: All Features Are Currently FREE! 🎉
              </Typography>
            </Box>
            
            <Typography 
              component="p"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                mb: 6,
                color: 'text.secondary',
                fontSize: '1.25rem',
                lineHeight: 1.6
              }}
            >
              We're excited to offer all our premium features at no cost during our promotional period.
              Try everything, boost your career, and enjoy the full experience!
            </Typography>
            
            {/* Billing Toggle */}
            <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography 
                component="span"
                sx={{ 
                  color: !annualBilling ? 'primary.main' : 'text.secondary',
                  fontWeight: !annualBilling ? 600 : 400,
                }}
              >
                Monthly
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={annualBilling}
                    onChange={() => setAnnualBilling(!annualBilling)}
                    color="primary"
                    sx={{ mx: 1 }}
                  />
                }
                label=""
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                  component="span"
                  sx={{ 
                    color: annualBilling ? 'primary.main' : 'text.secondary',
                    fontWeight: annualBilling ? 600 : 400,
                  }}
                >
                  Annual
                </Typography>
                <Chip 
                  label="Save 20%" 
                  size="small" 
                  color="primary" 
                  sx={{ ml: 1, fontWeight: 500 }}
                />
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={4} justifyContent="center">
          {pricingTiers.map((tier, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Paper
                  elevation={tier.highlighted ? 6 : 0}
                  sx={{
                    p: 4,
                    height: 600,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: tier.highlighted 
                      ? 'primary.main' 
                      : 'divider',
                    bgcolor: tier.highlighted 
                      ? alpha(theme.palette.primary.main, 0.03)
                      : 'background.paper',
                    transform: tier.highlighted ? 'scale(1.05)' : 'none',
                    zIndex: tier.highlighted ? 2 : 1,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow: tier.highlighted 
                        ? '0 12px 24px rgba(0, 168, 150, 0.15)'
                        : '0 8px 16px rgba(0, 0, 0, 0.05)',
                    }
                  }}
                >
                  {tier.chip && (
                    <Chip
                      label={tier.chip}
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        right: 24,
                        fontWeight: 600,
                      }}
                    />
                  )}
                  
                  <Typography 
                    component="h2"
                    sx={{ 
                      mb: 3,
                      fontWeight: 600,
                      fontSize: '2rem',
                    }}
                  >
                    {tier.title}
                  </Typography>
                  
                  <Typography 
                    component="p"
                    sx={{ 
                      mb: 3,
                      color: 'text.secondary',
                      fontSize: '1rem',
                    }}
                  >
                    {tier.description}
                  </Typography>
                  
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'baseline' }}>
                    <Typography 
                      component="span"
                      sx={{ 
                        fontWeight: 700,
                        color: tier.highlighted ? 'primary.main' : 'text.primary',
                        fontSize: '3rem',
                        lineHeight: 1,
                      }}
                    >
                      {annualBilling ? tier.price.annually : tier.price.monthly}
                    </Typography>
                    <Typography 
                      component="span"
                      sx={{ 
                        ml: 1,
                        color: 'text.secondary',
                      }}
                    >
                      {annualBilling ? '/year' : '/month'}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'inline-block',
                    p: 1.5,
                    px: 3,
                    mb: 3,
                    borderRadius: '100px',
                    bgcolor: 'success.light',
                    color: 'success.dark',
                    fontWeight: 600,
                  }}>
                    Currently FREE!
                  </Box>
                  
                  <List sx={{ mb: 4, flexGrow: 1 }}>
                    {tier.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          primaryTypographyProps={{ 
                            color: 'text.secondary',
                            fontSize: '0.95rem',
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button
                    component={Link}
                    href={tier.buttonLink}
                    variant={tier.highlighted ? "contained" : "outlined"}
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: '8px',
                      fontWeight: 600,
                      mt: 'auto',
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            component="h2"
            sx={{ 
              mb: 3,
              fontWeight: 600,
              fontSize: '2rem',
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography 
                component="h3"
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                  fontSize: '1.25rem',
                }}
              >
                How long will the free promotion last?
              </Typography>
              <Typography 
                component="p"
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                We haven't set an end date yet! We want as many people as possible to benefit from our tools during this promotional period. We'll provide advance notice before ending the free access.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography 
                component="h3"
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                  fontSize: '1.25rem',
                }}
              >
                Are there any usage limits during the free period?
              </Typography>
              <Typography 
                component="p"
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                No! During this promotional period, you have unlimited access to all features across all plans. We want you to experience the full power of our platform without restrictions.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography 
                component="h3"
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                  fontSize: '1.25rem',
                }}
              >
                Will I be charged automatically when the free period ends?
              </Typography>
              <Typography 
                component="p"
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                Absolutely not. We don't collect payment information during the free period. When the promotion ends, you'll have the option to subscribe to a paid plan if you wish to continue using premium features.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography 
                component="h3"
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                  fontSize: '1.25rem',
                }}
              >
                Can I share this offer with friends?
              </Typography>
              <Typography 
                component="p"
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                Yes, please do! We encourage you to share this opportunity with friends, colleagues, or anyone who might benefit from our resume tools. The more people we can help, the better!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      {/* CTA Section */}
      <Box 
        sx={{ 
          py: 10,
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(240, 248, 245, 0.8) 100%)',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Typography 
              component="h2"
              sx={{ 
                mb: 3,
                fontWeight: 700,
                color: 'text.primary',
                fontSize: '2rem',
              }}
            >
              Start Optimizing Your Resume Today
            </Typography>
            
            <Typography 
              component="p"
              sx={{ 
                mb: 6,
                color: 'text.secondary',
                fontSize: '1.25rem',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Don't miss this opportunity to access all our premium features for free.
              Boost your job search and stand out from the competition!
            </Typography>
            
            <Button
              component={Link}
              href="/resume-analyzer"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Star />}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: '100px',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 4px 14px rgba(0, 168, 150, 0.4)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0, 168, 150, 0.6)',
                }
              }}
            >
              Get Started For Free
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
} 