import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "canvas",
  "wordpress",
  "communication",
  "teamwork",
  "problem-solving",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-800 text-center">
      <motion.h2
        className="text-3xl font-bold text-pink-400 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-slate-700 text-cyan-300 rounded-full text-sm cursor-default hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
