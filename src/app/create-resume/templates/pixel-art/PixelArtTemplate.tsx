'use client';

import { TemplateProps } from '../../types';

export default function PixelArtTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#1a1b26] p-8 shadow-lg print:shadow-none text-white relative overflow-hidden font-mono">
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(66,71,105,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(66,71,105,0.1)_1px,transparent_1px)] bg-[size:8px_8px]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#7aa2f7]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#7aa2f7]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#7aa2f7]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#7aa2f7]" />

      {/* Header */}
      <header className="relative mb-12">
        <div className="text-center">
          <div className="inline-block relative px-8 py-4 mb-6">
            <div className="absolute inset-0 bg-[#7aa2f7] opacity-20" />
            <div className="absolute inset-0 border-2 border-[#7aa2f7]" />
            <h1 className="text-4xl font-bold text-[#7aa2f7] relative">
              {data.contactInformation.fullName}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="group flex items-center gap-2">
              <span className="text-[#bb9af7]">[@]</span>
              <span className="text-[#a9b1d6] group-hover:text-[#7aa2f7] transition-colors">
                {data.contactInformation.email}
              </span>
            </div>
            <div className="group flex items-center gap-2">
              <span className="text-[#bb9af7]">[#]</span>
              <span className="text-[#a9b1d6] group-hover:text-[#7aa2f7] transition-colors">
                {data.contactInformation.phoneNumber}
              </span>
            </div>
            <div className="group flex items-center gap-2">
              <span className="text-[#bb9af7]">[&]</span>
              <span className="text-[#a9b1d6] group-hover:text-[#7aa2f7] transition-colors">
                {data.contactInformation.location}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="border-2 border-[#7aa2f7] p-6 relative">
            <div className="absolute -top-3 left-4 bg-[#1a1b26] px-2 text-[#7aa2f7] text-sm">
              PLAYER.INFO
            </div>
            <p className="text-[#a9b1d6] leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
            <span className="text-[#bb9af7]">[>]</span> ABILITIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="border-2 border-[#7aa2f7] p-3 relative group hover:bg-[#7aa2f7]/10 transition-colors"
              >
                <span className="absolute -top-2 -right-2 text-xs bg-[#1a1b26] px-1 text-[#bb9af7]">
                  Lv.{String(index + 1).padStart(2, '0')}
                </span>
                <div className="text-[#a9b1d6] group-hover:text-[#7aa2f7] transition-colors">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
            <span className="text-[#bb9af7]">[>]</span> QUEST LOG
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="border-2 border-[#7aa2f7] p-6 relative">
                <span className="absolute -top-3 left-4 bg-[#1a1b26] px-2 text-[#bb9af7] text-sm">
                  QUEST_{String(index + 1).padStart(2, '0')}
                </span>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#7aa2f7]">{job.jobTitle}</h3>
                  <div className="text-[#bb9af7]">{job.companyName}</div>
                  <div className="text-sm text-[#565f89]">
                    {job.dates} | {job.location}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-[#a9b1d6] pl-6 relative before:content-['>'] 
                                before:absolute before:left-0 before:text-[#bb9af7]"
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
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
            <span className="text-[#bb9af7]">[>]</span> SIDE QUESTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-[#7aa2f7] p-6 relative group 
                          hover:bg-[#7aa2f7]/10 transition-colors"
              >
                <span className="absolute -top-3 left-4 bg-[#1a1b26] px-2 text-[#bb9af7] text-sm">
                  QUEST_{String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-[#7aa2f7] mb-2">{project.name}</h3>
                <p className="text-[#a9b1d6] mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm border border-[#bb9af7] text-[#bb9af7]"
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
          <section className="border-2 border-[#7aa2f7] p-6 relative">
            <span className="absolute -top-3 left-4 bg-[#1a1b26] px-2 text-[#bb9af7] text-sm">
              TRAINING
            </span>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-2 top-2 text-xs text-[#bb9af7]">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="text-[#7aa2f7] font-bold pl-4">{edu.degree}</h3>
                  <div className="text-[#bb9af7] pl-4">{edu.institution}</div>
                  <div className="text-[#565f89] text-sm pl-4">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border-2 border-[#7aa2f7] p-6 relative">
            <span className="absolute -top-3 left-4 bg-[#1a1b26] px-2 text-[#bb9af7] text-sm">
              ACHIEVEMENTS
            </span>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-[#a9b1d6] pl-6 relative before:content-['>'] 
                            before:absolute before:left-0 before:text-[#bb9af7]"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <div className="inline-block border-2 border-[#7aa2f7] px-6 py-2 relative">
          <span className="absolute -top-3 left-4 bg-[#1a1b26] px-2 text-[#bb9af7] text-sm">
            GAME SAVE
          </span>
          <span className="text-[#a9b1d6]">References available upon request</span>
        </div>
      </footer>
    </div>
  );
} 