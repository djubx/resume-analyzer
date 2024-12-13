'use client';

import { TemplateProps } from '../../types';

export default function NordicTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-slate-50 p-8 shadow-lg print:shadow-none">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-light text-slate-800 mb-2">
              {data.contactInformation.fullName}
            </h1>
            <div className="h-1 w-16 bg-slate-200" />
          </div>
          <div className="space-y-1 text-right">
            <div className="text-slate-600">{data.contactInformation.email}</div>
            <div className="text-slate-600">{data.contactInformation.phoneNumber}</div>
            <div className="text-slate-600">{data.contactInformation.location}</div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 bg-white p-6 rounded-sm shadow-sm">
          <p className="text-slate-600 leading-relaxed">
            {data.professionalSummary}
          </p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-slate-400 text-sm tracking-wider uppercase mb-6">Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-3 text-slate-600 text-sm shadow-sm
                          hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-slate-400 text-sm tracking-wider uppercase mb-6">Experience</h2>
          <div className="space-y-6">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-white p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-4">
                  <div>
                    <h3 className="text-slate-800 font-medium mb-1">{job.jobTitle}</h3>
                    <div className="text-slate-600">{job.companyName}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-600">{job.dates}</div>
                    <div className="text-slate-500 text-sm">{job.location}</div>
                  </div>
                </div>
                <ul className="list-none space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-slate-600 text-sm pl-4 relative before:content-[''] 
                                           before:absolute before:left-0 before:top-[0.6em] before:w-2 
                                           before:h-2 before:bg-slate-200">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-slate-400 text-sm tracking-wider uppercase mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-slate-800 font-medium mb-2">{project.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-50 text-slate-600 text-xs"
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

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="bg-white p-6 shadow-sm">
            <h2 className="text-slate-400 text-sm tracking-wider uppercase mb-6">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-slate-800 font-medium">{edu.degree}</h3>
                  <div className="text-slate-600">{edu.institution}</div>
                  <div className="text-slate-500 text-sm">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-white p-6 shadow-sm">
            <h2 className="text-slate-400 text-sm tracking-wider uppercase mb-6">Certifications</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-slate-600 text-sm pl-4 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] before:w-2 
                            before:h-2 before:bg-slate-200"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-slate-400 text-sm">
        <div className="h-px w-16 bg-slate-200 mx-auto mb-4" />
        References available upon request
      </footer>
    </div>
  );
} 