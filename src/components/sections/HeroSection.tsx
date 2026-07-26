"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero3DElement } from "@/src/components/Hero3DElement";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <Hero3DElement />

      <div className="w-full relative z-10 overflow-hidden py-20 bg-primary/10 flex items-center justify-center border-[1px] border-white/5 bg-black/20 backdrop-blur-sm rounded-2xl text-white pointer-events-none">
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="w-full flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="max-w-2xl mt-12 md:mt-32">
            <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white  mb-2 pb-2">
              Dagim Ameha
            </h2>

            <p className="mt-4 text-lg text-gray-300/90">
              Full Stack web developer | Flutter developer
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
              <button
                className="rounded-full bg-blue-500 px-8 py-2 text-white hover:opacity-90"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </button>
              <button
                className="rounded-full border px-8 py-2  hover:bg-white/10"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About me
              </button>
              <button
                className="rounded-full border px-8 py-2 hover:bg-white/10"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
