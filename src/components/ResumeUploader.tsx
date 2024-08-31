import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import extractTextFromPDF from "pdf-parser-client-side";

interface ResumeUploaderProps {
  onAnalysisComplete: (result: any) => void;
  onError: (error: string) => void;
}

export default function ResumeUploader({ onAnalysisComplete, onError }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const uploadToSanity = async (file: File, pdfText: string, analysisResult: any) => {
    setStatus("Fetching results...");
    try {
      const fileAsset = await client.assets.upload('file', file);

      const doc = await client.create({
        _type: 'resume',
        title: file.name,
        file: {
          _type: 'file',
          asset: {
            _type: "reference",
            _ref: fileAsset._id
          }
        },
        formattedFileSize: formatFileSize(file.size),
        uploadedAt: new Date().toISOString(),
        extractedText: pdfText,
        analysisResult: analysisResult,
      });

      console.log('Resume uploaded to Sanity:', doc);
      setStatus(`Resume analysis successful`);
      return doc;
    } catch (error: any) {
      console.error('Error uploading to Sanity:', error);
      throw new Error(error.message.includes("Insufficient permissions")
        ? "Unable to upload resume due to permission issues. Please contact support."
        : "Error uploading resume. Please try again.");
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      console.log("Resume file:", selectedFile, "Size:", formatFileSize(selectedFile.size));
      await handleFileProcessing(selectedFile);
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
      console.log("Resume file (dropped):", droppedFile, "Size:", formatFileSize(droppedFile.size));
      await handleFileProcessing(droppedFile);
    }
  };

  const handleFileProcessing = async (file: File) => {
    setIsProcessing(true);
    setStatus("Extracting text from PDF...");
    try {
      const pdfText = await extractTextFromPDF(file, "clean");

      setStatus("Uploading resume...");
      const analysisResult = await analyzeResume(pdfText ?? "");

      setStatus("Fetching...");
      await uploadToSanity(file, pdfText ?? "", analysisResult);

      onAnalysisComplete(analysisResult);
    } catch (error) {
      console.error('Error processing file:', error);
      onError(error instanceof Error ? error.message : "Error processing resume. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const analyzeResume = async (pdfText: string): Promise<any> => {
    try {
      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resumeText: pdfText }),
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

  return (
    <div className="mb-8">
      <div
        className="flex items-center justify-center w-full"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FaUpload className="w-10 h-10 mb-3 text-blue-400" />
            <p className="mb-2 text-sm text-blue-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-blue-500">PDF (MAX. 5MB)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
        </label>
      </div>
      {file && <p className="mt-2 text-sm text-blue-500">{file.name} ({formatFileSize(file.size)})</p>}
      {status && <p className={`mt-2 text-sm ${status.includes("Error") || status.includes("Unable") ? "text-red-500" : "text-green-500"}`}>{status}</p>}
      {isProcessing && <p className="mt-2 text-sm text-blue-500">Processing resume...</p>}
    </div>
  );
}