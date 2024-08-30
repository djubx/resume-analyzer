"use client";

// Vercel Speed Insights and Analytics
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFileAlt, FaChartLine, FaClipboardCheck, FaClock } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SpeedInsights />
      <Analytics />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Resume Master</h1>
          <p className="text-xl">Analyze, Optimize, and Perfect Your Resume</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
        >
          {[
            { 
              icon: <FaFileAlt className="text-4xl mb-2" />, 
              title: "Resume Analyzer", 
              description: "Get detailed insights on your resume",
              link: "/resume-analyzer"
            },
            { 
              icon: <FaChartLine className="text-4xl mb-2" />, 
              title: "ATS Score", 
              description: "Check how well your resume performs with ATS",
              link: "/ats-score"
            },
            { 
              icon: <FaClipboardCheck className="text-4xl mb-2" />, 
              title: "Resume Checklist", 
              description: "Ensure your resume covers all the essentials",
              link: "/resume-checklist"
            },
            { 
              icon: <FaClock className="text-4xl mb-2" />, 
              title: "Coming Soon", 
              description: "More features on the way!",
              link: "#"
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-20 p-6 rounded-lg text-center flex flex-col items-center"
            >
              {feature.icon}
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className={`bg-white text-blue-600 font-bold py-2 px-4 rounded-full text-sm hover:bg-blue-100 transition duration-300 shadow-lg ${feature.title === "Coming Soon" ? "cursor-not-allowed opacity-50" : ""}`}
                onClick={e => feature.title === "Coming Soon" && e.preventDefault()}
              >
                {feature.title === "Coming Soon" ? "Stay Tuned" : "Get Started"}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
