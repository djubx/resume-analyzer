"use client";

// Vercel Speed Insights and Analytics
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFileAlt, FaChartLine, FaMagic } from "react-icons/fa";
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        >
          <Link
            href="/resume-analyzer"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-100 transition duration-300 shadow-lg"
          >
            Analyze Your Resume
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
        >
          {[
            { icon: <FaFileAlt className="text-4xl mb-2" />, title: "Smart Analysis" },
            { icon: <FaChartLine className="text-4xl mb-2" />, title: "Actionable Insights" },
            { icon: <FaMagic className="text-4xl mb-2" />, title: "AI-Powered Optimization" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-20 p-6 rounded-lg text-center"
            >
              {feature.icon}
              <h2 className="text-xl font-semibold">{feature.title}</h2>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
