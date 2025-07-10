import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-2xl px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-between">
      {/* Left - Social Links */}
      <div className="flex items-center gap-4 text-indigo-300">
        <a
          href="https://github.com/Viole07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/amaan-sayyed-a34931280/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:amaanafsarsayyed@gmail.com"
          className="hover:text-white transition"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Right - Navigation Links */}
      <div className="flex gap-4 text-sm md:text-base text-indigo-300 font-medium">
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>Home</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>Skills</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Project</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}>Experience</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</button>
      </div>
    </nav>
  );
}
