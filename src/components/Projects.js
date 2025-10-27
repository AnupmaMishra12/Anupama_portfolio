import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React and Tailwind CSS, featuring smooth animations, dark theme, and responsive design to showcase my development journey.",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Landing Page Design",
      description:
        "A visually appealing startup landing page created using React and Tailwind CSS, focusing on design, animations, and call-to-action elements for high user engagement.",
      tech: ["React", "Tailwind", "UI/UX"],
    },
    {
      title: "E-Commerce UI",
      description:
        "An elegant e-commerce frontend with product filters, cart animation, and dark mode toggle for seamless shopping experience.",
      tech: ["React", "Tailwind", "LocalStorage"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/40 to-slate-900 text-center text-white"
    >
      <motion.h2
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Creative Projects ✨
      </motion.h2>

      <div className="grid gap-10 px-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative bg-slate-800/60 backdrop-blur-md border border-cyan-400/10 rounded-3xl p-6 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              {proj.title}
            </h3>
            <p className="text-gray-300 mb-4">{proj.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
