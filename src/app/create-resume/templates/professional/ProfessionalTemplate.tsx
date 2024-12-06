'use client';

import { TemplateProps } from '../../types';

export default function ProfessionalTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none">
      {/* Header - Professional and Clean */}
      <header className="text-center border-b-2 border-gray-300 pb-6 mb-6">
        <h1 className="text-3xl font-serif text-gray-800 mb-2">{data.contactInformation.fullName}</h1>
        <div className="text-gray-600 space-y-1">
          <div>{data.contactInformation.email} | {data.contactInformation.phoneNumber}</div>
          <div>{data.contactInformation.location}</div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-6">
          <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-3">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.professionalSummary}</p>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-4">Professional Experience</h2>
          {data.workExperience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-semibold text-gray-800">{job.jobTitle}</h3>
                <span className="text-gray-600 text-sm">{job.dates}</span>
              </div>
              <div className="text-gray-700 italic mb-2">
                {job.companyName} | {job.location}
              </div>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                <span className="text-gray-600 text-sm">{edu.graduationDate}</span>
              </div>
              <div className="text-gray-700 italic">{edu.institution}</div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-3">Skills</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-gray-700">• {skill}</div>
            ))}
          </div>
        </section>
      )}

      {/* Two Column Layout for Additional Sections */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-3">Certifications</h2>
              <ul className="list-disc ml-5 text-gray-700">
                {data.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {data.additionalSections.languages.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-3">Languages</h2>
              <ul className="list-disc ml-5 text-gray-700">
                {data.additionalSections.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Professional Associations */}
          {data.professionalAssociations.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-3">Professional Associations</h2>
              <ul className="list-disc ml-5 text-gray-700">
                {data.professionalAssociations.map((assoc, index) => (
                  <li key={index}>{assoc}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Awards */}
          {data.additionalSections.awards.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-3">Awards & Achievements</h2>
              <ul className="list-disc ml-5 text-gray-700">
                {data.additionalSections.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-serif text-gray-800 border-b border-gray-300 mb-4">Notable Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
} 