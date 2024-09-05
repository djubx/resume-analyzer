"use client";

import { useState } from "react";
import ResumeUploader from "@/components/ResumeUploader";
import ResumeAnalysis from "@/components/ResumeAnalysis";
import Navbar from "@/components/Navbar";
import Cookies from 'js-cookie';

interface AnalysisResult {
  issues: Array<{
    type: string;
    description: string;
    suggestion: string;
  }>;
  strengths: string[];
  overallScore: number;
}

export default function ResumeAnalyzer() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setError(null);

    // Create an array of feedback items
    const personalizedFeedback = result.issues.map(issue => ({
      text: issue.suggestion,
      checked: false
    }));
    Cookies.set('personalizedFeedback', JSON.stringify(personalizedFeedback), { expires: 30 });
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setAnalysisResult(null);
  };

  const handleNewUpload = () => {
    setAnalysisResult(null);
    setError(null);
    Cookies.remove('personalizedFeedback');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Resume Checkers</h1>
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          <ResumeUploader 
            onAnalysisComplete={handleAnalysisComplete} 
            onError={handleError} 
            onNewUpload={handleNewUpload}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {analysisResult && <ResumeAnalysis result={analysisResult} />}
        </div>
      </main>
    </div>
  );
}