"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";

export function FooterSection() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/DagiAmeha",
      name: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/dagim-ameha/",
      name: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:dagimameha@gmail.com",
      name: "Email",
    },
    {
      icon: <Send size={20} />,
      href: "https://t.me/Dag_am",
      name: "Telegram",
    },
  ];

  return (
    <footer className="relative mt-12 border-t border-gray-300 dark:border-gray-700 py-8 text-sm text-gray-600 dark:text-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-4 sm:px-6">
        {/* Name & copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="mb-1 text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            Dagim Ameha
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="#home" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-blue-400/20 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400">
          Built with Next.js and Tailwind css
        </p>
      </div>
    </footer>
  );
}
