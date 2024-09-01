import { FaExclamationTriangle, FaCheckCircle, FaStar, FaClipboardList } from "react-icons/fa";
import Link from 'next/link';

interface AnalysisResult {
  issues: Array<{
    type: string;
    description: string;
    suggestion: string;
  }>;
  strengths: string[];
  overallScore: number;
}

interface ResumeAnalysisProps {
  result: AnalysisResult;
}

export default function ResumeAnalysis({ result }: ResumeAnalysisProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Analysis Results</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-green-600 flex items-center">
          <FaStar className="mr-2" /> Strengths
        </h3>
        {result.strengths.length > 0 ? (
          <ul className="list-disc pl-5">
            {result.strengths.map((strength, index) => (
              <li key={index} className="text-green-700 mb-1">{strength}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 italic">No specific strengths identified.</p>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-yellow-600 flex items-center">
        <FaExclamationTriangle className="mr-2" /> Areas for Improvement
      </h3>
      {result.issues.map((issue, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
          <div className="flex items-center mb-2">
            <FaExclamationTriangle className="text-yellow-500 mr-2 w-5 h-5" />
            <h4 className="font-bold text-lg">{issue.type}</h4>
          </div>
          <p className="text-red-500 mb-2">{issue.description}</p>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2 w-3 h-3 flex-shrink-0" />
            <p className="text-green-600 flex-grow">Suggestion: {issue.suggestion}</p>
          </div>
        </div>
      ))}

      <div className="mt-6 p-4 bg-blue-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">Overall Score</h3>
        <p className="text-4xl font-bold text-blue-600 mb-2">{result.overallScore}/100</p>
        <Link href="/resume-checklist" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <FaClipboardList className="mr-2" />
          Go to Resume Checklist
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          Use the checklist to track your improvements. Once you've made changes, please reupload your resume for a fresh analysis.
        </p>
      </div>

      <div className="mt-6 p-4 bg-green-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-green-800">Next Steps</h3>
        <ol className="list-decimal pl-5">
          <li className="mb-2">Review the areas for improvement and suggestions above.</li>
          <li className="mb-2">Use the Resume Checklist to track your progress.</li>
          <li className="mb-2">Make necessary changes to your resume.</li>
          <li>Reupload your improved resume for a new analysis.</li>
        </ol>
      </div>
    </div>
  );
}