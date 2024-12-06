'use client';

import { StepProps } from '../types';

export default function AdditionalInfo({ data, onArrayUpdate }: StepProps) {
  const handleArrayChange = (section: 'languages' | 'publications' | 'awards', index: number, value: string) => {
    const newArray = [...data.additionalSections[section]];
    newArray[index] = value;
    onArrayUpdate('additionalSections', {
      ...data.additionalSections,
      [section]: newArray,
    });
  };

  const addItem = (section: 'languages' | 'publications' | 'awards') => {
    const newArray = [...data.additionalSections[section], ''];
    onArrayUpdate('additionalSections', {
      ...data.additionalSections,
      [section]: newArray,
    });
  };

  const removeItem = (section: 'languages' | 'publications' | 'awards', index: number) => {
    const newArray = data.additionalSections[section].filter((_, i) => i !== index);
    onArrayUpdate('additionalSections', {
      ...data.additionalSections,
      [section]: newArray,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
      <div className="space-y-6">
        {/* Languages */}
        <div>
          <h3 className="font-medium mb-2">Languages</h3>
          {data.additionalSections.languages.map((lang, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Language"
                value={lang}
                onChange={(e) => handleArrayChange('languages', index, e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <button
                onClick={() => removeItem('languages', index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addItem('languages')}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Language
          </button>
        </div>

        {/* Publications */}
        <div>
          <h3 className="font-medium mb-2">Publications</h3>
          {data.additionalSections.publications.map((pub, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Publication"
                value={pub}
                onChange={(e) => handleArrayChange('publications', index, e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <button
                onClick={() => removeItem('publications', index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addItem('publications')}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Publication
          </button>
        </div>

        {/* Awards */}
        <div>
          <h3 className="font-medium mb-2">Awards</h3>
          {data.additionalSections.awards.map((award, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Award"
                value={award}
                onChange={(e) => handleArrayChange('awards', index, e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <button
                onClick={() => removeItem('awards', index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => addItem('awards')}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Award
          </button>
        </div>
      </div>
    </div>
  );
} 