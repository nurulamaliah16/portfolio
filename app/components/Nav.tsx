"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Portfolio", "#portfolio"],
  ["Research", "#research"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between gap-10 px-6 py-2.5 transition-colors duration-300 sm:px-12 ${scrolled ? "bg-cream" : "bg-transparent"}`}
    >
      <a href="#home" className="font-caveat whitespace-nowrap text-[34px] font-bold text-ink">
        Nurul Amaliah
      </a>
      <div className="hidden items-center gap-[30px] text-[15px] font-semibold lg:flex">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="text-ink transition-colors hover:text-coral">
            {label}
          </a>
        ))}
      </div>
      <button
        className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <Icon name={open ? "x" : "menu"} size={22} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[72px] z-50 mx-4 flex flex-col gap-1 rounded-2xl bg-cream p-3 shadow-xl lg:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-[15px] font-semibold text-ink hover:bg-green-tint"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
