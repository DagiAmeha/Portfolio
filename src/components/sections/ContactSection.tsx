"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircleMore, Send } from "lucide-react";

export function ContactSection() {
  const contactLinks = [
    {
      name: "Github",
      icon: <Github size={24} />,
      href: "https://github.com/DagiAmeha",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/dagim-ameha/",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      href: "mailto:dagimameha@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircleMore size={24} />,
      href: "https://wa.me/251978924515",
    },
    { name: "Telegram", icon: <Send size={24} />, href: "https://t.me/Dag_am" },
  ];

  return (
    <section
      id="contact"
      className="py-20 min-h-screen flex flex-col items-center justify-center px-6 "
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl mb-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        {/* Contact Links Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name}`}
              className="flex flex-col items-center justify-center gap-2 p-4 border rounded-xl bg-white/10 backdrop-blur-sm dark:bg-white/5 transition-all duration-100"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-blue-400">{link.icon}</div>
              <span className="font-medium text-white">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Phone Section */}
        <motion.a
          href="tel:+251978936515"
          className="flex flex-col items-center gap-2 mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-blue-300">Phone Number</h2>
          <span className="hover:underline text-white">+251 978 936 515</span>
        </motion.a>
      </div>
    </section>
  );
}
