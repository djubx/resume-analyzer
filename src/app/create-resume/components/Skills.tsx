'use client';

import { StepProps } from '../types';

export default function Skills({ data, onArrayUpdate, onArrayItemAdd, onArrayItemRemove }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Skills & Certifications</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Skills</h3>
          {data.skills.map((skill, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...data.skills];
                  newSkills[index] = e.target.value;
                  onArrayUpdate('skills', newSkills);
                }}
                className="w-full p-2 border rounded-md"
              />
              <button
                onClick={() => onArrayItemRemove('skills', index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => onArrayItemAdd('skills', '')}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Skill
          </button>
        </div>
        <div>
          <h3 className="font-medium mb-2">Certifications</h3>
          {data.certifications.map((cert, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Certification"
                value={cert}
                onChange={(e) => {
                  const newCerts = [...data.certifications];
                  newCerts[index] = e.target.value;
                  onArrayUpdate('certifications', newCerts);
                }}
                className="w-full p-2 border rounded-md"
              />
              <button
                onClick={() => onArrayItemRemove('certifications', index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => onArrayItemAdd('certifications', '')}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Certification
          </button>
        </div>
      </div>
    </div>
  );
} 