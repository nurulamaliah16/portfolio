"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Icon from "./Icon";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center px-6 py-10"
          style={{ background: "rgba(31,61,56,.55)", backdropFilter: "blur(4px)" }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative max-h-[88vh] w-full max-w-[760px] overflow-y-auto rounded-[26px] bg-cream"
            style={{ boxShadow: "0 50px 100px -30px rgba(31,61,56,.6)" }}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-6 top-[22px] z-10 grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border-none text-ink"
              style={{ background: "rgba(255,255,255,.75)" }}
            >
              <Icon name="x" size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
