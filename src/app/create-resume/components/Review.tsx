'use client';

import { ComponentType, useState } from 'react';
import { ResumeData } from '../types';
import { generatePDF } from '../utils/pdfGenerator';

interface ReviewProps {
  data: ResumeData;
  selectedTemplate: string;
  templates: Array<{
    id: string;
    name: string;
    component: ComponentType<{ data: ResumeData }>;
  }>;
}

export default function Review({ data, selectedTemplate, templates }: ReviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const SelectedTemplate = templates.find(t => t.id === selectedTemplate)?.component;

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      await generatePDF(
        'resume-template',
        `${data.contactInformation.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`
      );
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Review & Download</h2>
      <div id="resume-template" className="bg-white">
        {SelectedTemplate && <SelectedTemplate data={data} />}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className={`px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
            disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2`}
        >
          {isGenerating ? (
            <>
              <svg 
                className="animate-spin h-5 w-5 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Generating PDF...
            </>
          ) : (
            'Download PDF'
          )}
        </button>
      </div>
    </div>
  );
} 