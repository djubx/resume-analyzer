'use client';

import { ChangeEvent, useState } from 'react';
import { ResumeData } from '../types';

interface UploadResumeProps {
  data: ResumeData;
  onUpdate: (section: keyof ResumeData, field: string | null, value: any) => void;
  onArrayUpdate: (section: keyof ResumeData, value: any) => void;
  onArrayItemAdd: (section: keyof ResumeData, defaultItem: any) => void;
  onArrayItemRemove: (section: keyof ResumeData, index: number) => void;
}

export default function UploadResume({ data, onUpdate, onArrayUpdate }: UploadResumeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Convert PDF to text
      const formData = new FormData();
      formData.append('file', file);

      // First, send the PDF to a new API endpoint that will handle PDF parsing
      const textResponse = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!textResponse.ok) {
        throw new Error('Failed to parse PDF');
      }

      const { text } = await textResponse.json();

      // Now send the extracted text to our analysis endpoint
      const analysisResponse = await fetch('/api/extract-resume-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pdfText: text }),
      });

      if (!analysisResponse.ok) {
        const errorData = await analysisResponse.json();
        throw new Error(errorData.error || 'Failed to analyze resume');
      }

      const analyzedData = await analysisResponse.json();

      // Update each section of the resume data
      Object.entries(analyzedData).forEach(([section, value]) => {
        if (section in data) {
          if (Array.isArray(value)) {
            onArrayUpdate(section as keyof ResumeData, value);
          } else if (typeof value === 'object' && value !== null) {
            // Handle nested objects like contactInformation
            Object.entries(value).forEach(([field, fieldValue]) => {
              onUpdate(section as keyof ResumeData, field, fieldValue);
            });
          } else {
            onUpdate(section as keyof ResumeData, null, value);
          }
        }
      });

      // Show success message
      setError(null);
    } catch (err) {
      console.error('Error processing PDF:', err);
      setError(err instanceof Error ? err.message : 'Failed to process resume');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="hidden"
          id="resume-upload"
          disabled={isLoading}
        />
        <label
          htmlFor="resume-upload"
          className={`cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md ${isLoading ? 'opacity-50' : 'hover:bg-blue-700'} transition-colors`}
        >
          {isLoading ? 'Processing Resume...' : 'Upload PDF Resume'}
        </label>
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">
          Upload your PDF resume to automatically fill in your information
        </p>
      </div>
    </div>
  );
}