'use client';

import { useState, createElement, useRef, useEffect, useMemo, memo } from 'react';
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
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  CircularProgress,
  Alert,
  Drawer,
  Snackbar,
  Chip,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
  Share as ShareIcon,
  ContentCopy as ContentCopyIcon,
  AutoAwesome,
  DescriptionOutlined,
  NoteAddOutlined,
  RefreshRounded,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';

/* =============================================================== */
/*  CONSTANTS & TOKENS                                              */
/* =============================================================== */

const EMPTY_RESUME: ResumeData = {
  contactInformation: { fullName: '', phoneNumber: '', email: '', location: '' },
  professionalSummary: '',
  workExperience: [],
  education: [],
  skills: [],
  certifications: [],
  projects: [],
  volunteerExperience: [],
  professionalAssociations: [],
  additionalSections: { languages: [], publications: [], awards: [] },
};

type StartChoice = 'upload' | 'blank' | 'sample';

const GLASS_SURFACE = 'rgba(245, 247, 250, 0.04)';
const GLASS_SURFACE_HOVER = 'rgba(245, 247, 250, 0.07)';
const GLASS_BORDER = 'rgba(245, 247, 250, 0.08)';
const GLASS_BORDER_HOVER = 'rgba(0, 229, 255, 0.35)';
const INSET_RIM = 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)';
const EASING = 'cubic-bezier(0.2, 0.9, 0.3, 1.15)';

// MUI TextField override for dark frosted surfaces
const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(245, 247, 250, 0.03)',
    fontSize: '0.95rem',
    transition: `border-color 0.25s ${EASING}`,
    '& fieldset': { borderColor: 'rgba(245, 247, 250, 0.12)' },
    '&:hover fieldset': { borderColor: 'rgba(245, 247, 250, 0.25)' },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 229, 255, 0.6)',
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': { color: 'rgba(245, 247, 250, 0.6)' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'info.main' },
  '& .MuiFormHelperText-root': { color: 'rgba(245, 247, 250, 0.5)' },
} as const;

// Accordion wrapper style — frosted glass
const accordionSx = {
  backgroundColor: GLASS_SURFACE,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid',
  borderColor: GLASS_BORDER,
  borderRadius: '14px !important',
  boxShadow: INSET_RIM,
  mb: 1.5,
  overflow: 'hidden',
  transition: `border-color 0.3s ${EASING}, background-color 0.3s ease`,
  '&::before': { display: 'none' },
  '&:hover': { borderColor: 'rgba(245, 247, 250, 0.14)' },
  '&.Mui-expanded': {
    borderColor: GLASS_BORDER_HOVER,
    backgroundColor: GLASS_SURFACE_HOVER,
    margin: '0 0 12px 0',
    boxShadow: `0 12px 30px -18px rgba(0, 229, 255, 0.25), ${INSET_RIM}`,
  },
  '& .MuiAccordionSummary-root': {
    px: 2.5,
    py: 0.5,
    minHeight: 64,
    '&.Mui-expanded': { minHeight: 64 },
  },
  '& .MuiAccordionSummary-content': {
    my: 1.5,
    '&.Mui-expanded': { my: 1.5 },
  },
  '& .MuiAccordionDetails-root': {
    px: 2.5,
    pt: 0,
    pb: 3,
  },
} as const;

// Primary CTA gradient (matches hero)
const primaryCtaSx = {
  backgroundImage: 'linear-gradient(135deg, #3F51B5 0%, #1E2A78 100%)',
  color: '#F5F7FA',
  boxShadow: `0 10px 24px -12px rgba(0, 229, 255, 0.28), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)`,
  transition: `transform 0.28s ${EASING}, box-shadow 0.28s ease, background-image 0.28s ease`,
  textTransform: 'none' as const,
  fontWeight: 600,
  letterSpacing: '0.01em',
  '&:hover': {
    backgroundImage: 'linear-gradient(135deg, #4A5CC5 0%, #2A3890 100%)',
    boxShadow: `0 14px 38px -10px rgba(0, 229, 255, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.16)`,
    transform: 'translateY(-2px)',
  },
};

// Ghost/outlined button for dark surface
const ghostBtnSx = {
  color: 'text.primary',
  borderColor: 'rgba(245, 247, 250, 0.18)',
  backgroundColor: GLASS_SURFACE,
  backdropFilter: 'blur(10px)',
  textTransform: 'none' as const,
  fontWeight: 500,
  transition: `border-color 0.25s ${EASING}, background-color 0.25s ease, transform 0.25s ${EASING}`,
  '&:hover': {
    borderColor: GLASS_BORDER_HOVER,
    backgroundColor: GLASS_SURFACE_HOVER,
    transform: 'translateY(-1px)',
  },
};

/* =============================================================== */
/*  PROGRESS COMPUTATION                                            */
/* =============================================================== */

type ProgressBreakdown = {
  personal: number;
  summary: number;
  experience: number;
  education: number;
  skills: number;
};

type ProgressResult = {
  overall: number;
  sections: ProgressBreakdown;
};

/**
 * Progress is computed against a set of "dirty" field paths — the fields the
 * user has actively typed into. Placeholder/sample content that the user has
 * never touched does NOT count toward progress, so the halo reflects the
 * user's own work, not the completeness of the starter template.
 *
 * Path convention:
 *   - "contactInformation.fullName"           (object-scoped field)
 *   - "professionalSummary"                    (whole-section scalar)
 *   - "skills"                                 (whole-section array)
 *   - "workExperience.0.jobTitle"              (array-scoped field)
 */
