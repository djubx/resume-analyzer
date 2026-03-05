'use client';

import { TemplateProps } from '../../types';

export default function BrutalistTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none font-mono relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)1px,transparent_1px),linear-gradient(rgba(0,0,0,0.05)1px,transparent_1px)] bg-[length:20px_20px]" />

      {/* Header */}
      <header className="relative mb-12 border-8 border-black p-6 bg-yellow-300">
        <div className="absolute -right-4 -top-4 w-8 h-8 bg-red-500" />
        <div className="absolute -left-4 -bottom-4 w-8 h-8 bg-blue-500" />
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-4 text-black">
          {data.contactInformation.fullName}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          <div className="bg-black text-white px-2 py-1">
            {data.contactInformation.email}
          </div>
          <div className="bg-black text-white px-2 py-1">
            {data.contactInformation.phoneNumber}
          </div>
          <div className="bg-black text-white px-2 py-1">
            {data.contactInformation.location}
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 relative">
          <div className="absolute -left-4 top-0 w-8 h-8 bg-red-500" />
          <div className="border-l-8 border-black pl-6">
            <p className="text-lg leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="border-4 border-black p-2 hover:bg-yellow-300 transition-colors"
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
          <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
            Experience
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="border-8 border-black p-6 relative">
                <div className="absolute -right-4 -top-4 w-8 h-8 bg-blue-500" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold uppercase">{job.jobTitle}</h3>
                  <div className="font-bold">{job.companyName}</div>
                  <div className="text-sm">
                    <span className="bg-black text-white px-2">{job.dates}</span>
                    {' '}
                    <span className="bg-black text-white px-2">{job.location}</span>
                  </div>
                </div>
                <ul className="list-none space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="pl-4 border-l-4 border-black">
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
          <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border-8 border-black p-6 relative hover:bg-yellow-300 transition-colors"
              >
                <div className="absolute -right-4 -top-4 w-8 h-8 bg-red-500" />
                <h3 className="text-xl font-bold uppercase mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-black text-white px-2 py-1 text-sm"
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
          <section className="border-8 border-black p-6 relative">
            <div className="absolute -left-4 -top-4 w-8 h-8 bg-blue-500" />
            <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-black pl-4">
                  <h3 className="font-bold uppercase">{edu.degree}</h3>
                  <div>{edu.institution}</div>
                  <div className="text-sm bg-black text-white inline-block px-2">
                    {edu.graduationDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border-8 border-black p-6 relative">
            <div className="absolute -right-4 -top-4 w-8 h-8 bg-red-500" />
            <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
              Certifications
            </h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="pl-4 border-l-4 border-black"
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
          <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
            Community Work
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="border-8 border-black p-6 relative">
                <div className="absolute -left-4 -top-4 w-8 h-8 bg-yellow-300" />
                <h3 className="text-xl font-bold uppercase mb-2">{exp.role}</h3>
                <div className="font-bold">{exp.organization}</div>
                <p className="mt-4 pl-4 border-l-4 border-black">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
            Professional Networks
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="border-4 border-black p-2 hover:bg-yellow-300 transition-colors"
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
          <section className="border-8 border-black p-6 relative">
            <div className="absolute -right-4 -top-4 w-8 h-8 bg-blue-500" />
            <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
              Languages
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="pl-4 border-l-4 border-black"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="border-8 border-black p-6 relative">
            <div className="absolute -left-4 -top-4 w-8 h-8 bg-red-500" />
            <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
              Publications
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="pl-4 border-l-4 border-black"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="border-8 border-black p-6 relative">
            <div className="absolute -right-4 -top-4 w-8 h-8 bg-yellow-300" />
            <h2 className="text-2xl font-bold uppercase mb-6 bg-black text-white inline-block px-4 py-2">
              Awards
            </h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="pl-4 border-l-4 border-black"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t-8 border-black pt-4 relative">
        <div className="absolute -right-4 -top-4 w-8 h-8 bg-yellow-300" />
        <div className="absolute -left-4 -top-4 w-8 h-8 bg-yellow-300" />
      </footer>
    </div>
  );
} 