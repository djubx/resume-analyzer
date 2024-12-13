'use client';

import { TemplateProps } from '../../types';

export default function SteampunkTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#f4e4bc] p-8 shadow-lg print:shadow-none text-[#2a1810] relative overflow-hidden">
      {/* Steampunk Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 5c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25S43.807 5 30 5zm0 5c11.046 0 20 8.954 20 20s-8.954 20-20 20S10 41.046 10 30s8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#2a1810] p-8 rounded-lg border-8 border-[#b87d3b]">
            {/* Decorative Corner Gears */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform -rotate-45">
              <div className="w-12 h-12 border-4 border-[#2a1810] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#2a1810] rounded-full" />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
              <div className="w-12 h-12 border-4 border-[#2a1810] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#2a1810] rounded-full" />
              </div>
            </div>
            
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-[#b87d3b] font-serif relative">
                {data.contactInformation.fullName}
              </h1>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#b87d3b] rounded-full flex items-center justify-center">
                    <span className="text-[#2a1810]">✉</span>
                  </div>
                  <span className="text-[#b87d3b]">{data.contactInformation.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#b87d3b] rounded-full flex items-center justify-center">
                    <span className="text-[#2a1810]">☎</span>
                  </div>
                  <span className="text-[#b87d3b]">{data.contactInformation.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#b87d3b] rounded-full flex items-center justify-center">
                    <span className="text-[#2a1810]">⌘</span>
                  </div>
                  <span className="text-[#b87d3b]">{data.contactInformation.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="relative bg-[#2a1810] p-8 rounded-lg border-4 border-[#b87d3b]">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
              <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
            </div>
            <p className="text-lg leading-relaxed pl-8 text-[#b87d3b] font-serif">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2a1810] font-serif relative">
            Mechanical Proficiencies
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#2a1810] p-4 rounded-lg border-4 border-[#b87d3b] relative group overflow-hidden"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#b87d3b] rounded-full border-2 border-[#2a1810] transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <span className="text-[#b87d3b] block text-center font-serif">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2a1810] font-serif">
            Professional Engagements
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative">
                <div className="absolute -right-8 top-8 w-16 h-16 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
                  <div className="w-12 h-12 border-4 border-[#2a1810] rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#2a1810] rounded-full" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#b87d3b] font-serif mb-2">{job.jobTitle}</h3>
                <div className="text-[#b87d3b] font-bold mb-1">{job.companyName}</div>
                <div className="text-sm text-[#b87d3b]/80 mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-[#b87d3b] pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-[#b87d3b] 
                                before:transform before:rotate-45"
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
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2a1810] font-serif">
            Engineering Ventures
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative group"
              >
                <div className="absolute -left-6 top-6 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                  <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
                </div>
                <div className="pl-8">
                  <h3 className="text-xl font-bold text-[#b87d3b] font-serif mb-2">{project.name}</h3>
                  <p className="text-[#b87d3b]/80 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-[#b87d3b]/20 text-[#b87d3b] border border-[#b87d3b] rounded-full"
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
          <section className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
              <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold text-[#b87d3b] font-serif mb-6">
                Academic Pursuits
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-[#b87d3b]">{edu.degree}</h3>
                    <div className="text-[#b87d3b]/80">{edu.institution}</div>
                    <div className="text-sm text-[#b87d3b]/60">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
              <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold text-[#b87d3b] font-serif mb-6">
                Technical Patents
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-[#b87d3b] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#b87d3b] 
                              before:transform before:rotate-45"
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
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2a1810] font-serif">
            Philanthropic Endeavors
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative"
              >
                <div className="absolute -left-6 top-6 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
                  <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
                </div>
                <div className="pl-8">
                  <h3 className="text-xl font-bold text-[#b87d3b] font-serif mb-2">{exp.role}</h3>
                  <div className="text-[#b87d3b] font-bold mb-2">{exp.organization}</div>
                  <p className="text-[#b87d3b]/80">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2a1810] font-serif">
            Inventors' Guilds
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="bg-[#2a1810] p-4 rounded-lg border-4 border-[#b87d3b] relative group overflow-hidden"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#b87d3b] rounded-full border-2 border-[#2a1810] transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <span className="text-[#b87d3b] block text-center font-serif">{association}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
              <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold text-[#b87d3b] font-serif mb-6">
                Linguistic Apparatus
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-[#b87d3b] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#b87d3b] 
                              before:transform before:rotate-45"
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
          <section className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
              <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold text-[#b87d3b] font-serif mb-6">
                Scientific Journals
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-[#b87d3b] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#b87d3b] 
                              before:transform before:rotate-45"
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
          <section className="bg-[#2a1810] p-6 rounded-lg border-4 border-[#b87d3b] relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] flex items-center justify-center transform rotate-45">
              <div className="w-8 h-8 border-4 border-[#2a1810] rounded-full" />
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold text-[#b87d3b] font-serif mb-6">
                Distinguished Honors
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-[#b87d3b] pl-6 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-[#b87d3b] 
                              before:transform before:rotate-45"
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
        <div className="inline-block bg-[#2a1810] px-8 py-3 rounded-lg border-4 border-[#b87d3b] relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] transform rotate-45" />
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#b87d3b] rounded-full border-4 border-[#2a1810] transform rotate-45" />
          <div className="w-16 h-1 bg-[#b87d3b] mx-auto" />
        </div>
      </footer>
    </div>
  );
} 