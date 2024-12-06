import ModernTemplate from '../templates/modern/ModernTemplate';
import ProfessionalTemplate from '../templates/professional/ProfessionalTemplate';
import CreativeTemplate from '../templates/creative/CreativeTemplate';
import CompactTemplate from '../templates/compact/CompactTemplate';
import ExecutiveTemplate from '../templates/executive/ExecutiveTemplate';
import MinimalistTemplate from '../templates/minimalist/MinimalistTemplate';
import TechnicalTemplate from '../templates/technical/TechnicalTemplate';
import { ResumeData } from '../types';

export const STEPS = {
    PERSONAL: 'PERSONAL',
    EXPERIENCE: 'EXPERIENCE',
    EDUCATION: 'EDUCATION',
    SKILLS: 'SKILLS',
    ADDITIONAL: 'ADDITIONAL',
    SUMMARY: 'SUMMARY',
    REVIEW: 'REVIEW',
    TEMPLATE: 'TEMPLATE',
} as const;

export type StepType = typeof STEPS[keyof typeof STEPS];

export const STEP_ORDER: StepType[] = [
    STEPS.PERSONAL,
    STEPS.EXPERIENCE,
    STEPS.EDUCATION,
    STEPS.SKILLS,
    STEPS.ADDITIONAL,
    STEPS.SUMMARY,
    STEPS.REVIEW,
    STEPS.TEMPLATE,
];

export const DEFAULT_TEMPLATE = 'modern';

export const ICONS = {
    LOAD_SAMPLE: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z",
    CLEAR_SAMPLE: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
};

export const STYLES = {
    STEP_INDICATOR: {
        CONTAINER: "flex justify-between items-center",
        ITEM: (isActive: boolean, isCompleted: boolean) => `flex items-center ${
            isActive ? 'text-blue-500' : isCompleted ? 'text-green-500' : 'text-gray-400'
        }`,
        CIRCLE: (isActive: boolean, isCompleted: boolean) => `w-8 h-8 rounded-full flex items-center justify-center ${
            isActive ? 'bg-blue-500 text-white' : isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`,
        CONNECTOR: (isCompleted: boolean) => `h-1 w-12 mx-2 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`,
    },
    TEMPLATE_CARD: {
        CONTAINER: (isSelected: boolean) => `border-2 rounded-lg p-4 cursor-pointer transition-all ${
            isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
        }`,
        PREVIEW: "h-40 bg-gray-100 rounded mb-4",
        TITLE: "text-lg font-medium mb-2",
        DESCRIPTION: "text-sm text-gray-600",
    },
    NAVIGATION: {
        BUTTON: (isDisabled: boolean) => `px-4 py-2 rounded ${
            isDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`,
    },
    SAMPLE_DATA_BUTTON: "text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2",
};

export const templates = [
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

export const emptyResumeData: ResumeData = {
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