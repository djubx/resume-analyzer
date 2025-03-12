import React from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaChartLine, FaEdit } from 'react-icons/fa';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ResumeStepsProps {
  title?: string;
  subtitle?: string;
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Upload Your Resume",
    description: "Let our AI do the heavy lifting by scanning your resume for key insights",
    icon: <FaUpload style={{ fontSize: '24px' }} />
  },
  {
    number: "02",
    title: "View Your Analysis",
    description: "Get an overall score, ATS compatibility, and actionable recommendations",
    icon: <FaChartLine style={{ fontSize: '24px' }} />
  },
  {
    number: "03",
    title: "Improve Your Resume",
    description: "Use our AI suggestions to polish your resume for better results",
    icon: <FaEdit style={{ fontSize: '24px' }} />
  }
];

export default function ResumeSteps({ 
  title = "Just 3 Steps", 
  subtitle = "Quickly optimize your resume with these simple steps" 
}: ResumeStepsProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              color: 'text.primary'
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {defaultSteps.map((step, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    height: '100%'
                  }}
                >
                  {/* Step Number Circle */}
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {step.number}
                    </Typography>
                  </Box>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: 'rgba(0, 168, 150, 0.1)',
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {step.description}
                  </Typography>

                  {/* Connector Line (except for the last item) */}
                  {index < defaultSteps.length - 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 35,
                        right: '-50%',
                        width: '100%',
                        height: '2px',
                        bgcolor: 'rgba(0, 168, 150, 0.2)',
                        display: { xs: 'none', sm: 'block' },
                        zIndex: 1,
                      }}
                    />
                  )}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 