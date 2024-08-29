import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("resume") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Here, you would implement the actual resume parsing and analysis logic
  // For this example, we'll return mock data
  const mockAnalysisResult = {
    issues: [
      {
        type: "Formatting",
        description: "Inconsistent font sizes throughout the resume",
        suggestion: "Use consistent font sizes for better readability. Stick to 2-3 font sizes maximum.",
      },
      {
        type: "Content",
        description: "Lack of quantifiable achievements",
        suggestion: "Add specific metrics to showcase your impact. For example, 'Increased sales by 20% over 6 months'.",
      },
      {
        type: "Keywords",
        description: "Missing important industry keywords",
        suggestion: "Include relevant keywords from the job description to improve ATS compatibility.",
      },
    ],
  };

  // Simulate a delay to mimic processing time
  await new Promise(resolve => setTimeout(resolve, 2000));

  return NextResponse.json(mockAnalysisResult);
}