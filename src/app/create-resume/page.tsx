'use client';

import { useState, createElement, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResumeData } from './types';
import { softwareEngineerData } from './utils/sampleData';
import { templates, DEFAULT_TEMPLATE } from './constants/page-constants';
import { generatePDF, PDFConfig } from './utils/pdfConverter';
import { trackEvent } from '@/lib/amplitude';
import { client } from '@/sanity/lib/client';
import Navbar from '@/components/Navbar';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Grid,
  Chip,
  CircularProgress,
  Alert,
  Fab,
  Tooltip,
  useTheme,
  alpha,
  Drawer,
  Snackbar,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  Palette as PaletteIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
  Share as ShareIcon,
  ContentCopy as ContentCopyIcon,
} from '@mui/icons-material';
import { Twitter, LinkedIn } from '@mui/icons-material';

export default function CreateResumeV2() {
  const [formData, setFormData] = useState<ResumeData>(softwareEngineerData);
  const [selectedTemplate, setSelectedTemplate] = useState(DEFAULT_TEMPLATE);
  const [templateDialogOpen, setTemplateDialogOpen] = useState(false);
  const [uploadDrawerOpen, setUploadDrawerOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [expandedPanel, setExpandedPanel] = useState<string>('personal');
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [copySnackbarOpen, setCopySnackbarOpen] = useState(false);
  const [pageLoadTime] = useState(Date.now());
  const [uploadStartTime, setUploadStartTime] = useState<number | null>(null);
  const [downloadStartTime, setDownloadStartTime] = useState<number | null>(null);
  const [shareableLink, setShareableLink] = useState<string | null>(null);
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);
  const theme = useTheme();
  const previewRef = useRef<HTMLDivElement>(null);

  // Track page load
  useEffect(() => {
    trackEvent('Resume Builder - Page Loaded');
    trackEvent('Resume Builder - Session Started');
  }, []);

  const handleUpdate = (section: keyof ResumeData, field: string | null, value: any) => {
    setFormData(prev => {
      if (!field) {
        return { ...prev, [section]: value };
      }
      const sectionData = prev[section];
      if (typeof sectionData === 'object' && sectionData !== null) {
        return {
          ...prev,
          [section]: { ...sectionData, [field]: value }
        };
      }
      return prev;
    });
  };

  const handleArrayUpdate = (section: keyof ResumeData, index: number, field: string, value: any) => {
    setFormData(prev => {
      const array = prev[section] as any[];
      const updated = [...array];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const handleArrayAdd = (section: keyof ResumeData, defaultItem: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...(prev[section] as any[]), defaultItem]
    }));
  };

  const handleArrayRemove = (section: keyof ResumeData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).filter((_, i) => i !== index)
    }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setUploadError('Please upload a PDF file');
      return;
    }

    setIsUploading(true);
    setUploadError(null);
    const startTime = Date.now();
    setUploadStartTime(startTime);
    trackEvent('Resume Builder - Upload Started');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const textResponse = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!textResponse.ok) {
        throw new Error('Failed to parse PDF');
      }

      const { text } = await textResponse.json();

      const analyzeResponse = await fetch('/api/extract-resume-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfText: text }),
      });

      if (!analyzeResponse.ok) {
        throw new Error('Failed to analyze resume');
      }

      const extractedData = await analyzeResponse.json();
      setFormData(extractedData);
      setUploadDrawerOpen(false);
      setExpandedPanel('personal');

      const duration = Date.now() - startTime;
      trackEvent('Resume Builder - Upload Completed', { success: true, duration });
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Failed to process resume');
      const duration = uploadStartTime ? Date.now() - uploadStartTime : undefined;
      trackEvent('Resume Builder - Upload Completed', { success: false, duration });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    const startTime = Date.now();
    setDownloadStartTime(startTime);
    trackEvent('Resume Builder - Download Started', { template: selectedTemplate });

    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      const pdfConfig: PDFConfig = {
        format: 'A4',
        margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
        scale: 1.0,
        landscape: false,
        printBackground: true,
        preferCSSPageSize: false,
        displayHeaderFooter: false
      };

      await generatePDF(
        'resume-preview',
        `${formData.contactInformation.fullName?.toLowerCase().replace(/\s+/g, '-') || 'resume'}.pdf`,
        pdfConfig
      );

      const timeToDownload = Date.now() - pageLoadTime;
      const downloadDuration = Date.now() - startTime;
      trackEvent('Resume Builder - Download Completed', {
        template: selectedTemplate,
        timeToDownload,
        downloadDuration
      });

      // Show share dialog after successful download
      setTimeout(() => setShareDialogOpen(true), 500);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Generate shareable resume link
  const handleGenerateShareableLink = async () => {
    if (shareableLink) {
      // Link already generated, just copy it
      navigator.clipboard.writeText(shareableLink);
      setCopySnackbarOpen(true);
      return;
    }

    setIsGeneratingLink(true);
    try {
      // Generate unique profile ID
      const profileId = `resume-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      // Create shareable profile document in Sanity
      const shareableProfile = await client.create({
        _type: 'shareableProfile',
        profileId,
        resumeData: formData,
        selectedTemplate,
        customizations: {
          showContactInfo: true,
          theme: 'default'
        },
        createdAt: new Date().toISOString(),
      });

      const shareUrl = `${window.location.origin}/shared-profile/${profileId}`;
      setShareableLink(shareUrl);

      // Copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      setCopySnackbarOpen(true);

      // Track the share link generation
      trackEvent('Resume Builder - Shareable Link Generated', { platform: 'copy' });
    } catch (error) {
      console.error('Error generating shareable link:', error);
    } finally {
      setIsGeneratingLink(false);
    }
  };

  // Handle share actions
  const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
    trackEvent('Resume Builder - Share Clicked', { platform });

    const shareText = `Just created a professional resume in seconds using Resume Checkers! 🎨✨`;
    const shareUrl = window.location.origin;

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
        setCopySnackbarOpen(true);
        break;
    }
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
        "name": "Resume Builder",
        "item": "https://resumecheckers.com/create-resume"
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Resume Builder - Free Professional Resume Creator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://resumecheckers.com/create-resume",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "50+ professional resume templates",
      "Real-time preview",
      "PDF download",
      "ATS-friendly templates",
      "One-click template switching",
      "AI resume data extraction",
      "Shareable resume links"
    ],
    "description": "Free professional resume builder with 50+ ATS-friendly templates. Create, customize, and download your resume in minutes with real-time preview and instant PDF generation."
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
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

      {/* Main Split Screen Layout */}
      <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        {/* Left Panel - Edit Controls */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            overflowY: 'auto',
            borderRight: { md: 1 },
            borderColor: 'divider',
            p: 3,
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h1" component="h1" sx={{ mb: 1, fontSize: '2rem' }}>
              Create Your Resume
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Edit your information below and watch your resume update in real-time
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<UploadIcon />}
                  onClick={() => setUploadDrawerOpen(true)}
                >
                  Upload PDF
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PaletteIcon />}
                  onClick={() => setTemplateDialogOpen(true)}
                  sx={{
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': {
                        boxShadow: '0 0 0 0 rgba(0, 150, 136, 0.7)',
                        transform: 'scale(1)'
                      },
                      '50%': {
                        boxShadow: '0 0 0 10px rgba(0, 150, 136, 0)',
                        transform: 'scale(1.05)'
                      },
                    },
                    '&:hover': {
                      animation: 'none',
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  Change Template
                </Button>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 1 }}>
                💡 Upload your current resume to auto-fill all fields instantly
              </Typography>
            </Box>
          </Box>

          {/* Personal Information */}
          <Accordion
            expanded={expandedPanel === 'personal'}
            onChange={() => {
              const newPanel = expandedPanel === 'personal' ? '' : 'personal';
              setExpandedPanel(newPanel);
              if (newPanel) trackEvent('Resume Builder - Section Expanded', { section: 'personal' });
            }}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Personal Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Full Name"
                  value={formData.contactInformation.fullName || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'fullName', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Email"
                  value={formData.contactInformation.email || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'email', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Phone"
                  value={formData.contactInformation.phoneNumber || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'phoneNumber', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Location"
                  value={formData.contactInformation.location || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'location', e.target.value)}
                  fullWidth
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Professional Summary */}
          <Accordion
            expanded={expandedPanel === 'summary'}
            onChange={() => {
              const newPanel = expandedPanel === 'summary' ? '' : 'summary';
              setExpandedPanel(newPanel);
              if (newPanel) trackEvent('Resume Builder - Section Expanded', { section: 'summary' });
            }}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Professional Summary
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                multiline
                rows={4}
                value={formData.professionalSummary || ''}
                onChange={(e) => handleUpdate('professionalSummary', null, e.target.value)}
                fullWidth
                placeholder="Brief professional summary..."
              />
            </AccordionDetails>
          </Accordion>

          {/* Work Experience */}
          <Accordion
            expanded={expandedPanel === 'experience'}
            onChange={() => {
              const newPanel = expandedPanel === 'experience' ? '' : 'experience';
              setExpandedPanel(newPanel);
              if (newPanel) trackEvent('Resume Builder - Section Expanded', { section: 'experience' });
            }}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Work Experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {formData.workExperience.map((exp, index) => (
                  <Paper key={index} sx={{ p: 2, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Position {index + 1}
                      </Typography>
                      {formData.workExperience.length > 1 && (
                        <IconButton size="small" onClick={() => handleArrayRemove('workExperience', index)}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Box>
                    <TextField
                      label="Job Title"
                      value={exp.jobTitle || ''}
                      onChange={(e) => handleArrayUpdate('workExperience', index, 'jobTitle', e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label="Company"
                      value={exp.companyName || ''}
                      onChange={(e) => handleArrayUpdate('workExperience', index, 'companyName', e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label="Dates"
                      value={exp.dates || ''}
                      onChange={(e) => handleArrayUpdate('workExperience', index, 'dates', e.target.value)}
                      fullWidth
                      placeholder="e.g., Jan 2020 - Present"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label="Location"
                      value={exp.location || ''}
                      onChange={(e) => handleArrayUpdate('workExperience', index, 'location', e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Paper>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => handleArrayAdd('workExperience', {
                    jobTitle: '',
                    companyName: '',
                    location: '',
                    dates: '',
                    responsibilities: []
                  })}
                  variant="outlined"
                >
                  Add Experience
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Education */}
          <Accordion
            expanded={expandedPanel === 'education'}
            onChange={() => {
              const newPanel = expandedPanel === 'education' ? '' : 'education';
              setExpandedPanel(newPanel);
              if (newPanel) trackEvent('Resume Builder - Section Expanded', { section: 'education' });
            }}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Education
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {formData.education.map((edu, index) => (
                  <Paper key={index} sx={{ p: 2, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Education {index + 1}
                      </Typography>
                      {formData.education.length > 1 && (
                        <IconButton size="small" onClick={() => handleArrayRemove('education', index)}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Box>
                    <TextField
                      label="Degree"
                      value={edu.degree || ''}
                      onChange={(e) => handleArrayUpdate('education', index, 'degree', e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label="Institution"
                      value={edu.institution || ''}
                      onChange={(e) => handleArrayUpdate('education', index, 'institution', e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label="Graduation Date"
                      value={edu.graduationDate || ''}
                      onChange={(e) => handleArrayUpdate('education', index, 'graduationDate', e.target.value)}
                      fullWidth
                    />
                  </Paper>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => handleArrayAdd('education', { degree: '', institution: '', graduationDate: '' })}
                  variant="outlined"
                >
                  Add Education
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Skills */}
          <Accordion
            expanded={expandedPanel === 'skills'}
            onChange={() => {
              const newPanel = expandedPanel === 'skills' ? '' : 'skills';
              setExpandedPanel(newPanel);
              if (newPanel) trackEvent('Resume Builder - Section Expanded', { section: 'skills' });
            }}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Skills
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                multiline
                rows={3}
                value={formData.skills.join(', ')}
                onChange={(e) => handleUpdate('skills', null, e.target.value.split(',').map(s => s.trim()))}
                fullWidth
                placeholder="JavaScript, Python, React, etc. (comma separated)"
                helperText="Separate skills with commas"
              />
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Right Panel - Live Preview */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            width: '55%',
            bgcolor: alpha(theme.palette.primary.main, 0.03),
            p: 3,
            overflowY: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Live Preview
              </Typography>
              <Button
                variant="contained"
                startIcon={isGenerating ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}
                onClick={handleDownloadPDF}
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Download PDF'}
              </Button>
            </Box>

            <Paper
              id="resume-preview"
              ref={previewRef}
              elevation={4}
              sx={{
                bgcolor: 'white',
                p: 4,
                minHeight: '297mm', // A4 height
                width: '100%',
              }}
            >
              {createElement(
                templates.find(t => t.id === selectedTemplate)?.component || templates[0].component,
                { data: formData }
              )}
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Template Selector Dialog */}
      <Dialog
        open={templateDialogOpen}
        onClose={() => setTemplateDialogOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h3">Choose Template</Typography>
            <IconButton onClick={() => setTemplateDialogOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid container spacing={3}>
            {templates.map((template) => (
              <Grid item xs={12} sm={6} md={4} key={template.id}>
                <Paper
                  elevation={selectedTemplate === template.id ? 8 : 2}
                  onClick={() => {
                    const previousTemplate = selectedTemplate;
                    setSelectedTemplate(template.id);
                    setTemplateDialogOpen(false);
                    if (previousTemplate !== template.id) {
                      trackEvent('Resume Builder - Template Changed', {
                        newTemplate: template.id,
                        previousTemplate
                      });
                    }
                  }}
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    border: 2,
                    borderColor: selectedTemplate === template.id ? 'primary.main' : 'transparent',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      borderColor: 'primary.light',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      overflow: 'hidden',
                      borderRadius: 1,
                      bgcolor: 'background.default',
                      mb: 2,
                      position: 'relative',
                    }}
                  >
                    <Box sx={{ transform: 'scale(0.2)', transformOrigin: 'top left', width: '500%' }}>
                      {createElement(template.component, { data: formData })}
                    </Box>
                    {selectedTemplate === template.id && (
                      <Chip
                        icon={<CheckCircleIcon />}
                        label="Selected"
                        color="primary"
                        size="small"
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                      />
                    )}
                  </Box>
                  <Typography variant="h4" sx={{ mb: 0.5 }}>
                    {template.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {template.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Dialog>

      {/* Upload Drawer */}
      <Drawer
        anchor="right"
        open={uploadDrawerOpen}
        onClose={() => setUploadDrawerOpen(false)}
      >
        <Box sx={{ width: 400, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4">Upload Resume</Typography>
            <IconButton onClick={() => setUploadDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Paper
            sx={{
              p: 4,
              border: 2,
              borderStyle: 'dashed',
              borderColor: 'divider',
              textAlign: 'center',
              bgcolor: alpha(theme.palette.primary.main, 0.05),
            }}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="resume-upload-input"
              disabled={isUploading}
            />
            <label htmlFor="resume-upload-input">
              <Button
                component="span"
                variant="contained"
                disabled={isUploading}
                startIcon={isUploading ? <CircularProgress size={20} color="inherit" /> : <UploadIcon />}
              >
                {isUploading ? 'Processing...' : 'Upload PDF'}
              </Button>
            </label>

            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              Upload your PDF resume to automatically fill in your information
            </Typography>

            {uploadError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {uploadError}
              </Alert>
            )}
          </Paper>
        </Box>
      </Drawer>

      {/* Floating Download Button (Mobile) */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Fab
          color="primary"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={handleDownloadPDF}
        >
          <DownloadIcon />
        </Fab>
      </Box>

      {/* Share Dialog */}
      <Dialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon color="success" sx={{ fontSize: 32 }} />
            <Typography variant="h3">Resume Downloaded! 🎉</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Your professional resume is ready! Share your success with your network and help others discover this amazing tool.
            </Typography>

            {/* Shareable Resume Link */}
            <Paper
              sx={{
                mb: 3,
                p: 3,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                border: 2,
                borderColor: 'primary.main',
                borderStyle: 'dashed',
              }}
            >
              <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 600, color: 'primary.main' }}>
                📎 Share Your Resume
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                Generate a shareable link to your resume that you can send to recruiters, colleagues, or add to your portfolio.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={isGeneratingLink ? <CircularProgress size={20} color="inherit" /> : <ShareIcon />}
                onClick={handleGenerateShareableLink}
                disabled={isGeneratingLink}
                sx={{ py: 1.5, fontWeight: 600 }}
              >
                {shareableLink ? 'Copy Shareable Link' : isGeneratingLink ? 'Generating Link...' : 'Generate Shareable Link'}
              </Button>
              {shareableLink && (
                <Typography variant="body2" sx={{ mt: 2, color: 'success.main', textAlign: 'center' }}>
                  ✓ Link copied to clipboard!
                </Typography>
              )}
            </Paper>

            <Divider sx={{ my: 2 }}>
              <Chip label="OR" />
            </Divider>

            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              Share on social:
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Twitter />}
                  onClick={() => handleShare('twitter')}
                  sx={{
                    py: 1.5,
                    borderColor: '#1DA1F2',
                    color: '#1DA1F2',
                    '&:hover': {
                      borderColor: '#1DA1F2',
                      bgcolor: alpha('#1DA1F2', 0.1),
                    },
                  }}
                >
                  Twitter
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<LinkedIn />}
                  onClick={() => handleShare('linkedin')}
                  sx={{
                    py: 1.5,
                    borderColor: '#0A66C2',
                    color: '#0A66C2',
                    '&:hover': {
                      borderColor: '#0A66C2',
                      bgcolor: alpha('#0A66C2', 0.1),
                    },
                  }}
                >
                  LinkedIn
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<ContentCopyIcon />}
                  onClick={() => handleShare('copy')}
                  sx={{ py: 1.5 }}
                >
                  Copy Link
                </Button>
              </Grid>
            </Grid>

            <Paper
              sx={{
                mt: 3,
                p: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                border: 1,
                borderColor: 'divider',
              }}
            >
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                "Just created a professional resume in seconds using Resume Checkers! 🎨✨"
              </Typography>
            </Paper>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={() => setShareDialogOpen(false)} variant="contained" fullWidth>
            Done
          </Button>
        </DialogActions>
      </Dialog>

      {/* Copy Snackbar */}
      <Snackbar
        open={copySnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setCopySnackbarOpen(false)}
        message="Link copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}
