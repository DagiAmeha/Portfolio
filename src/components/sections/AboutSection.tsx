"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Flutter",
    "Dart",
    "GetX",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="max-w-4xl mx-auto py-32 flex flex-col items-center justify-center min-h-screen text-gray-100"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="relative w-full max-w-5xl mx-auto px-6 md:px-12 backdrop-blur-md rounded-2xl border border-transparent"
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-center text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          I’m <span className="font-semibold text-white">Dagim Ameha</span>, a
          passionate <span className="text-blue-400">Full Stack</span> and{" "}
          <span className="text-blue-400">Mobile Developer</span> dedicated to
          crafting modern, performant, and visually beautiful digital
          experiences.
        </motion.p>

        {/* Experience + Education */}
        <div className="mt-10 mb-12 w-full flex flex-col md:flex-row gap-10">
          {/* Experience */}
          <motion.div className="flex-1" variants={{ hidden: {}, visible: {} }}>
            <h3 className="font-bold text-xl mb-4">Experience</h3>
            <ul className="space-y-4 text-sm">
              <motion.li
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/40 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="font-medium text-white">
                  Mobile Developer — Kuraz Tech
                </p>
                <p className="text-gray-400">2023 — Present · Flutter, GetX</p>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                  I work on developing scalable, user-friendly mobile
                  applications with Flutter and GetX, focusing on clean
                  architecture, offline capabilities, and seamless API
                  integration.
                </p>
              </motion.li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div className="flex-1" variants={{ hidden: {}, visible: {} }}>
            <h3 className="font-bold text-xl mb-4">Education</h3>
            <ul className="space-y-4 text-sm">
              <motion.li
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/40 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="font-medium text-white">
                  B.Sc. in Computer Science
                </p>
                <p className="text-gray-400">
                  Addis Ababa University · 2022 — 2026
                </p>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                  Studying computer science with a focus on software
                  engineering, algorithms, and mobile application development.
                </p>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-6 w-full">
          <h3 className="font-bold text-xl mb-4">Skills</h3>
          <motion.ul
            className="flex gap-2 text-sm flex-wrap"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {skills.map((skill) => (
              <motion.li
                key={skill}
                className="rounded-full border border-white/20 px-4 py-2 bg-white/5 hover:bg-white/10 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
