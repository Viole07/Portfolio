import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experienceData = [
  {
    title: 'Full Stack Web Development Intern',
    company: 'EY-GDS & AICTE Virtual Internship',
    period: 'Jan 2025 – Mar 2025',
    points: [
      'Developed a full-stack recipe sharing app using the MERN stack.',
      'Implemented JWT-based auth, image uploads, and advanced filters.',
    ],
    link: 'https://drive.google.com/file/d/10PYhgP_RYneH-vop3Gvnery5pYUJ41qL/view?usp=sharing',
  },     
  {
    title: 'Blockchain Developer Intern',
    company: 'VOIS & AICTE Virtual Internship',
    period: 'Jan 2025 – Feb 2025',
    points: [
      'Built a decentralized land registry system using Solidity on Ethereum.',
      'Implemented ownership verification and event-based traceability.',
      'Gained hands-on experience with Remix IDE and smart contracts.',
    ],
    link : 'https://drive.google.com/file/d/1NrFlUCZdys_rv1KqbBKRiXbaIfkME9sZ/view?usp=sharing',
  },
  {
    title: 'Open Source Contributor',
    company: 'Hacktoberfest 2024',
    period: 'Oct 2024',
    points: [
      'Successfully completed Hacktoberfest 2024 and earned all 5 badges.',
      'Contributed to various GitHub repositories across web and open-source tools.',
    ],
    link: 'https://www.holopin.io/@viole07#badges',
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
            {exp.link && (
  <a
    href={exp.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-indigo-400 hover:text-indigo-200 underline text-sm"
  >
    View
  </a>
)}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
