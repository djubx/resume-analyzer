import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import extractTextFromPDF from "pdf-parser-client-side";

interface ATSScoreUploaderProps {
  onParsedData: (data: any) => void;
  onError: (error: string) => void;
  onNewUpload: () => void;
}

export default function ATSScoreUploader({ onParsedData, onError, onNewUpload }: ATSScoreUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const parseResume = async (file: File) => {
    setIsUploading(true);
    try {
      const pdfText = await extractTextFromPDF(file, "clean");
      const analysisResult = await analyzeResume(pdfText ?? "");
      onParsedData(analysisResult);
    } catch (error) {
      console.error('Error parsing resume:', error);
      onError(error instanceof Error ? error.message : "Error processing resume. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const analyzeResume = async (resumeText: string): Promise<any> => {
    try {
      const response = await fetch("/api/analyze-resume-ats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resumeText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error analyzing resume");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onNewUpload();
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
      onNewUpload();
      await parseResume(droppedFile);
    }
  };

  return (
    <div className="mb-8">
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 mb-4"
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
      {isUploading && <p className="mt-4 text-blue-500">Uploading and analyzing resume...</p>}
      {file && <p className="mt-2 text-sm text-blue-500">{file.name}</p>}
    </div>
  );
}