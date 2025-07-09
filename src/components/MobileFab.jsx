import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    link: 'https://github.com/yourgithub',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin size={20} />,
    link: 'https://linkedin.com/in/yourlinkedin',
    label: 'LinkedIn',
  },
  {
    icon: <FaEnvelope size={20} />,
    link: 'mailto:youremail@example.com',
    label: 'Email',
  },
];

export default function MobileFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <div className="relative">
        {/* FAB Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg hover:bg-indigo-600 transition"
        >
          <motion.span
            className="text-2xl"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            +
          </motion.span>
        </motion.button>

        {/* Icons on tap */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-16 right-1 flex flex-col items-center space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1e293b] text-indigo-400 hover:text-white hover:bg-indigo-500 border border-gray-700 shadow-md transition-all duration-200"
                  whileTap={{ scale: 0.9 }}
                  title={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
