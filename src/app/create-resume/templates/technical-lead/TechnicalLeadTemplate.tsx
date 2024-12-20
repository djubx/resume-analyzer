'use client';

import { TemplateProps } from '../../types';

export default function TechnicalLeadTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-slate-50 p-8 shadow-lg print:shadow-none text-slate-800 relative overflow-hidden">
      {/* Header */}
      <header className="relative mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-600">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-slate-800">
                {data.contactInformation.fullName}
              </h1>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{data.contactInformation.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{data.contactInformation.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{data.contactInformation.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 space-y-8">
          {/* Technical Skills */}
          {data.skills.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-slate-800 border-b-2 border-blue-600 pb-2">
                Technical Expertise
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-slate-800 border-b-2 border-blue-600 pb-2">
                Certifications
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-slate-700 pl-4 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-blue-600/20 
                              before:rounded-full"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-slate-800 border-b-2 border-blue-600 pb-2">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                    <div className="text-blue-600">{edu.institution}</div>
                    <div className="text-sm text-slate-600">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Professional Associations */}
          {data.professionalAssociations?.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-slate-800 border-b-2 border-blue-600 pb-2">
                Professional Associations
              </h2>
              <div className="space-y-3">
                {data.professionalAssociations.map((association, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-slate-700">{association}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.additionalSections?.languages?.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-slate-800 border-b-2 border-blue-600 pb-2">
                Languages
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-slate-700 pl-4 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-blue-600/20 
                              before:rounded-full"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-8">
          {/* Professional Summary */}
          {data.professionalSummary && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-slate-800 border-b-2 border-blue-600 pb-2">
                Leadership Profile
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {data.professionalSummary}
              </p>
            </section>
          )}

          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-6 text-slate-800 border-b-2 border-blue-600 pb-2">
                Leadership Experience
              </h2>
              <div className="space-y-6">
                {data.workExperience.map((job, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-blue-600/20">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blue-600 rounded-full" />
                    <h3 className="text-lg font-bold text-slate-800">{job.jobTitle}</h3>
                    <div className="text-blue-600 font-medium">{job.companyName}</div>
                    <div className="text-sm text-slate-600 mb-3">{job.dates} • {job.location}</div>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-slate-700 pl-4 relative before:content-[''] 
                                    before:absolute before:left-0 before:top-[0.6em] 
                                    before:w-1.5 before:h-1.5 before:bg-blue-600/20 
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
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-6 text-slate-800 border-b-2 border-blue-600 pb-2">
                Key Projects & Initiatives
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {data.projects.map((project, index) => (
                  <div
                    key={index}
                    className="relative pl-4 border-l-2 border-blue-600/20"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blue-600 rounded-full" />
                    <h3 className="font-bold text-slate-800">{project.name}</h3>
                    <p className="text-slate-700 mb-2 text-sm">{project.description}</p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded"
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

          {/* Volunteer Experience */}
          {data.volunteerExperience?.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-6 text-slate-800 border-b-2 border-blue-600 pb-2">
                Volunteer Experience
              </h2>
              <div className="space-y-6">
                {data.volunteerExperience.map((exp, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-blue-600/20">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blue-600 rounded-full" />
                    <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                    <div className="text-blue-600 font-medium">{exp.organization}</div>
                    <p className="text-slate-700 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Publications */}
          {data.additionalSections?.publications?.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-6 text-slate-800 border-b-2 border-blue-600 pb-2">
                Publications
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-slate-700 pl-4 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-blue-600/20 
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
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-6 text-slate-800 border-b-2 border-blue-600 pb-2">
                Awards & Recognition
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-slate-700 pl-4 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-blue-600/20 
                              before:rounded-full"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <div className="inline-flex items-center gap-2">
          <div className="w-16 h-px bg-blue-600/20" />
          <div className="w-16 h-px bg-blue-600/20" />
        </div>
      </footer>
    </div>
  );
} 