import { ResumeData } from '../types';

export const defaultResumeData: ResumeData = {
  contactInformation: {
    fullName: 'John Doe',
    phoneNumber: '+1 (555) 123-4567',
    email: 'john.doe@example.com',
    location: 'New York, NY',
  },
  professionalSummary: 'Results-driven software engineer with 5+ years of experience in developing scalable web applications. Proficient in modern JavaScript frameworks, cloud technologies, and agile methodologies. Strong track record of delivering high-quality code and mentoring junior developers.',
  workExperience: [
    {
      jobTitle: 'Senior Software Engineer',
      companyName: 'Tech Solutions Inc.',
      location: 'New York, NY',
      dates: 'Jan 2020 - Present',
      responsibilities: [
        'Led a team of 5 developers in developing a cloud-based analytics platform',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      jobTitle: 'Software Engineer',
      companyName: 'Digital Innovations LLC',
      location: 'Boston, MA',
      dates: 'Jun 2018 - Dec 2019',
      responsibilities: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Collaborated with UX team to implement responsive design',
        'Reduced bug count by 30% through unit testing implementation',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Massachusetts Institute of Technology',
      graduationDate: '2018',
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of California, Berkeley',
      graduationDate: '2016',
    },
  ],
  skills: [
    'JavaScript/TypeScript',
    'React.js',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Git',
    'Agile Methodologies',
  ],
  certifications: [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'Certified Scrum Master',
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features like payment processing, inventory management, and analytics dashboard.',
    },
    {
      name: 'AI-Powered Chat Application',
      description: 'Built a real-time chat application with AI-powered language translation and sentiment analysis using WebSocket and Natural Language Processing.',
    },
  ],
  volunteerExperience: [
    {
      organization: 'Code for Good',
      role: 'Technical Mentor',
      description: 'Mentored students in web development and helped them build projects for non-profit organizations.',
    },
  ],
  professionalAssociations: [
    'Association for Computing Machinery (ACM)',
    'IEEE Computer Society',
  ],
  additionalSections: {
    languages: [
      'English (Native)',
      'Spanish (Professional)',
      'Mandarin (Basic)',
    ],
    publications: [
      'Machine Learning Approaches in Modern Web Development (Tech Journal, 2021)',
      'Best Practices for Scalable Microservices Architecture (IEEE Conference, 2020)',
    ],
    awards: [
      'Employee of the Year 2021 - Tech Solutions Inc.',
      'Best Innovation Award - Hackathon 2020',
    ],
  },
}; 