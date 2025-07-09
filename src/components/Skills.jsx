import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiTypescript } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML', color: '#e34c26' },
  { icon: <FaCss3Alt />, name: 'CSS', color: '#264de4' },
  { icon: <FaJsSquare />, name: 'JavaScript', color: '#f0db4f' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
  { icon: <FaReact />, name: 'React', color: '#61dafb' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38bdf8' },
  { icon: <SiFramer />, name: 'Framer Motion', color: '#f652a0' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#3c873a' },
  { icon: <FaGitAlt />, name: 'Git', color: '#f1502f' },
  { icon: <FaFigma />, name: 'Figma', color: '#a259ff' },
];

export default function Skills() {
  return (
    <section className="min-h-screen text-white px-6 py-20">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
  <motion.div
  key={skill.name}
  className="w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center 
             p-4 rounded-lg bg-gray-800 text-indigo-400 
             shadow-md border border-gray-700 transition-all duration-300
             hover:scale-[1.05] hover:-translate-y-1"
  style={{
    transition: 'all 0.3s ease',
    boxShadow: `0 0 0px ${skill.color}`,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = `0 0 15px 3px ${skill.color}`;
    e.currentTarget.style.borderColor = skill.color;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = `0 0 0px ${skill.color}`;
    e.currentTarget.style.borderColor = '#374151';
  }}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.05 }}
  viewport={{ once: true }}
>
  <div className="text-4xl mb-1" style={{ color: skill.color }}>
    {skill.icon}
  </div>
  <p className="text-xs md:text-sm text-white text-center">{skill.name}</p>
</motion.div>
))}
      </div>
    </section>
  );
}
