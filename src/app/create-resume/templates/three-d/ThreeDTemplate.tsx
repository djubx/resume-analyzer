'use client';

import { TemplateProps } from '../../types';

export default function ThreeDTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-lg print:shadow-none text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]" />
      <div className="absolute inset-0"
           style={{
             backgroundImage: `linear-gradient(transparent 0%, rgba(0,0,0,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 1px, transparent 1px)`,
             backgroundSize: '20px 20px',
             transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-100px)'
           }} />

      {/* Header */}
      <header className="relative mb-12">
        <div className="transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20
                        relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-indigo-500/20 before:via-purple-500/20 before:to-pink-500/20 before:blur-xl">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {data.contactInformation.fullName}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center rounded bg-white/5">@</div>
                <span>{data.contactInformation.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center rounded bg-white/5">#</div>
                <span>{data.contactInformation.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center rounded bg-white/5">⌘</div>
                <span>{data.contactInformation.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-12">
          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
              <p className="leading-relaxed">
                {data.professionalSummary}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20
                          transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300
                          relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-indigo-500/10 before:to-purple-500/10 before:blur-xl"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {data.workExperience.map((job, index) => (
              <div
                key={index}
                className="transform hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-indigo-300">{job.jobTitle}</h3>
                    <div className="text-purple-300">{job.companyName}</div>
                    <div className="text-pink-300 text-sm">
                      {job.dates} | {job.location}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="pl-6 relative before:content-[''] before:absolute before:left-0 
                                             before:top-[0.6em] before:w-2 before:h-2 before:bg-indigo-500/30 
                                             before:rounded-full">
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
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20
                              relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-indigo-500/10 before:to-purple-500/10 before:blur-xl">
                  <h3 className="text-xl font-bold text-indigo-300 mb-2">{project.name}</h3>
                  <p className="mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="transform hover:scale-[1.01] transition-transform duration-300">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-indigo-300">{edu.degree}</h3>
                    <div className="text-purple-300">{edu.institution}</div>
                    <div className="text-pink-300 text-sm">{edu.graduationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="transform hover:scale-[1.01] transition-transform duration-300">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="pl-6 relative before:content-[''] before:absolute before:left-0 
                              before:top-[0.6em] before:w-2 before:h-2 before:bg-purple-500/30 
                              before:rounded-full"
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
      <footer className="mt-12 text-center text-sm text-white/60">
        <div className="transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 inline-block">
            References available upon request
          </div>
        </div>
      </footer>
    </div>
  );
} 