import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-950 z-50 shadow-lg">
      <div className="flex justify-center gap-8 py-4 text-indigo-400 font-semibold text-sm sm:text-base">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-white"
            className="cursor-pointer transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
