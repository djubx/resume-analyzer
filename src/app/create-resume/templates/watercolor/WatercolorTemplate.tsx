'use client';

import { TemplateProps } from '../../types';

export default function WatercolorTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-rose-100/40 via-sky-100/40 to-violet-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-100/40 via-teal-100/40 to-sky-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <header className="relative mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-light tracking-wide mb-6 text-gray-800">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-300" />
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-300" />
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-300" />
              <span>{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-sky-50 to-violet-50 opacity-50 rounded-lg" />
          <div className="relative p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700
                          ring-1 ring-gray-100 hover:ring-sky-200 transition-all duration-300"
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
          <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Experience</h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 opacity-50 rounded-lg" />
                <div className="relative p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-medium text-gray-800">{job.jobTitle}</h3>
                    <div className="text-gray-600">{job.companyName}</div>
                    <div className="text-gray-500 text-sm">
                      {job.dates} • {job.location}
                    </div>
                  </div>
                  <ul className="space-y-3 max-w-3xl mx-auto">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700 pl-6 relative before:content-[''] 
                                             before:absolute before:left-0 before:top-[0.6em] 
                                             before:w-2 before:h-2 before:bg-teal-200 
                                             before:rounded-full">
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
          <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 opacity-50 rounded-lg" />
                <div className="relative p-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-sm bg-white/80 text-gray-600 rounded-md
                                    ring-1 ring-gray-100"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 opacity-50 rounded-lg" />
            <div className="relative p-8">
              <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Education</h2>
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
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50 opacity-50 rounded-lg" />
            <div className="relative p-8">
              <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Certifications</h2>
              <ul className="space-y-3">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-gray-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-sky-200 
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

      {/* Volunteer Experience */}
      {data.volunteerExperience?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Community Impact</h2>
          <div className="space-y-12">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 opacity-50 rounded-lg" />
                <div className="relative p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-medium text-gray-800">{exp.role}</h3>
                    <div className="text-gray-600">{exp.organization}</div>
                  </div>
                  <p className="text-gray-700 max-w-3xl mx-auto">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Professional Networks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700
                          ring-1 ring-gray-100 hover:ring-sky-200 transition-all duration-300"
              >
                {association}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-50 via-green-50 to-emerald-50 opacity-50 rounded-lg" />
            <div className="relative p-8">
              <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Languages</h2>
              <ul className="space-y-3">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-gray-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-emerald-200 
                              before:rounded-full text-center"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-blue-50 to-violet-50 opacity-50 rounded-lg" />
            <div className="relative p-8">
              <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Publications</h2>
              <ul className="space-y-3">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-gray-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-indigo-200 
                              before:rounded-full text-center"
                  >
                    {publication}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-50 via-pink-50 to-rose-50 opacity-50 rounded-lg" />
            <div className="relative p-8">
              <h2 className="text-2xl font-light text-center mb-8 text-gray-800">Awards</h2>
              <ul className="space-y-3">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-gray-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-fuchsia-200 
                              before:rounded-full text-center"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-sky-50 to-violet-50 opacity-50 rounded-lg" />
          <div className="relative px-8 py-3">
            <div className="w-16 h-px bg-gradient-to-r from-rose-200 via-sky-200 to-violet-200 mx-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
} 