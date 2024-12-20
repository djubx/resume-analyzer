'use client';

import { TemplateProps } from '../../types';

export default function InfographicTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-slate-50 p-8 shadow-lg print:shadow-none text-slate-800 relative overflow-hidden">
      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-8">
            {/* Profile Circle */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-slate-50 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
              </div>
            </div>
            
            {/* Name and Contact */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {data.contactInformation.fullName}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500">@</span>
                  </div>
                  <span>{data.contactInformation.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-500">#</span>
                  </div>
                  <span>{data.contactInformation.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500">⌘</span>
                  </div>
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
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm relative">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            <p className="text-lg leading-relaxed text-slate-600">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="relative p-4 bg-white rounded-xl shadow-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                              translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  <span className="text-slate-700">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="relative">
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            <div className="space-y-12">
              {data.workExperience.map((job, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-end' : ''}`}>
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="p-6 bg-white rounded-2xl shadow-sm relative">
                      <div className={`absolute ${index % 2 === 0 ? '-right-11' : '-left-11'} top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full`} />
                      <h3 className="text-xl font-bold text-blue-500 mb-2">{job.jobTitle}</h3>
                      <div className="text-purple-500 mb-1">{job.companyName}</div>
                      <div className="text-sm text-slate-500 mb-4">{job.dates} • {job.location}</div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-slate-600 pl-6 relative before:content-[''] 
                                      before:absolute before:left-0 before:top-[0.6em] 
                                      before:w-2 before:h-2 before:bg-gradient-to-br 
                                      before:from-blue-500/50 before:to-purple-500/50 
                                      before:rounded-full"
                          >
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Project Showcase
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                              translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-blue-500 mb-2">{project.name}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                                    text-slate-700 rounded-full"
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
      <div className="grid grid-cols-2 gap-8 mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 bg-white rounded-2xl shadow-sm relative">
            <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold text-blue-500">{edu.degree}</h3>
                  <div className="text-purple-500">{edu.institution}</div>
                  <div className="text-sm text-slate-500">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 bg-white rounded-2xl shadow-sm relative">
            <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-slate-600 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-gradient-to-br 
                            before:from-blue-500/50 before:to-purple-500/50 
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
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Community Impact
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                              translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-blue-500 mb-2">{exp.role}</h3>
                  <div className="text-purple-500 mb-4">{exp.organization}</div>
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Professional Networks
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="relative p-4 bg-white rounded-xl shadow-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                              translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  <span className="text-slate-700">{association}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="p-6 bg-white rounded-2xl shadow-sm relative">
            <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Languages
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-slate-600 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-gradient-to-br 
                            before:from-blue-500/50 before:to-purple-500/50 
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
          <section className="p-6 bg-white rounded-2xl shadow-sm relative">
            <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Publications
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-slate-600 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-gradient-to-br 
                            before:from-blue-500/50 before:to-purple-500/50 
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
          <section className="p-6 bg-white rounded-2xl shadow-sm relative">
            <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-slate-600 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-gradient-to-br 
                            before:from-blue-500/50 before:to-purple-500/50 
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
      <footer className="mt-16 text-center">
        <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm">
          <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>
      </footer>
    </div>
  );
} 