'use client';

import { TemplateProps } from '../../types';

export default function MaterialTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none text-gray-800 relative overflow-hidden">
      {/* Header */}
      <header className="relative mb-12">
        <div className="bg-blue-600 -mx-8 -mt-8 px-8 pt-16 pb-8 shadow-md">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-light mb-4 text-white">
              {data.contactInformation.fullName}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{data.contactInformation.email}</span>
              </div>
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
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm
                            shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Experience</h2>
            <div className="space-y-8">
              {data.workExperience.map((job, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-gray-800">{job.jobTitle}</h3>
                    <div className="text-blue-600">{job.companyName}</div>
                    <div className="text-sm text-gray-600">
                      {job.dates} • {job.location}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 pl-4 relative before:content-[''] 
                                  before:absolute before:left-0 before:top-[0.6em] 
                                  before:w-2 before:h-2 before:bg-blue-600 
                                  before:rounded-full"
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              {data.projects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
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
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Education</h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <div className="text-blue-600">{edu.institution}</div>
                  <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Certifications</h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-4 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-600 
                            before:rounded-full"
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Volunteer Experience</h2>
            <div className="space-y-8">
              {data.volunteerExperience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-gray-800">{exp.role}</h3>
                    <div className="text-blue-600">{exp.organization}</div>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Professional Associations</h2>
            <div className="flex flex-wrap gap-2">
              {data.professionalAssociations.map((association, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm
                            shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {association}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Languages</h2>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-4 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-600 
                            before:rounded-full"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Publications</h2>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-4 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-600 
                            before:rounded-full"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-light mb-6 text-blue-600">Awards</h2>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-4 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-600 
                            before:rounded-full"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <div className="inline-block px-6 py-2">
          <div className="w-16 h-px bg-blue-200 mx-auto" />
        </div>
      </footer>
    </div>
  );
} 