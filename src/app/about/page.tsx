"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Resume Checkers is always dedicated to helping job seekers optimize their resumes using cutting-edge AI technology.
          </p>
          <p className="text-lg mt-4">
            <strong>CEO:</strong> Ranju Jha
          </p>
          <a
            href="https://www.linkedin.com/in/ranju-jha-a130a5319/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-300 underline mt-2 inline-block"
          >
            LinkedIn Profile
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
        >
          {[
            {
              title: "Our Mission",
              content: "To Empower job seekers with AI-driven insights for crafting perfect resumes.",
            },
            {
              title: "Our Vision",
              content: "To revolutionize the job application process through innovative technology.",
            },
            {
              title: "Our Team",
              content: "A diverse group of AI experts, HR professionals, and software engineers.",
            },
            {
              title: "Our Values",
              content: "Innovation, integrity, and commitment to user success.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-20 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}