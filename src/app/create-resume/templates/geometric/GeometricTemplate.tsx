'use client';

import { TemplateProps } from '../../types';

export default function GeometricTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg print:shadow-none relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
             backgroundSize: '24px 24px'
           }} />

      {/* Header */}
      <header className="relative mb-12">
        <div className="absolute -left-8 -right-8 top-0 h-full bg-orange-50 -skew-y-2" />
        <div className="relative p-8">
          <h1 className="text-4xl font-bold text-orange-950 mb-4">
            {data.contactInformation.fullName}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-orange-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rotate-45" />
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rotate-45" />
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rotate-45" />
              <span>{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-orange-200" />
          <div className="pl-6">
            <p className="text-orange-950 leading-relaxed">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-orange-950 mb-6 flex items-center gap-3">
            <div className="w-4 h-4 bg-orange-500 rotate-45" />
            Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="relative p-4 bg-orange-50 group hover:bg-orange-100 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <span className="text-orange-800">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-orange-950 mb-6 flex items-center gap-3">
            <div className="w-4 h-4 bg-orange-500 rotate-45" />
            Experience
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-200 rotate-45" />
                <div className="pl-6">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-orange-950">{job.jobTitle}</h3>
                      <div className="text-orange-800">{job.companyName}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-orange-800">{job.dates}</div>
                      <div className="text-orange-600">{job.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-orange-800 pl-4 relative before:content-[''] 
                                             before:absolute before:left-0 before:top-[0.6em] 
                                             before:w-2 before:h-2 before:bg-orange-200 
                                             before:rotate-45">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-orange-950 mb-6 flex items-center gap-3">
            <div className="w-4 h-4 bg-orange-500 rotate-45" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 relative group hover:bg-orange-100 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-200 group-hover:bg-orange-300 transition-colors" />
                <h3 className="text-lg font-bold text-orange-950 mb-2">{project.name}</h3>
                <p className="text-orange-800 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm bg-white text-orange-800"
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
          <section className="relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rotate-45" />
            <div className="pl-6">
              <h2 className="text-2xl font-bold text-orange-950 mb-6">Education</h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-orange-950">{edu.degree}</h3>
                    <div className="text-orange-800">{edu.institution}</div>
                    <div className="text-orange-600">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rotate-45" />
            <div className="pl-6">
              <h2 className="text-2xl font-bold text-orange-950 mb-6">Certifications</h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-orange-800 pl-4 relative before:content-[''] 
                              before:absolute before:left-0 before:top-[0.6em] 
                              before:w-2 before:h-2 before:bg-orange-200 
                              before:rotate-45"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 text-center text-orange-600 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-200 rotate-45" />
        References available upon request
      </footer>
    </div>
  );
} 