function computeProgress(data: ResumeData, dirty: Set<string>): ProgressResult {
  const has = (p: string) => dirty.has(p);

  // Personal — count each sub-field only if dirty AND non-empty
  const personalChecks: Array<[string, string | undefined]> = [
    ['contactInformation.fullName', data.contactInformation.fullName],
    ['contactInformation.email', data.contactInformation.email],
    ['contactInformation.phoneNumber', data.contactInformation.phoneNumber],
    ['contactInformation.location', data.contactInformation.location],
  ];
  const personalFilled = personalChecks.filter(
    ([p, v]) => has(p) && (v ?? '').trim().length > 0
  ).length;
  const personal = personalFilled / 4;

  // Summary — only counts once user has edited the field; then scale by length
  const summaryLen = (data.professionalSummary ?? '').trim().length;
  const summary = has('professionalSummary')
    ? summaryLen >= 80
      ? 1
      : summaryLen / 80
    : 0;

  // Experience — binary; at least one entry needs BOTH title and company
  // user-edited (dirty) and non-empty
  const experience = data.workExperience.some((e, i) => {
    const titleOk = has(`workExperience.${i}.jobTitle`) && (e.jobTitle ?? '').trim().length > 0;
    const companyOk =
      has(`workExperience.${i}.companyName`) && (e.companyName ?? '').trim().length > 0;
    return titleOk && companyOk;
  })
    ? 1
    : 0;

  // Education — same binary pattern
  const education = data.education.some((e, i) => {
    const degreeOk = has(`education.${i}.degree`) && (e.degree ?? '').trim().length > 0;
    const instOk =
      has(`education.${i}.institution`) && (e.institution ?? '').trim().length > 0;
    return degreeOk && instOk;
  })
    ? 1
    : 0;

  // Skills — entire array becomes dirty on any edit; then scale by count
  const skillsCount = data.skills.filter((s) => (s ?? '').trim()).length;
  const skills = has('skills') ? Math.min(skillsCount / 5, 1) : 0;

  const overall = (personal + summary + experience + education + skills) / 5;

  return {
    overall,
    sections: { personal, summary, experience, education, skills },
  };
}

/**
 * Build the dirty-path set that corresponds to every populated scoring field
 * in the given data. Used after a PDF upload, where every field in the
 * extracted data is genuinely the user's own content and should count.
 */
function derivePathsFromData(data: ResumeData): Set<string> {
  const paths = new Set<string>();
  const c = data.contactInformation ?? ({} as ResumeData['contactInformation']);
  if ((c.fullName ?? '').trim()) paths.add('contactInformation.fullName');
  if ((c.email ?? '').trim()) paths.add('contactInformation.email');
  if ((c.phoneNumber ?? '').trim()) paths.add('contactInformation.phoneNumber');
  if ((c.location ?? '').trim()) paths.add('contactInformation.location');
  if ((data.professionalSummary ?? '').trim()) paths.add('professionalSummary');
  if (Array.isArray(data.skills) && data.skills.some((s) => (s ?? '').trim())) {
    paths.add('skills');
  }
  (data.workExperience ?? []).forEach((e, i) => {
    if ((e.jobTitle ?? '').trim()) paths.add(`workExperience.${i}.jobTitle`);
    if ((e.companyName ?? '').trim()) paths.add(`workExperience.${i}.companyName`);
  });
  (data.education ?? []).forEach((e, i) => {
    if ((e.degree ?? '').trim()) paths.add(`education.${i}.degree`);
    if ((e.institution ?? '').trim()) paths.add(`education.${i}.institution`);
  });
  return paths;
}

/* =============================================================== */
/*  PROGRESS HALO                                                   */
/* =============================================================== */

const SECTION_LABELS: Array<{ key: keyof ProgressBreakdown; label: string }> = [
  { key: 'personal', label: 'Personal info' },
  { key: 'summary', label: 'Summary' },
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Skills' },
];

function ProgressHalo({
  result,
  size = 68,
  pristine = false,
}: {
  result: ProgressResult;
  size?: number;
  pristine?: boolean;
}) {
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - result.overall);
  const percent = Math.round(result.overall * 100);

  const headlineText = pristine
    ? 'Sample loaded'
    : percent < 100
      ? `${percent}% complete`
      : 'Resume complete';

  const subText = pristine
    ? 'Start editing any field to track your own progress.'
    : null;

  return (
    <Tooltip
      arrow
      placement="bottom-end"
      title={
        <Box sx={{ minWidth: 220, py: 0.5 }}>
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'text.primary',
              mb: subText ? 0.5 : 0.75,
              letterSpacing: '-0.01em',
            }}
          >
            {headlineText}
          </Typography>
          {subText && (
            <Typography
              sx={{
                fontSize: '0.72rem',
                color: 'text.secondary',
                mb: 1,
                lineHeight: 1.45,
              }}
            >
              {subText}
            </Typography>
          )}
          {!pristine && (
            <Stack spacing={0.5}>
              {SECTION_LABELS.map(({ key, label }) => {
                const v = result.sections[key];
                const done = v >= 0.999;
                return (
                  <Stack
                    key={key}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography sx={{ fontSize: '0.74rem', color: 'text.secondary' }}>
                      {label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: done ? 'info.main' : 'text.secondary',
                      }}
                    >
                      {done ? '✓' : `${Math.round(v * 100)}%`}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          )}
        </Box>
      }
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'rgba(11, 13, 16, 0.96)',
            backdropFilter: 'blur(16px)',
            border: '1px solid',
            borderColor: GLASS_BORDER,
            boxShadow: `0 16px 40px -20px rgba(0, 229, 255, 0.35), ${INSET_RIM}`,
            px: 1.5,
            py: 1,
            borderRadius: '10px',
          },
        },
        arrow: { sx: { color: 'rgba(11, 13, 16, 0.96)' } },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: size,
          height: size,
          flexShrink: 0,
          cursor: 'help',
        }}
      >
        <svg width={size} height={size} style={{ display: 'block' }}>
          <defs>
            <linearGradient id="resuai-progress-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3F51B5" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(245, 247, 250, 0.09)"
            strokeWidth={strokeWidth}
          />
          {/* Animated arc */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#resuai-progress-grad)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.55, ease: [0.2, 0.9, 0.3, 1.15] }}
            style={{
              filter: result.overall > 0.01 ? 'drop-shadow(0 0 6px rgba(0, 229, 255, 0.45))' : 'none',
            }}
          />
        </svg>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: size >= 64 ? '0.95rem' : '0.8rem',
              fontWeight: 700,
              color: 'text.primary',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {percent}
            <Box component="span" sx={{ fontSize: '0.55em', ml: 0.25, color: 'text.secondary' }}>
              %
            </Box>
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  );
}

/* =============================================================== */
/*  TEMPLATE RIBBON                                                 */
/* =============================================================== */

