'use client';

import { TemplateProps } from '../../types';

export default function NewspaperTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-stone-100 p-8 shadow-lg print:shadow-none font-serif relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
           }} />

      {/* Masthead */}
      <header className="mb-12 border-b-4 border-double border-black pb-4">
        <div className="text-center">
          <h1 className="text-6xl font-black uppercase tracking-tight mb-4">
            {data.contactInformation.fullName}
          </h1>
          <div className="text-sm uppercase tracking-widest mb-4">
            Professional Portfolio
          </div>
          <div className="flex justify-center items-center gap-4 text-sm">
            <span>{data.contactInformation.email}</span>
            <span>|</span>
            <span>{data.contactInformation.phoneNumber}</span>
            <span>|</span>
            <span>{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Contact Information */}
      <div className="text-center mb-12 border-b border-black pb-4">
        <div className="flex justify-center gap-6 text-sm uppercase">
          <div>Email: {data.contactInformation.email}</div>
          <div>Tel: {data.contactInformation.phoneNumber}</div>
          <div>Location: {data.contactInformation.location}</div>
        </div>
      </div>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 uppercase">Breaking News</h2>
          <div className="columns-2 gap-8">
            <p className="text-justify first-letter:text-5xl first-letter:font-bold 
                         first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
            Special Features
          </h2>
          <div className="columns-3 gap-8">
            {data.skills.map((skill, index) => (
              <div key={index} className="break-inside-avoid mb-4">
                <span className="font-bold">• {skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
            Career Chronicles
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <article key={index} className="break-inside-avoid">
                <h3 className="text-xl font-bold uppercase mb-2">{job.jobTitle}</h3>
                <div className="italic mb-2">{job.companyName}</div>
                <div className="text-sm mb-4">
                  <span className="uppercase">{job.dates}</span> | {job.location}
                </div>
                <div className="pl-4 border-l-2 border-black">
                  {job.responsibilities.map((resp, idx) => (
                    <p key={idx} className="mb-2 text-justify">
                      {resp}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
            Featured Stories
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <article key={index} className="break-inside-avoid">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-justify mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="text-sm italic">
                    Technologies: {project.technologies.join(', ')}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Education & Certifications */}
      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
              Academic Gazette
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <article key={index} className="break-inside-avoid">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="italic">{edu.institution}</div>
                  <div className="text-sm">{edu.graduationDate}</div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
              Achievements Bulletin
            </h2>
            <div className="space-y-2">
              {data.certifications.map((cert, index) => (
                <article key={index} className="break-inside-avoid">
                  <p className="text-justify">• {cert}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Volunteer Experience */}
      {data.volunteerExperience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
            Community Affairs
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <article key={index} className="break-inside-avoid">
                <h3 className="text-xl font-bold uppercase mb-2">{exp.role}</h3>
                <div className="italic mb-2">{exp.organization}</div>
                <div className="pl-4 border-l-2 border-black">
                  <p className="mb-2 text-justify">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
            Professional Networks
          </h2>
          <div className="columns-3 gap-8">
            {data.professionalAssociations.map((association, index) => (
              <div key={index} className="break-inside-avoid mb-4">
                <span className="font-bold">• {association}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
              Language Dispatch
            </h2>
            <div className="space-y-2">
              {data.additionalSections.languages.map((language, index) => (
                <article key={index} className="break-inside-avoid">
                  <p className="text-justify">• {language}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
              Published Works
            </h2>
            <div className="space-y-2">
              {data.additionalSections.publications.map((publication, index) => (
                <article key={index} className="break-inside-avoid">
                  <p className="text-justify">• {publication}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 uppercase border-b-2 border-black">
              Awards & Honors
            </h2>
            <div className="space-y-2">
              {data.additionalSections.awards.map((award, index) => (
                <article key={index} className="break-inside-avoid">
                  <p className="text-justify">• {award}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer - Removed hardcoded text */}
      <footer className="mt-12 pt-4 border-t-2 border-black text-center text-sm">
        <div className="text-xs italic">
          {data.contactInformation.fullName} | {data.contactInformation.email} | {data.contactInformation.phoneNumber}
        </div>
      </footer>
    </div>
  );
} 