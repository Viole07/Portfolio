import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-4 px-6 text-center border-t border-gray-800">
      <div className="flex justify-center items-center space-x-6 mb-2 text-lg">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-white transition"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. Built with 💻 React + Tailwind.</p>
    </footer>
  );
}
