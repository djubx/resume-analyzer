'use client';

import { TemplateProps } from '../../types';

export default function ModernTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg">
      {/* Header */}
      <header className="border-b-2 border-blue-500 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{data.contactInformation.fullName}</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
          <span>{data.contactInformation.email}</span>
          <span>{data.contactInformation.phoneNumber}</span>
          <span>{data.contactInformation.location}</span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Professional Summary</h2>
        <p className="text-gray-700">{data.professionalSummary}</p>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">Work Experience</h2>
        {data.workExperience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-800">{job.jobTitle}</h3>
            <div className="text-gray-600">
              {job.companyName} | {job.location} | {job.dates}
            </div>
            <ul className="list-disc ml-4 mt-2">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
            <div className="text-gray-600">
              {edu.institution} | {edu.graduationDate}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>

      {/* Additional Sections */}
      <section className="grid grid-cols-2 gap-6">
        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Certifications</h2>
            <ul className="list-disc ml-4">
              {data.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700">{cert}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {data.additionalSections.languages.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Languages</h2>
            <ul className="list-disc ml-4">
              {data.additionalSections.languages.map((lang, index) => (
                <li key={index} className="text-gray-700">{lang}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
} 