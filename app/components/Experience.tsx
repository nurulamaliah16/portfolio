"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import Modal from "./Modal";
import SectionHeader from "./SectionHeader";
import { experience } from "../data";

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);
  const [galleryIdx, setGalleryIdx] = useState<number | null>(null);
  const job = active !== null ? experience[active] : null;

  const closeGallery = useCallback(() => setGalleryIdx(null), []);
  const prev = useCallback(() => {
    setGalleryIdx((i) => (i !== null && job ? (i - 1 + job.gallery.length) % job.gallery.length : null));
  }, [job]);
  const next = useCallback(() => {
    setGalleryIdx((i) => (i !== null && job ? (i + 1) % job.gallery.length : null));
  }, [job]);

  useEffect(() => {
    if (galleryIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryIdx, closeGallery, prev, next]);

  const galleryImage = galleryIdx !== null && job ? job.gallery[galleryIdx] : null;

  // Header shrink: binary compact state + CSS transition. Hysteresis (compact >50, expand <20)
  // avoids the fractional-scrollTop lock that happens when short content can't scroll the full range.
  const [compact, setCompact] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active === null) {
      setCompact(false);
      return;
    }
    let scroller: HTMLElement | null = headerRef.current?.parentElement ?? null;
    while (scroller) {
      const s = getComputedStyle(scroller);
      if (s.overflowY === "auto" || s.overflowY === "scroll") break;
      scroller = scroller.parentElement;
    }
    if (!scroller) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const s = scroller!;
        const y = s.scrollTop;
        setCompact((c) => {
          if (c) return y >= 10; // stay compact until very near top
          // Wide hysteresis gap (10↔110) exceeds the ~90px the header collapses, so a toggle
          // can't shift scrollTop back across the trigger and oscillate. Room guard: only shrink
          // when there's enough scroll room to reach the threshold at all.
          return y > 110 && s.scrollHeight - s.clientHeight > 200;
        });
      });
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [active]);
  const pick = <T,>(big: T, small: T) => (compact ? small : big);

  return (
    <section id="experience" className="px-6 py-16 sm:px-12">
      <div className="mb-[30px]">
        <SectionHeader eyebrow="Career" title="My Work Experience" />
      </div>

      <div className="flex flex-col gap-3.5">
        {experience.map((j, i) => (
          <Reveal key={j.num} delay={i * 0.06}>
            <div
              onClick={() => setActive(i)}
              className="relative grid cursor-pointer grid-cols-[52px_1fr] items-center gap-5 overflow-hidden rounded-[20px] border border-ink/10 bg-white py-[18px] pl-[22px] pr-6 transition-all hover:-translate-y-0.5 sm:grid-cols-[52px_1fr_auto]"
              style={{ boxShadow: "0 18px 40px -34px rgba(31,61,56,.5)" }}
            >
              <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: j.color }} />
              <div className="flex flex-col items-center gap-2 pl-1.5">
                <span
                  className="grid h-[46px] w-[46px] flex-none place-items-center overflow-hidden rounded-[14px]"
                  style={{ background: j.tint }}
                >
                  <Image
                    src={j.logo}
                    alt={j.org}
                    width={46}
                    height={46}
                    className="object-contain"
                  />
                </span>
                {j.current && (
                  <span className="inline-flex items-center gap-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.4px] text-green">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
                    Now
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <div className="font-fred text-[21px] font-semibold leading-[1.15]">{j.role}</div>
                <div className="mt-[7px] flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <span className="text-[14px] font-extrabold" style={{ color: j.color }}>
                    {j.org}
                  </span>
                  {j.link !== "#" && (
                    <a
                      href={j.link}
                      target="_blank"
                      rel="noopener"
                      onClick={(e) => e.stopPropagation()}
                      title="Visit"
                      className="grid h-6 w-6 flex-none place-items-center rounded-full"
                      style={{ background: j.tint, color: j.color }}
                    >
                      <Icon name="external-link" size={12} />
                    </a>
                  )}
                  <span className="h-1 w-1 rounded-full bg-ink/30" />
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-muted">
                    <Icon name="calendar" size={13} />
                    {j.dates}
                  </span>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(i);
                }}
                className="col-span-2 mt-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-ink/15 bg-cream px-[18px] py-2.5 text-[13.5px] font-bold text-ink transition-colors hover:border-green hover:bg-green hover:text-cream sm:col-span-1 sm:mt-0"
              >
                View details <Icon name="arrow-up-right" size={15} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Modal open={job !== null} onClose={() => setActive(null)} hideClose>
        {job && (
          <>
            <div
              ref={headerRef}
              className="sticky top-0 z-[5] rounded-t-[26px] px-10 transition-all duration-300 ease-out"
              style={{ background: job.tint, paddingTop: pick(30, 15), paddingBottom: pick(24, 13) }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-6 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink transition-all duration-300 ease-out"
                style={{ top: pick(20, 13) }}
                aria-label="Close"
              >
                <Icon name="x" size={16} />
              </button>
              <div className="flex items-center transition-all duration-300 ease-out" style={{ gap: pick(16, 12) }}>
                <span
                  className="grid flex-none place-items-center overflow-hidden bg-white transition-all duration-300 ease-out"
                  style={{ width: pick(56, 38), height: pick(56, 38), borderRadius: pick(16, 11) }}
                >
                  <Image src={job.logo} alt={job.org} width={56} height={56} className="h-full w-full object-contain" />
                </span>
                <div className="min-w-0 flex-1 pr-12">
                  <div className="font-fred font-semibold leading-[1.15] text-ink transition-all duration-300 ease-out" style={{ fontSize: pick(24, 16) }}>
                    {job.role}
                  </div>
                  <div className="font-extrabold transition-all duration-300 ease-out" style={{ color: job.color, fontSize: pick(15, 12.5), marginTop: pick(6, 1) }}>
                    {job.org}
                  </div>
                </div>
              </div>
              <div className="transition-all duration-300 ease-out" style={{ opacity: compact ? 0 : 1, maxHeight: pick(70, 0), overflow: "hidden", marginTop: pick(14, 0) }}>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-[#5c6b66]">
                    <Icon name="calendar" size={13} />
                    {job.dates}
                  </span>
                  {job.link !== "#" && (
                    <a href={job.link} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 rounded-full px-[15px] py-1.5 text-[13px] font-bold text-white" style={{ background: job.color }}>
                      <Icon name="external-link" size={13} />
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="px-10 pb-9 pt-7">
              <div className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.5px] text-coral">
                What I did
              </div>
              <div className="mb-[30px] flex flex-col gap-[11px]">
                {job.details.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 flex-none rounded-full"
                      style={{ background: job.color }}
                    />
                    <span className="text-[15px] leading-[1.6] text-[#43544f]" dangerouslySetInnerHTML={{ __html: d }} />
                  </div>
                ))}
              </div>
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2.5">
                <div className="text-[13px] font-extrabold uppercase tracking-[0.5px] text-green">
                  Activity gallery
                </div>
                <span className="text-[12.5px] font-semibold text-[#9aa39e]">Photos & videos</span>
              </div>
              <div className="grid grid-cols-3 gap-3.5">
                {job.gallery.map((g, gi) => (
                  <button
                    key={g}
                    onClick={() => setGalleryIdx(gi)}
                    className="relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-white"
                  >
                    <Image
                      src={g}
                      alt={`Activity ${gi + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 33vw, 200px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </Modal>

      <AnimatePresence>
        {galleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeGallery}
          >
            <button
              onClick={closeGallery}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
              aria-label="Close gallery"
            >
              <Icon name="x" size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
              aria-label="Previous"
            >
              <Icon name="arrow-left" size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
              aria-label="Next"
            >
              <Icon name="arrow-right" size={24} />
            </button>
            <div className="relative flex h-full max-h-[85vh] w-full max-w-5xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImage}
                alt=""
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            {job && (
              <div className="absolute bottom-4 rounded-full bg-black/50 px-4 py-2 text-[13px] font-semibold text-white">
                {galleryIdx! + 1} / {job.gallery.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
