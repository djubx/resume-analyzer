'use client';

import { useState, useEffect, createElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PersonalInfo,
    WorkExperience,
    Education,
    Skills,
    AdditionalInfo,
    Summary,
    Review,
    UploadResume,
} from './components';
import { Icon } from './components/Icon';
import { ResumeData } from './types';
import { defaultResumeData } from './utils/defaultData';
import { 
    STEPS, 
    templates, 
    emptyResumeData, 
    StepType, 
    STEP_ORDER,
    DEFAULT_TEMPLATE,
    ICONS,
} from './constants/page-constants';
import Navbar from '@/components/Navbar';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
  LinearProgress,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';

export default function CreateResume() {
    const [currentStep, setCurrentStep] = useState<StepType>(STEPS.UPLOAD);
    const [selectedTemplate, setSelectedTemplate] = useState(DEFAULT_TEMPLATE);
    const [formData, setFormData] = useState<ResumeData>(emptyResumeData);
    const [useDefaultData, setUseDefaultData] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        const currentIdx = STEP_ORDER.indexOf(currentStep);
        const progress = (currentIdx / (STEP_ORDER.length - 1)) * 100;
        setProgressWidth(progress);
    }, [currentStep]);

    const handleUpdate = (section: keyof ResumeData, field: string | null, value: any) => {
        setFormData(prev => {
            if (!field) {
                return {
                    ...prev,
                    [section]: value,
                };
            }
            const sectionData = prev[section];
            if (typeof sectionData === 'object' && sectionData !== null) {
                return {
                    ...prev,
                    [section]: {
                        ...sectionData,
                        [field]: value,
                    }
                };
            }
            return prev;
        });
    };

    const handleArrayUpdate = (section: keyof ResumeData, value: any) => {
        setFormData(prev => ({
            ...prev,
            [section]: value,
        }));
    };

    const handleArrayItemAdd = (section: keyof ResumeData, defaultItem: any) => {
        setFormData(prev => ({
            ...prev,
            [section]: Array.isArray(prev[section]) 
                ? [...(prev[section] as any[]), defaultItem]
                : [defaultItem],
        }));
    };

    const handleArrayItemRemove = (section: keyof ResumeData, index: number) => {
        setFormData(prev => ({
            ...prev,
            [section]: Array.isArray(prev[section])
                ? (prev[section] as any[]).filter((_: any, i: number) => i !== index)
                : prev[section],
        }));
    };

    const toggleDefaultData = () => {
        setFormData(useDefaultData ? emptyResumeData : defaultResumeData);
        setUseDefaultData(!useDefaultData);
    };

    const handleStepClick = (stepIndex: number) => {
        const currentIdx = STEP_ORDER.indexOf(currentStep);
        if (stepIndex <= currentIdx + 1) {
            setCurrentStep(STEP_ORDER[stepIndex]);
        }
    };

    const handleStepComplete = () => {
        const currentIdx = STEP_ORDER.indexOf(currentStep);
        if (currentIdx < STEP_ORDER.length - 1) {
            setCurrentStep(STEP_ORDER[currentIdx + 1]);
        }
    };

    const renderStepContent = () => {
        const commonProps = {
            data: formData,
            onUpdate: handleUpdate,
            onArrayUpdate: handleArrayUpdate,
            onArrayItemAdd: handleArrayItemAdd,
            onArrayItemRemove: handleArrayItemRemove,
        };

        const content = (() => {
            switch (currentStep) {
                case STEPS.UPLOAD:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Upload Existing Resume
                            </Typography>
                            <UploadResume {...commonProps} onStepComplete={handleStepComplete} />
                        </>
                    );
                case STEPS.PERSONAL:
                    return (
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                                    Personal Information
                                </Typography>
                                <Button
                                    onClick={toggleDefaultData}
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<Icon path={useDefaultData ? ICONS.CLEAR_SAMPLE : ICONS.LOAD_SAMPLE} />}
                                >
                                    {useDefaultData ? 'Clear Sample Data' : 'Load Sample Data'}
                                </Button>
                            </Box>
                            <PersonalInfo {...commonProps} />
                        </>
                    );
                case STEPS.EXPERIENCE:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Work Experience
                            </Typography>
                            <WorkExperience {...commonProps} />
                        </>
                    );
                case STEPS.EDUCATION:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Education
                            </Typography>
                            <Education {...commonProps} />
                        </>
                    );
                case STEPS.SKILLS:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Skills & Expertise
                            </Typography>
                            <Skills {...commonProps} />
                        </>
                    );
                case STEPS.ADDITIONAL:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Additional Information
                            </Typography>
                            <AdditionalInfo {...commonProps} />
                        </>
                    );
                case STEPS.SUMMARY:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Professional Summary
                            </Typography>
                            <Summary {...commonProps} />
                        </>
                    );
                case STEPS.REVIEW:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Review & Finalize
                            </Typography>
                            <Review
                                data={formData}
                                selectedTemplate={selectedTemplate}
                                templates={templates}
                                onTemplateSelect={setSelectedTemplate}
                            />
                        </>
                    );
                case STEPS.TEMPLATE:
                    return (
                        <>
                            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                                Choose Your Template
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                                Select a template that best represents your professional style. 
                                Preview how your resume looks with your current data.
                            </Typography>
                            <Grid container spacing={3}>
                                {templates.map((template) => (
                                    <Grid item xs={12} md={6} key={template.id}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Paper
                                                elevation={selectedTemplate === template.id ? 8 : 2}
                                                onClick={() => setSelectedTemplate(template.id)}
                                                sx={{
                                                    p: 3,
                                                    cursor: 'pointer',
                                                    bgcolor: 'background.paper',
                                                    border: 2,
                                                    borderColor: selectedTemplate === template.id 
                                                        ? 'primary.main' 
                                                        : 'transparent',
                                                    '&:hover': {
                                                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                                                    },
                                                }}
                                            >
                                                <Box sx={{ mb: 2, overflow: 'hidden', borderRadius: 1 }}>
                                                    {createElement(template.component, { data: formData })}
                                                </Box>
                                                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                                                    {template.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {template.description}
                                                </Typography>
                                            </Paper>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    );
            }
        })();

        return (
            <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                {content}
            </motion.div>
        );
    };

    const currentStepIndex = STEP_ORDER.indexOf(currentStep);
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === STEP_ORDER.length - 1;

    return (
        <Box sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default',
        }}>
            <Navbar />
            <Container 
                maxWidth="lg" 
                sx={{ 
                    flexGrow: 1,
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ mb: 4 }}>
                    <LinearProgress 
                        variant="determinate" 
                        value={progressWidth} 
                        sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                            },
                        }}
                    />
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {STEP_ORDER.map((step, index) => {
                            const isActive = currentStep === step;
                            const isCompleted = index < currentStepIndex;
                            const isClickable = index <= currentStepIndex + 1;

                            return (
                                <Grid item key={step}>
                                    <Button
                                        onClick={() => handleStepClick(index)}
                                        disabled={!isClickable}
                                        variant={isActive ? 'contained' : 'outlined'}
                                        color={isCompleted ? 'success' : 'primary'}
                                        sx={{
                                            opacity: isClickable ? 1 : 0.5,
                                            '&.Mui-disabled': {
                                                opacity: 0.5,
                                            },
                                        }}
                                    >
                                        {step}
                                    </Button>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>

                <Paper 
                    elevation={4}
                    sx={{ 
                        p: 4,
                        flexGrow: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                    }}
                >
                    <AnimatePresence mode="wait">
                        {renderStepContent()}
                    </AnimatePresence>
                </Paper>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        disabled={isFirstStep}
                        onClick={() => setCurrentStep(STEP_ORDER[currentStepIndex - 1])}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={isLastStep}
                        onClick={handleStepComplete}
                    >
                        Next
                    </Button>
                </Box>
            </Container>
        </Box>
    );
} 