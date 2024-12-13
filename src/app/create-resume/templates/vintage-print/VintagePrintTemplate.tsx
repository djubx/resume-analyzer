'use client';

import { TemplateProps } from '../../types';

export default function VintagePrintTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-amber-50 p-8 shadow-lg print:shadow-none text-gray-800 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='%23000' fill-opacity='.03'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-12 text-center">
        <div className="border-4 border-double border-gray-800 p-8">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 px-4">
            <div className="text-xs uppercase tracking-[0.3em] text-gray-600">Curriculum Vitae</div>
          </div>
          <h1 className="text-4xl font-bold uppercase tracking-[0.2em] mb-4 text-gray-800">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-serif italic">{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>•</span>
              <span className="font-serif italic">{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>•</span>
              <span className="font-serif italic">{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="relative border-t-2 border-b-2 border-gray-800 py-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 px-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-600">Professional Summary</h2>
            </div>
            <p className="text-center font-serif italic leading-relaxed text-gray-700">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <div className="relative border-t-2 border-gray-800 pt-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 px-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-600">Areas of Expertise</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-center py-2 border border-gray-800 bg-amber-50"
                >
                  <span className="font-serif italic">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <div className="relative border-t-2 border-gray-800 pt-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 px-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-600">Professional Experience</h2>
            </div>
            <div className="space-y-8">
              {data.workExperience.map((job, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl uppercase tracking-wider mb-2">{job.jobTitle}</h3>
                  <div className="font-serif italic text-gray-700 mb-1">{job.companyName}</div>
                  <div className="text-sm text-gray-600 mb-4">{job.dates} • {job.location}</div>
                  <ul className="space-y-2 max-w-2xl mx-auto text-left">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="pl-6 relative before:content-['•'] before:absolute before:left-0 
                                  before:top-0 before:text-gray-600 text-gray-700"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-12">
          <div className="relative border-t-2 border-gray-800 pt-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 px-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-600">Notable Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg uppercase tracking-wider mb-2">{project.name}</h3>
                  <p className="font-serif italic text-gray-700 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-sm border border-gray-800 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <div className="relative border-t-2 border-gray-800 pt-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 px-4">
                <h2 className="text-sm uppercase tracking-[0.3em] text-gray-600">Education</h2>
              </div>
              <div className="space-y-6 text-center">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="uppercase tracking-wider">{edu.degree}</h3>
                    <div className="font-serif italic text-gray-700">{edu.institution}</div>
                    <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <div className="relative border-t-2 border-gray-800 pt-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 px-4">
                <h2 className="text-sm uppercase tracking-[0.3em] text-gray-600">Certifications</h2>
              </div>
              <ul className="space-y-2 text-center">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="font-serif italic text-gray-700"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <div className="inline-block border-t-2 border-gray-800 pt-4">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-600">
            References Available Upon Request
          </span>
        </div>
      </footer>
    </div>
  );
} 