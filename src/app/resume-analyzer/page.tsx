"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ResumeUploader from "@/components/ResumeUploader";
import ResumeAnalysis from "@/components/ResumeAnalysis";
import Navbar from "@/components/Navbar";
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

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      <Navbar />
      <Container 
        component="main" 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          py: 6,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: theme.spacing(6) }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 4,
              color: 'primary.main',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Resume Analyzer
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              maxWidth: 'md',
              mx: 'auto',
              mb: 6,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            Upload your resume and get instant AI-powered feedback to improve your chances of landing that dream job.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ width: '100%', maxWidth: '42rem' }}
        >
          <Paper 
            elevation={8}
            sx={{ 
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }}
          >
            {!analysisResult ? (
              <Box sx={{ textAlign: 'center' }}>
                <FaFileAlt style={{ 
                  fontSize: '3rem', 
                  color: theme.palette.primary.main,
                  marginBottom: theme.spacing(2),
                }} />
                <ResumeUploader 
                  onAnalysisComplete={handleAnalysisComplete} 
                  onError={handleError} 
                  onNewUpload={handleNewUpload}
                />
              </Box>
            ) : (
              <Box>
                <FaChartLine style={{ 
                  fontSize: '3rem', 
                  color: theme.palette.success.main,
                  marginBottom: theme.spacing(2),
                }} />
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
              </Box>
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
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}