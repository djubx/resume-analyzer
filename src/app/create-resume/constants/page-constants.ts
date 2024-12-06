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