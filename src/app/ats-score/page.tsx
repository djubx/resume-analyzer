"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ATSScoreUploader from "@/components/ATSScoreUploader";
import ATSScoreResult from "@/components/ATSScoreResult";

export default function ATSScorePage() {
  const [parsedData, setParsedData] = useState<any>(null);

  const handleParsedData = (data: any) => {
    setParsedData(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <h1 className="text-4xl font-bold mb-8">ATS Score Check</h1>
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          {!parsedData ? (
            <ATSScoreUploader onParsedData={handleParsedData} />
          ) : (
            <ATSScoreResult parsedData={parsedData} />
          )}
        </div>
      </main>
    </div>
  );
}