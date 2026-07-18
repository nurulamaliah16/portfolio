"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Img from "./Img";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import DetailModal from "./DetailModal";
import SectionHeader from "./SectionHeader";
import { experience } from "../data";
import { useIndexModal } from "../lib/useIndexModal";
import { useAnimations, useMotionSupported } from "../lib/motion";

export default function Experience() {
  const { item: job, open, close } = useIndexModal(experience);
  const [galleryIdx, setGalleryIdx] = useState<number | null>(null);
  const supported = useMotionSupported();
  const enabled = useAnimations();

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

  return (
    <section id="experience" className="px-6 py-16 sm:px-12">
      <div className="mb-[30px]">
        <SectionHeader eyebrow="Career" title="My Work Experience" />
      </div>

      <div className="flex flex-col gap-3.5">
        {experience.map((j, i) => (
          <Reveal key={j.num} delay={i * 0.06}>
            <div
              onClick={() => open(i)}
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
                  open(i);
                }}
                className="col-span-2 mt-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-ink/15 bg-cream px-[18px] py-2.5 text-[13.5px] font-bold text-ink transition-colors hover:border-green hover:bg-green hover:text-cream sm:col-span-1 sm:mt-0"
              >
                View details <Icon name="arrow-up-right" size={15} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <DetailModal
        open={job !== null}
        onClose={close}
        bg={job?.tint ?? "#fff"}
        accent={job?.color ?? "#2C6B5E"}
        icon={
          job && (
            <Image src={job.logo} alt={job.org} width={56} height={56} className="h-full w-full object-contain" />
          )
        }
        title={job?.role ?? ""}
        subtitle={job?.org ?? ""}
        meta={
          job && (
            <>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-[#5c6b66]">
                <Icon name="calendar" size={13} />
                {job.dates}
              </span>
              {job.link !== "#" && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 rounded-full px-[15px] py-1.5 text-[13px] font-bold text-white"
                  style={{ background: job.color }}
                >
                  <Icon name="external-link" size={13} />
                  Visit
                </a>
              )}
            </>
          )
        }
      >
        {job && (
          <>
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
                  <Img
                    src={g}
                    alt={`${job.role} at ${job.org} — activity ${gi + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, 200px"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </DetailModal>

      {(() => {
        const inner = galleryImage && (
          <>
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
              <Img
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
          </>
        );
        const cls = "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4";
        if (!supported) {
          return galleryImage && (
            <div className={cls} onClick={closeGallery}>{inner}</div>
          );
        }
        return (
          <AnimatePresence>
            {galleryImage && (
              <motion.div
                initial={enabled ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                exit={enabled ? { opacity: 0 } : { opacity: 1 }}
                className={cls}
                onClick={closeGallery}
              >
                {inner}
              </motion.div>
            )}
          </AnimatePresence>
        );
      })()}
    </section>
  );
}
