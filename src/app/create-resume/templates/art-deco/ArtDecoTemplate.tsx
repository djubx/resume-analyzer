'use client';

import { TemplateProps } from '../../types';

export default function ArtDecoTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#f8f3e6] p-8 shadow-lg print:shadow-none text-gray-900 relative overflow-hidden">
      {/* Art Deco Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM37.656 0l7.07 7.07-1.414 1.415L36 1.172V0h1.657zM22.344 0L15.274 7.07l1.414 1.415L24 1.172V0h-1.657zM32.657 0l7.07 7.07-1.414 1.415L30 0h2.657zm-5.657 0L20.343 7.07l1.414 1.415L30 0h-3zM27 0L16.97 10.03l1.415 1.414L27 2.828V0zm-2.344 0L15.343 9.313l1.414 1.415L27 0h-2.344zm-2.83 0L15.343 6.485l1.414 1.414L27 0h-5.174zm-5.656 0L10.97 5.03 12.384 6.444 27 0H16.17zm-5.657 0L5.657 5.657 7.07 7.07 27 0H10.514zM27 0L15.343 11.657 16.757 13.07 27 2.828V0zm-2.344 0L15.343 9.313l1.414 1.415L27 0h-2.344zm-2.83 0L15.343 6.485l1.414 1.414L27 0h-5.174zm-5.656 0L10.97 5.03 12.384 6.444 27 0H16.17zm-5.657 0L5.657 5.657 7.07 7.07 27 0H10.514zM27 0L15.343 11.657 16.757 13.07 27 2.828V0z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            <h1 className="text-5xl font-bold tracking-widest text-yellow-800 uppercase">
              {data.contactInformation.fullName}
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-800 transform rotate-45" />
              <span className="text-yellow-900">{data.contactInformation.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-800 transform rotate-45" />
              <span className="text-yellow-900">{data.contactInformation.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-800 transform rotate-45" />
              <span className="text-yellow-900">{data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="relative border-2 border-yellow-800 p-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
            <p className="text-lg leading-relaxed text-yellow-900 text-center">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Expertise</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="relative border border-yellow-800 p-3 text-center"
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-800" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-800" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-800" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-800" />
                <span className="text-yellow-900">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Experience</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
          </div>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="relative border-2 border-yellow-800 p-8">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-yellow-800">{job.jobTitle}</h3>
                  <div className="text-yellow-900">{job.companyName}</div>
                  <div className="text-sm text-yellow-700">{job.dates} • {job.location}</div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-yellow-900 pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-yellow-800 
                                before:transform before:rotate-45"
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
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Projects</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="relative border-2 border-yellow-800 p-6"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
                <h3 className="text-xl font-bold text-yellow-800 mb-2">{project.name}</h3>
                <p className="text-yellow-900 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm border border-yellow-800 text-yellow-900"
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
      <div className="grid grid-cols-2 gap-8 mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="relative border-2 border-yellow-800 p-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
              <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Education</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            </div>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-yellow-800">{edu.degree}</h3>
                  <div className="text-yellow-900">{edu.institution}</div>
                  <div className="text-yellow-700">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="relative border-2 border-yellow-800 p-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
              <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Awards</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            </div>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-yellow-900 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-800 
                            before:transform before:rotate-45 text-center"
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
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Community Service</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
          </div>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="relative border-2 border-yellow-800 p-8">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-yellow-800">{exp.role}</h3>
                  <div className="text-yellow-900">{exp.organization}</div>
                </div>
                <p className="text-yellow-900">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Professional Networks</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="relative border border-yellow-800 p-3 text-center"
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-800" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-800" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-800" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-800" />
                <span className="text-yellow-900">{association}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="relative border-2 border-yellow-800 p-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
              <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Languages</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            </div>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-yellow-900 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-800 
                            before:transform before:rotate-45 text-center"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="relative border-2 border-yellow-800 p-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
              <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Publications</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            </div>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-yellow-900 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-800 
                            before:transform before:rotate-45 text-center"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="relative border-2 border-yellow-800 p-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-800" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-800" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-800" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-800" />
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
              <h2 className="text-2xl font-bold tracking-widest text-yellow-800 uppercase">Honors</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            </div>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-yellow-900 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-yellow-800 
                            before:transform before:rotate-45 text-center"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="inline-block">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-800 to-transparent" />
          </div>
        </div>
      </footer>
    </div>
  );
} 