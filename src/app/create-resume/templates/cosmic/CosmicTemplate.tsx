'use client';

import { TemplateProps } from '../../types';

export default function CosmicTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-slate-950 p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(167,139,250,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,rgba(244,114,182,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_2px_at_50%_50%,white,transparent)_0_0/100px_100px]" />
      </div>

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="group flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <span className="text-purple-400">✧</span>
              </div>
              <span className="text-slate-300 group-hover:text-purple-400 transition-colors">
                {data.contactInformation.email}
              </span>
            </div>
            <div className="group flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                <span className="text-pink-400">✧</span>
              </div>
              <span className="text-slate-300 group-hover:text-pink-400 transition-colors">
                {data.contactInformation.phoneNumber}
              </span>
            </div>
            <div className="group flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <span className="text-purple-400">✧</span>
              </div>
              <span className="text-slate-300 group-hover:text-purple-400 transition-colors">
                {data.contactInformation.location}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 blur-lg" />
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Stellar Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10
                          backdrop-blur-sm border border-purple-500/20 rounded-full
                          hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 
                              opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-slate-300 group-hover:text-purple-300 transition-colors">
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Orbit
          </h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10
                          backdrop-blur-sm border border-purple-500/20 relative group"
              >
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 blur-lg
                              group-hover:opacity-50 transition-opacity" />
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-purple-300">{job.jobTitle}</h3>
                  <div className="text-pink-300">{job.companyName}</div>
                  <div className="text-sm text-slate-400">
                    {job.dates} • {job.location}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-slate-300 pl-6 relative before:content-['✧'] 
                                before:absolute before:left-0 before:text-purple-400"
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Project Constellations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10
                          backdrop-blur-sm border border-purple-500/20 relative group"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 blur-lg
                              group-hover:opacity-50 transition-opacity" />
                <h3 className="text-xl font-bold text-purple-300 mb-3">{project.name}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm text-pink-300 bg-pink-500/10 rounded-full"
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
          <section className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Academic Journey
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-purple-300">{edu.degree}</h3>
                  <div className="text-pink-300">{edu.institution}</div>
                  <div className="text-slate-400">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Celestial Achievements
            </h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-['✧'] 
                            before:absolute before:left-0 before:text-purple-400 text-center"
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Galactic Contributions
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10
                          backdrop-blur-sm border border-purple-500/20 relative group"
              >
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 blur-lg
                              group-hover:opacity-50 transition-opacity" />
                <h3 className="text-xl font-bold text-purple-300 mb-2">{exp.role}</h3>
                <div className="text-pink-300 mb-4">{exp.organization}</div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interstellar Networks
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10
                          backdrop-blur-sm border border-purple-500/20 rounded-full
                          hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 
                              opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-slate-300 group-hover:text-purple-300 transition-colors">
                  {association}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Universal Languages
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-['✧'] 
                            before:absolute before:left-0 before:text-purple-400 text-center"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cosmic Chronicles
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-['✧'] 
                            before:absolute before:left-0 before:text-purple-400 text-center"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stellar Honors
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-['✧'] 
                            before:absolute before:left-0 before:text-purple-400 text-center"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer - Removed hardcoded text */}
      <footer className="mt-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </footer>
    </div>
  );
} 