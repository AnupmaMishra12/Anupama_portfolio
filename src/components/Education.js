import React from "react";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      degree: "Bachelor of Science (Computer Science)",
      branch: "Department of Computer Science",
      year: "2021 - 2025",
      institute:
        "Sam Higginbottom University of Agriculture, Science and Technology",
    },
    {
      degree: "Higher Secondary (12th)",
      branch: "Science Stream",
      year: "2019 - 2021",
      institute: "St.Anthony Inter College",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center text-white"
    >
      <motion.h2
        className="text-3xl font-bold text-cyan-400 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto grid gap-8 px-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-pink-400 mb-1">
              {edu.degree}
            </h3>
            <p className="text-gray-300">{edu.branch}</p>
            <p className="text-gray-400">{edu.institute}</p>
            <p className="text-gray-500 mt-2">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
