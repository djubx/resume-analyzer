'use client';

import { TemplateProps } from '../../types';

export default function GradientFlowTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(123,31,162,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_-100px,rgba(76,29,149,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(123,31,162,0.05)_0%,transparent_40%,transparent_60%,rgba(76,29,149,0.05)_100%)]" />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <span className="w-1 h-1 bg-purple-400 rounded-full" />
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <span className="w-1 h-1 bg-purple-400 rounded-full" />
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <span className="w-1 h-1 bg-purple-400 rounded-full" />
              <span>{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-300">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-purple-500/20
                          hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300"
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
          <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div key={index} className="max-w-3xl mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-purple-300">{job.jobTitle}</h3>
                  <div className="text-pink-300">{job.companyName}</div>
                  <div className="text-sm text-gray-400">
                    {job.dates} • {job.location}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 pl-6 relative before:content-[''] 
                                           before:absolute before:left-0 before:top-[0.6em] 
                                           before:w-2 before:h-2 before:bg-purple-500/30 
                                           before:rounded-full">
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
          <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-lg border border-purple-500/20
                          hover:border-purple-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-purple-300 mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm text-pink-300 bg-white/5 rounded-md"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="bg-white/5 p-8 rounded-lg border border-purple-500/20">
            <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-medium text-purple-300">{edu.degree}</h3>
                  <div className="text-pink-300">{edu.institution}</div>
                  <div className="text-gray-400">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-white/5 p-8 rounded-lg border border-purple-500/20">
            <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-purple-500/30 
                            before:rounded-full text-center"
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
          <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Volunteer Experience
          </h2>
          <div className="space-y-12">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="max-w-3xl mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-purple-300">{exp.role}</h3>
                  <div className="text-pink-300">{exp.organization}</div>
                </div>
                <p className="text-gray-300 text-center">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Networks
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-purple-500/20
                          hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300"
              >
                {association}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="bg-white/5 p-8 rounded-lg border border-purple-500/20">
            <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Languages
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-purple-500/30 
                            before:rounded-full text-center"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="bg-white/5 p-8 rounded-lg border border-purple-500/20">
            <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Publications
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-purple-500/30 
                            before:rounded-full text-center"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="bg-white/5 p-8 rounded-lg border border-purple-500/20">
            <h2 className="text-2xl font-light text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Awards
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-purple-500/30 
                            before:rounded-full text-center"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400">
        <div className="inline-block bg-white/5 px-8 py-3 rounded-full border border-purple-500/20">
        </div>
      </footer>
    </div>
  );
} 