import { useState } from "react";
import { FaUpload } from "react-icons/fa";

interface ResumeUploaderProps {
  onAnalysisComplete: (result: any) => void;
  onError: (error: string) => void;
}

export default function ResumeUploader({ onAnalysisComplete, onError }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FaUpload className="w-10 h-10 mb-3 text-blue-400" />
            <p className="mb-2 text-sm text-blue-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-blue-500">PDF (MAX. 5MB)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
        </label>
      </div>
      {file && <p className="mt-2 text-sm text-blue-500">{file.name}</p>}
      <button
        type="submit"
        disabled={!file || isLoading}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 transition duration-300"
      >
        {isLoading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </form>
  );
}