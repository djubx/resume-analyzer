'use client';

import { TemplateProps } from '../../types';

export default function TechWaveTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-slate-900 p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#60A5FA,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_300px,#818CF8,transparent)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23475569' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="group flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <span className="text-blue-400">@</span>
              </div>
              <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                {data.contactInformation.email}
              </span>
            </div>
            <div className="group flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                <span className="text-indigo-400">#</span>
              </div>
              <span className="text-slate-300 group-hover:text-indigo-400 transition-colors">
                {data.contactInformation.phoneNumber}
              </span>
            </div>
            <div className="group flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <span className="text-blue-400">⌘</span>
              </div>
              <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                {data.contactInformation.location}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/10">
            <p className="text-lg leading-relaxed text-slate-300 text-center">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Technical Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                          border border-blue-500/10 rounded-lg hover:border-blue-500/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-indigo-500/0 
                              opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <span className="relative text-slate-300 group-hover:text-blue-400 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Professional Journey
          </h2>
          <div className="space-y-12">
            {data.workExperience.map((job, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                          border border-blue-500/10"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-400">{job.jobTitle}</h3>
                  <div className="text-indigo-400">{job.companyName}</div>
                  <div className="text-sm text-slate-400">
                    {job.dates} • {job.location}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-slate-300 pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-2 before:h-2 before:bg-blue-500/30 
                                before:rounded-full"
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Project Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                          border border-blue-500/10 hover:border-blue-500/30 transition-all group"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-3">{project.name}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm text-indigo-400 bg-indigo-500/10 rounded-md"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/10">
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-blue-400">{edu.degree}</h3>
                  <div className="text-indigo-400">{edu.institution}</div>
                  <div className="text-slate-400">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/10">
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Certifications
            </h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-500/30 
                            before:rounded-full text-center"
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
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Community Impact
          </h2>
          <div className="space-y-12">
            {data.volunteerExperience.map((exp, index) => (
              <div
                key={index}
                className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                          border border-blue-500/10"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                  <div className="text-indigo-400">{exp.organization}</div>
                </div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Professional Networks
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                          border border-blue-500/10 rounded-lg hover:border-blue-500/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-indigo-500/0 
                              opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <span className="relative text-slate-300 group-hover:text-blue-400 transition-colors">
                  {association}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/10">
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Languages
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.languages.map((language, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-500/30 
                            before:rounded-full text-center"
                >
                  {language}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/10">
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Publications
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.publications.map((publication, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-500/30 
                            before:rounded-full text-center"
                >
                  {publication}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/10">
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Awards
            </h2>
            <ul className="space-y-3">
              {data.additionalSections.awards.map((award, index) => (
                <li
                  key={index}
                  className="text-slate-300 pl-6 relative before:content-[''] 
                            before:absolute before:left-0 before:top-[0.6em] 
                            before:w-2 before:h-2 before:bg-blue-500/30 
                            before:rounded-full text-center"
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
        <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 
                        border border-blue-500/10">
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto" />
        </div>
      </footer>
    </div>
  );
} 