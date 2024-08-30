interface ATSScoreResultProps {
  parsedData: any;
}

export default function ATSScoreResult({ parsedData }: ATSScoreResultProps) {
  const calculateScore = () => {
    // Implement scoring logic based on parsedData
    // This is a placeholder implementation
    let score = 0;
    if (parsedData.name) score += 10;
    if (parsedData.email) score += 10;
    if (parsedData.phone) score += 10;
    if (parsedData.skills && parsedData.skills.length > 0) score += 20;
    if (parsedData.education) score += 20;
    if (parsedData.experience) score += 30;
    return score;
  };

  const score = calculateScore();

  return (
    <div className="text-gray-800">
      <h2 className="text-2xl font-bold mb-4">ATS Score: {score}%</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Name:</h3>
        <p>{parsedData.name || 'Not found'}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Email:</h3>
        <p>{parsedData.email || 'Not found'}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Phone:</h3>
        <p>{parsedData.phone || 'Not found'}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Skills:</h3>
        <p>{parsedData.skills?.join(', ') || 'Not found'}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Education:</h3>
        <p>{parsedData.education || 'Not found'}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Experience:</h3>
        <p>{parsedData.experience || 'Not found'}</p>
      </div>
    </div>
  );
}