"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import Modal from "./Modal";
import ImageSlot from "./ImageSlot";
import SectionHeader from "./SectionHeader";
import { experience } from "../data";

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);
  const job = active !== null ? experience[active] : null;

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
                  className="grid h-[46px] w-[46px] flex-none place-items-center rounded-[14px]"
                  style={{ background: j.tint, color: j.color }}
                >
                  <Icon name={j.icon} size={21} />
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

      <Modal open={job !== null} onClose={() => setActive(null)}>
        {job && (
          <>
            <div className="rounded-t-[26px] px-10 pb-[26px] pt-[34px]" style={{ background: job.tint }}>
              <span
                className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-white"
                style={{ color: job.color }}
              >
                <Icon name={job.icon} size={26} />
              </span>
              <div className="font-fred text-[30px] font-semibold leading-[1.1] text-ink">{job.role}</div>
              <div className="mt-2 text-[16px] font-extrabold" style={{ color: job.color }}>
                {job.org}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
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
                    <span className="text-[15px] leading-[1.6] text-[#43544f]">{d}</span>
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
                {job.gallery.map((g) => (
                  <div key={g} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                    <ImageSlot label="Photo / video" className="aspect-square w-full" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