const TemplateRibbonCard = memo(function TemplateRibbonCard({
  template,
  isActive,
  onClick,
  data,
}: {
  template: (typeof templates)[number];
  isActive: boolean;
  onClick: () => void;
  data: ResumeData;
}) {
  return (
    <Box
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      sx={{
        flexShrink: 0,
        width: 132,
        borderRadius: '12px',
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: GLASS_SURFACE,
        backdropFilter: 'blur(10px)',
        border: '1.5px solid',
        borderColor: isActive ? GLASS_BORDER_HOVER : GLASS_BORDER,
        boxShadow: isActive
          ? `0 14px 34px -16px rgba(0, 229, 255, 0.55), 0 0 0 2px rgba(0, 229, 255, 0.18), ${INSET_RIM}`
          : INSET_RIM,
        transition: `transform 0.3s ${EASING}, border-color 0.3s ease, box-shadow 0.3s ease`,
        '&:hover': {
          transform: 'translateY(-3px)',
          borderColor: GLASS_BORDER_HOVER,
          boxShadow: `0 14px 30px -16px rgba(0, 229, 255, 0.4), ${INSET_RIM}`,
        },
        '&:focus-visible': {
          outline: '2px solid rgba(0, 229, 255, 0.6)',
          outlineOffset: 2,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 170,
          overflow: 'hidden',
          bgcolor: '#fff',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <Box
          sx={{
            transform: 'scale(0.17)',
            transformOrigin: 'top left',
            width: '588%',
            pointerEvents: 'none',
          }}
        >
          {createElement(template.component, { data })}
        </Box>
        {isActive && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              width: 22,
              height: 22,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 229, 255, 0.95)',
              color: '#0B0D10',
              boxShadow: '0 4px 12px rgba(0, 229, 255, 0.6)',
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16 }} />
          </Box>
        )}
      </Box>
      <Box sx={{ px: 1.25, py: 1 }}>
        <Typography
          noWrap
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: isActive ? 'info.main' : 'text.primary',
          }}
        >
          {template.name}
        </Typography>
      </Box>
    </Box>
  );
});

function TemplateRibbon({
  selectedId,
  onSelect,
  data,
  compact = false,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
  data: ResumeData;
  compact?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll active template into view on mount + when selection changes externally
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeEl = container.querySelector<HTMLDivElement>(`[data-template-id="${selectedId}"]`);
    if (activeEl) {
      const left = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
      container.scrollTo({ left, behavior: 'smooth' });
    }
  }, [selectedId]);

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Header row */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: compact ? 1 : 1.5, px: 0.25 }}
      >
        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontSize: '0.68rem',
              fontWeight: 600,
              color: 'info.main',
            }}
          >
            Templates
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
            {templates.length} styles · click to switch
          </Typography>
        </Stack>
      </Stack>

      {/* Scroll viewport with edge fades */}
      <Box sx={{ position: 'relative' }}>
        {/* Left fade */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 8,
            left: 0,
            width: 28,
            zIndex: 2,
            background: 'linear-gradient(90deg, rgba(11, 13, 16, 1), rgba(11, 13, 16, 0))',
            pointerEvents: 'none',
          }}
        />
        {/* Right fade */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 8,
            right: 0,
            width: 28,
            zIndex: 2,
            background: 'linear-gradient(-90deg, rgba(11, 13, 16, 1), rgba(11, 13, 16, 0))',
            pointerEvents: 'none',
          }}
        />

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 1.25,
            overflowX: 'auto',
            overflowY: 'hidden',
            py: 0.5,
            px: 0.25,
            pb: 1.25,
            scrollSnapType: 'x proximity',
            '&::-webkit-scrollbar': { height: 6 },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(245, 247, 250, 0.1)',
              borderRadius: 3,
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: 'rgba(245, 247, 250, 0.2)',
            },
          }}
        >
          {templates.map((t) => (
            <Box
              key={t.id}
              data-template-id={t.id}
              sx={{ scrollSnapAlign: 'center' }}
            >
              <TemplateRibbonCard
                template={t}
                isActive={selectedId === t.id}
                onClick={() => onSelect(t.id)}
                data={data}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* =============================================================== */
/*  WELCOME MODAL                                                   */
/* =============================================================== */

interface WelcomeOption {
  id: StartChoice;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  recommended?: boolean;
}

const welcomeOptions: WelcomeOption[] = [
  {
    id: 'upload',
    eyebrow: '60s autofill',
    title: 'Upload your PDF',
    description: 'Drop in your current resume and we\u2019ll parse every section. Fastest way to start.',
    icon: <UploadIcon sx={{ fontSize: 32 }} />,
    recommended: true,
  },
  {
    id: 'blank',
    eyebrow: 'From scratch',
    title: 'Start blank',
    description: 'A clean canvas. Great if you\u2019re crafting your first resume or starting fresh.',
    icon: <NoteAddOutlined sx={{ fontSize: 32 }} />,
  },
  {
    id: 'sample',
    eyebrow: 'Explore first',
    title: 'Try a sample',
    description: 'Pre-filled with a Software Engineer example so you can play with templates immediately.',
    icon: <DescriptionOutlined sx={{ fontSize: 32 }} />,
  },
];

function WelcomeModal({
  open,
  onClose,
  onChoice,
}: {
  open: boolean;
  onClose: () => void;
  onChoice: (c: StartChoice) => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          backgroundColor: 'rgba(11, 13, 16, 0.92)',
          backdropFilter: 'blur(24px)',
          border: '1px solid',
          borderColor: GLASS_BORDER,
          boxShadow: `0 40px 120px -40px rgba(0, 229, 255, 0.35), ${INSET_RIM}`,
          overflow: 'hidden',
          position: 'relative',
        },
      }}
    >
      {/* Ambient blobs inside modal */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.22), transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: -140,
          left: -140,
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(63, 81, 181, 0.28), transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <IconButton
        aria-label="Close welcome"
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'text.secondary',
          zIndex: 2,
          '&:hover': { color: 'text.primary' },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 5 }, py: { xs: 5, md: 6 } }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
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
            Resume studio
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: { xs: '1.9rem', md: '2.5rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'text.primary',
              mb: 1.5,
            }}
          >
            How do you want to start?
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              maxWidth: 520,
              mx: 'auto',
              lineHeight: 1.55,
            }}
          >
            Pick a path and we&apos;ll take it from there. You can switch templates, upload a PDF, or reset anytime.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {welcomeOptions.map((opt, i) => (
            <Grid item xs={12} md={4} key={opt.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * i, ease: [0.2, 0.9, 0.3, 1.15] }}
                style={{ height: '100%' }}
              >
                <Box
                  onClick={() => onChoice(opt.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onChoice(opt.id);
                    }
                  }}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    minHeight: 220,
                    p: 3,
                    borderRadius: '14px',
                    cursor: 'pointer',
                    backgroundColor: GLASS_SURFACE,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: opt.recommended ? GLASS_BORDER_HOVER : GLASS_BORDER,
                    boxShadow: opt.recommended
                      ? `0 18px 44px -22px rgba(0, 229, 255, 0.3), ${INSET_RIM}`
                      : INSET_RIM,
                    transition: `transform 0.35s ${EASING}, border-color 0.35s ease, box-shadow 0.35s ease`,
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: GLASS_BORDER_HOVER,
                      boxShadow: `0 22px 50px -22px rgba(0, 229, 255, 0.4), ${INSET_RIM}`,
                    },
                    '&:focus-visible': {
                      outline: '2px solid rgba(0, 229, 255, 0.5)',
                      outlineOffset: 3,
                    },
                  }}
                >
                  {opt.recommended && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        px: 1.25,
                        py: 0.25,
                        borderRadius: '999px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#0B0D10',
                        background: 'linear-gradient(135deg, #3F51B5 0%, #00E5FF 100%)',
                      }}
                    >
                      Fastest
                    </Box>
                  )}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.25), rgba(0, 229, 255, 0.18))',
                      border: '1px solid rgba(0, 229, 255, 0.28)',
                      color: 'info.main',
                    }}
                  >
                    {opt.icon}
                  </Box>
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: 'info.main',
                      mb: 0.75,
                    }}
                  >
                    {opt.eyebrow}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {opt.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      lineHeight: 1.55,
                      flex: 1,
                    }}
                  >
                    {opt.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            textAlign: 'center',
            mt: 4,
            color: 'text.secondary',
            fontSize: '0.85rem',
          }}
        >
          Not sure? <Box component="span" sx={{ color: 'info.main', fontWeight: 600 }}>Upload</Box> is what most people choose.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

