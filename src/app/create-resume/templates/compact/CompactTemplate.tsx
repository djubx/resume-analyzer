'use client';

import { TemplateProps } from '../../types';

export default function CompactTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none text-sm">
      {/* Header with Contact Info */}
      <header className="text-center mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.contactInformation.fullName}</h1>
        <div className="flex justify-center flex-wrap gap-4 text-gray-600 text-xs">
          <span>{data.contactInformation.email}</span>
          <span>{data.contactInformation.phoneNumber}</span>
          <span>{data.contactInformation.location}</span>
          {data.contactInformation.linkedin && <span>{data.contactInformation.linkedin}</span>}
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-[2.5fr,1fr] gap-6">
        {/* Main Content */}
        <div className="space-y-4">
          {/* Professional Summary */}
          {data.professionalSummary && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Professional Summary</h2>
              <p className="text-gray-700 text-xs leading-relaxed">{data.professionalSummary}</p>
            </section>
          )}

          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Professional Experience</h2>
              {data.workExperience.map((job, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-800">{job.jobTitle}</h3>
                    <span className="text-xs text-gray-600">{job.dates}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">
                    {job.companyName} | {job.location}
                  </div>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Key Projects</h2>
              {data.projects.map((project, index) => (
                <div key={index} className="mb-2">
                  <h3 className="font-semibold text-gray-800 text-xs">{project.name}</h3>
                  <p className="text-xs text-gray-700">{project.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Volunteer Experience */}
          {data.volunteerExperience?.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Volunteer Experience</h2>
              {data.volunteerExperience.map((exp, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{exp.organization}</div>
                  <p className="text-xs text-gray-700">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Professional Associations */}
          {data.professionalAssociations?.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Professional Associations</h2>
              <div className="flex flex-wrap gap-1">
                {data.professionalAssociations.map((association, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {association}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Publications */}
          {data.additionalSections?.publications?.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Publications</h2>
              <ul className="list-disc list-inside text-xs space-y-1">
                {data.additionalSections.publications.map((publication, index) => (
                  <li key={index} className="text-gray-700">{publication}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <div className="font-semibold text-xs">{edu.degree}</div>
                  <div className="text-xs text-gray-600">{edu.institution}</div>
                  <div className="text-xs text-gray-600">{edu.graduationDate}</div>
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Skills</h2>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Certifications</h2>
              <ul className="text-xs space-y-1">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700">{cert}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {data.additionalSections.languages.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Languages</h2>
              <ul className="text-xs space-y-1">
                {data.additionalSections.languages.map((lang, index) => (
                  <li key={index} className="text-gray-700">{lang}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Awards */}
          {data.additionalSections?.awards?.length > 0 && (
            <section>
              <h2 className="font-bold text-gray-800 border-b mb-2">Awards</h2>
              <ul className="text-xs space-y-1">
                {data.additionalSections.awards.map((award, index) => (
                  <li key={index} className="text-gray-700">{award}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
} 