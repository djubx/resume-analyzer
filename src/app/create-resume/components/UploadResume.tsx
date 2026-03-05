'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import { ResumeData } from '../types';
import { FaUpload, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import {
  Box,
  Typography,
  Button,
  Paper,
  CircularProgress,
  Alert,
  useTheme,
  alpha,
} from '@mui/material';

interface UploadResumeProps {
  data: ResumeData;
  onUpdate: (section: keyof ResumeData, field: string | null, value: any) => void;
  onArrayUpdate: (section: keyof ResumeData, value: any) => void;
  onArrayItemAdd: (section: keyof ResumeData, defaultItem: any) => void;
  onArrayItemRemove: (section: keyof ResumeData, index: number) => void;
  onStepComplete?: () => void;
}

const MAX_RETRIES = 2;
const RETRY_DELAY = 1000; // 1 second
const SUCCESS_DELAY = 1500; // 1.5 seconds to show success state

export default function UploadResume({ 
  data, 
  onUpdate, 
  onArrayUpdate,
  onStepComplete 
}: UploadResumeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const theme = useTheme();

  // Auto-navigate after success
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess && onStepComplete) {
      timer = setTimeout(() => {
        onStepComplete();
      }, SUCCESS_DELAY);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSuccess, onStepComplete]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const processFile = async (file: File, attempt: number = 0): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const textResponse = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!textResponse.ok) {
        const errorData = await textResponse.json();
        throw new Error(errorData.error || 'Failed to parse PDF');
      }

      const { text } = await textResponse.json();
      if (!text || text.trim().length === 0) {
        throw new Error('No text could be extracted from the PDF');
      }

      return text;
    } catch (error) {
      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY);
        return processFile(file, attempt + 1);
      }
      throw error;
    }
  };

  const analyzeResume = async (text: string, attempt: number = 0): Promise<any> => {
    try {
      const response = await fetch('/api/extract-resume-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfText: text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze resume');
      }

      return response.json();
    } catch (error) {
      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY);
        return analyzeResume(text, attempt + 1);
      }
      throw error;
    }
  };

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    setRetryCount(0);

    try {
      // Step 1: Process PDF
      const extractedText = await processFile(file);
      
      // Step 2: Analyze Resume
      const analyzedData = await analyzeResume(extractedText);

      // Step 3: Update Data
      Object.entries(analyzedData).forEach(([section, value]) => {
        if (section in data) {
          if (Array.isArray(value)) {
            onArrayUpdate(section as keyof ResumeData, value);
          } else if (typeof value === 'object' && value !== null) {
            Object.entries(value).forEach(([field, fieldValue]) => {
              onUpdate(section as keyof ResumeData, field, fieldValue);
            });
          } else {
            onUpdate(section as keyof ResumeData, null, value);
          }
        }
      });

      setIsSuccess(true);
      setError(null);
    } catch (err) {
      console.error('Error processing PDF:', err);
      setError(err instanceof Error ? err.message : 'Failed to process resume');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '42rem', mx: 'auto', p: 2 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          border: 2,
          borderStyle: 'dashed',
          borderColor: 'divider',
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: alpha(theme.palette.primary.main, 0.05),
        }}
      >
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          id="resume-upload"
          disabled={isLoading || isSuccess}
        />
        <label htmlFor="resume-upload">
          <Button
            component="span"
            variant="contained"
            color={isSuccess ? 'success' : 'primary'}
            disabled={isLoading || isSuccess}
            startIcon={
              isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : isSuccess ? (
                <FaCheckCircle />
              ) : (
                <FaUpload />
              )
            }
            sx={{ px: 4, py: 1.5 }}
          >
            {isLoading
              ? 'Processing Resume...'
              : isSuccess
              ? 'Resume Processed Successfully!'
              : 'Upload PDF Resume'}
          </Button>
        </label>

        {error && (
          <Alert
            severity="error"
            icon={<FaExclamationCircle />}
            sx={{ mt: 3, textAlign: 'left' }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              {error}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              Please try again or use a different PDF file. Make sure the PDF contains readable text.
            </Typography>
          </Alert>
        )}

        <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
          Upload your PDF resume to automatically fill in your information
        </Typography>
      </Paper>
    </Box>
  );
}