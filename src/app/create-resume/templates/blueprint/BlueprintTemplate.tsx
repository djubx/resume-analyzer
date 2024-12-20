'use client';

import { TemplateProps } from '../../types';

export default function BlueprintTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-blue-900 p-8 shadow-lg print:shadow-none text-blue-100 relative overflow-hidden font-mono">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.15),transparent)]" />

      {/* Header */}
      <header className="relative mb-12 border-2 border-blue-500/30">
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400" />
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-blue-300 relative">
              <span className="absolute -left-4 -top-4 text-xs text-blue-400">DESIGNATION:</span>
              {data.contactInformation.fullName}
            </h1>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="relative">
                <span className="absolute -top-3 text-xs text-blue-400">CONTACT:</span>
                {data.contactInformation.email}
              </div>
              <div className="relative">
                <span className="absolute -top-3 text-xs text-blue-400">TEL:</span>
                {data.contactInformation.phoneNumber}
              </div>
              <div className="relative">
                <span className="absolute -top-3 text-xs text-blue-400">LOCATION:</span>
                {data.contactInformation.location}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="border-2 border-blue-500/30 p-6 relative">
            <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">PROFILE SPECIFICATIONS</span>
            <p className="text-blue-200 leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-blue-300 relative inline-block">
            <span className="absolute -top-3 text-xs text-blue-400">SECTION:</span>
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="border-2 border-blue-500/30 p-3 relative group hover:border-blue-400 transition-colors"
              >
                <span className="absolute -top-2 -right-2 text-xs text-blue-400 bg-blue-900 px-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="text-blue-200 group-hover:text-blue-300 transition-colors">
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
          <h2 className="text-xl font-bold mb-6 text-blue-300 relative inline-block">
            <span className="absolute -top-3 text-xs text-blue-400">SECTION:</span>
            Operational History
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="border-2 border-blue-500/30 p-6 relative">
                <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
                  REF: {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-blue-300">{job.jobTitle}</h3>
                  <div className="text-blue-400">{job.companyName}</div>
                  <div className="text-sm text-blue-500">
                    {job.dates} | {job.location}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-blue-200 pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:border-2 
                                before:border-blue-400 before:rounded-full"
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
          <h2 className="text-xl font-bold mb-6 text-blue-300 relative inline-block">
            <span className="absolute -top-3 text-xs text-blue-400">SECTION:</span>
            Project Schematics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-blue-500/30 p-6 relative group 
                          hover:border-blue-400 transition-colors"
              >
                <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
                  PROJECT: {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-blue-300 mb-2">{project.name}</h3>
                <p className="text-blue-200 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs border border-blue-500/30 
                                  text-blue-300 relative group-hover:border-blue-400 
                                  transition-colors"
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
          <section className="border-2 border-blue-500/30 p-6 relative">
            <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
              ACADEMIC RECORDS
            </span>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-2 top-2 text-xs text-blue-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-blue-300 font-bold pl-4">{edu.degree}</h3>
                  <div className="text-blue-400 pl-4">{edu.institution}</div>
                  <div className="text-blue-500 text-sm pl-4">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border-2 border-blue-500/30 p-6 relative">
            <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
              CERTIFICATIONS
            </span>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-blue-200 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:border-2 
                            before:border-blue-400 before:rounded-full"
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
          <h2 className="text-xl font-bold mb-6 text-blue-300 relative inline-block">
            <span className="absolute -top-3 text-xs text-blue-400">SECTION:</span>
            Community Initiatives
          </h2>
          <div className="space-y-6">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="border-2 border-blue-500/30 p-6 relative">
                <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
                  VOL: {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-blue-300 mb-2">{exp.role}</h3>
                <div className="text-blue-400 mb-1">{exp.organization}</div>
                <p className="text-blue-200">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-blue-300 relative inline-block">
            <span className="absolute -top-3 text-xs text-blue-400">SECTION:</span>
            Professional Affiliations
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="border-2 border-blue-500/30 p-3 relative group hover:border-blue-400 transition-colors"
              >
                <span className="absolute -top-2 -right-2 text-xs text-blue-400 bg-blue-900 px-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="text-blue-200 group-hover:text-blue-300 transition-colors">
                  {association}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="border-2 border-blue-500/30 p-6 relative">
            <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
              LANGUAGE PROFICIENCY
            </span>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-blue-200 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:border-2 
                            before:border-blue-400 before:rounded-full"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="border-2 border-blue-500/30 p-6 relative">
            <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
              PUBLISHED WORKS
            </span>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-blue-200 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:border-2 
                            before:border-blue-400 before:rounded-full"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="border-2 border-blue-500/30 p-6 relative">
            <span className="absolute -top-3 left-4 bg-blue-900 px-2 text-xs text-blue-400">
              ACHIEVEMENTS
            </span>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-blue-200 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:border-2 
                            before:border-blue-400 before:rounded-full"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12">
        <div className="h-px w-full bg-blue-500/30" />
      </footer>
    </div>
  );
} 