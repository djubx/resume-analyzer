"use client";

import { useState } from "react";
import ResumeUploader from "@/components/ResumeUploader";
import ResumeAnalysis from "@/components/ResumeAnalysis";
import Navbar from "@/components/Navbar";

interface AnalysisResult {
  issues: any[]; // or a more specific type if you know the structure
  // ... other properties
}

export default function ResumeAnalyzer() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Resume Analyzer</h1>
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          <ResumeUploader onAnalysisComplete={handleAnalysisComplete} onError={handleError} />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {analysisResult && <ResumeAnalysis result={analysisResult} />}
        </div>
      </main>
    </div>
  );
}