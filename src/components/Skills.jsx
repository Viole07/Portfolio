import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiPostman, SiVercel, SiRender, SiRemix, SiMysql } from 'react-icons/si';
import { DiPython, DiJava } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import { BsShieldLock } from 'react-icons/bs';
import { MdApi } from 'react-icons/md';

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: [
      { icon: <FaReact />, name: 'React.js', color: '#61dafb' },
      { icon: <FaHtml5 />, name: 'HTML5', color: '#e34c26' },
      { icon: <FaCss3Alt />, name: 'CSS3', color: '#264de4' },
      { icon: <FaJsSquare />, name: 'JavaScript', color: '#f0db4f' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38bdf8' },
      { icon: <SiBootstrap />, name: 'Bootstrap', color: '#7952B3' },
      { icon: <SiFramer />, name: 'Framer Motion', color: '#f652a0' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { icon: <FaNodeJs />, name: 'Node.js', color: '#3c873a' },
      { icon: <SiExpress />, name: 'Express.js', color: '#ffffff' },
      { icon: <SiMongodb />, name: 'MongoDB (Mongoose)', color: '#47A248' },
      { icon: <BsShieldLock />, name: 'JWT Auth', color: '#e5e5e5' },
      { icon: <MdApi />, name: 'REST APIs', color: '#f97316' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { icon: <DiPython />, name: 'Python', color: '#3776AB' },
      { icon: <FaJsSquare />, name: 'JavaScript', color: '#f0db4f' },
      { icon: <SiCplusplus />, name: 'C++', color: '#004482' },
      { icon: <DiJava />, name: 'Java', color: '#f89820' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { icon: <FaGitAlt />, name: 'Git & GitHub', color: '#f1502f' },
      { icon: <SiPostman />, name: 'Postman', color: '#ff6c37' },
      { icon: <SiVercel />, name: 'Vercel', color: '#ffffff' },
      { icon: <SiRender />, name: 'Render', color: '#46E3B7' },
      // { icon: <SiRemix />, name: 'Remix IDE', color: '#00c2ff' },
    ],
  },
  {
    title: 'Database & Querying',
    skills: [
      { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
      { icon: <SiMysql />, name: 'SQL', color: '#f29111' }, // Use a different icon if preferred
    ],
  },
  {
    title: 'Open Source & Contributions',
    skills: [
      { icon: <FaGitAlt />, name: 'Hacktoberfest 2024', color: '#ff69b4' },
      { icon: <FaGitAlt />, name: 'GitHub PRs', color: '#6e5494' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="text-white px-6 py-20">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="flex flex-col items-center gap-16">
        {skillGroups.map((group) => (
          <div key={group.title} className="w-full max-w-6xl">
            <h3 className="text-xl font-semibold text-indigo-300 mb-6 text-left md:text-center">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
              {group.skills.map((skill, index) => (
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
                  viewport={{ once: false, amount: 0.6 }}
                >
                  <div className="text-4xl mb-1" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <p className="text-xs md:text-sm text-white text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}