'use client';

import { StepProps } from '../types';

export default function Summary({ data, onUpdate }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
      <textarea
        placeholder="Write a brief summary of your professional background and career objectives..."
        value={data.professionalSummary}
        onChange={(e) => onUpdate('professionalSummary', '', e.target.value)}
        className="w-full p-2 border rounded-md h-40"
      />
    </div>
  );
} 