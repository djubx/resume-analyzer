'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

        switch (currentStep) {
            case STEPS.PERSONAL:
                return (
                    <div className="space-y-6">
                        <div className="flex justify-end mb-4">
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
                    </div>
                );
            case STEPS.EXPERIENCE:
                return <WorkExperience {...commonProps} />;
            case STEPS.EDUCATION:
                return <Education {...commonProps} />;
            case STEPS.SKILLS:
                return <Skills {...commonProps} />;
            case STEPS.ADDITIONAL:
                return <AdditionalInfo {...commonProps} />;
            case STEPS.SUMMARY:
                return <Summary {...commonProps} />;
            case STEPS.REVIEW:
                return <Review
                    data={formData}
                    selectedTemplate={selectedTemplate}
                    templates={templates}
                    onTemplateSelect={setSelectedTemplate}
                />;
            case STEPS.TEMPLATE:
                return (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Choose Your Template</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {templates.map((template) => (
                                <div
                                    key={template.id}
                                    className={STYLES.TEMPLATE_CARD.CONTAINER(selectedTemplate === template.id)}
                                    onClick={() => setSelectedTemplate(template.id)}
                                >
                                    <div className={STYLES.TEMPLATE_CARD.PREVIEW}>
                                        {/* Template preview will go here */}
                                    </div>
                                    <h3 className={STYLES.TEMPLATE_CARD.TITLE}>{template.name}</h3>
                                    <p className={STYLES.TEMPLATE_CARD.DESCRIPTION}>{template.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
        }
    };

    const currentStepIndex = STEP_ORDER.indexOf(currentStep);
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === STEP_ORDER.length - 1;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Progress Steps */}
                <div className="mb-8">
                    <div className={STYLES.STEP_INDICATOR.CONTAINER}>
                        {STEP_ORDER.map((step, index) => {
                            const isActive = currentStepIndex === index;
                            const isCompleted = currentStepIndex > index;
                            return (
                                <div
                                    key={step}
                                    className={STYLES.STEP_INDICATOR.ITEM(isActive, isCompleted)}
                                >
                                    <div className={STYLES.STEP_INDICATOR.CIRCLE(isActive, isCompleted)}>
                                        {index + 1}
                                    </div>
                                    <span className="ml-2 hidden md:inline">{step}</span>
                                    {index < STEP_ORDER.length - 1 && (
                                        <div className={STYLES.STEP_INDICATOR.CONNECTOR(isCompleted)} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content */}
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderStepContent()}
                </motion.div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={() => setCurrentStep(STEP_ORDER[currentStepIndex - 1])}
                        className={STYLES.NAVIGATION.BUTTON(isFirstStep)}
                        disabled={isFirstStep}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => setCurrentStep(STEP_ORDER[currentStepIndex + 1])}
                        className={STYLES.NAVIGATION.BUTTON(false)}
                        disabled={isLastStep}
                    >
                        {isLastStep ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
} 