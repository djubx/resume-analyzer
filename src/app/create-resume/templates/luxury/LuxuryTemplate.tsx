'use client';

import { TemplateProps } from '../../types';

export default function LuxuryTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-black p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4A000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="border-2 border-yellow-700 p-12 bg-gradient-to-b from-yellow-900/20 to-transparent">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-yellow-600 -translate-x-4 -translate-y-4" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-yellow-600 translate-x-4 translate-y-4" />
          <h1 className="text-5xl font-serif tracking-wide mb-6 text-center bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex justify-center gap-12 text-sm text-yellow-200">
            <div>{data.contactInformation.email}</div>
            <div>{data.contactInformation.phoneNumber}</div>
            <div>{data.contactInformation.location}</div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="border border-yellow-900/50 p-8 bg-gradient-to-b from-yellow-900/20 to-transparent">
            <p className="text-lg leading-relaxed text-yellow-100 text-center font-serif">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-yellow-600">Expertise</h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="border border-yellow-900/50 p-4 text-center text-yellow-200
                          hover:bg-yellow-900/20 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8 text-yellow-600">Professional Experience</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="border border-yellow-900/50 p-8 bg-gradient-to-b from-yellow-900/20 to-transparent">
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-serif text-yellow-500">{job.jobTitle}</h3>
                  <div className="text-yellow-200">{job.companyName}</div>
                  <div className="text-yellow-700 text-sm">
                    {job.dates} | {job.location}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-yellow-100 pl-6 relative before:content-['•'] 
                                           before:absolute before:left-0 before:text-yellow-600">
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
          <h2 className="text-2xl font-serif text-center mb-8 text-yellow-600">Notable Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border border-yellow-900/50 p-8 bg-gradient-to-b from-yellow-900/20 to-transparent"
              >
                <h3 className="text-xl font-serif text-yellow-500 mb-3">{project.name}</h3>
                <p className="text-yellow-100 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-yellow-200 border border-yellow-900/50 px-2 py-1"
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
          <section className="border border-yellow-900/50 p-8 bg-gradient-to-b from-yellow-900/20 to-transparent">
            <h2 className="text-2xl font-serif text-center mb-8 text-yellow-600">Education</h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-serif text-yellow-500">{edu.degree}</h3>
                  <div className="text-yellow-200">{edu.institution}</div>
                  <div className="text-yellow-700">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="border border-yellow-900/50 p-8 bg-gradient-to-b from-yellow-900/20 to-transparent">
            <h2 className="text-2xl font-serif text-center mb-8 text-yellow-600">Certifications</h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-yellow-100 pl-6 relative before:content-['•'] 
                            before:absolute before:left-0 before:text-yellow-600"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="inline-block border border-yellow-900/50 px-8 py-3 text-yellow-200 font-serif">
          References Available Upon Request
        </div>
      </footer>
    </div>
  );
} 