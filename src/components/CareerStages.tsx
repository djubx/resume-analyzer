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
    icon: <School sx={{ fontSize: 40, color: 'info.main' }} />
  },
  {
    title: "Mid-Career Professionals",
    description: "Highlight your growing expertise and achievements",
    icon: <Work sx={{ fontSize: 40, color: 'info.main' }} />
  },
  {
    title: "Executives",
    description: "Showcase your leadership and industry impact",
    icon: <Business sx={{ fontSize: 40, color: 'info.main' }} />
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
      {/* ========= Career Stages Section ========= */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 }, maxWidth: 680, mx: 'auto' }}>
              <Typography
                sx={{
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'info.main',
                  mb: 2,
                }}
              >
                For every career stage
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'text.primary',
                  mb: 2.5,
                }}
              >
                Tailored advice, wherever you are.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                From fresh grads to executives, ResuAI adapts its feedback, templates, and scoring to match your
                level and target role.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 3.5 }} justifyContent="center">
            {defaultCareerStages.map((stage, index) => (
              <Grid item xs={12} sm={6} md={4} key={stage.title}>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      p: { xs: 3.5, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: '16px',
                      position: 'relative',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(245, 247, 250, 0.04)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(245, 247, 250, 0.08)',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                      transition:
                        'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                        'border-color 0.4s ease, ' +
                        'box-shadow 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(0, 229, 255, 0.35)',
                        boxShadow:
                          '0 18px 44px -22px rgba(0, 229, 255, 0.3), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
                      },
                      // Top radial bloom
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 240,
                        height: 160,
                        background:
                          'radial-gradient(ellipse at center, rgba(0, 229, 255, 0.18), transparent 65%)',
                        pointerEvents: 'none',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        width: 72,
                        height: 72,
                        borderRadius: '18px',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                          'linear-gradient(135deg, rgba(63, 81, 181, 0.25), rgba(0, 229, 255, 0.18))',
                        border: '1px solid rgba(0, 229, 255, 0.28)',
                      }}
                    >
                      {stage.icon}
                    </Box>
                    <Typography
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: '1.35rem', md: '1.5rem' },
                        letterSpacing: '-0.01em',
                        color: 'text.primary',
                        mb: 1.5,
                      }}
                    >
                      {stage.title}
                    </Typography>
                    <Typography
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        color: 'text.secondary',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {stage.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========= Resume Upload Section ========= */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 10, md: 14 },
          overflow: 'hidden',
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Ambient background blobs */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(63, 81, 181, 0.32), transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: -140,
            right: -140,
            width: 540,
            height: 540,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.28), transparent 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  sx={{
                    display: 'inline-block',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'info.main',
                    mb: 2,
                  }}
                >
                  60-second analysis
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: 'text.primary',
                    mb: 2.5,
                  }}
                >
                  Ready to supercharge your job search?
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.6,
                    maxWidth: 520,
                  }}
                >
                  Drop in your resume and we'll show you exactly what to sharpen — with AI-powered scoring, fixes,
                  and a tailored action plan. Your dream job is one upload away.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <Box
                  sx={{
                    p: { xs: 3.5, md: 4 },
                    borderRadius: '18px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(245, 247, 250, 0.04)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(245, 247, 250, 0.1)',
                    boxShadow:
                      '0 22px 60px -28px rgba(0, 229, 255, 0.28), ' +
                      'inset 0 1px 0 0 rgba(255, 255, 255, 0.07)',
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '14px',
                        bgcolor: 'rgba(0, 229, 255, 0.1)',
                        border: '1px solid rgba(0, 229, 255, 0.25)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        src="/resume-icon.svg"
                        alt=""
                        width={40}
                        height={40}
                        style={{ opacity: 0.9 }}
                      />
                    </Box>
                  </Box>

                  <Box
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    sx={{
                      border: '2px dashed',
                      borderColor: isDragging ? 'info.main' : 'rgba(245, 247, 250, 0.14)',
                      borderRadius: '12px',
                      p: { xs: 2.5, md: 3 },
                      transition: 'all 0.25s ease',
                      bgcolor: isDragging ? alpha(theme.palette.info.main, 0.08) : 'transparent',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        color: 'text.primary',
                        mb: 0.75,
                      }}
                    >
                      Drop your resume or choose file
                    </Typography>
                    <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '0.875rem' }}>
                      PDF · max 5 MB
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
                      startIcon={<FaUpload />}
                      sx={{
                        py: 1.4,
                        px: 3.5,
                        borderRadius: '10px',
                        fontWeight: 600,
                        textTransform: 'none',
                        letterSpacing: '0.01em',
                        backgroundImage:
                          'linear-gradient(135deg, #3F51B5 0%, #1E2A78 100%)',
                        boxShadow:
                          '0 10px 24px -12px rgba(0, 229, 255, 0.22), ' +
                          'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
                        transition:
                          'transform 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.15), ' +
                          'box-shadow 0.28s ease',
                        '&:hover': {
                          backgroundImage:
                            'linear-gradient(135deg, #4A5CC5 0%, #2A3890 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow:
                            '0 14px 38px -10px rgba(0, 229, 255, 0.4), ' +
                            'inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
                        },
                      }}
                    >
                      Upload Resume
                    </Button>

                    {file && (
                      <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '0.875rem' }}>
                        Selected: {file.name} · {formatFileSize(file.size)}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}