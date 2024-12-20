'use client';

import { TemplateProps } from '../../types';

export default function MinimalistPlusTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-12 shadow-lg print:shadow-none font-sans">
      {/* Header */}
      <header className="mb-16">
        <div className="border-l-4 border-black pl-6">
          <h1 className="text-4xl font-light tracking-tight mb-4">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-medium">E</span>
              <span>{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">T</span>
              <span>{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">L</span>
              <span>{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-gray-700">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-6">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
            Professional Experience
          </h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div key={index} className="grid grid-cols-[1fr_3fr] gap-8">
                <div>
                  <div className="text-sm text-gray-600">{job.dates}</div>
                  <div className="text-sm text-gray-600">{job.location}</div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {job.jobTitle}
                  </h3>
                  <div className="text-gray-600 mb-4">{job.companyName}</div>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700 relative pl-5 before:content-['—'] before:absolute before:left-0">
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
        <section className="mb-16">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
            Selected Projects
          </h2>
          <div className="space-y-8">
            {data.projects.map((project, index) => (
              <div key={index} className="grid grid-cols-[1fr_3fr] gap-8">
                <div>
                  <div className="w-16 h-[1px] bg-gray-200" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-sm text-gray-600"
                        >
                          {tech}{idx !== project.technologies!.length - 1 ? ' •' : ''}
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
      <div className="grid grid-cols-[1fr_3fr] gap-8 mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="col-span-2">
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
              Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-8">
                  <div>
                    <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                    <div className="text-gray-600">{edu.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="col-span-2 mt-12">
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
              Certifications
            </h2>
            <div className="grid grid-cols-[1fr_3fr] gap-8">
              <div>
                <div className="w-16 h-[1px] bg-gray-200" />
              </div>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="text-gray-700"
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
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
            Community Service
          </h2>
          <div className="space-y-12">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="grid grid-cols-[1fr_3fr] gap-8">
                <div>
                  <div className="w-16 h-[1px] bg-gray-200" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-gray-600 mb-4">{exp.organization}</div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
            Professional Networks
          </h2>
          <div className="grid grid-cols-[1fr_3fr] gap-8">
            <div>
              <div className="w-16 h-[1px] bg-gray-200" />
            </div>
            <div className="flex flex-wrap gap-2">
              {data.professionalAssociations.map((association, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors"
                >
                  {association}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="space-y-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
              Languages
            </h2>
            <div className="grid grid-cols-[1fr_3fr] gap-8">
              <div>
                <div className="w-16 h-[1px] bg-gray-200" />
              </div>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="text-gray-700 relative pl-5 before:content-['—'] before:absolute before:left-0"
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
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
              Publications
            </h2>
            <div className="grid grid-cols-[1fr_3fr] gap-8">
              <div>
                <div className="w-16 h-[1px] bg-gray-200" />
              </div>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="text-gray-700 relative pl-5 before:content-['—'] before:absolute before:left-0"
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
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-900 mb-8">
              Honors & Awards
            </h2>
            <div className="grid grid-cols-[1fr_3fr] gap-8">
              <div>
                <div className="w-16 h-[1px] bg-gray-200" />
              </div>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="text-gray-700 relative pl-5 before:content-['—'] before:absolute before:left-0"
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
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="w-16 h-[1px] bg-gray-200 mx-auto" />
      </footer>
    </div>
  );
} 