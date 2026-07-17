"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";
import SectionHeader from "./SectionHeader";
import { research, researchWorks } from "../data";

export default function Research() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="research" className="px-6 py-16 sm:px-12">
      <SectionHeader
        eyebrow="Research & Publications"
        title="Selected Scholarship"
        sub="Click a card to expand its output — publications, certificates, or documentation."
      />

      <div className="mt-[26px] flex flex-col gap-3">
        {research.map((pub, i) => {
          const isOpen = open === i;
          return (
            <div
              key={pub.title}
              className="overflow-hidden rounded-[18px] border border-ink/5 bg-white"
              style={{ boxShadow: "0 18px 38px -32px rgba(31,61,56,.4)" }}
            >
              <div
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex cursor-pointer items-center gap-4 px-[22px] py-4"
              >
                <span
                  className="grid h-10 w-10 flex-none place-items-center rounded-xl"
                  style={{ background: pub.bg, color: pub.color }}
                >
                  <Icon name={pub.icon} size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2.5">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10.5px] font-extrabold uppercase tracking-[0.4px]"
                      style={{ background: pub.bg, color: pub.color }}
                    >
                      {pub.tag}
                    </span>
                    <span className="text-[12px] font-bold text-[#9aa39e]">{pub.date}</span>
                  </div>
                  <div className="font-fred text-[16.5px] font-semibold leading-[1.3]">{pub.title}</div>
                </div>
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-cream text-[#5c6b66]">
                  <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={15} />
                </span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-[22px] pl-[78px] pr-[22px] pt-1">
                      <div className="mb-3.5 text-[13.5px] font-bold text-green">{pub.source}</div>
                      {pub.points.length > 0 && (
                        <>
                          <div className="mb-2.5 text-[12px] font-extrabold uppercase tracking-[0.4px] text-green">
                            Key output
                          </div>
                          <div className="mb-[22px] flex flex-col gap-2.5">
                            {pub.points.map((pt) => (
                              <div key={pt} className="flex items-start gap-3">
                                <span
                                  className="mt-[7px] h-[7px] w-[7px] flex-none rounded-full"
                                  style={{ background: pub.color }}
                                />
                                <span className="flex-1 text-[14px] leading-[1.55] text-[#43544f]">{pt}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      <div className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.4px] text-coral">
                        Media &amp; documentation{" "}
                        <span className="font-semibold normal-case text-[#9aa39e]">(optional)</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {pub.outputs.map((o) => (
                          <div key={o} className="overflow-hidden rounded-[14px] border border-ink/10 bg-cream">
                            <ImageSlot label="PDF / image" className="aspect-[4/3] w-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-9">
        <div className="mb-[18px] flex items-center gap-3">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-green text-cream">
            <Icon name="library" size={19} />
          </span>
          <h3 className="font-fred m-0 text-[26px] font-semibold">Theses &amp; Book Chapters</h3>
        </div>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {researchWorks.map((w, i) => (
            <Reveal key={w.num} delay={i * 0.08}>
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-ink/5 bg-white px-6 py-[26px]"
                style={{ boxShadow: "0 22px 44px -32px rgba(31,61,56,.45)", borderTop: `4px solid ${w.color}` }}
              >
                <span
                  className="font-fred pointer-events-none absolute right-5 top-3.5 text-[52px] font-bold leading-none"
                  style={{ color: w.bg }}
                >
                  {w.num}
                </span>
                <span
                  className="relative z-[1] mb-4 grid h-12 w-12 place-items-center rounded-[14px]"
                  style={{ background: w.bg, color: w.color }}
                >
                  <Icon name={w.icon} size={22} />
                </span>
                <span
                  className="mb-2.5 self-start text-[11px] font-extrabold uppercase tracking-[0.3px]"
                  style={{ color: w.color }}
                >
                  {w.type}
                </span>
                <div className="font-fred flex-1 text-[17px] font-semibold leading-[1.35]">{w.title}</div>
                <div className="mt-4 flex items-center gap-1.5 border-t border-ink/10 pt-3.5 text-[12.5px] font-bold text-[#9aa39e]">
                  <Icon name="calendar" size={13} />
                  {w.year}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
