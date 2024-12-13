'use client';

import { TemplateProps } from '../../types';

export default function NeonWaveTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#0D001A] p-8 shadow-lg print:shadow-none text-pink-50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `linear-gradient(transparent 0%, #FF00FF 2px, transparent 2px),
                              linear-gradient(90deg, transparent 0%, #FF00FF 2px, transparent 2px)`,
             backgroundSize: '40px 40px'
           }} />
      
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      {/* Header */}
      <header className="relative mb-12 border-b-2 border-pink-500/30 pb-8">
        <h1 className="text-5xl font-bold mb-4 relative">
          <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            {data.contactInformation.fullName}
          </span>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-cyan-400">
            <span className="text-lg">✧</span>
            <span>{data.contactInformation.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-pink-400">
            <span className="text-lg">✧</span>
            <span>{data.contactInformation.phoneNumber}</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-400">
            <span className="text-lg">✧</span>
            <span>{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-pink-500/5 to-purple-500/5 rounded-lg" />
          <div className="relative p-6 backdrop-blur-sm rounded-lg border border-pink-500/20">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">System.Profile</h2>
            <p className="leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-pink-400">Tech.Matrix</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="p-3 border border-purple-500/20 rounded-lg relative group overflow-hidden
                          hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-purple-400">Mission.Log</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-pink-500 to-purple-500" />
                <div className="pl-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400">{job.jobTitle}</h3>
                    <div className="text-pink-400">{job.companyName}</div>
                    <div className="text-sm text-purple-400">
                      {job.dates} | {job.location}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm relative pl-4 before:content-['»'] before:absolute before:left-0 before:text-pink-500">
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
          <h2 className="text-xl font-bold mb-6 text-cyan-400">Project.Matrix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border border-pink-500/20 p-6 rounded-lg relative group
                          hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-pink-500/5 to-purple-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <h3 className="text-lg font-bold text-pink-400 mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs border border-purple-500/30 rounded
                                  text-purple-400 bg-purple-500/10"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="border border-cyan-500/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-cyan-400">Neural.Training</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold text-pink-400">{edu.degree}</h3>
                  <div className="text-purple-400">{edu.institution}</div>
                  <div className="text-sm text-cyan-400/80">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border border-pink-500/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-pink-400">System.Upgrades</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['»'] before:absolute before:left-0 before:text-cyan-500"
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
          <h2 className="text-xl font-bold mb-6 text-pink-400">Community.Impact</h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-pink-500 to-purple-500" />
                <div className="pl-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400">{exp.role}</h3>
                    <div className="text-pink-400">{exp.organization}</div>
                  </div>
                  <p className="text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-purple-400">Network.Nodes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="p-3 border border-purple-500/20 rounded-lg relative group overflow-hidden
                          hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-sm">{association}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="border border-cyan-500/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-cyan-400">Language.Protocol</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['»'] before:absolute before:left-0 before:text-pink-500"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="border border-pink-500/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-pink-400">Data.Stream</h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['»'] before:absolute before:left-0 before:text-cyan-500"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="border border-purple-500/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-purple-400">Achievement.Matrix</h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['»'] before:absolute before:left-0 before:text-pink-500"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-pink-500/30 text-center">
        <div className="w-full h-px bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500" />
      </footer>
    </div>
  );
} 