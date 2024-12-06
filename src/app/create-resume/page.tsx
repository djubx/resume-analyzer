'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ModernTemplate from './templates/modern/ModernTemplate';
import ProfessionalTemplate from './templates/professional/ProfessionalTemplate';
import CreativeTemplate from './templates/creative/CreativeTemplate';
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

export default function CreateResume() {
  const [currentStep, setCurrentStep] = useState(STEPS.TEMPLATE);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [formData, setFormData] = useState<ResumeData>({
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
  });

  const templates = [
    { id: 'modern', name: 'Modern', component: ModernTemplate },
    { id: 'professional', name: 'Professional', component: ProfessionalTemplate },
    { id: 'creative', name: 'Creative', component: CreativeTemplate },
  ];

  const handleUpdate = (section: ResumeSection, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: field ? {
        ...prev[section],
        [field]: value,
      } : value,
    }));
  };

  const handleArrayUpdate = (section: ResumeSection, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: value,
    }));
  };

  const handleArrayItemAdd = (section: ResumeSection, defaultItem: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], defaultItem],
    }));
  };

  const handleArrayItemRemove = (section: ResumeSection, index: number) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_: any, i: number) => i !== index),
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.TEMPLATE:
        return (
          <TemplateSelection
            templates={templates}
            selectedTemplate={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
        );
      case STEPS.PERSONAL:
        return (
          <PersonalInfo
            data={formData}
            onUpdate={handleUpdate}
            onArrayUpdate={handleArrayUpdate}
            onArrayItemAdd={handleArrayItemAdd}
            onArrayItemRemove={handleArrayItemRemove}
          />
        );
      case STEPS.EXPERIENCE:
        return (
          <WorkExperience
            data={formData}
            onUpdate={handleUpdate}
            onArrayUpdate={handleArrayUpdate}
            onArrayItemAdd={handleArrayItemAdd}
            onArrayItemRemove={handleArrayItemRemove}
          />
        );
      case STEPS.EDUCATION:
        return (
          <Education
            data={formData}
            onUpdate={handleUpdate}
            onArrayUpdate={handleArrayUpdate}
            onArrayItemAdd={handleArrayItemAdd}
            onArrayItemRemove={handleArrayItemRemove}
          />
        );
      case STEPS.SKILLS:
        return (
          <Skills
            data={formData}
            onUpdate={handleUpdate}
            onArrayUpdate={handleArrayUpdate}
            onArrayItemAdd={handleArrayItemAdd}
            onArrayItemRemove={handleArrayItemRemove}
          />
        );
      case STEPS.ADDITIONAL:
        return (
          <AdditionalInfo
            data={formData}
            onUpdate={handleUpdate}
            onArrayUpdate={handleArrayUpdate}
            onArrayItemAdd={handleArrayItemAdd}
            onArrayItemRemove={handleArrayItemRemove}
          />
        );
      case STEPS.SUMMARY:
        return (
          <Summary
            data={formData}
            onUpdate={handleUpdate}
            onArrayUpdate={handleArrayUpdate}
            onArrayItemAdd={handleArrayItemAdd}
            onArrayItemRemove={handleArrayItemRemove}
          />
        );
      case STEPS.REVIEW:
        return (
          <Review
            data={formData}
            selectedTemplate={selectedTemplate}
            templates={templates}
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
                className={`flex items-center ${
                  value === currentStep
                    ? 'text-blue-500'
                    : value < currentStep
                    ? 'text-green-500'
                    : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    value === currentStep
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
                    className={`h-1 w-12 mx-2 ${
                      value < currentStep ? 'bg-green-500' : 'bg-gray-200'
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
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            className={`px-4 py-2 rounded ${
              currentStep === 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(8, currentStep + 1))}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {currentStep === 8 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
} 