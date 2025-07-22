import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_5qxopjw',
      'template_6syipw9',
      formRef.current,
      'kUayGYdIcIeVgN6ZM'
    )
    .then(() => {
      toast.success('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      toast.error('Failed to send message.');
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section className="min-h-screen text-white px-6 py-20 flex flex-col justify-center items-center">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:shadow-[0_0_10px_2px_#6366f1] transition duration-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:shadow-[0_0_10px_2px_#6366f1] transition duration-300"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:shadow-[0_0_10px_2px_#6366f1] transition duration-300"
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`w-full sm:w-auto px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 
            ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-400 hover:shadow-[0_0_12px_2px_#6366f1]'}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </section>
  );
}
