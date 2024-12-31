'use client';

import { TemplateProps } from '../../types';

export default function NatureTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-green-50 p-8 shadow-lg print:shadow-none relative font-sans">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-lime-200/50 to-green-200/50 rounded-tr-full" />

      {/* Header */}
      <header className="relative mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-light text-emerald-800 mb-2">
              {data.contactInformation.fullName}
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-emerald-500" />
          </div>
          <div className="space-y-2 text-right">
            <div className="flex items-center justify-end gap-2 text-emerald-700">
              <span>{data.contactInformation.email}</span>
              <span className="text-lg">🌱</span>
            </div>
            <div className="flex items-center justify-end gap-2 text-emerald-700">
              <span>{data.contactInformation.phoneNumber}</span>
              <span className="text-lg">🍃</span>
            </div>
            <div className="flex items-center justify-end gap-2 text-emerald-700">
              <span>{data.contactInformation.location}</span>
              <span className="text-lg">🌿</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-bl-full" />
          <p className="text-emerald-800 leading-relaxed relative">
            {data.professionalSummary}
          </p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-light text-emerald-800 mb-6 flex items-center gap-2">
            Core Strengths
            <div className="h-px flex-grow bg-gradient-to-r from-green-300 to-transparent ml-4" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm
                          border border-green-100 hover:border-emerald-300 
                          transition-all duration-300"
              >
                <span className="text-emerald-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-light text-emerald-800 mb-6 flex items-center gap-2">
            Professional Journey
            <div className="h-px flex-grow bg-gradient-to-r from-green-300 to-transparent ml-4" />
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
                <div className="relative">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-emerald-800">{job.jobTitle}</h3>
                      <div className="text-emerald-600">{job.companyName}</div>
                    </div>
                    <div className="text-right text-emerald-600">
                      <div>{job.dates}</div>
                      <div className="text-emerald-500">{job.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-emerald-700 pl-6 relative before:content-[''] 
                                             before:absolute before:left-0 before:top-[0.6em] 
                                             before:w-2 before:h-2 before:bg-green-300 
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
        <section className="mb-12">
          <h2 className="text-2xl font-light text-emerald-800 mb-6 flex items-center gap-2">
            Key Projects
            <div className="h-px flex-grow bg-gradient-to-r from-green-300 to-transparent ml-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm
                          hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
                <div className="relative">
                  <h3 className="text-lg font-medium text-emerald-800 mb-2">{project.name}</h3>
                  <p className="text-emerald-700 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-sm bg-green-100 text-emerald-700 rounded-full"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
            <div className="relative">
              <h2 className="text-2xl font-light text-emerald-800 mb-6">Educational Path</h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-emerald-800">{edu.degree}</h3>
                    <div className="text-emerald-600">{edu.institution}</div>
                    <div className="text-emerald-500 text-sm">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
            <div className="relative">
              <h2 className="text-2xl font-light text-emerald-800 mb-6">Certifications</h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-emerald-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-green-300 
                              before:rounded-full"
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
        <section className="mb-12">
          <h2 className="text-2xl font-light text-emerald-800 mb-6 flex items-center gap-2">
            Community Growth
            <div className="h-px flex-grow bg-gradient-to-r from-green-300 to-transparent ml-4" />
          </h2>
          <div className="space-y-6">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
                <div className="relative">
                  <h3 className="text-lg font-medium text-emerald-800 mb-2">{exp.role}</h3>
                  <div className="text-emerald-600 mb-2">{exp.organization}</div>
                  <p className="text-emerald-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-light text-emerald-800 mb-6 flex items-center gap-2">
            Professional Ecosystem
            <div className="h-px flex-grow bg-gradient-to-r from-green-300 to-transparent ml-4" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm
                          border border-green-100 hover:border-emerald-300 
                          transition-all duration-300"
              >
                <span className="text-emerald-700">{association}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
            <div className="relative">
              <h2 className="text-2xl font-light text-emerald-800 mb-6">Languages</h2>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-emerald-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-green-300 
                              before:rounded-full"
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
          <section className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
            <div className="relative">
              <h2 className="text-2xl font-light text-emerald-800 mb-6">Publications</h2>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-emerald-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-green-300 
                              before:rounded-full"
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
          <section className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full" />
            <div className="relative">
              <h2 className="text-2xl font-light text-emerald-800 mb-6">Awards</h2>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-emerald-700 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-green-300 
                              before:rounded-full"
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
      <footer className="mt-12 text-center">
        <div className="h-px w-32 bg-gradient-to-r from-green-300 to-emerald-400 mx-auto" />
      </footer>
    </div>
  );
} 