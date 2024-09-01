"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ATSScoreUploader from "@/components/ATSScoreUploader";
import ATSScoreResult from "@/components/ATSScoreResult";

export default function ATSScorePage() {
  const [atsParsedData, setAtsParsedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAtsParsedData = (data: any) => {
    setAtsParsedData(data);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setAtsParsedData(null);
  };

  const handleNewUpload = () => {
    setAtsParsedData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <h1 className="text-4xl font-bold mb-8">ATS Score Check</h1>
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          <ATSScoreUploader
            onParsedData={handleAtsParsedData}
            onError={handleError}
            onNewUpload={handleNewUpload}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {atsParsedData && <ATSScoreResult parsedData={atsParsedData} />}
        </div>
      </main>
    </div>
  );
}