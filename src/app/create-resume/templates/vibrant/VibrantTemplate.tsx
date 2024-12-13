'use client';

import { TemplateProps } from '../../types';

export default function VibrantTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-10 transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-500 rounded-full opacity-10 transform -translate-x-32 translate-y-32" />

      {/* Header Section */}
      <header className="relative mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-indigo-100">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          {data.contactInformation.fullName}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-100">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="font-medium">{data.contactInformation.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-100">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="font-medium">{data.contactInformation.phoneNumber}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-100">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="font-medium">{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-100">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.professionalSummary}</p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 
                          text-teal-700 text-sm border-2 border-teal-100 hover:shadow-md transition-shadow"
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
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Professional Experience</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative pl-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-100">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full ml-2" />
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{job.jobTitle}</h3>
                  <div className="text-blue-600 font-medium">{job.companyName}</div>
                  <div className="text-gray-600">
                    {job.dates} | {job.location}
                  </div>
                </div>
                <ul className="list-none space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-indigo-400 before:rounded-full">
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
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-100
                          hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-lg bg-white text-purple-700 border border-purple-200"
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

      {/* Education & Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border-2 border-green-100">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                <div className="text-green-600 font-medium">{edu.institution}</div>
                <div className="text-gray-600">{edu.graduationDate}</div>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-2 border-red-100">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Certifications</h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-red-400 before:rounded-full"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
} 