import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

interface ResumeUploaderProps {
  onAnalysisComplete: (result: any) => void;
  onError: (error: string) => void;
}

export default function ResumeUploader({ onAnalysisComplete, onError }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const uploadToSanity = async (file: File) => {
    setIsUploading(true);
    setUploadStatus(null);
    try {
      // Upload file to Sanity
      const fileAsset = await client.assets.upload('file', file);

      // Create a new document with the file reference and formatted size
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
      });

      console.log('Resume uploaded to Sanity:', doc);
      setUploadStatus(`Resume uploaded successfully (${formatFileSize(file.size)})`);
      return doc;
    } catch (error: any) {
      console.error('Error uploading to Sanity:', error);
      if (error.message.includes("Insufficient permissions")) {
        setUploadStatus("Unable to upload resume due to permission issues. Please contact support.");
      } else {
        setUploadStatus("Error uploading resume. Please try again.");
      }
    } finally {
      setIsUploading(false);
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
      await uploadToSanity(selectedFile);
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
      await uploadToSanity(droppedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        onAnalysisComplete(result);
      } else {
        const errorData = await response.json();
        onError(errorData.error || "Error analyzing resume");
      }
    } catch (error) {
      onError("An unexpected error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
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
      {uploadStatus && <p className={`mt-2 text-sm ${uploadStatus.includes("Error") || uploadStatus.includes("Unable") ? "text-red-500" : "text-green-500"}`}>{uploadStatus}</p>}
      <button
        type="submit"
        disabled={!file || isUploading}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 transition duration-300"
      >
        {isUploading ? "Uploading..." : "Analyze Resume"}
      </button>
    </form>
  );
}