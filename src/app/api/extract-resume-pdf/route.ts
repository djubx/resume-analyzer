import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ResumeData } from "@/app/create-resume/types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Helper function to clean markdown JSON response
function cleanJsonResponse(text: string): string {
  // Remove markdown code block syntax if present
  return text.replace(/^```json\n|\n```$/g, '');
}

interface Education {
  degree: string;
  institution: string;
  graduationDate: string;
}

interface Project {
  name: string;
  description: string | null;
}

interface WorkExperience {
  jobTitle: string;
  companyName: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

interface VolunteerExperience {
  organization: string;
  role: string;
  description: string;
}

export async function POST(req: NextRequest) {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { pdfText } = await req.json();

  if (!pdfText) {
    return NextResponse.json({ error: "Resume text is required" }, { status: 400 });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: { temperature: 0.2 }
    });

    const prompt = `Analyze this resume text and extract information in the exact format shown below. The response should be a valid JSON object matching this structure precisely:

{
  "contactInformation": {
    "fullName": string,        // Full name of the person
    "phoneNumber": string,     // Phone number with country code if available
    "email": string,          // Email address
    "location": string        // City, State format
  },
  "professionalSummary": string,  // Brief professional summary/objective
  "workExperience": [
    {
      "jobTitle": string,
      "companyName": string,
      "location": string,
      "dates": string,         // Format: "MMM YYYY - Present" or "MMM YYYY - MMM YYYY"
      "responsibilities": string[]  // Array of responsibilities/achievements
    }
  ],
  "education": [
    {
      "degree": string,        // Degree/certification name
      "institution": string,   // School/university name
      "graduationDate": string // Format: "YYYY" or "MMM YYYY"
    }
  ],
  "skills": string[],         // Array of individual skills
  "certifications": string[], // Array of certifications
  "projects": [
    {
      "name": string,         // Project name
      "description": string   // Detailed project description
    }
  ],
  "volunteerExperience": [
    {
      "organization": string,
      "role": string,
      "description": string
    }
  ],
  "professionalAssociations": string[], // Array of professional memberships
  "additionalSections": {
    "languages": string[],    // Array of languages
    "publications": string[], // Array of publications
    "awards": string[]       // Array of awards/achievements
  }
}

Rules:
1. Use null for missing string fields
2. Use empty arrays [] for missing array fields
3. Keep original formatting for contact details
4. Split skills into individual items
5. Format dates as specified in comments
6. Return only the JSON object, no markdown

Resume text to analyze:
${pdfText}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      // Clean the response text before parsing
      const cleanedText = cleanJsonResponse(text);
      const parsedData = JSON.parse(cleanedText);
      
      // Ensure the structure matches exactly
      const validatedData: ResumeData = {
        contactInformation: {
          fullName: parsedData.contactInformation?.fullName || null,
          phoneNumber: parsedData.contactInformation?.phoneNumber || null,
          email: parsedData.contactInformation?.email || null,
          location: parsedData.contactInformation?.location || null
        },
        professionalSummary: parsedData.professionalSummary || null,
        workExperience: Array.isArray(parsedData.workExperience) 
          ? parsedData.workExperience.map((exp: WorkExperience) => ({
              jobTitle: exp.jobTitle || '',
              companyName: exp.companyName || '',
              location: exp.location || '',
              dates: exp.dates || '',
              responsibilities: Array.isArray(exp.responsibilities) ? exp.responsibilities : []
            }))
          : [],
        education: Array.isArray(parsedData.education) 
          ? parsedData.education.map((edu: Education) => ({
              degree: edu.degree || '',
              institution: edu.institution || '',
              graduationDate: edu.graduationDate || ''
            }))
          : [],
        skills: Array.isArray(parsedData.skills) ? parsedData.skills : [],
        certifications: Array.isArray(parsedData.certifications) ? parsedData.certifications : [],
        projects: Array.isArray(parsedData.projects) 
          ? parsedData.projects.map((proj: Project) => ({
              name: proj.name || '',
              description: proj.description || null
            }))
          : [],
        volunteerExperience: Array.isArray(parsedData.volunteerExperience)
          ? parsedData.volunteerExperience.map((vol: VolunteerExperience) => ({
              organization: vol.organization || '',
              role: vol.role || '',
              description: vol.description || ''
            }))
          : [],
        professionalAssociations: Array.isArray(parsedData.professionalAssociations) ? parsedData.professionalAssociations : [],
        additionalSections: {
          languages: Array.isArray(parsedData.additionalSections?.languages) ? parsedData.additionalSections.languages : [],
          publications: Array.isArray(parsedData.additionalSections?.publications) ? parsedData.additionalSections.publications : [],
          awards: Array.isArray(parsedData.additionalSections?.awards) ? parsedData.additionalSections.awards : []
        }
      };

      return NextResponse.json(validatedData);
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      return NextResponse.json({ 
        error: "Invalid response format", 
        aiResponse: text,
        cleanedResponse: cleanJsonResponse(text) 
      }, { status: 500 });
    }
  } catch (error) {
    console.error("Error analyzing resume:", error);
    return NextResponse.json({ 
      error: "Failed to analyze resume", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
} 