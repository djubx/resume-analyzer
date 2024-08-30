import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import * as pdfjsLib from 'pdfjs-dist';

// Ensure the worker is available
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface ATSScoreUploaderProps {
  onParsedData: (data: any) => void;
}

export default function ATSScoreUploader({ onParsedData }: ATSScoreUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const parseResume = async (file: File) => {
    setIsUploading(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      let fullText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        fullText += pageText + ' ';
      }

      // Simple parsing logic (you can expand this based on your needs)
      const parsedData = {
        name: extractName(fullText),
        email: extractEmail(fullText),
        phone: extractPhone(fullText),
        skills: extractSkills(fullText),
        education: extractEducation(fullText),
        experience: extractExperience(fullText),
      };

      onParsedData(parsedData);
    } catch (error) {
      console.error('Error parsing resume:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      await parseResume(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      await parseResume(droppedFile);
    }
  };

  // Placeholder extraction functions (replace with actual implementations)
  const extractName = (text: string) => {
    // Implement name extraction logic
    return "John Doe";
  };

  const extractEmail = (text: string) => {
    // Implement email extraction logic
    return "john@example.com";
  };

  const extractPhone = (text: string) => {
    // Implement phone extraction logic
    return "123-456-7890";
  };

  const extractSkills = (text: string) => {
    // Implement skills extraction logic
    return ["JavaScript", "React", "Node.js"];
  };

  const extractEducation = (text: string) => {
    // Implement education extraction logic
    return "Bachelor's in Computer Science";
  };

  const extractExperience = (text: string) => {
    // Implement experience extraction logic
    return "5 years of web development";
  };

  return (
    <div className="mb-8">
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100"
      >
        <label htmlFor="resume-file" className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FaUpload className="w-10 h-10 mb-3 text-blue-400" />
            <p className="mb-2 text-sm text-blue-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-blue-500">PDF (MAX. 5MB)</p>
          </div>
          <input id="resume-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
        </label>
      </div>
      {isUploading && <p className="mt-4 text-blue-500">Uploading resume...</p>}
    </div>
  );
}