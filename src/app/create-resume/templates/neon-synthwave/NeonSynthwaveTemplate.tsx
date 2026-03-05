'use client';

import { TemplateProps } from '../../types';

export default function NeonSynthwaveTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#0f0326] p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Synthwave Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,0,255,0.1)_2%,transparent_3%),linear-gradient(90deg,transparent_0%,rgba(255,0,255,0.1)_2%,transparent_3%)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,0,255,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,rgba(0,255,255,0.15),transparent)]" />

      {/* Header */}
      <header className="relative mb-16">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-6 relative">
            <span className="absolute inset-0 text-[#ff00ff] blur-[2px] animate-pulse">
              {data.contactInformation.fullName}
            </span>
            <span className="absolute inset-0 text-[#00ffff] blur-[2px] animate-pulse">
              {data.contactInformation.fullName}
            </span>
            <span className="relative text-white">
              {data.contactInformation.fullName}
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="group">
              <div className="px-4 py-2 bg-[#1a0533] rounded-lg border border-[#ff00ff]/30 
                            hover:border-[#ff00ff] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/10 to-[#ff00ff]/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative text-[#ff00ff]">{data.contactInformation.email}</span>
              </div>
            </div>
            <div className="group">
              <div className="px-4 py-2 bg-[#1a0533] rounded-lg border border-[#00ffff]/30 
                            hover:border-[#00ffff] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/10 to-[#00ffff]/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative text-[#00ffff]">{data.contactInformation.phoneNumber}</span>
              </div>
            </div>
            <div className="group">
              <div className="px-4 py-2 bg-[#1a0533] rounded-lg border border-[#ff00ff]/30 
                            hover:border-[#ff00ff] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/10 to-[#ff00ff]/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative text-[#ff00ff]">{data.contactInformation.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto p-8 bg-[#1a0533] rounded-lg border border-[#00ffff]/30 relative group
                        hover:border-[#00ffff] transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/5 to-[#00ffff]/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <p className="text-lg leading-relaxed text-[#e0e0ff] text-center relative">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 relative">
            <span className="absolute inset-0 text-[#ff00ff] blur-[1px] animate-pulse">POWER UPS</span>
            <span className="absolute inset-0 text-[#00ffff] blur-[1px] animate-pulse">POWER UPS</span>
            <span className="relative text-white">POWER UPS</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="px-4 py-2 bg-[#1a0533] rounded-lg border border-[#ff00ff]/30 
                              hover:border-[#ff00ff] transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/10 to-[#ff00ff]/0 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative text-[#ff00ff]">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 relative">
            <span className="absolute inset-0 text-[#ff00ff] blur-[1px] animate-pulse">MISSION LOG</span>
            <span className="absolute inset-0 text-[#00ffff] blur-[1px] animate-pulse">MISSION LOG</span>
            <span className="relative text-white">MISSION LOG</span>
          </h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-8 bg-[#1a0533] rounded-lg border border-[#00ffff]/30 
                          hover:border-[#00ffff] transition-colors relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/5 to-[#00ffff]/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-[#00ffff] mb-2">{job.jobTitle}</h3>
                  <div className="text-[#ff00ff] mb-1">{job.companyName}</div>
                  <div className="text-sm text-[#e0e0ff]/60 mb-4">{job.dates} • {job.location}</div>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-[#e0e0ff] pl-6 relative before:content-[''] 
                                  before:absolute before:left-0 before:top-[0.6em] 
                                  before:w-2 before:h-2 before:bg-[#ff00ff] 
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
          <h2 className="text-2xl font-bold text-center mb-8 relative">
            <span className="absolute inset-0 text-[#ff00ff] blur-[1px] animate-pulse">SIDE QUESTS</span>
            <span className="absolute inset-0 text-[#00ffff] blur-[1px] animate-pulse">SIDE QUESTS</span>
            <span className="relative text-white">SIDE QUESTS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-[#1a0533] rounded-lg border border-[#ff00ff]/30 
                          hover:border-[#ff00ff] transition-colors relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/5 to-[#ff00ff]/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-[#ff00ff] mb-2">{project.name}</h3>
                  <p className="text-[#e0e0ff] mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-[#1a0533] text-[#00ffff] rounded-lg 
                                    border border-[#00ffff]/30"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 bg-[#1a0533] rounded-lg border border-[#00ffff]/30 
                            hover:border-[#00ffff] transition-colors relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/5 to-[#00ffff]/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 text-[#00ffff]">Training</h2>
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-bold text-[#ff00ff]">{edu.degree}</h3>
                    <div className="text-[#00ffff]">{edu.institution}</div>
                    <div className="text-[#e0e0ff]/60">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 bg-[#1a0533] rounded-lg border border-[#ff00ff]/30 
                            hover:border-[#ff00ff] transition-colors relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/5 to-[#ff00ff]/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 text-[#ff00ff]">Achievements</h2>
              <ul className="space-y-3">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-[#e0e0ff] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#00ffff] 
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
          <h2 className="text-2xl font-bold text-center mb-8 relative">
            <span className="absolute inset-0 text-[#ff00ff] blur-[1px] animate-pulse">COMMUNITY SYNC</span>
            <span className="absolute inset-0 text-[#00ffff] blur-[1px] animate-pulse">COMMUNITY SYNC</span>
            <span className="relative text-white">COMMUNITY SYNC</span>
          </h2>
          <div className="space-y-12">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-8 bg-[#1a0533] rounded-lg border border-[#00ffff]/30 
                          hover:border-[#00ffff] transition-colors relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/5 to-[#00ffff]/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-[#00ffff] mb-2">{exp.role}</h3>
                  <div className="text-[#ff00ff] mb-1">{exp.organization}</div>
                  <p className="text-[#e0e0ff] pl-6 relative before:content-[''] 
                               before:absolute before:left-0 before:top-[0.6em] 
                               before:w-2 before:h-2 before:bg-[#ff00ff] 
                               before:rounded-full">
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
          <h2 className="text-2xl font-bold text-center mb-8 relative">
            <span className="absolute inset-0 text-[#ff00ff] blur-[1px] animate-pulse">NETWORK NODES</span>
            <span className="absolute inset-0 text-[#00ffff] blur-[1px] animate-pulse">NETWORK NODES</span>
            <span className="relative text-white">NETWORK NODES</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="px-4 py-2 bg-[#1a0533] rounded-lg border border-[#ff00ff]/30 
                              hover:border-[#ff00ff] transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/10 to-[#ff00ff]/0 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative text-[#ff00ff]">{association}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="p-6 bg-[#1a0533] rounded-lg border border-[#00ffff]/30 
                            hover:border-[#00ffff] transition-colors relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/5 to-[#00ffff]/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 text-[#00ffff]">Communication</h2>
              <ul className="space-y-3">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-[#e0e0ff] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#ff00ff] 
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
          <section className="p-6 bg-[#1a0533] rounded-lg border border-[#ff00ff]/30 
                            hover:border-[#ff00ff] transition-colors relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/5 to-[#ff00ff]/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 text-[#ff00ff]">Data Archives</h2>
              <ul className="space-y-3">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-[#e0e0ff] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#00ffff] 
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
          <section className="p-6 bg-[#1a0533] rounded-lg border border-[#00ffff]/30 
                            hover:border-[#00ffff] transition-colors relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/5 to-[#00ffff]/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-center mb-8 text-[#00ffff]">High Scores</h2>
              <ul className="space-y-3">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-[#e0e0ff] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#ff00ff] 
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

      {/* Footer - Removed hardcoded text */}
      <footer className="mt-16 text-center">
        <div className="inline-block px-8 py-3">
          <span className="text-[#ff00ff] blur-[1px] animate-pulse">⚡</span>
          <span className="text-[#00ffff] blur-[1px] animate-pulse ml-2">⚡</span>
        </div>
      </footer>
    </div>
  );
} 