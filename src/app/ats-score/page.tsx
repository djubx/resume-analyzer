"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ATSScoreUploader from "@/components/ATSScoreUploader";
import ATSScoreResult from "@/components/ATSScoreResult";
import { FaCloudUploadAlt, FaChartBar } from "react-icons/fa";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Alert,
  useTheme,
} from '@mui/material';
import { trackPageView } from "@/lib/amplitude";

export default function ATSScorePage() {
  const [atsParsedData, setAtsParsedData] = useState<any>(null);
  const [documentId, setDocumentId] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    trackPageView('ATS Score');
  }, []);

  const handleAtsParsedData = (data: any, docId?: string) => {
    setAtsParsedData(data);
    setDocumentId(docId);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setAtsParsedData(null);
    setDocumentId(undefined);
  };

  const handleNewUpload = () => {
    setAtsParsedData(null);
    setDocumentId(undefined);
    setError(null);
  };

  // JSON-LD Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://resumecheckers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "ATS Resume Scanner",
        "item": "https://resumecheckers.com/ats-score"
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ATS Resume Scanner & Profile Creator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://resumecheckers.com/ats-score",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "ATS compatibility analysis",
      "Resume data extraction",
      "Shareable resume profile creation",
      "Professional resume parsing",
      "Contact information extraction"
    ],
    "description": "Free ATS resume scanner that analyzes your resume for Applicant Tracking System compatibility and creates a shareable professional profile."
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <Navbar />
      <Container 
        component="main" 
        maxWidth="lg"
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          py: 6,
          width: '100%'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: theme.spacing(6), width: '100%' }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 4,
              color: 'primary.main',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Resume Profile Creator
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
            Upload your resume to analyze it and create a shareable profile.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ width: '100%', maxWidth: '800px' }}
        >
          <Paper 
            elevation={8}
            sx={{ 
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 2,
              width: '100%'
            }}
          >
            {!atsParsedData ? (
              <Box sx={{ textAlign: 'center', width: '100%' }}>
                <FaCloudUploadAlt style={{ 
                  fontSize: '3rem', 
                  color: theme.palette.primary.main,
                  marginBottom: theme.spacing(2),
                }} />
                <ATSScoreUploader
                  onParsedData={handleAtsParsedData}
                  onError={handleError}
                  onNewUpload={handleNewUpload}
                />
              </Box>
            ) : (
              <Box sx={{ width: '100%' }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <FaChartBar style={{ 
                    fontSize: '3rem', 
                    color: theme.palette.success.main,
                    marginBottom: theme.spacing(2),
                  }} />
                </Box>
                <ATSScoreResult parsedData={atsParsedData} documentId={documentId} />
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
                    Upload Another Resume
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