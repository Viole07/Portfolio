import React from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import AnimatedBackground from './components/AnimatedBackground';
import Experience from './components/Experience';
import SideRail from './components/SideRail';
import Footer from './components/Footer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SideRail />
      <AnimatedBackground />

      <div className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section id="hero" className="snap-start h-screen"><Hero /></section>
        <section id="about" className="snap-start h-screen"><About /></section>
        <section id="skills" className="snap-start min-h-screen"><Skills /></section>
        <section id="projects" className="snap-start min-h-screen"><Projects /></section>
        <section id="experience" className="snap-start min-h-screen"><Experience /></section>
        <section id="contact" className="snap-start h-screen"><Contact /></section>
        {/* <section id="footer" className="snap-start h-screen"><Footer /></section> */}
      </div>
    </div>
  );
}



export default App;
