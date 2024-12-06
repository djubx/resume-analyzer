'use client';

import { ComponentType } from 'react';
import { ResumeData } from '../types';

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
  const SelectedTemplate = templates.find(t => t.id === selectedTemplate)?.component;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Review & Download</h2>
      {SelectedTemplate && <SelectedTemplate data={data} />}
      <div className="flex justify-center">
        <button
          onClick={() => {
            // Add PDF download logic here
          }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
} 