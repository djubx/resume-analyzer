'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import ModernTemplate from './templates/modern/ModernTemplate';
import ProfessionalTemplate from './templates/professional/ProfessionalTemplate';
import CreativeTemplate from './templates/creative/CreativeTemplate';
import CompactTemplate from './templates/compact/CompactTemplate';
import ExecutiveTemplate from './templates/executive/ExecutiveTemplate';
import MinimalistTemplate from './templates/minimalist/MinimalistTemplate';
import TechnicalTemplate from './templates/technical/TechnicalTemplate';

import {
    TemplateSelection,
    PersonalInfo,
    WorkExperience,
    Education,
    Skills,
    AdditionalInfo,
    Summary,
    Review,
} from './components';
import { ResumeData, ResumeSection } from './types';
import { defaultResumeData } from './utils/defaultData';

const STEPS = {
    TEMPLATE: 1,
    PERSONAL: 2,
    EXPERIENCE: 3,
    EDUCATION: 4,
    SKILLS: 5,
    ADDITIONAL: 6,
    SUMMARY: 7,
    REVIEW: 8,
} as const;

type StepType = typeof STEPS[keyof typeof STEPS];

const emptyResumeData: ResumeData = {
    contactInformation: {
        fullName: '',
        phoneNumber: '',
        email: '',
        location: '',
    },
    professionalSummary: '',
    workExperience: [{
        jobTitle: '',
        companyName: '',
        location: '',
        dates: '',
        responsibilities: [''],
    }],
    education: [{
        degree: '',
        institution: '',
        graduationDate: '',
    }],
    skills: [''],
    certifications: [''],
    projects: [{
        name: '',
        description: '',
    }],
    volunteerExperience: [{
        organization: '',
        role: '',
        description: '',
    }],
    professionalAssociations: [''],
    additionalSections: {
        languages: [''],
        publications: [''],
        awards: [''],
    },
};

export default function CreateResume() {
    const [currentStep, setCurrentStep] = useState<StepType>(STEPS.TEMPLATE);
    const [selectedTemplate, setSelectedTemplate] = useState('modern');
    const [formData, setFormData] = useState<ResumeData>(emptyResumeData);
    const [useDefaultData, setUseDefaultData] = useState(false);

    const templates = [
        {
            id: 'modern',
            name: 'Modern Clean',
            description: 'A clean and contemporary design with a focus on readability and visual hierarchy.',
            component: ModernTemplate
        },
        {
            id: 'professional',
            name: 'Professional Classic',
            description: 'A traditional and elegant design perfect for corporate and executive roles.',
            component: ProfessionalTemplate
        },
        {
            id: 'creative',
            name: 'Creative Bold',
            description: 'A vibrant and dynamic design ideal for creative professionals and designers.',
            component: CreativeTemplate
        },
        {
            id: 'compact',
            name: 'Compact',
            description: 'A compact and concise design for a more streamlined resume.',
            component: CompactTemplate
        },
        {
            id: 'executive',
            name: 'Executive',
            description: 'A sophisticated and executive design for high-level professionals.',
            component: ExecutiveTemplate
        },
        {
            id: 'minimalist',
            name: 'Minimalist',
            description: 'A minimalist design with a focus on clarity and simplicity.',
            component: MinimalistTemplate
        },
        {
            id: 'technical',
            name: 'Technical',
            description: 'A technical design with a focus on technical details and expertise.',
            component: TechnicalTemplate
        },
    ];

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
            case STEPS.TEMPLATE:
                return (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Welcome to Resume Builder</h2>
                        <p className="text-gray-600">Let's create your professional resume. You can start with sample data or create from scratch.</p>
                        <div className="flex justify-center">
                            <button
                                onClick={toggleDefaultData}
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                {useDefaultData ? 'Clear Sample Data' : 'Load Sample Data'}
                            </button>
                        </div>
                    </div>
                );
            case STEPS.PERSONAL:
                return <PersonalInfo {...commonProps} />;
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
                return (
                    <Review
                        data={formData}
                        selectedTemplate={selectedTemplate}
                        templates={templates}
                        onTemplateSelect={setSelectedTemplate}
                    />
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Progress Steps */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        {Object.entries(STEPS).map(([key, value]) => (
                            <div
                                key={key}
                                className={`flex items-center ${value === currentStep
                                    ? 'text-blue-500'
                                    : value < currentStep
                                        ? 'text-green-500'
                                        : 'text-gray-400'
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${value === currentStep
                                        ? 'bg-blue-500 text-white'
                                        : value < currentStep
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200'
                                        }`}
                                >
                                    {value}
                                </div>
                                <span className="ml-2 hidden md:inline">{key}</span>
                                {value < Object.keys(STEPS).length && (
                                    <div
                                        className={`h-1 w-12 mx-2 ${value < currentStep ? 'bg-green-500' : 'bg-gray-200'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        {renderStepContent()}
                    </motion.div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={() => setCurrentStep(prev => Math.max(STEPS.TEMPLATE, prev - 1) as StepType)}
                        className={`px-4 py-2 rounded ${currentStep === STEPS.TEMPLATE
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => setCurrentStep(prev => Math.min(STEPS.REVIEW, prev + 1) as StepType)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        {currentStep === STEPS.REVIEW ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
} 