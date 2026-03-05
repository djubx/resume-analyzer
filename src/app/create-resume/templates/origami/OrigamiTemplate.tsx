'use client';

import { TemplateProps } from '../../types';

export default function OrigamiTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none text-slate-800 relative overflow-hidden">
      {/* Origami Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0V0zm30 30v30h30V30H30zm0-30v30h30V0H30z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Decorative Corner Folds */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 transform -rotate-6" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-rose-100 to-rose-200 transform rotate-6" />
            
            <div className="relative z-10 text-center pt-8">
              <h1 className="text-4xl font-light tracking-wide mb-4">
                {data.contactInformation.fullName}
              </h1>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-rose-400">✉</span>
                  <span>{data.contactInformation.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-rose-400">☎</span>
                  <span>{data.contactInformation.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-rose-400">⌘</span>
                  <span>{data.contactInformation.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200" />
            <p className="text-lg leading-relaxed pl-8 italic text-slate-600">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <div className="relative overflow-hidden">
            <h2 className="text-2xl font-light text-center mb-8 relative">
              <span className="relative z-10">Expertise</span>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-0.5 bg-rose-200" />
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative p-4 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 transform origin-top-left -rotate-2 group-hover:rotate-0 transition-transform" />
                  <span className="relative z-10 block text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8 relative">
            <span className="relative z-10">Professional Journey</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-0.5 bg-rose-200" />
          </h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200" />
                <div className="pl-8">
                  <h3 className="text-xl font-medium mb-2">{job.jobTitle}</h3>
                  <div className="text-rose-500 mb-1">{job.companyName}</div>
                  <div className="text-sm text-slate-500 mb-4">{job.dates} • {job.location}</div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-slate-600 pl-6 relative before:content-[''] 
                                  before:absolute before:left-0 before:top-[0.6em] 
                                  before:w-1.5 before:h-1.5 before:bg-rose-300 
                                  before:transform before:rotate-45"
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
          <h2 className="text-2xl font-light text-center mb-8 relative">
            <span className="relative z-10">Notable Projects</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-0.5 bg-rose-200" />
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="relative p-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 transform origin-top-left -rotate-1 group-hover:rotate-0 transition-transform" />
                <div className="relative z-10">
                  <h3 className="text-xl font-medium mb-2">{project.name}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-white text-rose-500 border border-rose-200"
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
      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="relative p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 transform -rotate-1" />
            <div className="relative z-10">
              <h2 className="text-2xl font-light mb-6 relative inline-block">
                Education
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-rose-200" />
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-slate-800">{edu.degree}</h3>
                    <div className="text-rose-500">{edu.institution}</div>
                    <div className="text-sm text-slate-500">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="relative p-6">
            <div className="absolute inset-0 bg-gradient-to-bl from-rose-50 to-rose-100 transform rotate-1" />
            <div className="relative z-10">
              <h2 className="text-2xl font-light mb-6 relative inline-block">
                Certifications
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-rose-200" />
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-slate-600 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-1.5 before:h-1.5 before:bg-rose-300 
                              before:transform before:rotate-45"
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
          <h2 className="text-2xl font-light text-center mb-8 relative">
            <span className="relative z-10">Community Involvement</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-0.5 bg-rose-200" />
          </h2>
          <div className="space-y-12">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200" />
                <div className="pl-8">
                  <h3 className="text-xl font-medium mb-2">{exp.role}</h3>
                  <div className="text-rose-500 mb-1">{exp.organization}</div>
                  <p className="text-slate-600 pl-6 relative before:content-[''] 
                               before:absolute before:left-0 before:top-[0.6em] 
                               before:w-1.5 before:h-1.5 before:bg-rose-300 
                               before:transform before:rotate-45">
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
          <div className="relative overflow-hidden">
            <h2 className="text-2xl font-light text-center mb-8 relative">
              <span className="relative z-10">Professional Networks</span>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-0.5 bg-rose-200" />
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.professionalAssociations.map((association, index) => (
                <div
                  key={index}
                  className="relative p-4 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 transform origin-top-left -rotate-2 group-hover:rotate-0 transition-transform" />
                  <span className="relative z-10 block text-center">{association}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="relative p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 transform -rotate-1" />
            <div className="relative z-10">
              <h2 className="text-2xl font-light mb-6 relative inline-block">
                Languages
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-rose-200" />
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-slate-600 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-1.5 before:h-1.5 before:bg-rose-300 
                              before:transform before:rotate-45"
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
          <section className="relative p-6">
            <div className="absolute inset-0 bg-gradient-to-bl from-rose-50 to-rose-100 transform rotate-1" />
            <div className="relative z-10">
              <h2 className="text-2xl font-light mb-6 relative inline-block">
                Publications
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-rose-200" />
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-slate-600 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-1.5 before:h-1.5 before:bg-rose-300 
                              before:transform before:rotate-45"
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
          <section className="relative p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 transform -rotate-1" />
            <div className="relative z-10">
              <h2 className="text-2xl font-light mb-6 relative inline-block">
                Awards
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-rose-200" />
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-slate-600 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-1.5 before:h-1.5 before:bg-rose-300 
                              before:transform before:rotate-45"
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
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-rose-100 to-rose-50 transform -rotate-1" />
          <div className="relative z-10 px-8 py-2">
            <div className="h-0.5 w-16 bg-rose-200 mx-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
} 