"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Cookies from 'js-cookie';

const checklistItems = [
  "Include contact information",
  "Write a compelling summary or objective",
  "List relevant work experience",
  "Highlight key skills",
  "Include education details",
  "Add any certifications or awards",
  "Proofread for errors",
  "Tailor resume to job description",
  "Use action verbs",
  "Quantify achievements where possible",
];

export default function ResumeChecklist() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  useEffect(() => {
    const savedChecklist = Cookies.get('resumeChecklist');
    if (savedChecklist) {
      setCheckedItems(JSON.parse(savedChecklist));
    } else {
      setCheckedItems(new Array(checklistItems.length).fill(false));
    }
  }, []);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    Cookies.set('resumeChecklist', JSON.stringify(newCheckedItems), { expires: 30 });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Resume Checklist</h1>
          <ul className="space-y-4">
            {checklistItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg"
              >
                <input
                  type="checkbox"
                  id={`item-${index}`}
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="mr-4 h-5 w-5"
                />
                <label htmlFor={`item-${index}`} className="text-lg">{item}</label>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>
    </div>
  );
}