import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-center text-white"
    >
      <motion.h2
        className="text-3xl font-bold text-cyan-400 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="max-w-xl mx-auto flex flex-col gap-5 bg-slate-800 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-md bg-slate-700 text-white outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-md bg-slate-700 text-white outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded-md bg-slate-700 text-white outline-none focus:ring-2 focus:ring-pink-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 transition py-2 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </motion.form>

      <div className="mt-10 space-y-2 text-gray-400">
        <p>
          Email: <span className="text-white">anupamamishra@gmail.com</span>
        </p>
        <p>Location: India 🇮🇳</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-5 text-2xl">
          <a
            href="https://github.com/AnupmaMishra12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anupama-mishra09/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BqCcNVkz1TcWEAlxr8qFefQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:anupamamishra@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
