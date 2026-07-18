"use client";

import { motion } from "framer-motion";
import { useAnimations, useMotionSupported } from "../lib/motion";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const supported = useMotionSupported();
  const enabled = useAnimations();

  // Old browsers (framer-motion crashes): plain-visible, never framer.
  if (!supported) return <div className={className}>{children}</div>;

  // Modern: always a motion.div (stable type — no remount when `enabled` flips
  // off after mount). When not enabled, start visible with no transition.
  return (
    <motion.div
      className={className}
      initial={enabled ? { opacity: 0, y } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={enabled ? { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
    >
      {children}
    </motion.div>
  );
}
