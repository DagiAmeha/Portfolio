"use client";

import { AnimatedPage } from "@/src/components/AnimatedPage";
import { LazySection } from "@/src/components/LazySection";
import { FooterSection } from "@/src/components/sections/FooterSection";

export default function LandingPage() {
  return (
    <AnimatedPage>
      <LazySection
        id="home"
        importFn={() =>
          import("@/src/components/sections/HeroSection").then((m) => ({
            default: m.HeroSection,
          }))
        }
        // Hero is above the fold — load immediately so it shows instantly
        fallback={<div className="h-screen" />}
        delay={0}
        loadImmediately={true}
      />

      <LazySection
        id="about"
        importFn={() =>
          import("@/src/components/sections/AboutSection").then((m) => ({
            default: m.AboutSection,
          }))
        }
        loadImmediately={true}
        delay={0.4}
      />

      <LazySection
        id="projects"
        importFn={() =>
          import("@/src/components/sections/ProjectsSection").then((m) => ({
            default: m.ProjectsSection,
          }))
        }
        loadImmediately={true}
        delay={0.4}
      />

      <LazySection
        id="contact"
        importFn={() =>
          import("@/src/components/sections/ContactSection").then((m) => ({
            default: m.ContactSection,
          }))
        }
        loadImmediately={true}
        delay={0.4}
      />

      <FooterSection />
    </AnimatedPage>
  );
}
