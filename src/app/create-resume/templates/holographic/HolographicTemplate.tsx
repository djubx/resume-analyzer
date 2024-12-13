'use client';

import { TemplateProps } from '../../types';

export default function HolographicTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-slate-950 p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Holographic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(68,255,255,0.1),transparent)]" />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 blur-xl opacity-30" />
            <h1 className="relative text-5xl font-bold bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              {data.contactInformation.fullName}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                <span className="text-cyan-300">@</span>
                <span className="text-slate-300">{data.contactInformation.email}</span>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                <span className="text-fuchsia-300">#</span>
                <span className="text-slate-300">{data.contactInformation.phoneNumber}</span>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                <span className="text-cyan-300">⌘</span>
                <span className="text-slate-300">{data.contactInformation.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative">
              <p className="text-lg leading-relaxed text-slate-300 text-center">
                {data.professionalSummary}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative px-4 py-2 bg-white/5 rounded-full border border-white/10 text-slate-300 hover:text-white transition-colors">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Professional Timeline
          </h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-8 rounded-2xl relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{job.jobTitle}</h3>
                  <div className="text-fuchsia-300">{job.companyName}</div>
                  <div className="text-sm text-slate-400 mb-4">{job.dates} • {job.location}</div>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-slate-300 pl-6 relative before:content-[''] 
                                  before:absolute before:left-0 before:top-[0.6em] 
                                  before:w-2 before:h-2 before:bg-gradient-to-r 
                                  before:from-cyan-500 before:to-fuchsia-500 
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Project Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.name}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-white/5 text-fuchsia-300 rounded-full border border-white/10"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-bold text-cyan-300">{edu.degree}</h3>
                    <div className="text-fuchsia-300">{edu.institution}</div>
                    <div className="text-slate-400">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Certifications
              </h2>
              <ul className="space-y-3">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-slate-300 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-gradient-to-r 
                              before:from-cyan-500 before:to-fuchsia-500 
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Community Impact
          </h2>
          <div className="space-y-12">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-8 rounded-2xl relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{exp.role}</h3>
                  <div className="text-fuchsia-300">{exp.organization}</div>
                  <p className="text-slate-300 mt-4">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Professional Networks
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative px-4 py-2 bg-white/5 rounded-full border border-white/10 text-slate-300 hover:text-white transition-colors">
                  {association}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="p-6 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Languages
              </h2>
              <ul className="space-y-3">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-slate-300 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-gradient-to-r 
                              before:from-cyan-500 before:to-fuchsia-500 
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
          <section className="p-6 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Publications
              </h2>
              <ul className="space-y-3">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-slate-300 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-gradient-to-r 
                              before:from-cyan-500 before:to-fuchsia-500 
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
          <section className="p-6 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Achievements
              </h2>
              <ul className="space-y-3">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-slate-300 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-gradient-to-r 
                              before:from-cyan-500 before:to-fuchsia-500 
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
        <div className="inline-block px-8 py-3 rounded-full relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-full" />
          <div className="absolute inset-0 border border-white/10 rounded-full" />
          <div className="relative w-16 h-px bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 mx-auto" />
        </div>
      </footer>
    </div>
  );
} 