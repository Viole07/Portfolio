import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MobileFab from './MobileFab';


const socialLinks = [
  { icon: <FaGithub size={22} />, link: 'https://github.com/yourgithub', label: 'GitHub' },
  { icon: <FaLinkedin size={22} />, link: 'https://linkedin.com/in/yourlinkedin', label: 'LinkedIn' },
  { icon: <FaEnvelope size={22} />, link: 'mailto:youremail@example.com', label: 'Email' },
];

export default function SideRail() {
  const containerRef = useRef(null);
  const [cursor, setCursor] = useState({ x: null, y: null });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getScale = (iconRef) => {
    if (!iconRef.current || cursor.x === null || cursor.y === null) return 1;

    const rect = iconRef.current.getBoundingClientRect();
    const iconCenterX = rect.left + rect.width / 2;
    const iconCenterY = rect.top + rect.height / 2;

    const dx = cursor.x - iconCenterX;
    const dy = cursor.y - iconCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDist = 120;
    const proximity = Math.max(0, 1 - distance / maxDist);
    const scale = 1 + proximity * 0.4; // up to 1.4x

    return scale;
  };

  return (
    <>
      {/* Desktop Side Dock */}
      <motion.div
  ref={containerRef}
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center space-y-6 text-gray-400"
>
        {socialLinks.map((item, i) => {
          const iconRef = useRef(null);
          const scale = getScale(iconRef);

          return (
            <div
              key={item.label}
              ref={iconRef}
              className="relative transition-transform duration-100 ease-out"
              style={{
                transform: `scale(${scale})`,
              }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="relative hover:text-white transition-colors duration-200"
              >
                <span className="absolute -inset-1 rounded-full bg-indigo-400 opacity-20 blur-md animate-ping z-0" />
                <span className="relative z-10">{item.icon}</span>
              </a>
            </div>
          );
        })}

        {/* Decorative line */}
        <div className="w-px h-20 bg-indigo-500 opacity-50 mt-3 rounded-full" />
      </motion.div>

      {/* Mobile Sticky Bottom Dock */}

      {/* <div className="fixed bottom-0 inset-x-0 z-50 bg-[#0f172a] border-t border-gray-800 p-3 flex justify-center space-x-10 text-gray-400 md:hidden backdrop-blur-md bg-opacity-80">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.link}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-200 relative"
          >
            <span className="absolute -inset-1 rounded-full bg-indigo-400 opacity-20 blur-md animate-ping z-0" />
            <span className="relative z-10">{item.icon}</span>
          </a>
        ))}
      </div> */}
      <MobileFab />
    </>
  );
}
