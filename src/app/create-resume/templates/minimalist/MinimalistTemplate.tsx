'use client';

import { TemplateProps } from '../../types';

export default function MinimalistTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-12 shadow-lg print:shadow-none">
      {/* Header - Super Clean */}
      <header className="mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">{data.contactInformation.fullName}</h1>
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <span>{data.contactInformation.email}</span>
          <span>•</span>
          <span>{data.contactInformation.phoneNumber}</span>
          <span>•</span>
          <span>{data.contactInformation.location}</span>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed">{data.professionalSummary}</p>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Experience</h2>
          {data.workExperience.map((job, index) => (
            <div key={index} className="mb-8">
              <div className="grid grid-cols-[1fr,2fr] gap-6">
                <div>
                  <div className="text-gray-600">{job.dates}</div>
                  <div className="text-gray-600">{job.location}</div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{job.jobTitle}</h3>
                  <div className="text-gray-600 mb-3">{job.companyName}</div>
                  <ul className="list-none space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="grid grid-cols-[1fr,2fr] gap-6 mb-4">
              <div className="text-gray-600">{edu.graduationDate}</div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
                <div className="text-gray-600">{edu.institution}</div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-gray-700">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections in Two Columns */}
      <div className="grid grid-cols-2 gap-12">
        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Certifications</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700">{cert}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {data.additionalSections.languages.length > 0 && (
          <section>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Languages</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((lang, index) => (
                <li key={index} className="text-gray-700">{lang}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Selected Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-gray-800">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
} 