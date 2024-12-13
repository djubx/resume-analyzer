import ModernTemplate from '../templates/modern/ModernTemplate';
import ProfessionalTemplate from '../templates/professional/ProfessionalTemplate';
import CreativeTemplate from '../templates/creative/CreativeTemplate';
import CompactTemplate from '../templates/compact/CompactTemplate';
import ExecutiveTemplate from '../templates/executive/ExecutiveTemplate';
import MinimalistTemplate from '../templates/minimalist/MinimalistTemplate';
import TechnicalTemplate from '../templates/technical/TechnicalTemplate';
import VibrantTemplate from '../templates/vibrant/VibrantTemplate';
import FuturisticTemplate from '../templates/futuristic/FuturisticTemplate';
import ElegantTemplate from '../templates/elegant/ElegantTemplate';
import RetroTemplate from '../templates/retro/RetroTemplate';
import MinimalDarkTemplate from '../templates/minimal-dark/MinimalDarkTemplate';
import NordicTemplate from '../templates/nordic/NordicTemplate';
import NeonWaveTemplate from '../templates/neon-wave/NeonWaveTemplate';
import NatureTemplate from '../templates/nature/NatureTemplate';
import GeometricTemplate from '../templates/geometric/GeometricTemplate';
import ArtisticTemplate from '../templates/artistic/ArtisticTemplate';
import BrutalistTemplate from '../templates/brutalist/BrutalistTemplate';
import { ResumeData } from '../types';

export const STEPS = {
    UPLOAD: 'UPLOAD',
    PERSONAL: 'PERSONAL',
    EXPERIENCE: 'EXPERIENCE',
    EDUCATION: 'EDUCATION',
    SKILLS: 'SKILLS',
    ADDITIONAL: 'ADDITIONAL',
    SUMMARY: 'SUMMARY',
    TEMPLATE: 'TEMPLATE',
    REVIEW: 'REVIEW',
} as const;

export type StepType = typeof STEPS[keyof typeof STEPS];

export const STEP_ORDER: StepType[] = [
    STEPS.UPLOAD,
    STEPS.PERSONAL,
    STEPS.EXPERIENCE,
    STEPS.EDUCATION,
    STEPS.SKILLS,
    STEPS.ADDITIONAL,
    STEPS.SUMMARY,
    STEPS.TEMPLATE,
    STEPS.REVIEW,
];

export const DEFAULT_TEMPLATE = 'modern';

export const ICONS = {
    LOAD_SAMPLE: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z",
    CLEAR_SAMPLE: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
};

export const STYLES = {
    PAGE: {
        CONTAINER: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-4 sm:py-8 md:py-12 px-2 sm:px-4",
        CONTENT: "max-w-7xl mx-auto",
    },
    STEP_INDICATOR: {
        CONTAINER: "flex justify-between items-center relative mb-8 sm:mb-12 px-2 sm:px-4 overflow-x-auto pb-4 sm:pb-0 hide-scrollbar",
        PROGRESS_BAR: (progress: number) => `absolute h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out rounded-full -z-10 top-4`,
        ITEM: (isActive: boolean, isCompleted: boolean) => `
            flex flex-col items-center cursor-pointer min-w-[80px] sm:min-w-0
            ${isActive ? 'scale-110 transition-transform duration-300' : 'scale-100'}
            hover:scale-105 transition-all duration-300
        `,
        CIRCLE: (isActive: boolean, isCompleted: boolean) => `
            w-8 h-8 rounded-full flex items-center justify-center 
            transition-all duration-300 ease-out transform
            ${isActive 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-110' 
                : isCompleted 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
            }
            ${isActive ? 'ring-4 ring-blue-100' : ''}
            hover:shadow-md
        `,
        LABEL: (isActive: boolean, isCompleted: boolean) => `
            mt-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap
            ${isActive 
                ? 'text-blue-600' 
                : isCompleted 
                    ? 'text-green-600'
                    : 'text-gray-500'
            }
            group-hover:text-blue-600
        `,
        CONNECTOR: "hidden",
    },
    TEMPLATE_CARD: {
        CONTAINER: (isSelected: boolean) => `
            border-2 rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300
            hover:shadow-xl transform hover:-translate-y-1
            ${isSelected 
                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg' 
                : 'border-gray-200 hover:border-blue-300 bg-white'
            }
        `,
        PREVIEW: "h-[400px] sm:h-[600px] bg-white rounded-lg mb-4 overflow-hidden shadow-inner",
        PREVIEW_WRAPPER: "transform scale-[0.4] origin-top h-[250%] w-[250%] -ml-[75%] -mt-[75%]",
        TITLE: "text-base sm:text-lg font-semibold mb-2 text-gray-800",
        DESCRIPTION: "text-xs sm:text-sm text-gray-600 line-clamp-2",
        GRID: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8",
    },
    NAVIGATION: {
        CONTAINER: "mt-6 sm:mt-8 flex justify-between items-center pt-4 sm:pt-6 border-t border-gray-200",
        BUTTON: (isDisabled: boolean) => `
            px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base
            ${isDisabled 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transform hover:-translate-y-0.5'
            }
        `,
    },
    SAMPLE_DATA_BUTTON: `
        text-blue-600 hover:text-purple-600 font-medium flex items-center gap-2 
        px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-sm sm:text-base
        hover:bg-blue-50 border border-transparent hover:border-blue-200
    `,
    CONTENT_CONTAINER: `
        bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8
        transform transition-all duration-500 ease-out
    `,
    SECTION_TITLE: `
        text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800
        bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text
    `,
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
        id: 'vibrant',
        name: 'Vibrant Gradient',
        description: 'A modern and energetic design with vibrant gradients and bold colors.',
        component: VibrantTemplate
    },
    {
        id: 'neon-wave',
        name: 'Neon Wave',
        description: 'A cyberpunk-inspired design with neon colors and retro-futuristic elements.',
        component: NeonWaveTemplate
    },
    {
        id: 'nature',
        name: 'Nature',
        description: 'An organic design with natural colors and flowing elements.',
        component: NatureTemplate
    },
    {
        id: 'geometric',
        name: 'Geometric',
        description: 'A bold design with geometric shapes and strong visual elements.',
        component: GeometricTemplate
    },
    {
        id: 'artistic',
        name: 'Artistic',
        description: 'A creative design with artistic flourishes and elegant typography.',
        component: ArtisticTemplate
    },
    {
        id: 'brutalist',
        name: 'Brutalist',
        description: 'A raw and bold design inspired by brutalist web design principles.',
        component: BrutalistTemplate
    },
    {
        id: 'futuristic',
        name: 'Futuristic Dark',
        description: 'A cutting-edge design with neon accents and dark mode aesthetics.',
        component: FuturisticTemplate
    },
    {
        id: 'elegant',
        name: 'Elegant Serif',
        description: 'A sophisticated design with classic typography and refined spacing.',
        component: ElegantTemplate
    },
    {
        id: 'retro',
        name: 'Retro Vintage',
        description: 'A nostalgic design with typewriter fonts and vintage aesthetics.',
        component: RetroTemplate
    },
    {
        id: 'minimal-dark',
        name: 'Minimal Dark',
        description: 'A sleek dark theme with minimalist layout and typography.',
        component: MinimalDarkTemplate
    },
    {
        id: 'nordic',
        name: 'Nordic Clean',
        description: 'A clean Scandinavian design with subtle shadows and natural colors.',
        component: NordicTemplate
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
    }
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