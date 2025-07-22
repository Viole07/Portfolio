import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import AnimatedBackground from './components/AnimatedBackground';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Amaan Sayyed | MERN Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Amaan Sayyed — a passionate MERN Stack developer experienced in building full-stack web applications using React, Node.js, MongoDB, and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Amaan Sayyed, MERN developer, React portfolio, JavaScript developer, Node.js, MongoDB, Tailwind CSS, Full Stack Developer"
        />
        <meta name="author" content="Amaan Sayyed" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Amaan Sayyed | MERN Stack Developer" />
        <meta
          property="og:description"
          content="Check out Amaan's web development projects, skills, and experience in full-stack development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amaansayyed-portfolio.vercel.app/" />
        <meta
          property="og:image"
          content="https://amaansayyed-portfolio.vercel.app/og-preview.png"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amaan Sayyed | Portfolio" />
        <meta
          name="twitter:description"
          content="MERN Stack developer building sleek web apps with React, Node.js, and Tailwind."
        />
        <meta
          name="twitter:image"
          content="https://amaansayyed-portfolio.vercel.app/og-preview.png"
        />
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />

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

      <ScrollToTop />
    </div>
  );
}

export default App;
