'use client';

import { TemplateProps } from '../../types';

export default function GlassmorphicTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-sky-100 via-white to-rose-100 p-8 shadow-lg print:shadow-none relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      {/* Header */}
      <header className="relative mb-12">
        <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm">
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
        <section className="mb-12">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-6">Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/40 backdrop-blur-lg border border-white/20 rounded-lg
                          text-gray-700 hover:bg-white/60 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-6">Experience</h2>
          <div className="space-y-6">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800">{job.jobTitle}</h3>
                    <div className="text-gray-600">{job.companyName}</div>
                  </div>
                  <div className="text-right text-gray-600">
                    <div>{job.dates}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 pl-6 relative before:content-[''] 
                                           before:absolute before:left-0 before:top-[0.6em] 
                                           before:w-2 before:h-2 before:bg-sky-200 
                                           before:rounded-full">
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
          <h2 className="text-2xl font-light text-gray-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg
                          hover:bg-white/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-medium text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/60 backdrop-blur-sm text-gray-600 text-sm rounded-lg"
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
          <section className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-light text-gray-800 mb-6">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <div className="text-gray-600">{edu.institution}</div>
                  <div className="text-gray-500">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-light text-gray-800 mb-6">Certifications</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-rose-200 
                            before:rounded-full"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-lg px-6 py-3 inline-block">
          References available upon request
        </div>
      </footer>
    </div>
  );
} 