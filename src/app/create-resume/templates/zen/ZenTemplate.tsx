'use client';

import { TemplateProps } from '../../types';

export default function ZenTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-stone-50 p-8 shadow-lg print:shadow-none text-stone-800 relative overflow-hidden font-[Optima],serif">
      {/* Zen Circle Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      
      {/* Ink Brush Stroke Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928C84.112 23.722 89.438 25 100 25v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-[0.2em] mb-6 text-stone-800">
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-12 text-sm text-stone-600">
            <span>{data.contactInformation.email}</span>
            <span>•</span>
            <span>{data.contactInformation.phoneNumber}</span>
            <span>•</span>
            <span>{data.contactInformation.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed text-stone-600 text-center italic">
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-lg tracking-[0.3em] text-center mb-8 text-stone-800 uppercase">Expertise</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 max-w-2xl mx-auto">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="text-stone-600"
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
          <h2 className="text-lg tracking-[0.3em] text-center mb-8 text-stone-800 uppercase">Experience</h2>
          <div className="space-y-12 max-w-2xl mx-auto">
            {data.workExperience.map((job, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl text-stone-800 mb-1">{job.jobTitle}</h3>
                <div className="text-stone-600 mb-1">{job.companyName}</div>
                <div className="text-sm text-stone-500 mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-2 text-left">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-stone-600 pl-6 relative before:content-[''] 
                                before:absolute before:left-0 before:top-[0.6em] 
                                before:w-1 before:h-1 before:bg-stone-400 
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
          <h2 className="text-lg tracking-[0.3em] text-center mb-8 text-stone-800 uppercase">Projects</h2>
          <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
            {data.projects.map((project, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl text-stone-800 mb-2">{project.name}</h3>
                <p className="text-stone-600 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-stone-500"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-lg tracking-[0.3em] text-center mb-8 text-stone-800 uppercase">Education</h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-stone-800">{edu.degree}</h3>
                  <div className="text-stone-600">{edu.institution}</div>
                  <div className="text-sm text-stone-500">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-lg tracking-[0.3em] text-center mb-8 text-stone-800 uppercase">Certifications</h2>
            <div className="space-y-3">
              {data.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="text-stone-600 text-center"
                >
                  {cert}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="inline-block text-sm text-stone-500 tracking-wider">
          References available upon request
        </div>
      </footer>
    </div>
  );
} 