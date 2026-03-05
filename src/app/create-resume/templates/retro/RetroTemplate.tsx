'use client';

import { TemplateProps } from '../../types';

export default function RetroTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-amber-50 p-8 shadow-lg print:shadow-none relative font-mono">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
             backgroundSize: '10px 10px'
           }} />

      {/* Header */}
      <header className="relative mb-12 border-4 border-black p-6">
        <div className="absolute inset-0 bg-amber-100 -m-1" style={{ zIndex: -1 }} />
        <h1 className="text-4xl font-bold text-center mb-4 uppercase tracking-widest">
          {data.contactInformation.fullName}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-black text-amber-50 px-2">EMAIL</span>
            <span>{data.contactInformation.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black text-amber-50 px-2">TEL</span>
            <span>{data.contactInformation.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black text-amber-50 px-2">LOC</span>
            <span>{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="border-2 border-black p-6 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 bg-amber-50 px-4">
              <h2 className="text-lg font-bold uppercase tracking-widest">About</h2>
            </div>
            <p className="text-sm leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-widest text-center 
                        border-b-4 border-black pb-2">Capabilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="border-2 border-black p-2 text-center text-sm relative overflow-hidden
                          hover:bg-black hover:text-amber-50 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-widest text-center 
                        border-b-4 border-black pb-2">Work Record</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="border-2 border-black p-4">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-bold uppercase">{job.jobTitle}</h3>
                    <div className="text-sm font-bold">{job.companyName}</div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-bold">{job.dates}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <ul className="list-none space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm pl-4 relative before:content-['>'] before:absolute before:left-0">
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
          <h2 className="text-lg font-bold mb-6 uppercase tracking-widest text-center 
                        border-b-4 border-black pb-2">Notable Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-black p-4 relative"
              >
                <h3 className="text-base font-bold uppercase mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-black text-amber-50"
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
          <section className="border-2 border-black p-4">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-center">Studies</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="border-t-2 border-black pt-4 first:border-t-0 first:pt-0">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="text-sm">{edu.institution}</div>
                  <div className="text-sm font-bold">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border-2 border-black p-4">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-center">Credentials</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['>'] before:absolute before:left-0"
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
          <h2 className="text-lg font-bold mb-6 uppercase tracking-widest text-center 
                        border-b-4 border-black pb-2">Community Service</h2>
          <div className="space-y-6">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="border-2 border-black p-4"
              >
                <h3 className="text-base font-bold uppercase mb-2">{exp.role}</h3>
                <div className="text-sm font-bold mb-2">{exp.organization}</div>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-widest text-center 
                        border-b-4 border-black pb-2">Professional Networks</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="border-2 border-black p-2 text-center text-sm relative overflow-hidden
                          hover:bg-black hover:text-amber-50 transition-colors duration-300"
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
          <section className="border-2 border-black p-4">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-center">Languages</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['>'] before:absolute before:left-0"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="border-2 border-black p-4">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-center">Publications</h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['>'] before:absolute before:left-0"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="border-2 border-black p-4">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-center">Achievements</h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-sm pl-4 relative before:content-['>'] before:absolute before:left-0"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer Design */}
      <div className="mt-12 border-t-4 border-black pt-4">
        <div className="w-16 h-1 bg-black mx-auto" />
      </div>
    </div>
  );
} 