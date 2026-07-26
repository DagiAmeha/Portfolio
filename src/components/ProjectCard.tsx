import { Github, Play } from "lucide-react";
import Image from "next/image";

const tagColors: Record<string, string> = {
  html: "#5A1D0C",
  css: "#08284F",
  javascript: "#6E6107",
  "java script": "#6E6107",
  node: "#133E19",
  "node.js": "#133E19",
  express: "#0A0A0A",
  mongodb: "#153C1B",
  react: "#1A5666",
  next: "#050505",
  "next.js": "#050505",
  tailwind: "#154C46",
  pug: "#3E241D",
  stripe: "#241F66",
  flutter: "#012947",
  firebase: "#73370C",
  gemini: "#1E4A75",
  api: "#1E4A75",
  sass: "#7A3356",
};

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags?: string[];
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group overflow-hidden rounded-xl border border-gray-300 bg-white/50 
                 shadow-sm transition-shadow duration-500 ease-out
                 hover:shadow-2xl hover:border-transparent 
                 dark:bg-white/5 flex flex-col cursor-pointer"
    >
      <div className="relative h-52 w-full overflow-hidden" style={{ transform: "translateZ(30px)" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* 🔥 Black gradient overlay from bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                     opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {tags?.length ? (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map((t) => {
              const color = tagColors[t.toLowerCase()] || "#2A2A2A";
              return (
                <span
                  key={t}
                  className="text-xs rounded-full px-3 py-1 text-white font-medium transition duration-200"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 2px 6px ${color}55`,
                    opacity: 0.95,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
        ) : null}

        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 mb-8">
          {description}
        </p>

        <div className="flex justify-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <Github />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-2 bg-blue-500 text-white rounded-full hover:opacity-90 transition"
            >
              <Play />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
