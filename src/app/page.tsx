"use client";

// Vercel Speed Insights and Analytics
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFileAlt, FaChartLine, FaClipboardCheck, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SpeedInsights />
      <Analytics />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white px-4 sm:px-6 lg:px-8">
        {/* Why a strong resume is important */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 py-8 w-full"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-lg">Craft Your Path to Success</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Your resume is more than just a document – it's your ticket to new opportunities. 
            A strong resume opens doors, showcases your value, and sets you apart in a competitive job market.
          </p>
        </motion.section>

        {/* Why sending resumes without review is a mistake */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-lg mb-16 w-full max-w-4xl shadow-xl backdrop-blur-sm"
        >
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaExclamationTriangle className="mr-2 text-yellow-300" />
            Don't Make This Fatal Mistake
          </h2>
          <p className="text-lg mb-4">
            Sending your resume to recruiters without a thorough review is like entering a 
            competition unprepared. You risk:
          </p>
          <ul className="list-disc list-inside mb-4">
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
              Missing out on dream opportunities
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
              Being overlooked by Applicant Tracking Systems (ATS)
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>
              Failing to highlight your true potential
            </motion.li>
          </ul>
        </motion.section>

        {/* Our solutions */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-center mb-12 w-full"
        >
          <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center text-shadow-md">
            <FaCheckCircle className="mr-2 text-green-300" />
            Our Powerful Resume Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: <FaFileAlt className="text-4xl mb-2" />, 
                title: "AI Resume Checker", 
                description: "Get detailed insights and suggestions to improve your resume",
                link: "/resume-analyzer"
              },
              { 
                icon: <FaChartLine className="text-4xl mb-2" />, 
                title: "ATS Score", 
                description: "Optimize your resume for Applicant Tracking Systems",
                link: "/ats-score"
              },
              { 
                icon: <FaClipboardCheck className="text-4xl mb-2" />, 
                title: "Resume Checklist", 
                description: "Ensure your resume covers all essential elements",
                link: "/resume-checklist"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                className="bg-white bg-opacity-20 p-6 sm:p-8 rounded-lg text-center flex flex-col items-center shadow-lg backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-blue-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="mb-4 text-sm">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full text-sm hover:bg-blue-100 transition duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-3xl font-semibold mb-4 text-shadow-md">Ready to Perfect Your Resume?</h2>
          <p className="text-xl mb-6">Don't leave your career to chance. Use our tools to create a resume that stands out.</p>
          <Link
            href="/resume-analyzer"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Resume Journey
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
