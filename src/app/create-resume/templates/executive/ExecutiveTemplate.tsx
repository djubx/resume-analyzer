'use client';

import { TemplateProps } from '../../types';

export default function ExecutiveTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-10 shadow-lg print:shadow-none">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-6 mb-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-3">{data.contactInformation.fullName}</h1>
        <div className="flex flex-wrap gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{data.contactInformation.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{data.contactInformation.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.professionalSummary}</p>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4">Professional Experience</h2>
          {data.workExperience.map((job, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.jobTitle}</h3>
                  <div className="text-gray-600 font-medium">{job.companyName}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-600">{job.dates}</div>
                  <div className="text-gray-600">{job.location}</div>
                </div>
              </div>
              <ul className="list-none space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4 flex justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                <div className="text-gray-600">{edu.institution}</div>
              </div>
              <div className="text-gray-600">{edu.graduationDate}</div>
            </div>
          ))}
        </section>
      )}

      {/* Skills & Expertise */}
      {data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4">Areas of Expertise</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-2 gap-8">
        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-xl font-serif text-gray-800 mb-4">Professional Certifications</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {data.additionalSections.languages.length > 0 && (
          <section>
            <h2 className="text-xl font-serif text-gray-800 mb-4">Language Proficiency</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((lang, index) => (
                <li key={index} className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                  {lang}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
} 