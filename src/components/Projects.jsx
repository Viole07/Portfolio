import React, { useState } from 'react';
import { motion } from 'framer-motion';
import chatrixImage from '../assets/images/chatrix.png';
import chatWithNotes from '../assets/images/chatwithnotes.png';
import loan from '../assets/images/loan.png';
import imageGen from '../assets/images/imagegen.png';


const projects = [
  {
    title: 'Chatrix',
    description: `Chatrix is a modern chat app built with the MERN stack, offering real-time messaging through Socket.io. It features a clean TailwindCSS interface, secure JWT login, online user tracking, and global state via Zustand. It’s fast, responsive, and fully deployable—perfect for learning or real-world use.`,
    image: chatrixImage,
    github: 'https://github.com/Viole07/Chatrix',
    live: 'https://chatrix-z4bg.onrender.com/',
  },
  {
    title: 'Chat with Notes',
    description: `A smart and intuitive chat-based AI assistant that enables you to effortlessly interact with the content from your uploaded notes (PDF or text files). Built with React and Node.js, powered by OpenAI's GPT-3.5-turbo.`,
    image: chatWithNotes,
    github: 'https://github.com/Viole07/Chat-with-Notes',
    live: 'https://chat-with-notes-iota.vercel.app/',
  },
  {
    title: 'Loan Approval Prediction System',
    description: 'A smart and intuitive machine learning-based web app that predicts whether a loan will be approved based on applicant details. Built with Flask, styled with Bootstrap, and powered by a trained scikit-learn model.',
    image: loan,
    github: 'https://github.com/Viole07/Loan-Approval-Prediction-System',
    live: 'https://loan-approval-prediction-system-r39o.onrender.com/',
  },
  {
    title: 'AI Image Generation with RTX Acceleration',
    description: 'This project lets you generate high-quality AI images using your own GPU (e.g., RTX 3050) via a local Stable Diffusion backend powered by FastAPI + Diffusers, and a beautiful React + Vite frontend.',
    image: imageGen,
    github: 'https://github.com/Viole07/AI-Image-Generation',
    live: '',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="text-white px-6 py-20 lg:pl-24">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => setSelected(project)}
            className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:border-indigo-400 
                       hover:shadow-[0_0_12px_2px_#6366f1] transition-all duration-300 transform hover:scale-[1.03]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={project.image} alt={project.title} className="rounded mb-3 w-full h-60 object-cover" />
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">{project.title}</h3>
            {/* <p className="text-sm text-gray-300">{project.description}</p> */}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center px-4"
  onClick={() => setSelected(null)}
>
  <motion.div
    initial={{ scaleX: 0.8, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    exit={{ scaleX: 0.8, opacity: 0 }}
    transition={{ duration: 0.4 }}
    onClick={(e) => e.stopPropagation()}
    className="bg-[#0f172a] rounded-xl p-8 w-full max-w-3xl relative border border-indigo-700 shadow-xl"
  >
    <button
      onClick={() => setSelected(null)}
      className="absolute top-4 right-5 text-gray-400 hover:text-white hover:cursor-pointer text-2xl"
    >
      &times;
    </button>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
  {/* Left Side: Image + Links */}
  <div className="flex flex-col gap-4 items-start">
    <img
      src={selected.image}
      alt={selected.title}
      className="rounded-lg w-full h-64 object-cover border border-indigo-400/20"
    />
    <div className="flex gap-4 flex-wrap pl-1">
      {selected.github && (
        <a
          href={selected.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-300 hover:text-indigo-500"
        >
          GitHub Repo
        </a>
      )}
      {selected.live && (
        <a
          href={selected.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-300 hover:text-green-500"
        >
          Live Site
        </a>
      )}
    </div>
  </div>

  {/* Right Side: Title + Description */}
  <div>
    <h3 className="text-2xl font-bold text-indigo-400 mb-3">{selected.title}</h3>
    <p className="text-gray-300 whitespace-pre-wrap">{selected.description}</p>
  </div>
</div>

  </motion.div>
</motion.div>

)}

    </section>
  );
}
