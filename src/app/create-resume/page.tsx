'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PersonalInfo,
    WorkExperience,
    Education,
    Skills,
    AdditionalInfo,
    Summary,
    Review,
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
    STYLES
} from './constants/page-constants';

export default function CreateResume() {
    const [currentStep, setCurrentStep] = useState<StepType>(STEPS.PERSONAL);
    const [selectedTemplate, setSelectedTemplate] = useState(DEFAULT_TEMPLATE);
    const [formData, setFormData] = useState<ResumeData>(emptyResumeData);
    const [useDefaultData, setUseDefaultData] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);

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
                case STEPS.PERSONAL:
                    return (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className={STYLES.SECTION_TITLE}>Personal Information</h2>
                                <button
                                    onClick={toggleDefaultData}
                                    className={STYLES.SAMPLE_DATA_BUTTON}
                                >
                                    {useDefaultData ? (
                                        <>
                                            <Icon path={ICONS.CLEAR_SAMPLE} />
                                            Clear Sample Data
                                        </>
                                    ) : (
                                        <>
                                            <Icon path={ICONS.LOAD_SAMPLE} />
                                            Load Sample Data
                                        </>
                                    )}
                                </button>
                            </div>
                            <PersonalInfo {...commonProps} />
                        </>
                    );
                case STEPS.EXPERIENCE:
                    return (
                        <>
                            <h2 className={STYLES.SECTION_TITLE}>Work Experience</h2>
                            <WorkExperience {...commonProps} />
                        </>
                    );
                case STEPS.EDUCATION:
                    return (
                        <>
                            <h2 className={STYLES.SECTION_TITLE}>Education</h2>
                            <Education {...commonProps} />
                        </>
                    );
                case STEPS.SKILLS:
                    return (
                        <>
                            <h2 className={STYLES.SECTION_TITLE}>Skills & Expertise</h2>
                            <Skills {...commonProps} />
                        </>
                    );
                case STEPS.ADDITIONAL:
                    return (
                        <>
                            <h2 className={STYLES.SECTION_TITLE}>Additional Information</h2>
                            <AdditionalInfo {...commonProps} />
                        </>
                    );
                case STEPS.SUMMARY:
                    return (
                        <>
                            <h2 className={STYLES.SECTION_TITLE}>Professional Summary</h2>
                            <Summary {...commonProps} />
                        </>
                    );
                case STEPS.REVIEW:
                    return (
                        <>
                            <h2 className={STYLES.SECTION_TITLE}>Review & Customize</h2>
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
                            <h2 className={STYLES.SECTION_TITLE}>Choose Your Template</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {templates.map((template) => (
                                    <motion.div
                                        key={template.id}
                                        className={STYLES.TEMPLATE_CARD.CONTAINER(selectedTemplate === template.id)}
                                        onClick={() => setSelectedTemplate(template.id)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className={STYLES.TEMPLATE_CARD.PREVIEW}>
                                            {/* Template preview will go here */}
                                        </div>
                                        <h3 className={STYLES.TEMPLATE_CARD.TITLE}>{template.name}</h3>
                                        <p className={STYLES.TEMPLATE_CARD.DESCRIPTION}>{template.description}</p>
                                    </motion.div>
                                ))}
                            </div>
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
                className={STYLES.CONTENT_CONTAINER}
            >
                {content}
            </motion.div>
        );
    };

    const currentStepIndex = STEP_ORDER.indexOf(currentStep);
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === STEP_ORDER.length - 1;

    return (
        <div className={STYLES.PAGE.CONTAINER}>
            <div className={STYLES.PAGE.CONTENT}>
                {/* Progress Steps */}
                <div className="mb-8">
                    <div className={STYLES.STEP_INDICATOR.CONTAINER}>
                        <div 
                            className={STYLES.STEP_INDICATOR.PROGRESS_BAR(progressWidth)}
                            style={{ width: `${progressWidth}%` }}
                        />
                        {STEP_ORDER.map((step, index) => {
                            const isActive = currentStepIndex === index;
                            const isCompleted = currentStepIndex > index;
                            return (
                                <div
                                    key={step}
                                    className={STYLES.STEP_INDICATOR.ITEM(isActive, isCompleted)}
                                >
                                    <motion.div 
                                        className={STYLES.STEP_INDICATOR.CIRCLE(isActive, isCompleted)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {index + 1}
                                    </motion.div>
                                    <span className={STYLES.STEP_INDICATOR.LABEL(isActive)}>{step}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content */}
                <AnimatePresence mode="wait">
                    {renderStepContent()}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className={STYLES.NAVIGATION.CONTAINER}>
                    <motion.button
                        onClick={() => setCurrentStep(STEP_ORDER[currentStepIndex - 1])}
                        className={STYLES.NAVIGATION.BUTTON(isFirstStep)}
                        disabled={isFirstStep}
                        whileHover={!isFirstStep ? { scale: 1.02 } : undefined}
                        whileTap={!isFirstStep ? { scale: 0.98 } : undefined}
                    >
                        Back
                    </motion.button>
                    <motion.button
                        onClick={() => setCurrentStep(STEP_ORDER[currentStepIndex + 1])}
                        className={STYLES.NAVIGATION.BUTTON(false)}
                        disabled={isLastStep}
                        whileHover={!isLastStep ? { scale: 1.02 } : undefined}
                        whileTap={!isLastStep ? { scale: 0.98 } : undefined}
                    >
                        {isLastStep ? 'Finish' : 'Next'}
                    </motion.button>
                </div>
            </div>
        </div>
    );
} 