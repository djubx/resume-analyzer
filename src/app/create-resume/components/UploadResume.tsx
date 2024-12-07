'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import { ResumeData } from '../types';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface UploadResumeProps {
  data: ResumeData;
  onUpdate: (section: keyof ResumeData, field: string | null, value: any) => void;
  onArrayUpdate: (section: keyof ResumeData, value: any) => void;
  onArrayItemAdd: (section: keyof ResumeData, defaultItem: any) => void;
  onArrayItemRemove: (section: keyof ResumeData, index: number) => void;
  onStepComplete?: () => void;
}

const MAX_RETRIES = 2;
const RETRY_DELAY = 1000; // 1 second

export default function UploadResume({ 
  data, 
  onUpdate, 
  onArrayUpdate,
  onStepComplete 
}: UploadResumeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Auto-navigate after success
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onStepComplete?.();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onStepComplete]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const processFile = async (file: File, attempt: number = 0): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const textResponse = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!textResponse.ok) {
        const errorData = await textResponse.json();
        throw new Error(errorData.error || 'Failed to parse PDF');
      }

      const { text } = await textResponse.json();
      if (!text || text.trim().length === 0) {
        throw new Error('No text could be extracted from the PDF');
      }

      return text;
    } catch (error) {
      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY);
        return processFile(file, attempt + 1);
      }
      throw error;
    }
  };

  const analyzeResume = async (text: string, attempt: number = 0): Promise<any> => {
    try {
      const response = await fetch('/api/extract-resume-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfText: text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze resume');
      }

      return response.json();
    } catch (error) {
      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY);
        return analyzeResume(text, attempt + 1);
      }
      throw error;
    }
  };

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    setRetryCount(0);

    try {
      // Step 1: Process PDF
      const extractedText = await processFile(file);
      
      // Step 2: Analyze Resume
      const analyzedData = await analyzeResume(extractedText);

      // Step 3: Update Data
      Object.entries(analyzedData).forEach(([section, value]) => {
        if (section in data) {
          if (Array.isArray(value)) {
            onArrayUpdate(section as keyof ResumeData, value);
          } else if (typeof value === 'object' && value !== null) {
            Object.entries(value).forEach(([field, fieldValue]) => {
              onUpdate(section as keyof ResumeData, field, fieldValue);
            });
          } else {
            onUpdate(section as keyof ResumeData, null, value);
          }
        }
      });

      setIsSuccess(true);
      setError(null);
    } catch (err) {
      console.error('Error processing PDF:', err);
      setError(err instanceof Error ? err.message : 'Failed to process resume');
      setIsSuccess(false);
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
          disabled={isLoading || isSuccess}
        />
        <label
          htmlFor="resume-upload"
          className={`relative cursor-pointer inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md ${
            isSuccess
              ? 'bg-green-600 hover:bg-green-700'
              : isLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-all duration-200`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing Resume...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Resume Processed Successfully!
            </>
          ) : (
            'Upload PDF Resume'
          )}
        </label>
        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-start">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">{error}</p>
              <p className="text-xs mt-1">
                Please try again or use a different PDF file. Make sure the PDF contains readable text.
              </p>
            </div>
          </div>
        )}
        <p className="text-sm text-gray-500 mt-4">
          Upload your PDF resume to automatically fill in your information
        </p>
      </div>
    </div>
  );
}