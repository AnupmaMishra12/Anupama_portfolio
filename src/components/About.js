import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-pink-400 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto bg-slate-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
          Hi, I’m <span className="text-pink-400">Anupama Mishra</span> 👋
        </h3>

        <p className="text-gray-300 leading-relaxed">
          I’m a passionate{" "}
          <span className="text-pink-400">Frontend Developer</span> who loves
          creating engaging, responsive, and user-friendly web experiences using
          <span className="text-cyan-400"> React.js, JavaScript</span>, and{" "}
          <span className="text-cyan-400">Tailwind CSS</span>. My main focus is
          delivering clean UI designs and smooth user interactions.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          I’m currently pursuing a{" "}
          <span className="text-pink-400">
            Bachelor of Science in Computer Science
          </span>{" "}
          from
          <span className="text-cyan-400">
            {" "}
            Sam Higginbottom University of Agriculture, Science and Technology
          </span>
          . Alongside my studies, I’ve been consistently learning and working on
          real-world projects to improve my development skills.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          During my internship at{" "}
          <span className="text-cyan-400">UpToSkills</span>, I served as a
          <span className="text-pink-400"> Team Lead</span> where I collaborated
          with developers, led a group of interns, and contributed to multiple
          frontend modules. This experience enhanced my problem-solving,
          communication, and leadership abilities.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          At present, I’m working with{" "}
          <span className="text-cyan-400">Elevate Labs</span> as a
          <span className="text-pink-400"> Frontend Intern</span>. Here, I
          learned to host static sites, manage deployment pipelines, and build
          efficient, scalable user interfaces. This internship helped me
          strengthen my technical foundation and confidence in frontend
          development.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          Some of my featured works include a{" "}
          <span className="text-cyan-400">personal portfolio website</span>, a{" "}
          <span className="text-pink-400">landing page design</span>, and an
          <span className="text-cyan-400"> e-commerce UI project</span>. Each
          project allowed me to refine my skills in design, responsiveness, and
          component-based architecture.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          I’m always open to learning new technologies and contributing to
          exciting projects that challenge my creativity and logic 💻✨
        </p>
      </motion.div>
    </section>
  );
}

export default About;
