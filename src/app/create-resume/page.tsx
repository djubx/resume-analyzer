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
import { ResumeData } from './types';
import { defaultResumeData } from './utils/defaultData';
import { STEPS, templates, emptyResumeData, StepType } from './constants/page-constants';

const STEP_ORDER: StepType[] = [
    STEPS.PERSONAL,
    STEPS.EXPERIENCE,
    STEPS.EDUCATION,
    STEPS.SKILLS,
    STEPS.ADDITIONAL,
    STEPS.SUMMARY,
    STEPS.REVIEW,
    STEPS.TEMPLATE,
];

export default function CreateResume() {
    const [currentStep, setCurrentStep] = useState<StepType>(STEPS.PERSONAL);
    const [selectedTemplate, setSelectedTemplate] = useState('modern');
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
                                className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2"
                            >
                                {useDefaultData ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Clear Sample Data
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                        </svg>
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
                                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                        selectedTemplate === template.id
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-blue-300'
                                    }`}
                                    onClick={() => setSelectedTemplate(template.id)}
                                >
                                    <div className="h-40 bg-gray-100 rounded mb-4">
                                        {/* Template preview will go here */}
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">{template.name}</h3>
                                    <p className="text-sm text-gray-600">{template.description}</p>
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
                    <div className="flex justify-between items-center">
                        {STEP_ORDER.map((step, index) => (
                            <div
                                key={step}
                                className={`flex items-center ${STEP_ORDER.indexOf(currentStep) === index
                                    ? 'text-blue-500'
                                    : STEP_ORDER.indexOf(currentStep) > index
                                        ? 'text-green-500'
                                        : 'text-gray-400'
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        STEP_ORDER.indexOf(currentStep) === index
                                            ? 'bg-blue-500 text-white'
                                            : STEP_ORDER.indexOf(currentStep) > index
                                                ? 'bg-green-500 text-white'
                                                : 'bg-gray-200'
                                    }`}
                                >
                                    {index + 1}
                                </div>
                                <span className="ml-2 hidden md:inline">{step}</span>
                                {index < STEP_ORDER.length - 1 && (
                                    <div
                                        className={`h-1 w-12 mx-2 ${
                                            STEP_ORDER.indexOf(currentStep) > index ? 'bg-green-500' : 'bg-gray-200'
                                        }`}
                                    />
                                )}
                            </div>
                        ))}
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
                        className={`px-4 py-2 rounded ${isFirstStep
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                        disabled={isFirstStep}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => setCurrentStep(STEP_ORDER[currentStepIndex + 1])}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        disabled={isLastStep}
                    >
                        {isLastStep ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
} 