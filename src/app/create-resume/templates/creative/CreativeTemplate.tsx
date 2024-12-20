'use client';

import { TemplateProps } from '../../types';

export default function CreativeTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg print:shadow-none">
      {/* Header with Artistic Design */}
      <header className="relative mb-12">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {data.contactInformation.fullName}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-100">
                <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section className="mb-12 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed relative z-10">{data.professionalSummary}</p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 
                          text-gray-800 text-sm border border-purple-200"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{job.jobTitle}</h3>
                  <div className="text-purple-600 font-medium">{job.companyName}</div>
                  <div className="text-gray-600 text-sm">
                    {job.dates} | {job.location}
                  </div>
                </div>
                <ul className="list-none space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-pink-400 before:rounded-full">
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow
                          border border-purple-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded bg-gradient-to-r from-purple-50 to-pink-50 
                                  text-gray-700 border border-purple-100"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                <div className="text-purple-600">{edu.institution}</div>
                <div className="text-gray-600">{edu.graduationDate}</div>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-pink-400 before:rounded-full"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Volunteer Experience */}
      {data.volunteerExperience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Volunteer Experience</h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                  <div className="text-purple-600 font-medium">{exp.organization}</div>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Networks</h2>
          <div className="flex flex-wrap gap-3">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 
                          text-gray-800 text-sm border border-purple-200"
              >
                {association}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Languages</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-pink-400 before:rounded-full"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Publications</h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-pink-400 before:rounded-full"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Awards</h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-pink-400 before:rounded-full"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
} 