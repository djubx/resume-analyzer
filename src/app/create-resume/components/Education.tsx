'use client';

import { StepProps, Education as EducationType } from '../types';

export default function Education({ data, onArrayUpdate, onArrayItemAdd, onArrayItemRemove }: StepProps) {
  const handleEducationChange = (index: number, field: keyof EducationType, value: string) => {
    const newEdu = [...data.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    onArrayUpdate('education', newEdu);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          onClick={() => onArrayItemAdd('education', {
            degree: '',
            institution: '',
            graduationDate: '',
          })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Education
        </button>
      </div>
      {data.education.map((edu, index) => (
        <div key={index} className="border p-4 rounded-lg space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => onArrayItemRemove('education', index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Graduation Date"
              value={edu.graduationDate}
              onChange={(e) => handleEducationChange(index, 'graduationDate', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
} 