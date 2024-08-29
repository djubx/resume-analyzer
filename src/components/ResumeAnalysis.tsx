import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

interface AnalysisResult {
  issues: Array<{
    type: string;
    description: string;
    suggestion: string;
  }>;
}

interface ResumeAnalysisProps {
  result: AnalysisResult;
}

export default function ResumeAnalysis({ result }: ResumeAnalysisProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Analysis Results</h2>
      {result.issues.map((issue, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
          <div className="flex items-center mb-2">
            <FaExclamationTriangle className="text-yellow-500 mr-2" />
            <h3 className="font-bold text-lg">{issue.type}</h3>
          </div>
          <p className="text-red-500 mb-2">{issue.description}</p>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <p className="text-green-600">Suggestion: {issue.suggestion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}