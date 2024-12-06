'use client';

import { StepProps, WorkExperience as WorkExperienceType } from '../types';

export default function WorkExperience({ data, onArrayUpdate, onArrayItemAdd, onArrayItemRemove }: StepProps) {
  const handleExperienceChange = (index: number, field: keyof WorkExperienceType, value: string) => {
    const newExp = [...data.workExperience];
    newExp[index] = { ...newExp[index], [field]: value };
    onArrayUpdate('workExperience', newExp);
  };

  const handleResponsibilityChange = (expIndex: number, respIndex: number, value: string) => {
    const newExp = [...data.workExperience];
    newExp[expIndex].responsibilities[respIndex] = value;
    onArrayUpdate('workExperience', newExp);
  };

  const addResponsibility = (expIndex: number) => {
    const newExp = [...data.workExperience];
    newExp[expIndex].responsibilities.push('');
    onArrayUpdate('workExperience', newExp);
  };

  const removeResponsibility = (expIndex: number, respIndex: number) => {
    const newExp = [...data.workExperience];
    newExp[expIndex].responsibilities = newExp[expIndex].responsibilities.filter((_, i) => i !== respIndex);
    onArrayUpdate('workExperience', newExp);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <button
          onClick={() => onArrayItemAdd('workExperience', {
            jobTitle: '',
            companyName: '',
            location: '',
            dates: '',
            responsibilities: [''],
          })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Experience
        </button>
      </div>
      {data.workExperience.map((exp, index) => (
        <div key={index} className="border p-4 rounded-lg space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => onArrayItemRemove('workExperience', index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Job Title"
              value={exp.jobTitle}
              onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={exp.companyName}
              onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Location"
              value={exp.location}
              onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Dates (e.g., Jan 2020 - Present)"
              value={exp.dates}
              onChange={(e) => handleExperienceChange(index, 'dates', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="space-y-2">
            {exp.responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Responsibility"
                  value={resp}
                  onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
                <button
                  onClick={() => removeResponsibility(index, respIndex)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addResponsibility(index)}
              className="text-blue-500 hover:text-blue-700"
            >
              Add Responsibility
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 