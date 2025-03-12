'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { FaUpload } from "react-icons/fa";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import { School, Work, Business } from '@mui/icons-material';

interface CareerStage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultCareerStages: CareerStage[] = [
  {
    title: "New Graduates",
    description: "Stand out in entry-level job applications and highlight your skills",
    icon: <School sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "Mid-Career Professionals",
    description: "Highlight your growing expertise and achievements",
    icon: <Work sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "Executives",
    description: "Showcase your leadership and industry impact",
    icon: <Business sx={{ fontSize: 40, color: 'primary.main' }} />
  }
];

export default function CareerStages() {
  const theme = useTheme();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const storeFileAndRedirect = async (selectedFile: File) => {
    try {
      // Store file information in localStorage
      const fileInfo = {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
      };
      
      // Convert file to base64 for storage
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          // Store file info and redirect
          localStorage.setItem('pendingResumeFile', JSON.stringify(fileInfo));
          localStorage.setItem('pendingResumeData', e.target.result as string);
          
          // Redirect to resume analyzer page
          router.push('/resume-analyzer');
        }
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error('Error storing file:', error);
      // Redirect anyway
      router.push('/resume-analyzer');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please select a smaller file.');
        return;
      }
      
      // Check file type
      if (selectedFile.type !== 'application/pdf') {
        alert('Only PDF files are supported.');
        return;
      }
      
      storeFileAndRedirect(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      
      // Check file size (max 5MB)
      if (droppedFile.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please select a smaller file.');
        return;
      }
      
      // Check file type
      if (droppedFile.type !== 'application/pdf') {
        alert('Only PDF files are supported.');
        return;
      }
      
      storeFileAndRedirect(droppedFile);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      {/* Career Stages Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              sx={{ 
                mb: 8, 
                color: 'text.primary', 
                fontWeight: 600 
              }}
            >
              Tailored For Every Career Stage
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {defaultCareerStages.map((stage, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: '16px',
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100px',
                        background: 'radial-gradient(circle at center top, rgba(0, 168, 150, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
                        zIndex: 0,
                      }
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0, 168, 150, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                      }}
                    >
                      {stage.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'primary.main',
                        zIndex: 1,
                      }}
                    >
                      {stage.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        zIndex: 1,
                      }}
                    >
                      {stage.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Resume Upload Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #1976d2 0%, #0288d1 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'white',
                  }}
                >
                  Ready to supercharge your job search?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Be among the first to supercharge your job search with our AI-powered tools—your dream job is just a click away.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0, 168, 150, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        src="/resume-icon.svg"
                        alt="Resume Icon"
                        width={40}
                        height={40}
                        style={{ opacity: 0.8 }}
                      />
                    </Box>
                  </Box>
                  
                  <Box
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    sx={{
                      border: `2px dashed ${isDragging ? theme.palette.primary.main : 'transparent'}`,
                      borderRadius: '8px',
                      p: 2,
                      transition: 'all 0.2s ease',
                      bgcolor: isDragging ? alpha(theme.palette.primary.main, 0.05) : 'transparent',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      Drop your resume here or choose file
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: 'text.secondary',
                      }}
                    >
                      PDF (Max 5MB)
                    </Typography>
                    
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                    />
                    
                    <Button
                      variant="contained"
                      onClick={handleButtonClick}
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: '8px',
                        fontWeight: 500,
                      }}
                      startIcon={<FaUpload />}
                    >
                      Upload Resume
                    </Button>
                    
                    {file && (
                      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                        Selected: {file.name} ({formatFileSize(file.size)})
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
} 