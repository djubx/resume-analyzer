'use client';

import { TemplateProps } from '../../types';

export default function BotanicalTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-emerald-50 p-8 shadow-lg print:shadow-none text-gray-800 relative overflow-hidden">
      {/* Botanical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 5C16.215 5 5 16.215 5 30c0 13.785 11.215 25 25 25s25-11.215 25-25C55 16.215 43.785 5 30 5zm0 5c11.046 0 20 8.954 20 20s-8.954 20-20 20S10 41.046 10 30s8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z' fill='%23047857' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Header */}
      <header className="relative mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-serif mb-6 text-emerald-800">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-emerald-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto p-8 bg-white/50 rounded-lg border border-emerald-200 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-50 px-4">
              <h2 className="text-sm uppercase tracking-wider text-emerald-600 font-medium">About</h2>
            </div>
            <p className="text-lg leading-relaxed text-emerald-900 text-center font-serif">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Core Competencies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/50 text-emerald-700 rounded-full border border-emerald-200
                          hover:bg-white/80 transition-colors duration-300"
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
          <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Professional Journey</h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div key={index} className="max-w-3xl mx-auto">
                <div className="p-8 bg-white/50 rounded-lg border border-emerald-200">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-medium text-emerald-800">{job.jobTitle}</h3>
                    <div className="text-emerald-600">{job.companyName}</div>
                    <div className="text-sm text-emerald-500">
                      {job.dates} • {job.location}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-emerald-700 pl-6 relative before:content-[''] 
                                  before:absolute before:left-0 before:top-[0.6em] 
                                  before:w-2 before:h-2 before:bg-emerald-300 
                                  before:rounded-full"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-white/50 rounded-lg border border-emerald-200"
              >
                <h3 className="text-xl font-medium text-emerald-800 mb-2">{project.name}</h3>
                <p className="text-emerald-700 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm bg-emerald-100/50 text-emerald-600 rounded-md"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 bg-white/50 rounded-lg border border-emerald-200">
            <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Education</h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-medium text-emerald-800">{edu.degree}</h3>
                  <div className="text-emerald-600">{edu.institution}</div>
                  <div className="text-emerald-500">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 bg-white/50 rounded-lg border border-emerald-200">
            <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Certifications</h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-emerald-700 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-emerald-300 
                            before:rounded-full text-center"
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
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Community Involvement</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="p-6 bg-white/50 rounded-lg border border-emerald-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-medium text-emerald-800">{exp.role}</h3>
                  <div className="text-emerald-600">{exp.organization}</div>
                </div>
                <p className="text-emerald-700 text-center">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Professional Networks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/50 text-emerald-700 rounded-full border border-emerald-200
                          hover:bg-white/80 transition-colors duration-300"
              >
                {association}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="p-6 bg-white/50 rounded-lg border border-emerald-200">
            <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Languages</h2>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-emerald-700 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-emerald-300 
                            before:rounded-full text-center"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="p-6 bg-white/50 rounded-lg border border-emerald-200">
            <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Publications</h2>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-emerald-700 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-emerald-300 
                            before:rounded-full text-center"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="p-6 bg-white/50 rounded-lg border border-emerald-200">
            <h2 className="text-2xl font-serif text-center mb-8 text-emerald-800">Achievements</h2>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-emerald-700 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-emerald-300 
                            before:rounded-full text-center"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16">
        <div className="h-px w-full bg-emerald-200" />
      </footer>
    </div>
  );
} 