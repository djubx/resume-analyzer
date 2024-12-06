'use client';

import { ComponentType } from 'react';
import { ResumeData } from '../types';

interface Template {
  id: string;
  name: string;
  component: ComponentType<{ data: ResumeData }>;
}

interface TemplateSelectionProps {
  templates: Template[];
  selectedTemplate: string;
  onSelect: (templateId: string) => void;
}

export default function TemplateSelection({
  templates,
  selectedTemplate,
  onSelect,
}: TemplateSelectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onSelect(template.id)}
          >
            <div className="h-40 bg-gray-100 rounded mb-4"></div>
            <h3 className="text-center font-medium">{template.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
} 