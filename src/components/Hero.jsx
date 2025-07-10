import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import TextCycler from './TextCycler';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1752064850375.json';

export default function Hero() {
  return (
    <section className="h-screen flex items-center px-6 sm:px-12 md:px-20 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">
        
        {/* Left: Text */}
        <div className="md:w-[60%] text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-indigo-400">Amaan Sayyed</span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-indigo-300 font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm a Full Stack Engineer
          </motion.h2>

          <div className="mb-4">
            <TextCycler />
          </div>

          <motion.p
            className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            MERN stack developer blending clean UI with practical backend logic, actively building and learning
          </motion.p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="https://drive.google.com/file/d/16kC7T8AXYDcWrb-OVUUncG6u5iKYCrRW/view?usp=sharing"
              target = '_blank'
              download
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded transition"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-indigo-500 text-indigo-400 hover:text-white hover:bg-indigo-500 font-semibold py-2 px-6 rounded transition"
            >
              Contact Me
            </a>
          </div>

          <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="mt-8 flex flex-col items-center justify-center text-indigo-400"
>
  <span className="text-sm mb-1">Scroll Down</span>
  <FaArrowDown className="text-xl" />
</motion.div>

        </div>

        {/* Right: Lottie */}
        <div className="md:w-[40%] w-64 sm:w-72 md:w-80">
          <motion.div
  initial={{ y: 0 }}
  whileInView={{ y: [-10, 10, -10] }}
  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
>
  <Lottie animationData={animationData} loop={true} />
</motion.div>
        </div>
      </div>
    </section>
  );
}
