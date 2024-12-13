'use client';

import { TemplateProps } from '../../types';

export default function ProductManagerTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none text-gray-800 relative overflow-hidden">
      {/* Header */}
      <header className="relative mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-3 text-gray-900">
              {data.contactInformation.fullName}
            </h1>
            <p className="text-emerald-600 font-medium mb-4">Product Manager • Strategy & Innovation</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a href={`mailto:${data.contactInformation.email}`} className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{data.contactInformation.email}</span>
              </a>
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
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h2 className="text-lg font-semibold mb-4 text-emerald-800">Product Vision & Strategy</h2>
              <p className="text-gray-700 leading-relaxed">
                {data.professionalSummary}
              </p>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto">
        {/* Core Competencies */}
        {data.skills.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-6 text-gray-900 border-b border-emerald-200 pb-2">
              Core Competencies
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded border border-gray-200 text-sm text-gray-700 hover:border-emerald-300 hover:shadow-sm transition-all"
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
            <h2 className="text-lg font-semibold mb-6 text-gray-900 border-b border-emerald-200 pb-2">
              Product Leadership Experience
            </h2>
            <div className="space-y-8">
              {data.workExperience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-emerald-200">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-emerald-400 rounded-full" />
                  <h3 className="text-lg font-semibold text-gray-900">{job.jobTitle}</h3>
                  <div className="text-emerald-600 font-medium">{job.companyName}</div>
                  <div className="text-sm text-gray-600 mb-4">{job.dates} • {job.location}</div>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 pl-4 relative before:content-[''] 
                                  before:absolute before:left-0 before:top-[0.6em] 
                                  before:w-1.5 before:h-1.5 before:bg-emerald-200 
                                  before:rounded-full"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Projects */}
        {data.projects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-semibold mb-6 text-gray-900 border-b border-emerald-200 pb-2">
              Product Initiatives & Impact
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full"
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
        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b border-emerald-200 pb-2">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <div className="text-emerald-600">{edu.institution}</div>
                    <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b border-emerald-200 pb-2">
                Certifications
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-gray-700 pl-4 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-1.5 before:h-1.5 before:bg-emerald-200 
                              before:rounded-full"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600 text-sm">
        <div className="inline-flex items-center gap-3">
          <div className="w-12 h-px bg-emerald-200" />
          <span>References available upon request</span>
          <div className="w-12 h-px bg-emerald-200" />
        </div>
      </footer>
    </div>
  );
} 