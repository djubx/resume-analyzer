export interface ContactInformation {
  fullName: string;
  phoneNumber: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface WorkExperience {
  jobTitle: string;
  companyName: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  graduationDate: string;
}

export interface Project {
  name: string;
  description: string;
  technologies?: string[];
}

export interface VolunteerExperience {
  organization: string;
  role: string;
  description: string;
}

export interface AdditionalSections {
  languages: string[];
  publications: string[];
  awards: string[];
}

export interface ResumeData {
  contactInformation: ContactInformation;
  professionalSummary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  certifications: string[];
  projects: Project[];
  volunteerExperience: VolunteerExperience[];
  professionalAssociations: string[];
  additionalSections: AdditionalSections;
}

export type ResumeSection = keyof ResumeData;

export interface StepProps {
  data: ResumeData;
  onUpdate: (section: ResumeSection, field: string, value: any) => void;
  onArrayUpdate: (section: ResumeSection, value: any) => void;
  onArrayItemAdd: (section: ResumeSection, defaultItem: any) => void;
  onArrayItemRemove: (section: ResumeSection, index: number) => void;
}

export interface TemplateProps {
    data: ResumeData;
} 