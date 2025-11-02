"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="w-full relative overflow-hidden py-20 bg-primary/10 flex items-center justify-center border-[1px] border-solid rounded-2xl text-white ">
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />

        <div className="w-full flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Floating Avatar with Animated Circle */}
          <motion.div
            className="relative h-40 w-40 md:h-56 md:w-56"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Avatar image */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 shadow-xl bg-black/20">
              <Image
                src="/img/profile_img.jpg"
                alt="Dagim portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white  mb-2 pb-2">
              Dagim Ameha
            </h2>

            <p className="mt-4 text-lg text-gray-300/90">
              Full Stack web developer | Flutter developer
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
