"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Icon from "./Icon";
import { useAnimations, useMotionSupported } from "../lib/motion";

export default function Modal({
  open,
  onClose,
  hideClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  hideClose?: boolean;
  children: React.ReactNode;
}) {
  const supported = useMotionSupported();
  const enabled = useAnimations();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const closeBtn = !hideClose && (
    <button
      onClick={onClose}
      aria-label="Close"
      className="absolute right-6 top-[22px] z-10 grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border-none text-ink"
      style={{ background: "rgba(255,255,255,.75)" }}
    >
      <Icon name="x" size={18} />
    </button>
  );

  // Old browsers: plain overlay, no framer-motion.
  if (!supported) {
    if (!open) return null;
    return (
      <div
        className="fixed inset-0 z-[90] flex items-center justify-center px-6 py-10"
        style={{ background: "rgba(31,61,56,.55)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      >
        <div
          className="relative max-h-[88vh] w-full max-w-[760px] overflow-y-auto rounded-[26px] bg-cream"
          style={{ boxShadow: "0 50px 100px -30px rgba(31,61,56,.6)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {closeBtn}
          {children}
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center px-6 py-10"
          style={{ background: "rgba(31,61,56,.55)", backdropFilter: "blur(4px)" }}
          onClick={onClose}
          initial={enabled ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={enabled ? { opacity: 0 } : { opacity: 1 }}
          transition={enabled ? { duration: 0.2 } : { duration: 0 }}
        >
          <motion.div
            className="relative max-h-[88vh] w-full max-w-[760px] overflow-y-auto rounded-[26px] bg-cream"
            style={{ boxShadow: "0 50px 100px -30px rgba(31,61,56,.6)" }}
            onClick={(e) => e.stopPropagation()}
            initial={enabled ? { opacity: 0, scale: 0.94, y: 24 } : false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={enabled ? { opacity: 0, scale: 0.96, y: 12 } : { opacity: 1 }}
            transition={enabled ? { duration: 0.28, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
          >
            {closeBtn}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
