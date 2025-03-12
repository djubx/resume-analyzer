"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ResumeUploader from "@/components/ResumeUploader";
import ResumeAnalysis from "@/components/ResumeAnalysis";
import Navbar from "@/components/Navbar";
import ResumeSteps from "@/components/ResumeSteps";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Cookies from 'js-cookie';
import { FaFileAlt, FaChartLine } from "react-icons/fa";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Alert,
  useTheme,
  alpha,
} from '@mui/material';

interface AnalysisResult {
  issues: Array<{
    type: string;
    description: string;
    suggestion: string;
  }>;
  strengths: string[];
  overallScore: number;
}

export default function ResumeAnalyzer() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setError(null);

    const personalizedFeedback = result.issues.map(issue => ({
      text: issue.suggestion,
      checked: false
    }));
    Cookies.set('personalizedFeedback', JSON.stringify(personalizedFeedback), { expires: 30 });
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setAnalysisResult(null);
  };

  const handleNewUpload = () => {
    setAnalysisResult(null);
    setError(null);
    Cookies.remove('personalizedFeedback');
  };

  // Filter services to exclude the AI Resume Analyzer
  const filteredServices = [
    {
      icon: <FaFileAlt />,
      title: "Resume Builder",
      description: "Craft your resume with tools tailored to your career goals.",
      href: "/create-resume"
    },
    {
      icon: <FaFileAlt />,
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
          pt: 10, 
          pb: 6, 
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(240, 248, 245, 0.8) 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              mb: 2,
              color: 'primary.main',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            AI Resume Analyzer
          </Typography>
          <Typography 
            variant="h5" 
            component="p"
            sx={{ 
              mb: 4,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Our AI checks formatting, keywords and many more to help you shine
          </Typography>
          <Typography 
            variant="body1" 
            component="p"
            sx={{ 
              mb: 6,
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Upload your resume and receive instant, data-driven insights to refine your resume and stand out in today's job market
          </Typography>
          
          {/* Resume Uploader Card */}
          <Box sx={{ maxWidth: '500px', mx: 'auto', mb: 8 }}>
            {!analysisResult ? (
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mb: 2 
                }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <FaFileAlt style={{ fontSize: '1.75rem' }} />
                  </Box>
                </Box>
                <Typography 
                  variant="h6" 
                  align="center" 
                  sx={{ mb: 3 }}
                >
                  Drop your resume here or choose file
                </Typography>
                <Typography 
                  variant="body2" 
                  align="center" 
                  sx={{ mb: 2, color: 'text.secondary' }}
                >
                  PDF (Max 5MB)
                </Typography>
                <ResumeUploader 
                  onAnalysisComplete={handleAnalysisComplete} 
                  onError={handleError} 
                  onNewUpload={handleNewUpload}
                />
              </Paper>
            ) : (
              <Paper 
                elevation={2}
                sx={{ 
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <FaChartLine style={{ 
                    fontSize: '3rem', 
                    color: theme.palette.success.main,
                    marginBottom: theme.spacing(2),
                  }} />
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Analysis Complete
                  </Typography>
                </Box>
                <ResumeAnalysis result={analysisResult} />
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNewUpload}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Analyze Another Resume
                  </Button>
                </Box>
              </Paper>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Alert 
                  severity="error" 
                  sx={{ mt: 2 }}
                >
                  {error}
                </Alert>
              </motion.div>
            )}
          </Box>
        </Container>
      </Box>
      
      {/* Steps Section */}
      <ResumeSteps />
      
      {/* More Services Section */}
      <Services 
        title="More Services" 
        services={filteredServices}
      />
      
      {/* FAQ Section */}
      <FAQ />
    </Box>
  );
}