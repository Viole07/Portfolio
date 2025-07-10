import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experienceData = [
    {
      title: 'Frontend Developer Intern',
      company: 'XYZ Company',
      period: 'Jan 2024 - Apr 2024',
      points: [
        'Developed responsive React components using Tailwind CSS.',
        'Integrated REST APIs and improved load performance.',
        'Collaborated with the UI/UX team to polish the interface.',
      ],
    },
    {
      title: 'Freelance Web Designer',
      company: 'Self-employed',
      period: '2023 - Present',
      points: [
        'Designed and delivered custom portfolios and landing pages.',
        'Used Figma and Webflow for mockups and hand-off.',
      ],
    },
  ];

  return (
    <section className=" text-white px-6 py-20">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-1 max-w-6xl mx-auto">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-indigo-400 
                       hover:shadow-[0_0_12px_2px_#6366f1] transition-all duration-300 transform hover:scale-[1.015]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            viewport={{ once: false, amount: 0.6  }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-1">{exp.title}</h3>
            <p className="text-sm text-indigo-400 mb-3">{exp.company} • {exp.period}</p>
            <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
