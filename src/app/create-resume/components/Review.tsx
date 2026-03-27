'use client';

import { ComponentType, useState, createElement } from 'react';
import { ResumeData } from '../types';
import { generatePDF, generateAllPDFs, PDFConfig } from '../utils/pdfConverter';
import Link from 'next/link';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  Select,
  MenuItem,
  Slider,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Alert,
  CircularProgress,
  Dialog,
  DialogContent,
  Card,
  useTheme,
  alpha,
} from '@mui/material';
import { Close as CloseIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const SITE_FEATURES = [
  {
    emoji: '🔍',
    title: 'AI Resume Checker',
    description: 'Get a detailed score and AI-powered feedback on your resume.',
    href: '/resume-analyzer',
    cta: 'Check My Resume',
  },
  {
    emoji: '🎯',
    title: 'ATS Scanner',
    description: 'See if your resume passes applicant tracking systems.',
    href: '/ats-score',
    cta: 'Check ATS Score',
  },
  {
    emoji: '✅',
    title: 'Resume Checklist',
    description: 'Make sure you haven\'t missed anything important.',
    href: '/resume-checklist',
    cta: 'View Checklist',
  },
  {
    emoji: '💰',
    title: 'Pricing',
    description: 'All features are currently free — no credit card needed.',
    href: '/pricing',
    cta: 'See Plans',
  },
];

interface ReviewProps {
  data: ResumeData;
  selectedTemplate: string;
  templates: Array<{
    id: string;
    name: string;
    description: string;
    component: ComponentType<{ data: ResumeData }>;
  }>;
  onTemplateSelect: (templateId: string) => void;
}

export default function Review({ data, selectedTemplate, templates, onTemplateSelect }: ReviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPdfSettings, setShowPdfSettings] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [pdfConfig, setPdfConfig] = useState<PDFConfig>({
    format: 'A4',
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    },
    scale: 1.0,
    landscape: false,
    printBackground: true,
    preferCSSPageSize: false,
    displayHeaderFooter: false
  });
  const theme = useTheme();

  const handleDownload = async () => {
    setError(null);
    setIsGenerating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      await generatePDF(
        'resume-template',
        `${data.contactInformation.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`,
        pdfConfig
      );
      setShowSuccessModal(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to generate PDF');
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const PDFSettingsPanel = () => (
    <Drawer
      anchor="right"
      open={showPdfSettings}
      onClose={() => setShowPdfSettings(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 320,
          p: 3,
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ color: 'text.primary' }}>
            PDF Settings
          </Typography>
          <IconButton onClick={() => setShowPdfSettings(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="h4" sx={{ mb: 1, color: 'text.primary' }}>
              Page Format
            </Typography>
            <Select
              fullWidth
              value={pdfConfig.format}
              onChange={(e) => setPdfConfig(prev => ({ ...prev, format: e.target.value as PDFConfig['format'] }))}
              size="small"
            >
              {['A4', 'A3', 'A5', 'Letter', 'Legal', 'Tabloid'].map(format => (
                <MenuItem key={format} value={format}>{format}</MenuItem>
              ))}
            </Select>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ mb: 1, color: 'text.primary' }}>
              Scale (0.1 - 2.0)
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Slider
                value={pdfConfig.scale}
                onChange={(_, value) => setPdfConfig(prev => ({ ...prev, scale: value as number }))}
                min={0.1}
                max={2}
                step={0.1}
                valueLabelDisplay="auto"
                sx={{ flexGrow: 1 }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: 40 }}>
                {pdfConfig.scale.toFixed(1)}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h4" sx={{ mb: 1, color: 'text.primary' }}>
                Margins
              </Typography>
              <Button
                size="small"
                onClick={() => setPdfConfig(prev => ({
                  ...prev,
                  margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
                }))}
              >
                Reset
              </Button>
            </Box>
            <Paper sx={{ p: 2, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
              {Object.entries(pdfConfig.margin).map(([side, value]) => (
                <Box key={side} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', width: 60, textTransform: 'capitalize' }}>
                    {side}
                  </Typography>
                  <TextField
                    size="small"
                    value={value}
                    onChange={(e) => setPdfConfig(prev => ({
                      ...prev,
                      margin: {
                        ...prev.margin,
                        [side]: e.target.value
                      }
                    }))}
                    placeholder="20px"
                    sx={{ width: 100 }}
                  />
                </Box>
              ))}
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 1 }}>
                Use px, cm, or in (e.g., 20px, 2cm, 1in)
              </Typography>
            </Paper>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ mb: 1, color: 'text.primary' }}>
              Options
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={pdfConfig.landscape}
                    onChange={(e) => setPdfConfig(prev => ({ ...prev, landscape: e.target.checked }))}
                    size="small"
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Landscape orientation
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={pdfConfig.printBackground}
                    onChange={(e) => setPdfConfig(prev => ({ ...prev, printBackground: e.target.checked }))}
                    size="small"
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Print background
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={pdfConfig.preferCSSPageSize}
                    onChange={(e) => setPdfConfig(prev => ({ ...prev, preferCSSPageSize: e.target.checked }))}
                    size="small"
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Prefer CSS page size
                  </Typography>
                }
              />
            </FormGroup>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );

  return (
    <Box>
      {/* Template Preview */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
            Template Preview
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setShowPdfSettings(true)}
            >
              PDF Settings
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownload}
              disabled={isGenerating}
              startIcon={isGenerating && <CircularProgress size={20} color="inherit" />}
            >
              {isGenerating ? 'Generating...' : 'Download PDF'}
            </Button>
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ color: 'error.main' }}>
              {error}
            </Typography>
          </Alert>
        )}

        <Paper
          elevation={2}
          sx={{
            p: 4,
            bgcolor: 'background.paper',
            border: 1,
            borderColor: 'divider',
          }}
        >
          <Box id="resume-template">
            {createElement(
              templates.find(t => t.id === selectedTemplate)?.component || templates[0].component,
              { data }
            )}
          </Box>
        </Paper>
      </Box>

      <PDFSettingsPanel />

      {/* Post-download success modal */}
      <Dialog
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3, p: 1 } }}
      >
        <DialogContent>
          <IconButton
            onClick={() => setShowSuccessModal(false)}
            size="small"
            sx={{ position: 'absolute', top: 12, right: 12 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <CheckCircleIcon sx={{ fontSize: 48, color: 'success.main', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Resume Downloaded! 🎉
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
              Your PDF is on its way. While you're here, here's what else you can do on Resume Checkers:
            </Typography>
          </Box>

          {/* Feature cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {SITE_FEATURES.map((feature) => (
              <Card
                key={feature.href}
                variant="outlined"
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: 2,
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main', bgcolor: alpha(theme.palette.primary.main, 0.04) },
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Typography sx={{ fontSize: '1.5rem', lineHeight: 1 }}>{feature.emoji}</Typography>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  component={Link}
                  href={feature.href}
                  variant="outlined"
                  size="small"
                  sx={{ ml: 2, whiteSpace: 'nowrap', flexShrink: 0 }}
                  onClick={() => setShowSuccessModal(false)}
                >
                  {feature.cta}
                </Button>
              </Card>
            ))}
          </Box>

          <Button
            fullWidth
            variant="text"
            sx={{ mt: 2, color: 'text.secondary' }}
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
} 