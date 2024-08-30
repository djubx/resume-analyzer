"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Cookies from 'js-cookie';

interface ChecklistItem {
  text: string;
  checked: boolean;
}

const generalChecklistItems: ChecklistItem[] = [
  { text: "Include contact information", checked: false },
  { text: "Write a compelling summary or objective", checked: false },
  { text: "List relevant work experience", checked: false },
  { text: "Highlight key skills", checked: false },
  { text: "Include education details", checked: false },
  { text: "Add any certifications or awards", checked: false },
  { text: "Proofread for errors", checked: false },
  { text: "Tailor resume to job description", checked: false },
  { text: "Use action verbs", checked: false },
  { text: "Quantify achievements where possible", checked: false },
];

export default function ResumeChecklist() {
  const [generalChecklist, setGeneralChecklist] = useState<ChecklistItem[]>(generalChecklistItems);
  const [personalizedFeedback, setPersonalizedFeedback] = useState<ChecklistItem[]>([]);

  useEffect(() => {
    const savedGeneralChecklist = Cookies.get('resumeChecklist');
    if (savedGeneralChecklist) {
      setGeneralChecklist(JSON.parse(savedGeneralChecklist));
    }

    const savedFeedback = Cookies.get('personalizedFeedback');
    if (savedFeedback) {
      setPersonalizedFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  const handleCheckboxChange = (index: number, isPersonalized: boolean) => {
    if (isPersonalized) {
      const newPersonalizedFeedback = [...personalizedFeedback];
      newPersonalizedFeedback[index].checked = !newPersonalizedFeedback[index].checked;
      setPersonalizedFeedback(newPersonalizedFeedback);
      Cookies.set('personalizedFeedback', JSON.stringify(newPersonalizedFeedback), { expires: 30 });
    } else {
      const newGeneralChecklist = [...generalChecklist];
      newGeneralChecklist[index].checked = !newGeneralChecklist[index].checked;
      setGeneralChecklist(newGeneralChecklist);
      Cookies.set('resumeChecklist', JSON.stringify(newGeneralChecklist), { expires: 30 });
    }
  };

  const renderChecklist = (items: ChecklistItem[], isPersonalized: boolean) => (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg"
        >
          <div className="flex items-center justify-center w-6 h-6 mr-4">
            <input
              type="checkbox"
              id={`${isPersonalized ? 'personalized' : 'general'}-item-${index}`}
              checked={item.checked}
              onChange={() => handleCheckboxChange(index, isPersonalized)}
              className="w-5 h-5"
            />
          </div>
          <label htmlFor={`${isPersonalized ? 'personalized' : 'general'}-item-${index}`} className="text-lg flex-grow">{item.text}</label>
        </motion.li>
      ))}
    </ul>
  );

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
          
          {personalizedFeedback.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4">Personalized Feedback on Your Resume</h2>
              {renderChecklist(personalizedFeedback, true)}
              <h3 className="text-xl font-semibold mt-4 mb-2">Let's fix them one by one!</h3>
            </motion.div>
          )}

          <h2 className="text-2xl font-semibold mb-4">General Resume Checklist</h2>
          {renderChecklist(generalChecklist, false)}
        </motion.div>
      </main>
    </div>
  );
}