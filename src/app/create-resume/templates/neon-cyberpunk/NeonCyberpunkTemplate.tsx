'use client';

import { TemplateProps } from '../../types';

export default function NeonCyberpunkTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-black p-8 shadow-lg print:shadow-none text-white relative overflow-hidden font-mono">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:44px_44px] opacity-20"
           style={{
             backgroundImage: `linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,0,255,0.1) 1px, transparent 1px)`
           }} />
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,rgba(0,255,255,0.1),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_-100px,rgba(255,0,255,0.1),transparent)]" />

      {/* Header */}
      <header className="relative mb-12 border border-cyan-500/30 p-8 group hover:border-pink-500/30 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent
                           relative after:content-[''] after:absolute after:inset-0 
                           after:bg-gradient-to-r after:from-cyan-500 after:to-pink-500 
                           after:blur-lg after:-z-10 after:opacity-50">
              {data.contactInformation.fullName}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-cyan-500">[</span>
              <span className="text-pink-500">@</span>
              <span className="text-cyan-500">]</span>
              <span className="text-gray-400 hover:text-white transition-colors">
                {data.contactInformation.email}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-500">[</span>
              <span className="text-pink-500">#</span>
              <span className="text-cyan-500">]</span>
              <span className="text-gray-400 hover:text-white transition-colors">
                {data.contactInformation.phoneNumber}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-500">[</span>
              <span className="text-pink-500">$</span>
              <span className="text-cyan-500">]</span>
              <span className="text-gray-400 hover:text-white transition-colors">
                {data.contactInformation.location}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl font-bold mb-4 text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
              SYSTEM.PROFILE
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-500">CORE.MODULES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="border border-cyan-500/30 p-3 group hover:border-pink-500/30 
                          transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-gray-400 group-hover:text-white transition-colors duration-500">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-pink-500">MISSION.LOG</h2>
          <div className="space-y-6">
            {data.workExperience.map((job, index) => (
              <div
                key={index}
                className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                          transition-colors duration-500 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                    {job.jobTitle}
                  </h3>
                  <div className="text-pink-500 group-hover:text-cyan-500 transition-colors duration-500">
                    {job.companyName}
                  </div>
                  <div className="text-gray-500 mb-4">
                    <span className="text-cyan-500">[</span>
                    {job.dates}
                    <span className="text-cyan-500">]</span>
                    {' // '}
                    <span className="text-pink-500">{job.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 pl-6 relative before:content-['>'] 
                                  before:absolute before:left-0 before:text-cyan-500
                                  group-hover:before:text-pink-500 before:transition-colors
                                  before:duration-500"
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-500">PROJECTS.EXE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                          transition-colors duration-500 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-sm border border-cyan-500/30 text-cyan-500
                                    group-hover:border-pink-500/30 group-hover:text-pink-500
                                    transition-colors duration-500"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                            transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                EDU.SYS
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                      {edu.degree}
                    </h3>
                    <div className="text-gray-400">{edu.institution}</div>
                    <div className="text-gray-500">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                            transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                CERT.DAT
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-gray-400 pl-6 relative before:content-['>'] 
                              before:absolute before:left-0 before:text-cyan-500
                              group-hover:before:text-pink-500 before:transition-colors
                              before:duration-500"
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-pink-500">COMMUNITY.SYS</h2>
          <div className="space-y-6">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                          transition-colors duration-500 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                    {exp.role}
                  </h3>
                  <div className="text-pink-500 group-hover:text-cyan-500 transition-colors duration-500">
                    {exp.organization}
                  </div>
                  <p className="text-gray-400 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-500">NETWORK.DAT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="border border-cyan-500/30 p-3 group hover:border-pink-500/30 
                          transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-gray-400 group-hover:text-white transition-colors duration-500">
                  {association}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                            transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                LANG.BIN
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-gray-400 pl-6 relative before:content-['>'] 
                              before:absolute before:left-0 before:text-cyan-500
                              group-hover:before:text-pink-500 before:transition-colors
                              before:duration-500"
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
          <section className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                            transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                DOCS.TXT
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-gray-400 pl-6 relative before:content-['>'] 
                              before:absolute before:left-0 before:text-cyan-500
                              group-hover:before:text-pink-500 before:transition-colors
                              before:duration-500"
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
          <section className="border border-cyan-500/30 p-6 group hover:border-pink-500/30 
                            transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
                ACHIEVEMENTS.DAT
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-gray-400 pl-6 relative before:content-['>'] 
                              before:absolute before:left-0 before:text-cyan-500
                              group-hover:before:text-pink-500 before:transition-colors
                              before:duration-500"
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
      <footer className="mt-12 text-center">
        <div className="border border-cyan-500/30 px-6 py-3 inline-block group hover:border-pink-500/30 
                      transition-colors duration-500 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <span className="text-cyan-500 group-hover:text-pink-500 transition-colors duration-500">
              {'</>'} 
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
} 