import { NextRequest, NextResponse } from "next/server";
import openai from "@/utils/openai";

export async function POST(req: NextRequest) {
  if (!process.env.AZURE_OPENAI_API_KEY) {
    console.error("AZURE_OPENAI_API_KEY is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { resumeText } = await req.json();

  if (!resumeText) {
    return NextResponse.json({ error: "Only PDF resumes are supported" }, { status: 400 });
  }

  try {
    // Use OpenAI API to analyze the resume
    const prompt = `Analyze the following resume content and provide feedback in JSON format. Include sections for 'issues' (array of objects with 'type', 'description', and 'suggestion'), 'strengths' (array of strings), and 'overallScore' (number between 0 and 100). Here's the resume content:

    ${resumeText}`;

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that analyzes resumes and provides structured feedback in JSON format."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const text = response.choices[0]?.message?.content || "";

    let analysisResult;
    try {
      console.log("Analysis result:", text);
      analysisResult = JSON.parse(text);
    } catch (parseError) {
      console.error("Error parsing OpenAI API response:", parseError);
      return NextResponse.json({ error: "Invalid response from AI model", aiResponse: text }, { status: 500 });
    }

    return NextResponse.json(analysisResult);
  } catch (error) {
    console.error("Error analyzing resume:", error);
    return NextResponse.json({ error: "Failed to analyze resume", details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}