'use client';

import { TemplateProps } from '../../types';

export default function BauhausTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none text-slate-900 relative overflow-hidden">
      {/* Bauhaus Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0V0zm30 30v30h30V30H30zm0-30v30h30V0H30z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Decorative Shapes */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500 rounded-full" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 transform rotate-45" />
            
            <div className="relative bg-white p-8 border-8 border-black">
              <div className="text-center">
                <h1 className="text-5xl font-bold tracking-tight mb-6 relative">
                  {data.contactInformation.fullName}
                </h1>
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center">
                      <span className="text-black">@</span>
                    </div>
                    <span>{data.contactInformation.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-500 flex items-center justify-center">
                      <span className="text-white">#</span>
                    </div>
                    <span>{data.contactInformation.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
                      <span className="text-white">⌘</span>
                    </div>
                    <span>{data.contactInformation.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-16 h-2 bg-yellow-400" />
            <div className="pl-16">
              <p className="text-lg leading-relaxed border-l-8 border-black pl-8">
                {data.professionalSummary}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500 transform -rotate-45" />
            <span>Core Competencies</span>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="relative border-4 border-black p-4 group overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-blue-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="relative z-10 block">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full" />
            <span>Professional Experience</span>
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative border-4 border-black p-6">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500" />
                <h3 className="text-2xl font-bold mb-2">{job.jobTitle}</h3>
                <div className="font-bold mb-1">{job.companyName}</div>
                <div className="text-sm text-slate-600 mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-blue-500"
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
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 transform rotate-45" />
            <span>Notable Projects</span>
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="relative border-4 border-black p-6"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 transform rotate-45" />
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-black text-white"
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
          <section className="relative border-4 border-black p-6">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full" />
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-4 border-blue-500">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div>{edu.institution}</div>
                  <div className="text-sm text-slate-600">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="relative border-4 border-black p-6">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400" />
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-red-500"
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
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500 transform rotate-[135deg]" />
            <span>Community Engagement</span>
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative border-4 border-black p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full" />
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <div className="font-bold mb-1">{exp.organization}</div>
                <p className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-400">
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
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-400" />
            <span>Professional Networks</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="relative border-4 border-black p-4 group overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-red-500 transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="relative z-10 block">{association}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="relative border-4 border-black p-6">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500" />
            <h2 className="text-2xl font-bold mb-6">Languages</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-400"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="relative border-4 border-black p-6">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full" />
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-500"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="relative border-4 border-black p-6">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 transform rotate-45" />
            <h2 className="text-2xl font-bold mb-6">Awards</h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-red-500"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16">
        <div className="border-t-8 border-black pt-4 flex items-center justify-center gap-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <div className="w-4 h-4 bg-red-500 transform rotate-45" />
        </div>
      </footer>
    </div>
  );
} 