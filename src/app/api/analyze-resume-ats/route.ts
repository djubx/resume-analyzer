import { NextRequest, NextResponse } from "next/server";
import openai, { createChatCompletion } from "@/utils/openai";

export async function POST(req: NextRequest) {
  if (!process.env.WORKER_API_KEY) {
    console.error("WORKER_API_KEY is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { resumeText } = await req.json();

  if (!resumeText) {
    return NextResponse.json({ error: "Only PDF resumes are supported" }, { status: 400 });
  }

  try {
    const prompt = `Analyze the following resume content and extract information for each section in JSON format. Include the following sections:

    {
      "contactInformation": {
        "fullName": string,
        "phoneNumber": string,
        "email": string,
        "location": string
      },
      "professionalSummary": string,
      "workExperience": [
        {
          "jobTitle": string,
          "companyName": string,
          "location": string,
          "dates": string,
          "responsibilities": string[]
        }
      ],
      "education": [
        {
          "degree": string,
          "institution": string,
          "graduationDate": string
        }
      ],
      "skills": string[],
      "certifications": string[],
      "projects": [
        {
          "name": string,
          "description": string
        }
      ],
      "volunteerExperience": [
        {
          "organization": string,
          "role": string,
          "description": string
        }
      ],
      "professionalAssociations": string[],
      "additionalSections": {
        "languages": string[],
        "publications": string[],
        "awards": string[]
      }
    }

    If a section is not found or empty, set it to null or an empty array as appropriate. Here's the resume content:

    ${resumeText}`;

    const response = await createChatCompletion([
      {
        role: "user",
        content: prompt
      }
    ], true);

    const text = response.choices[0]?.message?.content || "";
    
    let analysisResult;
    try {
      console.log("ATS Analysis result:", text);
      const cleanedText = text.replace(/^```json\s*\n?|\n?```\s*$/g, '').trim();
      analysisResult = JSON.parse(cleanedText);
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