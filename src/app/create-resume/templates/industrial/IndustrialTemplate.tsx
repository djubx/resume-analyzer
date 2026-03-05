'use client';

import { TemplateProps } from '../../types';

export default function IndustrialTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-zinc-100 p-8 shadow-lg print:shadow-none text-zinc-900 relative overflow-hidden">
      {/* Industrial Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 22c0-12-18-8-18 4 0 12 18 8 18-4zm-6 4c0 8-12 8-12 0s12-8 12 0zM22 54c12 0 8-18-4-18-12 0-8 18 4 18zm-4-6c-8 0-8-12 0-12s8 12 0 12zM54 54c12 0 8-18-4-18-12 0-8 18 4 18zm-4-6c-8 0-8-12 0-12s8 12 0 12zM22 22c0-12-18-8-18 4 0 12 18 8 18-4zm-6 4c0 8-12 8-12 0s12-8 12 0z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="border-4 border-zinc-800 p-8 bg-zinc-200">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-zinc-800" />
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-zinc-800" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-zinc-800" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-zinc-800" />
          
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-wider mb-6 relative inline-block">
              <span className="relative z-10">{data.contactInformation.fullName}</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400 -skew-x-12" />
            </h1>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center">
                  <span className="text-yellow-400">@</span>
                </div>
                <span>{data.contactInformation.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center">
                  <span className="text-yellow-400">#</span>
                </div>
                <span>{data.contactInformation.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-800 flex items-center justify-center">
                  <span className="text-yellow-400">⌘</span>
                </div>
                <span>{data.contactInformation.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="border-l-8 border-yellow-400 pl-8 py-4 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-zinc-800 transform rotate-45" />
            <div className="absolute -left-3 bottom-0 w-6 h-6 bg-zinc-800 transform rotate-45" />
            <p className="text-lg leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">⚡</span>
            </div>
            <span>Technical Capabilities</span>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="border-2 border-zinc-800 p-4 relative group"
              >
                <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-zinc-900">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">⚙️</span>
            </div>
            <span>Operational History</span>
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="border-2 border-zinc-800 p-6 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400" />
                <h3 className="text-xl font-bold mb-2">{job.jobTitle}</h3>
                <div className="text-zinc-700 mb-1">{job.companyName}</div>
                <div className="text-sm text-zinc-600 mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-yellow-400"
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
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">🔧</span>
            </div>
            <span>Engineering Projects</span>
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-zinc-800 p-6 relative group"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-zinc-800" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-zinc-800" />
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4 text-zinc-700">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm border border-zinc-800 bg-zinc-800 text-yellow-400"
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
      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="border-2 border-zinc-800 p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400" />
            <h2 className="text-2xl font-bold mb-6">Training & Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-zinc-800 pl-4">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="text-zinc-700">{edu.institution}</div>
                  <div className="text-sm text-zinc-600">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border-2 border-zinc-800 p-6 relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400" />
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-400"
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
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">🤝</span>
            </div>
            <span>Community Initiatives</span>
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="border-2 border-zinc-800 p-6 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400" />
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <div className="text-zinc-700 mb-4">{exp.organization}</div>
                <p className="pl-6 relative before:content-[''] 
                             before:absolute before:left-0 before:top-[0.6em] 
                             before:w-2 before:h-2 before:bg-yellow-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">🔗</span>
            </div>
            <span>Professional Networks</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="border-2 border-zinc-800 p-4 relative group"
              >
                <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-zinc-900">{association}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="border-2 border-zinc-800 p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400" />
            <h2 className="text-2xl font-bold mb-6">Communication</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-400"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="border-2 border-zinc-800 p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400" />
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-400"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="border-2 border-zinc-800 p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400" />
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-400"
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
        <div className="border-t-4 border-zinc-800 pt-4 flex items-center justify-center gap-4">
          <div className="w-4 h-4 bg-yellow-400 transform rotate-45" />
          <div className="w-4 h-4 bg-yellow-400 transform rotate-45" />
        </div>
      </footer>
    </div>
  );
} 