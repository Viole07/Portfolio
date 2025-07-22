import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import AnimatedBackground from './components/AnimatedBackground';
import Experience from './components/Experience';
// import SideRail from './components/SideRail';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // optional if you use it
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      {/* <SideRail /> */}
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#101421] animate-gradient z-[-10]" />

      <AnimatedBackground />

      <div className="relative z-10">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
        {/* <section id="footer"><Footer /></section> */}
      </div>

      {/* Optional scroll-to-top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
