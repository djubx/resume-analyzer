'use client';

import { ComponentType, useState, createElement } from 'react';
import { ResumeData } from '../types';
import { generatePDF, generateAllPDFs, PDFConfig } from '../utils/pdfConverter';
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
  useTheme,
  alpha,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

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
    displayHeaderFooter: false,
    pageless: false,
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!pdfConfig.pageless}
                    onChange={(e) => setPdfConfig(prev => ({ ...prev, pageless: e.target.checked }))}
                    size="small"
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Pageless (single tall page, no breaks)
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
    </Box>
  );
}
