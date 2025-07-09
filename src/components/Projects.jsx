import React from 'react'
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A fully responsive portfolio using React, Tailwind, and animations.',
    link: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'A product showcase with smooth transitions and a modern layout.',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Markdown-powered blog system with light/dark toggle and CMS support.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen text-white px-6 py-20 lg:pl-24">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
         <motion.div
  key={index}
  className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-indigo-400 
             hover:shadow-[0_0_12px_2px_#6366f1] transition-all duration-300 transform hover:scale-[1.03]"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-2">{project.title}</h3>
  <p className="text-sm md:text-base text-gray-300 mb-4">{project.description}</p>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-indigo-400 underline hover:text-indigo-200 transition"
  >
    View Project →
  </a>
</motion.div>

        ))}
      </div>
    </section>
  );
}
