"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2023-05-03', // Use the latest API version
});

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      _type: 'contact',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      submittedAt: new Date().toISOString(),
    };

    try {
      console.log('Submitting data:', contactData);
      const result = await client.create(contactData);
      console.log('Submission result:', result);
      setFormStatus("Thank you for your message. We'll get back to you soon!");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you. Get in touch with us!</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          onSubmit={handleSubmit}
          className="w-full max-w-lg"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows={4}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300 disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {formStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 ${formStatus.includes('error') ? 'text-red-300' : 'text-green-300'}`}
          >
            {formStatus}
          </motion.div>
        )}
      </main>
    </div>
  );
}