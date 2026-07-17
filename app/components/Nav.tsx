"use client";

import { useState } from "react";
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
  return (
    <nav className="flex items-center justify-between gap-10 px-6 pb-2 pt-6 sm:px-12">
      <a href="#home" className="font-caveat whitespace-nowrap text-[34px] font-bold text-ink">
        Nurul Amaliah
      </a>
      <div className="hidden items-center gap-[30px] text-[15px] font-semibold md:flex">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="text-ink transition-colors hover:text-coral">
            {label}
          </a>
        ))}
      </div>
      <button
        className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <Icon name={open ? "x" : "menu"} size={22} />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-[72px] z-50 mx-4 flex flex-col gap-1 rounded-2xl bg-cream p-3 shadow-xl md:hidden">
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
        </div>
      )}
    </nav>
  );
}
