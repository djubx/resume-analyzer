'use client';

import { TemplateProps } from '../../types';

export default function SafariTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-amber-50 p-8 shadow-lg print:shadow-none text-stone-800 relative overflow-hidden">
      {/* Safari Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0V0zm30 30v30h30V30H30zm0-30v30h30V0H30z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-stone-100 p-8 rounded-lg border-4 border-stone-800">
            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-600 rounded-full border-4 border-stone-800" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-600 rounded-full border-4 border-stone-800" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-amber-600 rounded-full border-4 border-stone-800" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-amber-600 rounded-full border-4 border-stone-800" />
            
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 relative inline-block">
                <span className="relative z-10">{data.contactInformation.fullName}</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-amber-400 -skew-x-12 opacity-50" />
              </h1>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center border-2 border-stone-800">
                    <span className="text-stone-100">✉</span>
                  </div>
                  <span>{data.contactInformation.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center border-2 border-stone-800">
                    <span className="text-stone-100">📱</span>
                  </div>
                  <span>{data.contactInformation.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center border-2 border-stone-800">
                    <span className="text-stone-100">📍</span>
                  </div>
                  <span>{data.contactInformation.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="relative bg-stone-100 p-8 rounded-lg border-4 border-stone-800">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
              <span className="text-stone-100 text-xl">🎯</span>
            </div>
            <p className="text-lg leading-relaxed pl-8">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 relative">
            <span className="relative z-10">Expedition Skills</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-2 bg-amber-400 -skew-x-12 opacity-50" />
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-stone-100 p-4 rounded-lg border-2 border-stone-800 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-20" />
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-xl">🌟</span>
                  <span>{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 relative">
            <span className="relative z-10">Adventure Log</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-2 bg-amber-400 -skew-x-12 opacity-50" />
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div key={index} className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative">
                <div className="absolute -right-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
                  <span className="text-stone-100 text-xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{job.jobTitle}</h3>
                <div className="text-amber-700 font-bold mb-1">{job.companyName}</div>
                <div className="text-sm text-stone-600 mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <span className="text-amber-600 mt-1">▹</span>
                      <span className="flex-1">{resp}</span>
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
          <h2 className="text-3xl font-bold text-center mb-8 relative">
            <span className="relative z-10">Expedition Highlights</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-2 bg-amber-400 -skew-x-12 opacity-50" />
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative group"
              >
                <div className="absolute -left-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
                  <span className="text-stone-100 text-xl">🎪</span>
                </div>
                <div className="pl-8">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-stone-600 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-amber-100 text-amber-800 border-2 border-amber-800 rounded-full"
                        >
                          {tech}
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
      <div className="grid grid-cols-2 gap-8 mb-16">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
              <span className="text-stone-100 text-xl">📚</span>
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                Base Camp Training
                <div className="absolute left-0 bottom-0 w-full h-2 bg-amber-400 -skew-x-12 opacity-50" />
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <div className="text-amber-700">{edu.institution}</div>
                    <div className="text-sm text-stone-600">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
              <span className="text-stone-100 text-xl">🏅</span>
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                Trail Badges
                <div className="absolute left-0 bottom-0 w-full h-2 bg-amber-400 -skew-x-12 opacity-50" />
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-amber-600">▹</span>
                    <span>{cert}</span>
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
          <h2 className="text-3xl font-bold text-center mb-8 relative">
            <span className="relative z-10">Community Expeditions</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-2 bg-amber-400 -skew-x-12 opacity-50" />
          </h2>
          <div className="space-y-8">
            {data.volunteerExperience.map((exp, index) => (
              <div key={index} className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative">
                <div className="absolute -right-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
                  <span className="text-stone-100 text-xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <div className="text-amber-700 font-bold mb-4">{exp.organization}</div>
                <p className="text-stone-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Associations */}
      {data.professionalAssociations?.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 relative">
            <span className="relative z-10">Safari Guilds</span>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-2 bg-amber-400 -skew-x-12 opacity-50" />
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.professionalAssociations.map((association, index) => (
              <div
                key={index}
                className="bg-stone-100 p-4 rounded-lg border-2 border-stone-800 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-20" />
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-xl">🏕️</span>
                  <span>{association}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Languages */}
        {data.additionalSections?.languages?.length > 0 && (
          <section className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
              <span className="text-stone-100 text-xl">🗣️</span>
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                Trail Languages
                <div className="absolute left-0 bottom-0 w-full h-2 bg-amber-400 -skew-x-12 opacity-50" />
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.languages.map((language, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-amber-600">▹</span>
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Publications */}
        {data.additionalSections?.publications?.length > 0 && (
          <section className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
              <span className="text-stone-100 text-xl">📖</span>
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                Field Notes
                <div className="absolute left-0 bottom-0 w-full h-2 bg-amber-400 -skew-x-12 opacity-50" />
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.publications.map((publication, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-amber-600">▹</span>
                    <span>{publication}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Awards */}
        {data.additionalSections?.awards?.length > 0 && (
          <section className="bg-stone-100 p-6 rounded-lg border-4 border-stone-800 relative">
            <div className="absolute -left-6 top-6 w-12 h-12 bg-amber-600 rounded-full border-4 border-stone-800 flex items-center justify-center">
              <span className="text-stone-100 text-xl">🏆</span>
            </div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                Safari Honors
                <div className="absolute left-0 bottom-0 w-full h-2 bg-amber-400 -skew-x-12 opacity-50" />
              </h2>
              <ul className="space-y-2">
                {data.additionalSections.awards.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-amber-600">▹</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="inline-block bg-stone-100 px-8 py-3 rounded-lg border-4 border-stone-800 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-600 rounded-full border-4 border-stone-800" />
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-600 rounded-full border-4 border-stone-800" />
          <div className="w-16 h-1 bg-amber-400 mx-auto" />
        </div>
      </footer>
    </div>
  );
} 