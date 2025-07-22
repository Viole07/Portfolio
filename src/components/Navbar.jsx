import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-2xl px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
      <div className="flex items-center justify-between">
        
        {/* Left - Logo & Socials */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-8 h-8 rounded-full object-contain" />
          <div className="hidden sm:flex gap-3 text-indigo-300">
            <a href="https://github.com/Viole07" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/amaan-sayyed-a34931280" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:amaanafsarsayyed@gmail.com" className="hover:text-white">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Right - Nav Links (desktop) */}
        <div className="hidden sm:flex gap-4 text-sm sm:text-base text-indigo-300 font-medium">
          <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>Home</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>Skills</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Project</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}>Experience</button>
        <button style={{cursor: 'pointer'}} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden text-indigo-300">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-3 flex flex-col items-center gap-4 text-indigo-300 font-medium">
          {menuOpen && (
  <div className="sm:hidden mt-3 flex flex-col items-center gap-4 text-indigo-300 font-medium">
    <button
      style={{ cursor: 'pointer' }}
      onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Home
    </button>
    <button
      style={{ cursor: 'pointer' }}
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
    >
      About
    </button>
    <button
      style={{ cursor: 'pointer' }}
      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Skills
    </button>
    <button
      style={{ cursor: 'pointer' }}
      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Projects
    </button>
    <button
      style={{ cursor: 'pointer' }}
      onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Experience
    </button>
    <button
      style={{ cursor: 'pointer' }}
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Contact
    </button>
  </div>
)}

          {/* Mobile-only social icons */}
          <div className="flex gap-3 mt-2">
            <a href="https://github.com/Viole07" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/amaan-sayyed-a34931280" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:amaanafsarsayyed@gmail.com" className="hover:text-white">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
