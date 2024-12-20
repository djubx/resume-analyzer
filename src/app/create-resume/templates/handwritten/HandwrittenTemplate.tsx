'use client';

import { TemplateProps } from '../../types';

export default function HandwrittenTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-amber-50 p-8 shadow-lg print:shadow-none font-['Segoe_Print'] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.05)1px,transparent_1px)] bg-[length:100%_4rem] pointer-events-none" />

      {/* Header */}
      <header className="relative mb-12">
        <div className="relative">
          <h1 className="text-5xl text-blue-900 mb-4 transform -rotate-2">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap gap-6 text-blue-800 transform rotate-1">
            <div className="flex items-center gap-2">
              <span>✉</span>
              <span className="underline decoration-wavy decoration-blue-400">
                {data.contactInformation.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>☎</span>
              <span className="underline decoration-wavy decoration-blue-400">
                {data.contactInformation.phoneNumber}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>⌂</span>
              <span className="underline decoration-wavy decoration-blue-400">
                {data.contactInformation.location}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 relative transform -rotate-1">
          <div className="bg-white p-6 shadow-md">
            <h2 className="text-2xl text-blue-900 mb-4">About Me</h2>
            <p className="text-blue-800 leading-relaxed">
              {data.professionalSummary}
            </p>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12 transform rotate-1">
          <h2 className="text-2xl text-blue-900 mb-4">Things I'm Good At</h2>
          <div className="flex flex-wrap gap-4">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white shadow-md text-blue-800 transform hover:-rotate-2 transition-transform"
              >
                {skill}
                <div className="absolute -bottom-1 -right-1 w-full h-full bg-blue-100 -z-10" />
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl text-blue-900 mb-6 transform -rotate-2">My Journey</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-white p-6 shadow-md relative transform rotate-1">
                <div className="mb-4">
                  <h3 className="text-xl text-blue-900">{job.jobTitle}</h3>
                  <div className="text-blue-800">{job.companyName}</div>
                  <div className="text-blue-600 flex gap-2 items-center">
                    <span>📅</span> {job.dates} <span>📍</span> {job.location}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-blue-800 pl-6 relative before:content-['✓'] 
                                           before:absolute before:left-0 before:text-blue-500">
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl text-blue-900 mb-6 transform rotate-1">Cool Stuff I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md relative transform hover:-rotate-1 transition-transform"
              >
                <h3 className="text-xl text-blue-900 mb-2">{project.name}</h3>
                <p className="text-blue-800 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-sm transform -rotate-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="bg-white p-6 shadow-md relative transform -rotate-1">
            <h2 className="text-2xl text-blue-900 mb-6">Learning Journey</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="transform hover:rotate-1 transition-transform">
                  <h3 className="text-blue-900 font-bold">{edu.degree}</h3>
                  <div className="text-blue-800">{edu.institution}</div>
                  <div className="text-blue-600">📅 {edu.graduationDate}</div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-white p-6 shadow-md relative transform rotate-1">
            <h2 className="text-2xl text-blue-900 mb-6">Achievements</h2>
            <ul className="space-y-2">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-blue-800 pl-6 relative before:content-['🎯'] 
                            before:absolute before:left-0"
                >
                  {cert}
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
          </section>
        )}
      </div>

      {/* Volunteer Experience */}
      {data.volunteerExperience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl text-blue-900 mb-6 transform rotate-1">Making a Difference</h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="bg-white p-6 shadow-md relative transform -rotate-1">
                <div className="mb-4">
                  <h3 className="text-xl text-blue-900">{exp.role}</h3>
                  <div className="text-blue-800">{exp.organization}</div>
                </div>
                <p className="text-blue-800">{exp.description}</p>
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12 transform -rotate-1">
          <h2 className="text-2xl text-blue-900 mb-6">My Networks</h2>
          <div className="flex flex-wrap gap-4">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white shadow-md text-blue-800 transform hover:rotate-1 transition-transform"
              >
                {association}
                <div className="absolute -bottom-1 -right-1 w-full h-full bg-blue-100 -z-10" />
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="bg-white p-6 shadow-md relative transform rotate-1">
            <h2 className="text-2xl text-blue-900 mb-6">Languages I Speak</h2>
            <ul className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-blue-800 pl-6 relative before:content-['🗣️'] 
                            before:absolute before:left-0"
                >
                  {language}
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="bg-white p-6 shadow-md relative transform -rotate-1">
            <h2 className="text-2xl text-blue-900 mb-6">My Writings</h2>
            <ul className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-blue-800 pl-6 relative before:content-['📚'] 
                            before:absolute before:left-0"
                >
                  {publication}
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="bg-white p-6 shadow-md relative transform rotate-1">
            <h2 className="text-2xl text-blue-900 mb-6">Gold Stars</h2>
            <ul className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-blue-800 pl-6 relative before:content-['🌟'] 
                            before:absolute before:left-0"
                >
                  {award}
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center transform rotate-1">
        <div className="inline-block bg-white px-6 py-3 shadow-md relative">
          <div className="w-16 h-px bg-blue-200 mx-auto" />
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-blue-100 -z-10" />
        </div>
      </footer>
    </div>
  );
} 