'use client';

import { TemplateProps } from '../../types';

export default function ElegantTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-12 shadow-lg print:shadow-none relative font-serif">
      {/* Decorative Border */}
      <div className="absolute inset-0 border-[16px] border-double border-gray-100 pointer-events-none" />

      {/* Header */}
      <header className="text-center mb-12 relative">
        <h1 className="text-5xl font-light tracking-wide text-gray-800 mb-4">
          {data.contactInformation.fullName}
        </h1>
        <div className="flex justify-center items-center space-x-6 text-gray-600 text-sm">
          <span>{data.contactInformation.email}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>{data.contactInformation.phoneNumber}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>{data.contactInformation.location}</span>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gray-200 mt-6" />
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed italic">
            {data.professionalSummary}
          </p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-6 text-center tracking-wide">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="text-gray-600 relative after:content-['•'] after:mx-3 after:text-gray-300 last:after:content-none"
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
          <h2 className="text-2xl font-light text-gray-800 mb-8 text-center tracking-wide">
            Professional Experience
          </h2>
          <div className="space-y-10">
            {data.workExperience.map((job, index) => (
              <div key={index} className="grid grid-cols-[1fr_2fr] gap-8">
                <div className="text-right">
                  <div className="text-gray-600 font-medium">{job.dates}</div>
                  <div className="text-gray-500">{job.location}</div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-1">{job.jobTitle}</h3>
                  <div className="text-gray-600 mb-4 italic">{job.companyName}</div>
                  <ul className="list-none space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-600 relative pl-6 before:content-['—'] before:absolute before:left-0">
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
          <h2 className="text-2xl font-light text-gray-800 mb-8 text-center tracking-wide">
            Notable Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {data.projects.map((project, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap justify-center gap-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-gray-500 text-sm italic">
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
      <div className="grid grid-cols-2 gap-12">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center tracking-wide">
              Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
                  <div className="text-gray-600 italic">{edu.institution}</div>
                  <div className="text-gray-500 text-sm">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center tracking-wide">
              Certifications
            </h2>
            <ul className="space-y-3 text-center">
              {data.certifications.map((cert, index) => (
                <li key={index} className="text-gray-600">
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
          <h2 className="text-2xl font-light text-gray-800 mb-8 text-center tracking-wide">
            Community Engagement
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">{exp.role}</h3>
                <div className="text-gray-600 italic mb-2">{exp.organization}</div>
                <p className="text-gray-600 max-w-2xl mx-auto">
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
          <h2 className="text-2xl font-light text-gray-800 mb-6 text-center tracking-wide">
            Professional Affiliations
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.professionalAssociations.map((association, index) => (
              <span
                key={index}
                className="text-gray-600 relative after:content-['•'] after:mx-3 after:text-gray-300 last:after:content-none"
              >
                {association}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-12 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center tracking-wide">
              Languages
            </h2>
            <ul className="space-y-3 text-center">
              {data.additionalSections.languages.map((language, index) => (
                <li key={index} className="text-gray-600">
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center tracking-wide">
              Publications
            </h2>
            <ul className="space-y-3 text-center">
              {data.additionalSections.publications.map((publication, index) => (
                <li key={index} className="text-gray-600 italic">
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-gray-800 mb-6 text-center tracking-wide">
              Honors & Awards
            </h2>
            <ul className="space-y-3 text-center">
              {data.additionalSections.awards.map((award, index) => (
                <li key={index} className="text-gray-600">
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer Ornament */}
      <div className="mt-12 flex justify-center">
        <div className="w-24 h-px bg-gray-200" />
      </div>
    </div>
  );
} 