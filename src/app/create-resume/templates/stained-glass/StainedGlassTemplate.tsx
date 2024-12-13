'use client';

import { TemplateProps } from '../../types';

export default function StainedGlassTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-slate-900 p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Stained Glass Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0V0zm30 30v30h30V30H30zm0-30v30h30V0H30z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-500/30 to-blue-500/30 p-8 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
            <div className="absolute inset-0 shadow-inner" />
            
            <div className="text-center relative">
              <h1 className="text-5xl font-serif mb-6 relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  {data.contactInformation.fullName}
                </span>
              </h1>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center border-2 border-slate-900 backdrop-blur-sm">
                    <span className="text-purple-200">✉</span>
                  </div>
                  <span className="text-purple-200">{data.contactInformation.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center border-2 border-slate-900 backdrop-blur-sm">
                    <span className="text-blue-200">☎</span>
                  </div>
                  <span className="text-blue-200">{data.contactInformation.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center border-2 border-slate-900 backdrop-blur-sm">
                    <span className="text-purple-200">⌘</span>
                  </div>
                  <span className="text-purple-200">{data.contactInformation.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="relative bg-gradient-to-br from-emerald-500/30 to-teal-500/30 p-8 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
            <div className="absolute inset-0 shadow-inner" />
            <p className="text-lg leading-relaxed text-emerald-200 relative z-10 font-serif">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Expertise
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-4 rounded-lg border-4 border-slate-900 backdrop-blur-sm group"
              >
                <div className="absolute inset-0 shadow-inner" />
                <span className="relative z-10 block text-center text-blue-200 group-hover:text-purple-200 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative bg-gradient-to-br from-teal-500/30 to-emerald-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
                <div className="absolute inset-0 shadow-inner" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-teal-200 mb-2">{job.jobTitle}</h3>
                  <div className="text-emerald-200 font-bold mb-1">{job.companyName}</div>
                  <div className="text-sm text-teal-300/80 mb-4">{job.dates} • {job.location}</div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-emerald-200/90 pl-6 relative before:content-[''] 
                                  before:absolute before:left-0 before:top-[0.6em] 
                                  before:w-2 before:h-2 before:bg-emerald-400/50 
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
          <h2 className="text-3xl font-serif text-center mb-8 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Notable Works
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-500/30 to-blue-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm"
              >
                <div className="absolute inset-0 shadow-inner" />
                <div className="relative z-10">
                  <h3 className="text-xl font-serif text-purple-200 mb-2">{project.name}</h3>
                  <p className="text-blue-200/90 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-blue-500/20 text-blue-200 border-2 border-slate-900 rounded-full backdrop-blur-sm"
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
          <section className="relative bg-gradient-to-br from-emerald-500/30 to-teal-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
            <div className="absolute inset-0 shadow-inner" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif text-emerald-200 mb-6">
                Academic Path
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-teal-200">{edu.degree}</h3>
                    <div className="text-emerald-200/90">{edu.institution}</div>
                    <div className="text-sm text-teal-300/80">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="relative bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
            <div className="absolute inset-0 shadow-inner" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif text-blue-200 mb-6">
                Achievements
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-purple-200/90 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-purple-400/50 
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
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8 bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
            Community Service
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative bg-gradient-to-br from-rose-500/30 to-pink-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
                <div className="absolute inset-0 shadow-inner" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-rose-200 mb-2">{exp.role}</h3>
                  <div className="text-pink-200 font-bold mb-4">{exp.organization}</div>
                  <p className="text-rose-200/90">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8 bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
            Professional Networks
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-amber-500/30 to-yellow-500/30 p-4 rounded-lg border-4 border-slate-900 backdrop-blur-sm group"
              >
                <div className="absolute inset-0 shadow-inner" />
                <span className="relative z-10 block text-center text-amber-200 group-hover:text-yellow-200 transition-colors">
                  {association}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="relative bg-gradient-to-br from-cyan-500/30 to-sky-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
            <div className="absolute inset-0 shadow-inner" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif text-cyan-200 mb-6">
                Languages
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-sky-200/90 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-sky-400/50 
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
          <section className="relative bg-gradient-to-br from-violet-500/30 to-indigo-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
            <div className="absolute inset-0 shadow-inner" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif text-violet-200 mb-6">
                Publications
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-indigo-200/90 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-indigo-400/50 
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
          <section className="relative bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30 p-6 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
            <div className="absolute inset-0 shadow-inner" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif text-fuchsia-200 mb-6">
                Honors
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-pink-200/90 pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-pink-400/50 
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
      <footer className="mt-16 text-center">
        <div className="inline-block relative bg-gradient-to-br from-purple-500/30 to-blue-500/30 px-8 py-3 rounded-lg border-4 border-slate-900 backdrop-blur-sm">
          <div className="absolute inset-0 shadow-inner" />
          <div className="relative z-10 w-16 h-px bg-gradient-to-r from-purple-300 to-blue-300 mx-auto" />
        </div>
      </footer>
    </div>
  );
} 