/* =============================================================== */
/*  MAIN PAGE                                                       */
/* =============================================================== */

export default function CreateResumePage() {
  const [formData, setFormData] = useState<ResumeData>(softwareEngineerData);
  const [selectedTemplate, setSelectedTemplate] = useState(DEFAULT_TEMPLATE);
  const [uploadDrawerOpen, setUploadDrawerOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);
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
  // Debounced copy of formData for expensive ribbon thumbnails (main preview stays live)
  const [debouncedData, setDebouncedData] = useState<ResumeData>(softwareEngineerData);
  // Set of field paths the user has actively edited. Sample/placeholder content
  // that has never been touched does NOT contribute to progress — the halo
  // reflects the user's own input, not the starter template's completeness.
  // See computeProgress / derivePathsFromData for the path convention.
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => new Set());
  const previewRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  // Without noSsr: SSR + first client render both return false, then the real value
  // kicks in after mount. This avoids hydration mismatch at the cost of a tiny layout
  // flip on desktop (mobile ribbon → desktop ribbon) during first paint. Worth it.
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Memoized progress — only counts fields the user has actively edited.
  const progress = useMemo<ProgressResult>(
    () => computeProgress(formData, dirtyFields),
    [formData, dirtyFields]
  );

  // "Placeholder sample is loaded but the user hasn't customised anything yet."
  // Drives the halo tooltip's special copy for the welcome state.
  const samplePlaceholder = useMemo(
    () =>
      dirtyFields.size === 0 &&
      (formData.contactInformation.fullName || '').trim().length > 0,
    [dirtyFields, formData.contactInformation.fullName]
  );

  // Track page load + first-visit welcome
  useEffect(() => {
    trackEvent('Resume Builder - Page Loaded');
    trackEvent('Resume Builder - Session Started');
    if (typeof window !== 'undefined') {
      const seen = localStorage.getItem('resuai-builder-welcomed');
      if (!seen) setWelcomeOpen(true);
    }
  }, []);

  // Debounce formData → debouncedData for ribbon thumbnails (400ms)
  useEffect(() => {
    const id = setTimeout(() => setDebouncedData(formData), 400);
    return () => clearTimeout(id);
  }, [formData]);

  const markDirty = (path: string) => {
    setDirtyFields((prev) => {
      if (prev.has(path)) return prev;
      const next = new Set(prev);
      next.add(path);
      return next;
    });
  };

  const handleUpdate = (section: keyof ResumeData, field: string | null, value: any) => {
    markDirty(field ? `${String(section)}.${field}` : String(section));
    setFormData((prev) => {
      if (!field) return { ...prev, [section]: value };
      const sectionData = prev[section];
      if (typeof sectionData === 'object' && sectionData !== null) {
        return { ...prev, [section]: { ...(sectionData as any), [field]: value } };
      }
      return { ...prev, [section]: value };
    });
  };

  const handleArrayUpdate = (section: keyof ResumeData, index: number, field: string, value: any) => {
    markDirty(`${String(section)}.${index}.${field}`);
    setFormData((prev) => {
      const array = prev[section] as any[];
      const updated = [...array];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const handleArrayAdd = (section: keyof ResumeData, defaultItem: any) => {
    // New row starts clean — its fields will become dirty as the user types.
    setFormData((prev) => ({
      ...prev,
      [section]: [...(prev[section] as any[]), defaultItem],
    }));
  };

  const handleArrayRemove = (section: keyof ResumeData, index: number) => {
    // Prune dirty paths belonging to the removed row, and shift any paths at
    // higher indices down by one so the set stays aligned with the array.
    setDirtyFields((prev) => {
      const prefix = `${String(section)}.`;
      const next = new Set<string>();
      prev.forEach((path) => {
        if (!path.startsWith(prefix)) {
          next.add(path);
          return;
        }
        const rest = path.slice(prefix.length);
        const dotIdx = rest.indexOf('.');
        if (dotIdx === -1) {
          next.add(path);
          return;
        }
        const pathIndex = Number(rest.slice(0, dotIdx));
        if (Number.isNaN(pathIndex)) {
          next.add(path);
          return;
        }
        if (pathIndex < index) {
          next.add(path);
        } else if (pathIndex > index) {
          next.add(`${prefix}${pathIndex - 1}.${rest.slice(dotIdx + 1)}`);
        }
        // pathIndex === index → drop
      });
      return next;
    });
    setFormData((prev) => ({
      ...prev,
      [section]: (prev[section] as any[]).filter((_, i) => i !== index),
    }));
  };

  /* ----- Welcome choice ----- */
  const handleWelcomeChoice = (choice: StartChoice) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('resuai-builder-welcomed', 'true');
    }
    trackEvent('Resume Builder - Welcome Choice', { choice });
    setWelcomeOpen(false);

    if (choice === 'upload') {
      setTimeout(() => setUploadDrawerOpen(true), 180);
      // dirtyFields will be seeded from the parsed data on upload success (below)
    } else if (choice === 'blank') {
      setFormData(EMPTY_RESUME);
      setDirtyFields(new Set());
      setExpandedPanel('personal');
    } else if (choice === 'sample') {
      // Reset to a clean sample; halo stays at 0% until the user edits.
      setFormData(softwareEngineerData);
      setDirtyFields(new Set());
      setExpandedPanel('personal');
    }
  };

  const handleDismissWelcome = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('resuai-builder-welcomed', 'true');
    }
    setWelcomeOpen(false);
  };

  /* ----- PDF upload ----- */
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
      const data = new FormData();
      data.append('file', file);

      const textResponse = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: data,
      });
      if (!textResponse.ok) throw new Error('Failed to parse PDF');
      const { text } = await textResponse.json();

      const analyzeResponse = await fetch('/api/extract-resume-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfText: text }),
      });
      if (!analyzeResponse.ok) throw new Error('Failed to analyze resume');

      const extractedData = await analyzeResponse.json();
      setFormData(extractedData);
      // Uploaded content is genuinely the user's — seed every populated field
      // as dirty so the halo reflects the actual completeness of the upload.
      setDirtyFields(derivePathsFromData(extractedData));
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

  /* ----- Download ----- */
  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    const startTime = Date.now();
    setDownloadStartTime(startTime);
    trackEvent('Resume Builder - Download Started', { template: selectedTemplate });

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const pdfConfig: PDFConfig = {
        format: 'A4',
        margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
        scale: 1.0,
        landscape: false,
        printBackground: true,
        preferCSSPageSize: false,
        displayHeaderFooter: false,
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
        downloadDuration,
      });

      setTimeout(() => setShareDialogOpen(true), 500);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  /* ----- Shareable link ----- */
  const handleGenerateShareableLink = async () => {
    if (shareableLink) {
      navigator.clipboard.writeText(shareableLink);
      setCopySnackbarOpen(true);
      return;
    }
    setIsGeneratingLink(true);
    try {
      const profileId = `resume-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      await client.create({
        _type: 'shareableProfile',
        profileId,
        resumeData: formData,
        selectedTemplate,
        customizations: { showContactInfo: true, theme: 'default' },
        createdAt: new Date().toISOString(),
      });
      const shareUrl = `${window.location.origin}/shared-profile/${profileId}`;
      setShareableLink(shareUrl);
      navigator.clipboard.writeText(shareUrl);
      setCopySnackbarOpen(true);
      trackEvent('Resume Builder - Shareable Link Generated', { platform: 'copy' });
    } catch (error) {
      console.error('Error generating shareable link:', error);
    } finally {
      setIsGeneratingLink(false);
    }
  };

  /* ----- Social share ----- */
  const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
    trackEvent('Resume Builder - Share Clicked', { platform });
    const shareText = 'Just built a professional resume in minutes with ResuAI. The AI preview is wild.';
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

  /* ----- JSON-LD ----- */
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://resumecheckers.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resume Builder',
        item: 'https://resumecheckers.com/create-resume',
      },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ResuAI Resume Builder',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://resumecheckers.com/create-resume',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: [
      '50+ professional resume templates',
      'Real-time preview',
      'PDF download',
      'ATS-friendly templates',
      'One-click template switching',
      'AI resume data extraction',
      'Shareable resume links',
    ],
    description:
      'AI-powered resume builder with 50+ ATS-friendly templates. Create, customize, and download your resume in minutes with real-time preview and instant PDF generation.',
  };

  const activeTemplate = templates.find((t) => t.id === selectedTemplate) ?? templates[0];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        overflow: 'hidden',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Ambient page-level blobs */}
      <Box
        aria-hidden
        sx={{
          position: 'fixed',
          top: -220,
          left: -220,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(63, 81, 181, 0.25), transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'fixed',
          bottom: -260,
          right: -220,
          width: 580,
          height: 580,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.18), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* ========= SPLIT LAYOUT ========= */}
        <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
          {/* ---------- LEFT: EDIT PANEL ---------- */}
          <Box
            sx={{
              width: { xs: '100%', md: '46%' },
              overflowY: 'auto',
              borderRight: { md: '1px solid' },
              borderColor: { md: 'divider' },
              px: { xs: 2.5, md: 4 },
              py: { xs: 3, md: 4 },
              pb: { xs: 14, md: 16 }, // leave space for action dock
              // custom scrollbar
              '&::-webkit-scrollbar': { width: 8 },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(245, 247, 250, 0.1)',
                borderRadius: 4,
              },
              '&::-webkit-scrollbar-thumb:hover': { background: 'rgba(245, 247, 250, 0.2)' },
            }}
          >
            {/* --- Header --- */}
            <Box sx={{ mb: 4 }}>
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                spacing={2}
                sx={{ mb: 3 }}
              >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'info.main',
                      mb: 1.5,
                    }}
                  >
                    Resume studio
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: { xs: '1.9rem', md: '2.25rem' },
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    Build. Preview. Ship.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.55 }}>
                    Edit below and watch your resume update live. Download a PDF anytime from the dock.
                  </Typography>
                </Box>
                <ProgressHalo result={progress} pristine={samplePlaceholder} />
              </Stack>

              {/* Header actions */}
              <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap sx={{ rowGap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<UploadIcon />}
                  onClick={() => setUploadDrawerOpen(true)}
                  sx={ghostBtnSx}
                >
                  Upload PDF
                </Button>
                <Tooltip title="Reopen the welcome picker">
                  <Button
                    variant="outlined"
                    startIcon={<RefreshRounded />}
                    onClick={() => setWelcomeOpen(true)}
                    sx={ghostBtnSx}
                  >
                    Start over
                  </Button>
                </Tooltip>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={0.75}
                sx={{
                  mt: 2.5,
                  px: 1.5,
                  py: 0.75,
                  display: 'inline-flex',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0, 229, 255, 0.08)',
                  border: '1px solid rgba(0, 229, 255, 0.22)',
                }}
              >
                <AutoAwesome sx={{ fontSize: 14, color: 'info.main' }} />
                <Typography sx={{ color: 'info.main', fontSize: '0.78rem', fontWeight: 600 }}>
                  AI tools coming to every bullet soon
                </Typography>
              </Stack>
            </Box>

            {/* --- Template ribbon (mobile only — desktop renders above preview) --- */}
            {!isDesktop && (
              <Box sx={{ mb: 3 }}>
                <TemplateRibbon
                  selectedId={selectedTemplate}
                  onSelect={(id) => {
                    const prev = selectedTemplate;
                    setSelectedTemplate(id);
                    if (prev !== id) {
                      trackEvent('Resume Builder - Template Changed', {
                        newTemplate: id,
                        previousTemplate: prev,
                      });
                    }
                  }}
                  data={debouncedData}
                  compact
                />
              </Box>
            )}

            {/* --- Accordions --- */}
            <SectionAccordion
              id="personal"
              title="Personal information"
              hint="Name, contact, location"
              expanded={expandedPanel === 'personal'}
              onToggle={setExpandedPanel}
            >
              <Stack spacing={2}>
                <TextField
                  label="Full name"
                  value={formData.contactInformation.fullName || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'fullName', e.target.value)}
                  fullWidth
                  sx={textFieldSx}
                />
                <TextField
                  label="Email"
                  type="email"
                  value={formData.contactInformation.email || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'email', e.target.value)}
                  fullWidth
                  sx={textFieldSx}
                />
                <TextField
                  label="Phone"
                  value={formData.contactInformation.phoneNumber || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'phoneNumber', e.target.value)}
                  fullWidth
                  sx={textFieldSx}
                />
                <TextField
                  label="Location"
                  value={formData.contactInformation.location || ''}
                  onChange={(e) => handleUpdate('contactInformation', 'location', e.target.value)}
                  fullWidth
                  sx={textFieldSx}
                />
              </Stack>
            </SectionAccordion>

            <SectionAccordion
              id="summary"
              title="Professional summary"
              hint="2–3 sentences — your elevator pitch"
              expanded={expandedPanel === 'summary'}
              onToggle={setExpandedPanel}
            >
              <TextField
                multiline
                rows={4}
                value={formData.professionalSummary || ''}
                onChange={(e) => handleUpdate('professionalSummary', null, e.target.value)}
                fullWidth
                placeholder="Brief professional summary..."
                sx={textFieldSx}
              />
            </SectionAccordion>

            <SectionAccordion
              id="experience"
              title="Work experience"
              hint="Most recent first"
              expanded={expandedPanel === 'experience'}
              onToggle={setExpandedPanel}
            >
              <Stack spacing={2.5}>
                {formData.workExperience.map((exp, index) => (
                  <GlassInner key={index} onRemove={
                    formData.workExperience.length > 1
                      ? () => handleArrayRemove('workExperience', index)
                      : undefined
                  } label={`Role ${index + 1}`}>
                    <Stack spacing={1.75}>
                      <TextField
                        label="Job title"
                        value={exp.jobTitle || ''}
                        onChange={(e) => handleArrayUpdate('workExperience', index, 'jobTitle', e.target.value)}
                        fullWidth
                        sx={textFieldSx}
                      />
                      <TextField
                        label="Company"
                        value={exp.companyName || ''}
                        onChange={(e) => handleArrayUpdate('workExperience', index, 'companyName', e.target.value)}
                        fullWidth
                        sx={textFieldSx}
                      />
                      <TextField
                        label="Dates"
                        value={exp.dates || ''}
                        onChange={(e) => handleArrayUpdate('workExperience', index, 'dates', e.target.value)}
                        fullWidth
                        placeholder="e.g., Jan 2020 – Present"
                        sx={textFieldSx}
                      />
                      <TextField
                        label="Location"
                        value={exp.location || ''}
                        onChange={(e) => handleArrayUpdate('workExperience', index, 'location', e.target.value)}
                        fullWidth
                        sx={textFieldSx}
                      />
                    </Stack>
                  </GlassInner>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() =>
                    handleArrayAdd('workExperience', {
                      jobTitle: '',
                      companyName: '',
                      location: '',
                      dates: '',
                      responsibilities: [],
                    })
                  }
                  variant="outlined"
                  sx={ghostBtnSx}
                >
                  Add experience
                </Button>
              </Stack>
            </SectionAccordion>

            <SectionAccordion
              id="education"
              title="Education"
              hint="Degrees, institutions"
              expanded={expandedPanel === 'education'}
              onToggle={setExpandedPanel}
            >
              <Stack spacing={2.5}>
                {formData.education.map((edu, index) => (
                  <GlassInner key={index} onRemove={
                    formData.education.length > 1
                      ? () => handleArrayRemove('education', index)
                      : undefined
                  } label={`Entry ${index + 1}`}>
                    <Stack spacing={1.75}>
                      <TextField
                        label="Degree"
                        value={edu.degree || ''}
                        onChange={(e) => handleArrayUpdate('education', index, 'degree', e.target.value)}
                        fullWidth
                        sx={textFieldSx}
                      />
                      <TextField
                        label="Institution"
                        value={edu.institution || ''}
                        onChange={(e) => handleArrayUpdate('education', index, 'institution', e.target.value)}
                        fullWidth
                        sx={textFieldSx}
                      />
                      <TextField
                        label="Graduation date"
                        value={edu.graduationDate || ''}
                        onChange={(e) =>
                          handleArrayUpdate('education', index, 'graduationDate', e.target.value)
                        }
                        fullWidth
                        sx={textFieldSx}
                      />
                    </Stack>
                  </GlassInner>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() =>
                    handleArrayAdd('education', { degree: '', institution: '', graduationDate: '' })
                  }
                  variant="outlined"
                  sx={ghostBtnSx}
                >
                  Add education
                </Button>
              </Stack>
            </SectionAccordion>

            <SectionAccordion
              id="skills"
              title="Skills"
              hint="Comma-separated — technical + transferable"
              expanded={expandedPanel === 'skills'}
              onToggle={setExpandedPanel}
            >
              <TextField
                multiline
                rows={3}
                value={formData.skills.join(', ')}
                onChange={(e) =>
                  handleUpdate(
                    'skills',
                    null,
                    e.target.value.split(',').map((s) => s.trim())
                  )
                }
                fullWidth
                placeholder="JavaScript, Python, React, etc."
                helperText="Separate skills with commas"
                sx={textFieldSx}
              />
            </SectionAccordion>
          </Box>

          {/* ---------- RIGHT: PREVIEW ---------- */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '54%',
              flexDirection: 'column',
              alignItems: 'center',
              px: 3,
              py: 4,
              pb: 14, // dock clearance
              overflowY: 'auto',
              '&::-webkit-scrollbar': { width: 8 },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(245, 247, 250, 0.1)',
                borderRadius: 4,
              },
              '&::-webkit-scrollbar-thumb:hover': { background: 'rgba(245, 247, 250, 0.2)' },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 820 }}>
              {/* Preview header */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                sx={{ mb: 2.5 }}
              >
                <Box>
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'info.main',
                      mb: 0.5,
                    }}
                  >
                    Live preview
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: 'text.primary',
                    }}
                  >
                    {activeTemplate.name}
                  </Typography>
                </Box>
                <Chip
                  label="A4 · 210 × 297mm"
                  size="small"
                  sx={{
                    height: 24,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'text.secondary',
                    backgroundColor: GLASS_SURFACE,
                    border: '1px solid',
                    borderColor: GLASS_BORDER,
                  }}
                />
              </Stack>

              {/* Template ribbon — desktop only (mobile renders it in edit panel) */}
              {isDesktop && (
                <Box sx={{ mb: 2.5 }}>
                  <TemplateRibbon
                    selectedId={selectedTemplate}
                    onSelect={(id) => {
                      const prev = selectedTemplate;
                      setSelectedTemplate(id);
                      if (prev !== id) {
                        trackEvent('Resume Builder - Template Changed', {
                          newTemplate: id,
                          previousTemplate: prev,
                        });
                      }
                    }}
                    data={debouncedData}
                  />
                </Box>
              )}

              {/* Preview sheet — stays white for PDF fidelity.
                  Paper (with id) is STABLE so #resume-preview always exists;
                  template content inside cross-fades on selection change. */}
              <Paper
                id="resume-preview"
                ref={previewRef}
                sx={{
                  backgroundColor: 'white',
                  color: '#000',
                  p: 4,
                  minHeight: '297mm',
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow:
                    '0 24px 60px -24px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(245, 247, 250, 0.06)',
                  overflow: 'hidden',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={selectedTemplate}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.28, ease: [0.2, 0.9, 0.3, 1.15] }}
                  >
                    {createElement(activeTemplate.component, { data: formData })}
                  </motion.div>
                </AnimatePresence>
              </Paper>
            </Box>
          </Box>
        </Box>

        {/* ========= FLOATING ACTION DOCK ========= */}
        <ActionDock
          isGenerating={isGenerating}
          onDownload={handleDownloadPDF}
          onShare={() => setShareDialogOpen(true)}
          onUpload={() => setUploadDrawerOpen(true)}
        />

        {/* ========= WELCOME MODAL ========= */}
        <AnimatePresence>
          {welcomeOpen && (
            <WelcomeModal
              open={welcomeOpen}
              onClose={handleDismissWelcome}
              onChoice={handleWelcomeChoice}
            />
          )}
        </AnimatePresence>

        {/* Template picking now lives in the always-visible ribbon — modal killed. */}

        {/* ========= UPLOAD DRAWER ========= */}
        <Drawer
          anchor="right"
          open={uploadDrawerOpen}
          onClose={() => setUploadDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(11, 13, 16, 0.94)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid',
              borderColor: GLASS_BORDER,
              width: { xs: '100%', sm: 440 },
            },
          }}
        >
          <Box sx={{ p: 4 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
              <Box>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'info.main',
                    mb: 0.5,
                  }}
                >
                  60s autofill
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'text.primary',
                  }}
                >
                  Upload your resume
                </Typography>
              </Box>
              <IconButton onClick={() => setUploadDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
                <CloseIcon />
              </IconButton>
            </Stack>

            <Box
              sx={{
                p: 4,
                borderRadius: '14px',
                border: '1.5px dashed',
                borderColor: 'rgba(0, 229, 255, 0.35)',
                backgroundColor: 'rgba(0, 229, 255, 0.04)',
                textAlign: 'center',
                transition: `border-color 0.3s ease, background-color 0.3s ease`,
                '&:hover': {
                  borderColor: 'rgba(0, 229, 255, 0.6)',
                  backgroundColor: 'rgba(0, 229, 255, 0.07)',
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 2,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background:
                    'linear-gradient(135deg, rgba(63, 81, 181, 0.3), rgba(0, 229, 255, 0.25))',
                  border: '1px solid rgba(0, 229, 255, 0.35)',
                  color: 'info.main',
                }}
              >
                <UploadIcon sx={{ fontSize: 28 }} />
              </Box>

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
                  startIcon={isUploading ? <CircularProgress size={18} color="inherit" /> : <UploadIcon />}
                  sx={{
                    py: 1.25,
                    px: 3,
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    ...primaryCtaSx,
                  }}
                >
                  {isUploading ? 'Processing...' : 'Choose PDF'}
                </Button>
              </label>

              <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.5 }}>
                PDF only, up to 10MB. We extract every section and drop you into the editor.
              </Typography>

              {uploadError && (
                <Alert severity="error" sx={{ mt: 2, textAlign: 'left' }}>
                  {uploadError}
                </Alert>
              )}
            </Box>

            <Typography
              sx={{
                mt: 3,
                color: 'text.secondary',
                fontSize: '0.82rem',
                textAlign: 'center',
                lineHeight: 1.55,
              }}
            >
              Your file is processed securely and never stored on our servers.
            </Typography>
          </Box>
        </Drawer>

        {/* ========= SHARE DIALOG ========= */}
        <Dialog
          open={shareDialogOpen}
          onClose={() => setShareDialogOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '18px',
              backgroundColor: 'rgba(11, 13, 16, 0.94)',
              backdropFilter: 'blur(24px)',
              border: '1px solid',
              borderColor: GLASS_BORDER,
              boxShadow: `0 40px 100px -40px rgba(0, 229, 255, 0.35), ${INSET_RIM}`,
            },
          }}
        >
          <Box sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.3), rgba(0, 229, 255, 0.25))',
                  border: '1px solid rgba(0, 229, 255, 0.35)',
                  color: 'info.main',
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 24 }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    color: 'info.main',
                    mb: 0.25,
                  }}
                >
                  Ready to ship
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'text.primary',
                  }}
                >
                  Resume downloaded
                </Typography>
              </Box>
            </Stack>

            <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.55 }}>
              Your PDF is in your downloads folder. Want to share your progress or send a live link to recruiters?
            </Typography>

            {/* Shareable link card */}
            <Box
              sx={{
                mb: 3,
                p: 2.5,
                borderRadius: '14px',
                backgroundColor: GLASS_SURFACE,
                border: '1px solid',
                borderColor: GLASS_BORDER_HOVER,
                boxShadow: INSET_RIM,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: 'text.primary',
                  mb: 0.75,
                }}
              >
                Get a shareable link
              </Typography>
              <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.55 }}>
                A live URL that renders your resume — perfect for email signatures, LinkedIn messages, and portfolios.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={isGeneratingLink ? <CircularProgress size={18} color="inherit" /> : <ShareIcon />}
                onClick={handleGenerateShareableLink}
                disabled={isGeneratingLink}
                sx={{
                  py: 1.35,
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  ...primaryCtaSx,
                }}
              >
                {shareableLink
                  ? 'Copy shareable link'
                  : isGeneratingLink
                  ? 'Generating link...'
                  : 'Generate shareable link'}
              </Button>
              {shareableLink && (
                <Typography
                  sx={{
                    mt: 1.5,
                    color: 'info.main',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                >
                  ✓ Link copied to clipboard
                </Typography>
              )}
            </Box>

            <Divider sx={{ my: 2, borderColor: GLASS_BORDER }}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                OR SHARE ON
              </Typography>
            </Divider>

            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Twitter />}
                  onClick={() => handleShare('twitter')}
                  sx={{ ...ghostBtnSx, py: 1.25, fontSize: '0.9rem' }}
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
                  sx={{ ...ghostBtnSx, py: 1.25, fontSize: '0.9rem' }}
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
                  sx={{ ...ghostBtnSx, py: 1.25, fontSize: '0.9rem' }}
                >
                  Copy
                </Button>
              </Grid>
            </Grid>

            <Button
              onClick={() => setShareDialogOpen(false)}
              variant="text"
              fullWidth
              sx={{ mt: 2.5, color: 'text.secondary', textTransform: 'none', fontWeight: 500 }}
            >
              Done
            </Button>
          </Box>
        </Dialog>

        {/* ========= COPY SNACKBAR ========= */}
        <Snackbar
          open={copySnackbarOpen}
          autoHideDuration={3000}
          onClose={() => setCopySnackbarOpen(false)}
          message="Link copied to clipboard"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          sx={{
            '& .MuiSnackbarContent-root': {
              backgroundColor: 'rgba(11, 13, 16, 0.96)',
              backdropFilter: 'blur(16px)',
              border: '1px solid',
              borderColor: GLASS_BORDER_HOVER,
              borderRadius: '10px',
              color: 'text.primary',
              boxShadow: `0 16px 40px -20px rgba(0, 229, 255, 0.35), ${INSET_RIM}`,
            },
          }}
        />
      </Box>
    </Box>
  );
}

/* =============================================================== */
/*  SUB-COMPONENTS                                                  */
/* =============================================================== */

/** Styled MUI Accordion wrapper for form sections */
function SectionAccordion({
  id,
  title,
  hint,
  expanded,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  hint?: string;
  expanded: boolean;
  onToggle: (next: string) => void;
  children: React.ReactNode;
}) {
  return (
    <Accordion
      expanded={expanded}
      onChange={() => {
        const newPanel = expanded ? '' : id;
        onToggle(newPanel);
        if (newPanel) trackEvent('Resume Builder - Section Expanded', { section: id });
      }}
      sx={accordionSx}
      disableGutters
      elevation={0}
      square={false}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: expanded ? 'info.main' : 'text.secondary',
              transition: `transform 0.3s ${EASING}, color 0.3s ease`,
            }}
          />
        }
      >
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ width: '100%' }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: expanded ? 'info.main' : 'rgba(245, 247, 250, 0.2)',
              boxShadow: expanded ? '0 0 8px rgba(0, 229, 255, 0.6)' : 'none',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: 'text.primary',
                lineHeight: 1.25,
              }}
            >
              {title}
            </Typography>
            {hint && (
              <Typography sx={{ color: 'text.secondary', fontSize: '0.78rem', mt: 0.25 }}>
                {hint}
              </Typography>
            )}
          </Box>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

/** Inner frosted panel used for list-items inside accordions (work/edu entries) */
function GlassInner({
  children,
  label,
  onRemove,
}: {
  children: React.ReactNode;
  label: string;
  onRemove?: () => void;
}) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: '12px',
        backgroundColor: 'rgba(245, 247, 250, 0.025)',
        border: '1px solid',
        borderColor: GLASS_BORDER,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.75 }}>
        <Typography
          sx={{
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          {label}
        </Typography>
        {onRemove && (
          <IconButton
            size="small"
            onClick={onRemove}
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'error.light', backgroundColor: 'rgba(255, 82, 82, 0.08)' },
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </Stack>
      {children}
    </Box>
  );
}

/** Floating glass-frosted action dock pinned to the bottom of the viewport */
function ActionDock({
  isGenerating,
  onDownload,
  onShare,
  onUpload,
}: {
  isGenerating: boolean;
  onDownload: () => void;
  onShare: () => void;
  onUpload: () => void;
}) {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 24 },
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        p: 0.75,
        borderRadius: '999px',
        backgroundColor: 'rgba(11, 13, 16, 0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid',
        borderColor: GLASS_BORDER,
        boxShadow: `0 20px 50px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 229, 255, 0.08), ${INSET_RIM}`,
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      <Tooltip title="Upload PDF">
        <IconButton
          onClick={onUpload}
          aria-label="Upload PDF"
          sx={{
            color: 'text.secondary',
            transition: `color 0.2s ease, background-color 0.2s ease`,
            '&:hover': { color: 'info.main', backgroundColor: 'rgba(0, 229, 255, 0.08)' },
          }}
        >
          <UploadIcon />
        </IconButton>
      </Tooltip>

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, my: 1, borderColor: GLASS_BORDER }} />

      <Button
        onClick={onDownload}
        disabled={isGenerating}
        startIcon={isGenerating ? <CircularProgress size={16} color="inherit" /> : <DownloadIcon />}
        sx={{
          ...primaryCtaSx,
          px: { xs: 2, md: 3 },
          py: 1,
          borderRadius: '999px',
          fontSize: '0.92rem',
          minHeight: 40,
        }}
      >
        {isGenerating ? 'Generating...' : 'Download PDF'}
      </Button>

      <Tooltip title="Share">
        <IconButton
          onClick={onShare}
          aria-label="Share"
          sx={{
            color: 'text.secondary',
            '&:hover': { color: 'info.main', backgroundColor: 'rgba(0, 229, 255, 0.08)' },
          }}
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
