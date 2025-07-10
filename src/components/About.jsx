import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center  text-white px-6 py-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-indigo-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <p className="mb-6">
          I'm a front-end developer passionate about crafting immersive user interfaces.
          With a love for animation and interaction, I turn designs into smooth, dynamic experiences.
        </p>
        <p>
          I'm skilled in React, Tailwind CSS, Framer Motion, and modern web technologies — always exploring what's next.
        </p>
      </motion.div>
    </section>
  );
}
