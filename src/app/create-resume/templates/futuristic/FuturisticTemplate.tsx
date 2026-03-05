'use client';

import { TemplateProps } from '../../types';

export default function FuturisticTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-gray-900 p-8 shadow-lg print:shadow-none relative overflow-hidden text-gray-100">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      {/* Header */}
      <header className="relative mb-12 border-l-4 border-cyan-500 pl-6">
        <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 animate-pulse" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          {data.contactInformation.fullName}
        </h1>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-cyan-400">@</span>
            <span>{data.contactInformation.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">#</span>
            <span>{data.contactInformation.phoneNumber}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-purple-400">⌘</span>
            <span>{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden group hover:border-cyan-500 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Neural Profile</h2>
          <p className="text-gray-300 leading-relaxed relative z-10">{data.professionalSummary}</p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-300
                          hover:border-blue-500 hover:text-blue-400 transition-all duration-300
                          hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Mission Logs</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-100">{job.jobTitle}</h3>
                  <div className="text-purple-400 font-medium">{job.companyName}</div>
                  <div className="text-gray-400 text-sm">
                    {job.dates} | {job.location}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 relative pl-6 before:content-['']
                                           before:absolute before:left-0 before:top-[0.6em] before:w-2 
                                           before:h-2 before:bg-purple-500 before:rounded-full">
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Digital Ventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg border border-gray-700
                          hover:border-cyan-500 transition-all duration-300
                          hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded bg-gray-900 text-cyan-400 border border-gray-700"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Neural Training</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-100">{edu.degree}</h3>
                <div className="text-blue-400">{edu.institution}</div>
                <div className="text-gray-400">{edu.graduationDate}</div>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">System Upgrades</h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-purple-500 before:rounded-full"
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Social Impact Protocols</h2>
          <div className="space-y-6">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg border border-gray-700
                          hover:border-cyan-500 transition-all duration-300
                          hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{exp.role}</h3>
                <div className="text-cyan-400 mb-2">{exp.organization}</div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Network Connections</h2>
          <div className="flex flex-wrap gap-3">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-300
                          hover:border-blue-500 hover:text-blue-400 transition-all duration-300
                          hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                {association}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">Communication Protocols</h2>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-purple-500 before:rounded-full"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Data Archives</h2>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Achievement Matrix</h2>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 
                            before:top-[0.6em] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
} 