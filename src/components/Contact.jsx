import React from 'react'
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="min-h-screen  text-white px-6 py-20 flex flex-col justify-center items-center">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="w-full max-w-xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted! (This is just a demo)");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3  text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:shadow-[0_0_10px_2px_#6366f1] transition duration-300"

          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3  text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:shadow-[0_0_10px_2px_#6366f1] transition duration-300"

          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3  text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:shadow-[0_0_10px_2px_#6366f1] transition duration-300"

          required
        ></textarea>
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md 
hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 
hover:shadow-[0_0_12px_2px_#6366f1] transition-all duration-300"

        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
