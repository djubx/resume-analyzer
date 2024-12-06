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
    description: string;
    component: ComponentType<{ data: ResumeData }>;
  }>;
  onTemplateSelect: (templateId: string) => void;
}

export default function Review({ data, selectedTemplate, templates, onTemplateSelect }: ReviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);

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
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Choose Your Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => onTemplateSelect(template.id)}
            >
              <div className="h-40 bg-gray-100 rounded mb-4 overflow-hidden">
                <div className="transform scale-[0.2] origin-top-left">
                  <template.component data={data} />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">{template.name}</h3>
              <p className="text-sm text-gray-600 text-center">{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Preview & Download</h2>
        <div id="resume-template" className="bg-white rounded-lg shadow-lg">
          {templates.find(t => t.id === selectedTemplate)?.component({ data })}
        </div>
        <div className="flex justify-center mt-6">
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
    </div>
  );
} 