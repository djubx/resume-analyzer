'use client';

import { TemplateProps } from '../../types';

export default function PixelArtTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#1a1b26] p-8 shadow-lg print:shadow-none text-[#a9b1d6] relative overflow-hidden">
      {/* Header */}
      <header className="relative mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#7aa2f7]">
              {data.contactInformation.fullName}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#bb9af7]">{'>'}</span>
                <span>{data.contactInformation.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#bb9af7]">{'>'}</span>
                <span>{data.contactInformation.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#bb9af7]">{'>'}</span>
                <span>{data.contactInformation.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
              <span className="text-[#bb9af7]">{'>'}</span> CHARACTER STATS
            </h2>
            <div className="bg-[#24283b] p-6 rounded-lg border border-[#414868]">
              <p className="leading-relaxed">
                {data.professionalSummary}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
            <span className="text-[#bb9af7]">{'>'}</span> ABILITIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#24283b] p-4 rounded-lg border border-[#414868] relative group"
              >
                <div className="absolute inset-0 bg-[#7aa2f7]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
            <span className="text-[#bb9af7]">{'>'}</span> QUEST LOG
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-[#24283b] p-6 rounded-lg border border-[#414868]">
                <h3 className="text-lg font-bold text-[#7aa2f7] mb-2">{job.jobTitle}</h3>
                <div className="text-[#bb9af7] mb-1">{job.companyName}</div>
                <div className="text-sm text-[#565f89] mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-[#bb9af7]"
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
            <span className="text-[#bb9af7]">{'>'}</span> SIDE QUESTS
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#24283b] p-6 rounded-lg border border-[#414868]"
              >
                <h3 className="text-lg font-bold text-[#7aa2f7] mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm bg-[#1a1b26] text-[#bb9af7] rounded"
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
          <section>
            <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
              <span className="text-[#bb9af7]">{'>'}</span> TRAINING
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="bg-[#24283b] p-4 rounded-lg border border-[#414868]">
                  <h3 className="font-bold text-[#7aa2f7]">{edu.degree}</h3>
                  <div className="text-[#bb9af7]">{edu.institution}</div>
                  <div className="text-sm text-[#565f89]">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
              <span className="text-[#bb9af7]">{'>'}</span> ACHIEVEMENTS
            </h2>
            <div className="space-y-2">
              {data.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#24283b] p-4 rounded-lg border border-[#414868]"
                >
                  {cert}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Volunteer Experience */}
      {data.volunteerExperience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
            <span className="text-[#bb9af7]">{'>'}</span> SIDE MISSIONS
          </h2>
          <div className="space-y-6">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-[#24283b] p-6 rounded-lg border border-[#414868]"
              >
                <h3 className="text-lg font-bold text-[#7aa2f7] mb-2">{exp.role}</h3>
                <div className="text-[#bb9af7] mb-1">{exp.organization}</div>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
            <span className="text-[#bb9af7]">{'>'}</span> GUILDS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="bg-[#24283b] p-4 rounded-lg border border-[#414868]"
              >
                {association}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
              <span className="text-[#bb9af7]">{'>'}</span> LANGUAGE SKILLS
            </h2>
            <div className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-[#24283b] p-4 rounded-lg border border-[#414868]"
                >
                  {language}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
              <span className="text-[#bb9af7]">{'>'}</span> SCROLLS
            </h2>
            <div className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <div
                  key={index}
                  className="bg-[#24283b] p-4 rounded-lg border border-[#414868] text-sm"
                >
                  {publication}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-6 text-[#7aa2f7] flex items-center gap-2">
              <span className="text-[#bb9af7]">{'>'}</span> TROPHIES
            </h2>
            <div className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-[#24283b] p-4 rounded-lg border border-[#414868]"
                >
                  {award}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <div className="inline-block">
          <div className="flex items-center gap-2">
            <span className="text-[#bb9af7]">{'>'}</span>
            <span className="text-[#565f89]">PRESS START TO CONTINUE</span>
            <span className="text-[#bb9af7]">{'<'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 