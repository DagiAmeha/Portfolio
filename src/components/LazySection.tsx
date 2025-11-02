"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, Suspense } from "react";

type LazySectionProps = {
  id: string;
  importFn: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  delay?: number;
  loadImmediately?: boolean;
};

export function LazySection({
  id,
  importFn,
  fallback = null,
  delay = 0,
  loadImmediately = false,
}: LazySectionProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  // Define a loader function
  const load = () => {
    if (!Component) {
      importFn()
        .then((mod) => setComponent(() => mod.default))
        .catch((err) => console.error(`Failed to load section ${id}:`, err));
    }
  };

  // Auto-load when section is in view or flagged for immediate load
  useEffect(() => {
    if (loadImmediately || inView) load();
  }, [inView, loadImmediately]);

  // Expose preload function globally for onClick triggers
  useEffect(() => {
    (window as any)[`loadSection_${id}`] = load;
    return () => {
      delete (window as any)[`loadSection_${id}`];
    };
  }, [id, Component]);

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex items-center justify-center"
    >
      <Suspense fallback={fallback}>
        {Component && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="w-full"
          >
            <Component />
          </motion.div>
        )}
      </Suspense>
    </section>
  );
}
