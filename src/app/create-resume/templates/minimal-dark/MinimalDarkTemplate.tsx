'use client';

import { TemplateProps } from '../../types';

export default function MinimalDarkTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-gray-900 p-8 shadow-lg print:shadow-none text-gray-300">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-light text-white mb-4">
          {data.contactInformation.fullName}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
          <a href={`mailto:${data.contactInformation.email}`} className="hover:text-white transition-colors">
            {data.contactInformation.email}
          </a>
          <span>{data.contactInformation.phoneNumber}</span>
          <span>{data.contactInformation.location}</span>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <p className="text-lg font-light leading-relaxed">
            {data.professionalSummary}
          </p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-white text-sm uppercase tracking-wider mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-sm rounded hover:bg-gray-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-white text-sm uppercase tracking-wider mb-6">Experience</h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-medium">{job.jobTitle}</h3>
                    <div className="text-gray-400">{job.companyName}</div>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>{job.dates}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <ul className="list-none space-y-2 text-sm">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-400">
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
          <h2 className="text-white text-sm uppercase tracking-wider mb-6">Projects</h2>
          <div className="space-y-6">
            {data.projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-white font-medium mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
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
          <section>
            <h2 className="text-white text-sm uppercase tracking-wider mb-6">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-white font-medium">{edu.degree}</h3>
                  <div className="text-gray-400">{edu.institution}</div>
                  <div className="text-sm text-gray-500">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-white text-sm uppercase tracking-wider mb-6">Certifications</h2>
            <ul className="space-y-2 text-sm">
              {data.certifications.map((cert, index) => (
                <li key={index} className="text-gray-400">
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        Portfolio and references available upon request
      </footer>
    </div>
  );
} 