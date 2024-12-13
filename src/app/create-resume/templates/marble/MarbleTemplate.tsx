'use client';

import { TemplateProps } from '../../types';

export default function MarbleTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none text-gray-800 relative overflow-hidden">
      {/* Marble Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(243,244,246,0.4),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,rgba(229,231,235,0.4),transparent)]" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-serif tracking-wide mb-6 text-gray-800">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="group flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="group flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="group flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span>{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-lg relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(243,244,246,1),transparent)] opacity-50" />
            <p className="text-lg leading-relaxed text-gray-700 text-center relative">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-gray-800">Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm
                          shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-gray-800">Professional Experience</h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div key={index} className="max-w-3xl mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-gray-800">{job.jobTitle}</h3>
                  <div className="text-gray-600">{job.companyName}</div>
                  <div className="text-sm text-gray-500">
                    {job.dates} • {job.location}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-gray-300 
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

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-gray-800">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg relative group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(243,244,246,1),transparent)] opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-sm bg-white text-gray-600 rounded-md shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 bg-gray-50 rounded-lg relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(243,244,246,1),transparent)] opacity-50" />
            <div className="relative">
              <h2 className="text-2xl font-serif text-center mb-8 text-gray-800">Education</h2>
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                    <div className="text-gray-600">{edu.institution}</div>
                    <div className="text-gray-500">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 bg-gray-50 rounded-lg relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(243,244,246,1),transparent)] opacity-50" />
            <div className="relative">
              <h2 className="text-2xl font-serif text-center mb-8 text-gray-800">Certifications</h2>
              <ul className="space-y-3">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-gray-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-gray-300 
                              before:rounded-full text-center"
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
      <footer className="mt-16 text-center">
        <div className="inline-block px-8 py-3 text-gray-600 font-serif">
          References available upon request
        </div>
      </footer>
    </div>
  );
} 