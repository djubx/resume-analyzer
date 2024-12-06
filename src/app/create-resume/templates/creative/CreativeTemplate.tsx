'use client';

import { TemplateProps } from '../../types';

export default function CreativeTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-purple-50 to-blue-50 p-8 shadow-lg">
      {/* Header */}
      <header className="relative mb-12 pb-4">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-10"></div>
        <h1 className="text-5xl font-bold text-gray-800 mb-2 relative z-10">{data.contactInformation.fullName}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600 relative z-10">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            {data.contactInformation.email}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            {data.contactInformation.phoneNumber}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            {data.contactInformation.location}
          </span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-10 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400 to-blue-500 rounded-full opacity-5"></div>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-3">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed relative z-10">{data.professionalSummary}</p>
      </section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2">
          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Experience
            </h2>
            {data.workExperience.map((job, index) => (
              <div key={index} className="mb-6 relative">
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-purple-400 to-blue-500 rounded-full"></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">{job.jobTitle}</h3>
                  <div className="text-gray-600 mb-2">
                    {job.companyName} | {job.location} | {job.dates}
                  </div>
                  <ul className="list-none space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-purple-500 mr-2">›</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                Featured Projects
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                <div className="text-gray-600">
                  {edu.institution}
                  <div className="text-sm">{edu.graduationDate}</div>
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          {data.additionalSections.languages.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                Languages
              </h2>
              <div className="space-y-2">
                {data.additionalSections.languages.map((lang, index) => (
                  <div key={index} className="text-gray-700">{lang}</div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                Certifications
              </h2>
              <div className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <div key={index} className="text-gray-700">{cert}</div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
} 