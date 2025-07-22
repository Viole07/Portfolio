import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center  text-white px-6 py-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-indigo-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <p className="mb-6">
          I'm a final-year Computer Engineering student passionate about building modern web applications using the MERN stack (MongoDB, Express, React, Node.js). I enjoy transforming ideas into functional, clean user interfaces, and I'm continuously sharpening my skills through real-world projects and problem-solving on platforms like LeetCode using Python.

I have hands-on experience with HTML, CSS, JavaScript, and utility-first frameworks like Tailwind CSS and Bootstrap. I’m also comfortable with version control tools like Git & GitHub, API testing using Postman, and have a solid grasp of SQL fundamentals.

Currently, I’m seeking opportunities where I can contribute meaningfully, grow as a developer, and collaborate with teams working on impactful software. If you're hiring or working on something exciting, I’d love to connect!
        </p>
        <a
  href="#contact"
  className="mt-4 inline-block text-indigo-400 hover:text-white underline text-sm"
>
  Let’s work together →
</a>
      </motion.div>
    </section>
  );
}
