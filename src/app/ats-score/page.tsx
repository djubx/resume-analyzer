"use client";

import { useState } from "react";
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

export default function ATSScorePage() {
  const [atsParsedData, setAtsParsedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const handleAtsParsedData = (data: any) => {
    setAtsParsedData(data);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setAtsParsedData(null);
  };

  const handleNewUpload = () => {
    setAtsParsedData(null);
    setError(null);
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
            ATS Score Check
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              maxWidth: 'md',
              mx: 'auto',
              color: 'text.secondary',
            }}
          >
            Upload your resume and get an instant ATS compatibility score.
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
            {!atsParsedData ? (
              <Box sx={{ textAlign: 'center' }}>
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
              <Box>
                <FaChartBar style={{ 
                  fontSize: '3rem', 
                  color: theme.palette.success.main,
                  marginBottom: theme.spacing(2),
                }} />
                <ATSScoreResult parsedData={atsParsedData} />
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