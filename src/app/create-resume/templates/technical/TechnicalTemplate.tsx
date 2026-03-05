'use client';

import { TemplateProps } from '../../types';

export default function TechnicalTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 rounded-lg mb-8">
        <h1 className="text-2xl font-bold mb-2">{data.contactInformation.fullName}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{data.contactInformation.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>{data.contactInformation.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{data.contactInformation.location}</span>
          </div>
          {data.contactInformation.github && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>{data.contactInformation.github}</span>
            </div>
          )}
        </div>
      </header>

      {/* Technical Skills */}
      {data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded px-3 py-2 text-sm font-mono text-gray-800"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.professionalSummary}</p>
        </section>
      )}

      {/* Technical Projects */}
      {data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
            Technical Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
            Professional Experience
          </h2>
          {data.workExperience.map((job, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">{job.jobTitle}</h3>
                  <div className="text-gray-600">{job.companyName}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 font-mono text-sm">{job.dates}</div>
                  <div className="text-gray-600 text-sm">{job.location}</div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                <div className="text-gray-600">{edu.institution}</div>
                <div className="text-gray-600 font-mono text-sm">{edu.graduationDate}</div>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
              Certifications
            </h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700">
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Volunteer Experience */}
      {data.volunteerExperience?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
            Volunteer Experience
          </h2>
          <div className="space-y-4">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800">{exp.role}</h3>
                    <div className="text-gray-600">{exp.organization}</div>
                  </div>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
            Professional Associations
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded px-3 py-2 text-sm font-mono text-gray-800"
              >
                {association}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
              Languages
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li key={index} className="text-gray-700">
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
              Publications
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li key={index} className="text-gray-700">
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 border-b-2 border-gray-900 pb-2 mb-4">
              Awards
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li key={index} className="text-gray-700">
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
} 