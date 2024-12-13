'use client';

import { TemplateProps } from '../../types';

export default function ComicBookTemplate({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-yellow-50 p-8 shadow-lg print:shadow-none text-slate-900 relative overflow-hidden">
      {/* Comic Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative mb-16 bg-red-600 -mx-8 -mt-8 px-8 pt-12 pb-8 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-black text-white mb-6 transform -rotate-2" style={{
            textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            {data.contactInformation.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="bg-yellow-400 px-4 py-2 rounded-lg transform rotate-2 shadow-md">
              <span className="font-bold">📧 {data.contactInformation.email}</span>
            </div>
            <div className="bg-yellow-400 px-4 py-2 rounded-lg transform -rotate-1 shadow-md">
              <span className="font-bold">📱 {data.contactInformation.phoneNumber}</span>
            </div>
            <div className="bg-yellow-400 px-4 py-2 rounded-lg transform rotate-1 shadow-md">
              <span className="font-bold">📍 {data.contactInformation.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {data.professionalSummary && (
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg relative border-4 border-black transform rotate-1">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 rounded-full border-4 border-black" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-600 rounded-full border-4 border-black" />
            <p className="text-xl leading-relaxed font-bold" style={{
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              {data.professionalSummary}
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-black text-center mb-8 transform -rotate-2" style={{
            textShadow: '2px 2px 0 #dc2626'
          }}>
            SUPER POWERS!
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-yellow-400 p-4 rounded-lg shadow-lg border-4 border-black transform hover:scale-105 transition-transform"
                style={{ transform: `rotate(${(index % 2 === 0 ? 2 : -2)}deg)` }}
              >
                <div className="font-bold text-lg text-center" style={{
                  fontFamily: 'Comic Sans MS, cursive'
                }}>
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-black text-center mb-8 transform rotate-2" style={{
            textShadow: '2px 2px 0 #dc2626'
          }}>
            ADVENTURE LOG
          </h2>
          <div className="space-y-8">
            {data.workExperience.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-4 border-black relative"
                style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1)}deg)` }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full border-4 border-black flex items-center justify-center transform rotate-12">
                  <span className="text-white font-bold">POW!</span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-red-600">{job.jobTitle}</h3>
                <div className="font-bold text-lg mb-1">{job.companyName}</div>
                <div className="text-gray-600 mb-4">{job.dates} • {job.location}</div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <span className="text-2xl">💥</span>
                      <span className="flex-1" style={{
                        fontFamily: 'Comic Sans MS, cursive'
                      }}>{resp}</span>
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
          <h2 className="text-3xl font-black text-center mb-8 transform -rotate-2" style={{
            textShadow: '2px 2px 0 #dc2626'
          }}>
            EPIC MISSIONS
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-4 border-black relative overflow-hidden"
                style={{ transform: `rotate(${(index % 2 === 0 ? 2 : -2)}deg)` }}
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center transform -rotate-12">
                  <span className="font-bold">BOOM!</span>
                </div>
                <h3 className="text-xl font-black mb-2 text-red-600">{project.name}</h3>
                <p className="mb-4" style={{
                  fontFamily: 'Comic Sans MS, cursive'
                }}>{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-400 px-3 py-1 rounded-full text-sm font-bold border-2 border-black transform -rotate-2"
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
      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="bg-white p-6 rounded-lg shadow-lg border-4 border-black transform rotate-2">
            <h2 className="text-2xl font-black mb-6" style={{
              textShadow: '2px 2px 0 #dc2626'
            }}>
              TRAINING GROUNDS
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-2 border-black p-4 rounded-lg bg-yellow-50 transform -rotate-2"
                >
                  <h3 className="font-black text-red-600">{edu.degree}</h3>
                  <div className="font-bold">{edu.institution}</div>
                  <div className="text-gray-600">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="bg-white p-6 rounded-lg shadow-lg border-4 border-black transform -rotate-2">
            <h2 className="text-2xl font-black mb-6" style={{
              textShadow: '2px 2px 0 #dc2626'
            }}>
              ACHIEVEMENT UNLOCKED!
            </h2>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2"
                >
                  <span className="text-2xl">🏆</span>
                  <span className="font-bold" style={{
                    fontFamily: 'Comic Sans MS, cursive'
                  }}>{cert}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="inline-block bg-red-600 px-8 py-3 rounded-lg shadow-lg border-4 border-black transform rotate-2">
          <span className="text-white font-black text-lg">
            TO BE CONTINUED...
          </span>
        </div>
      </footer>
    </div>
  );
} 