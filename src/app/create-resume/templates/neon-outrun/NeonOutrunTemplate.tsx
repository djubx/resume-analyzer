'use client';

import { TemplateProps } from '../../types';

export default function NeonOutrunTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#0f1225] p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0V0zm30 30v30h30V30H30zm0-30v30h30V0H30z' fill='%23ff00ff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px'
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#1a1f3c] p-8 rounded-lg border border-[#ff00ff]/30 shadow-[0_0_20px_rgba(255,0,255,0.3)]">
            <div className="text-center">
              <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent animate-gradient-x">
                {data.contactInformation.fullName}
              </h1>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 group">
                  <div className="w-8 h-8 bg-[#ff00ff]/20 rounded-lg flex items-center justify-center border border-[#ff00ff]/30 group-hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-shadow">
                    <span className="text-[#ff00ff]">@</span>
                  </div>
                  <span className="text-[#ff00ff]">{data.contactInformation.email}</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="w-8 h-8 bg-[#00ffff]/20 rounded-lg flex items-center justify-center border border-[#00ffff]/30 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-shadow">
                    <span className="text-[#00ffff]">#</span>
                  </div>
                  <span className="text-[#00ffff]">{data.contactInformation.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="w-8 h-8 bg-[#ff00ff]/20 rounded-lg flex items-center justify-center border border-[#ff00ff]/30 group-hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-shadow">
                    <span className="text-[#ff00ff]">⌘</span>
                  </div>
                  <span className="text-[#ff00ff]">{data.contactInformation.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="relative bg-[#1a1f3c] p-8 rounded-lg border border-[#00ffff]/30 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            <p className="text-lg leading-relaxed text-[#00ffff]">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
            POWER UPS
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#1a1f3c] p-4 rounded-lg border border-[#ff00ff]/30 relative group overflow-hidden hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/10 to-[#00ffff]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 block text-center text-white group-hover:text-[#ff00ff] transition-colors">
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
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
            MISSION LOG
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-[#1a1f3c] p-6 rounded-lg border border-[#00ffff]/30 relative group hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow">
                <h3 className="text-2xl font-black text-[#00ffff] mb-2">{job.jobTitle}</h3>
                <div className="text-[#ff00ff] font-bold mb-1">{job.companyName}</div>
                <div className="text-sm text-white/60 mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-white/80 pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-[#ff00ff] 
                                before:shadow-[0_0_10px_rgba(255,0,255,0.5)]"
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
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
            SIDE QUESTS
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a1f3c] p-6 rounded-lg border border-[#ff00ff]/30 relative group hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow"
              >
                <h3 className="text-xl font-black text-[#ff00ff] mb-2">{project.name}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-[#00ffff]/10 text-[#00ffff] border border-[#00ffff]/30 rounded-full group-hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-shadow"
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
          <section className="bg-[#1a1f3c] p-6 rounded-lg border border-[#00ffff]/30 relative group hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow">
            <h2 className="text-2xl font-black text-[#00ffff] mb-6">
              TRAINING GROUNDS
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <div className="text-[#ff00ff]">{edu.institution}</div>
                  <div className="text-sm text-white/60">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-[#1a1f3c] p-6 rounded-lg border border-[#ff00ff]/30 relative group hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow">
            <h2 className="text-2xl font-black text-[#ff00ff] mb-6">
              ACHIEVEMENTS
            </h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-white/80 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-[#00ffff] 
                            before:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
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
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
            COMMUNITY QUESTS
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="bg-[#1a1f3c] p-6 rounded-lg border border-[#00ffff]/30 relative group hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow">
                <h3 className="text-2xl font-black text-[#00ffff] mb-2">{exp.role}</h3>
                <div className="text-[#ff00ff] font-bold mb-1">{exp.organization}</div>
                <p className="text-white/80 pl-6 relative before:content-[''] 
                             before:absolute before:left-0 before:top-[0.6em] 
                             before:w-2 before:h-2 before:bg-[#ff00ff] 
                             before:shadow-[0_0_10px_rgba(255,0,255,0.5)]">
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
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
            GUILDS & ALLIANCES
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="bg-[#1a1f3c] p-4 rounded-lg border border-[#ff00ff]/30 relative group overflow-hidden hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/10 to-[#00ffff]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 block text-center text-white group-hover:text-[#ff00ff] transition-colors">
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
          <section className="bg-[#1a1f3c] p-6 rounded-lg border border-[#00ffff]/30 relative group hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow">
            <h2 className="text-2xl font-black text-[#00ffff] mb-6">
              LANGUAGE MATRIX
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-white/80 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-[#ff00ff] 
                            before:shadow-[0_0_10px_rgba(255,0,255,0.5)]"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="bg-[#1a1f3c] p-6 rounded-lg border border-[#ff00ff]/30 relative group hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow">
            <h2 className="text-2xl font-black text-[#ff00ff] mb-6">
              DATA ARCHIVES
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-white/80 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-[#00ffff] 
                            before:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="bg-[#1a1f3c] p-6 rounded-lg border border-[#00ffff]/30 relative group hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow">
            <h2 className="text-2xl font-black text-[#00ffff] mb-6">
              HIGH SCORES
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-white/80 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-[#ff00ff] 
                            before:shadow-[0_0_10px_rgba(255,0,255,0.5)]"
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
        <div className="inline-block bg-[#1a1f3c] px-8 py-3 rounded-lg border border-[#ff00ff]/30 group hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow">
          <span className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent font-black tracking-wider">
            ⚡
          </span>
        </div>
      </footer>
    </div>
  );
} 