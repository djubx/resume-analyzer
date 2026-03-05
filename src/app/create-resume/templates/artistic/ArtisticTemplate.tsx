'use client';

import { TemplateProps } from '../../types';

export default function ArtisticTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-violet-50 p-8 shadow-lg print:shadow-none relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200/50 to-fuchsia-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/50 to-violet-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <header className="relative mb-16">
        <div className="relative">
          <h1 className="text-6xl font-light text-violet-950 mb-6 leading-tight">
            {data.contactInformation.fullName.split(' ').map((name, index) => (
              <div key={index} className="first:ml-0 ml-8">
                {name}
              </div>
            ))}
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-violet-400 to-fuchsia-400" />
        </div>
        <div className="mt-6 flex flex-wrap gap-6 text-violet-700">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
              <span className="text-violet-500">@</span>
            </span>
            <span>{data.contactInformation.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
              <span className="text-violet-500">#</span>
            </span>
            <span>{data.contactInformation.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
              <span className="text-violet-500">⌘</span>
            </span>
            <span>{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-fuchsia-400" />
          <div className="pl-8">
            <p className="text-lg text-violet-800 leading-relaxed font-light">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-violet-950 mb-8">Artistry & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-violet-700
                          border border-violet-100 hover:border-violet-300 transition-colors"
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
          <h2 className="text-2xl font-light text-violet-950 mb-8">Creative Journey</h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-violet-400 rounded-full" />
                </div>
                <div className="pl-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-violet-900">{job.jobTitle}</h3>
                    <div className="text-violet-700">{job.companyName}</div>
                    <div className="text-violet-500 text-sm">
                      {job.dates} • {job.location}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-violet-700 relative pl-6 before:content-[''] 
                                             before:absolute before:left-0 before:top-[0.6em] 
                                             before:w-2 before:h-2 before:border-2 
                                             before:border-violet-300 before:rounded-full">
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
          <h2 className="text-2xl font-light text-violet-950 mb-8">Creative Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl relative group
                          hover:bg-white/80 transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-lg font-medium text-violet-900 mb-2">{project.name}</h3>
                <p className="text-violet-700 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm bg-violet-50 text-violet-600 rounded-full"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-violet-950 mb-8">Academic Canvas</h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 border-2 border-violet-400 rounded-full" />
                  <h3 className="font-medium text-violet-900">{edu.degree}</h3>
                  <div className="text-violet-700">{edu.institution}</div>
                  <div className="text-violet-500 text-sm">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-violet-950 mb-8">Mastery & Accolades</h2>
            <ul className="space-y-4">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="relative pl-8 text-violet-700 before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:border-2 
                            before:border-violet-400 before:rounded-full"
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
          <h2 className="text-2xl font-light text-violet-950 mb-8">Community Canvas</h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-2 w-2 h-2 border-2 border-violet-400 rounded-full" />
                <h3 className="font-medium text-violet-900">{exp.role}</h3>
                <div className="text-violet-700">{exp.organization}</div>
                <p className="text-violet-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-violet-950 mb-8">Creative Circles</h2>
          <div className="flex flex-wrap gap-4">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-violet-700
                          border border-violet-100 hover:border-violet-300 transition-colors"
              >
                {association}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-violet-950 mb-8">Languages</h2>
            <div className="space-y-4">
              {data.additionalSections.languages.map((language, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 border-2 border-violet-400 rounded-full" />
                  <span className="text-violet-700">{language}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-violet-950 mb-8">Published Works</h2>
            <div className="space-y-4">
              {data.additionalSections.publications.map((publication, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 border-2 border-violet-400 rounded-full" />
                  <span className="text-violet-700 text-sm">{publication}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-violet-950 mb-8">Recognition</h2>
            <div className="space-y-4">
              {data.additionalSections.awards.map((award, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 border-2 border-violet-400 rounded-full" />
                  <span className="text-violet-700">{award}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
      </footer>
    </div>
  );
} 