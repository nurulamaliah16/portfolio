"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import Modal from "./Modal";
import ImageSlot from "./ImageSlot";
import SectionHeader from "./SectionHeader";
import { trainings } from "../data";

export default function Education() {
  const [active, setActive] = useState<number | null>(null);
  const t = active !== null ? trainings[active] : null;

  return (
    <section className="px-6 py-16 sm:px-12">
      <div className="mb-[30px]">
        <SectionHeader eyebrow="Education" title="Where I Studied" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Master's */}
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl bg-green px-8 py-[30px] text-cream">
            <div className="mb-[18px] flex items-center justify-between">
              <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-[18px] bg-white">
                <ImageSlot label="Logo" className="h-16 w-16" bg="#fff" />
              </span>
              <span className="rounded-full bg-cream/20 px-3 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.4px]">
                Master&apos;s
              </span>
            </div>
            <div className="font-fred text-[24px] font-semibold">M.A. Politics and Government</div>
            <div className="my-1 text-[15px] font-bold opacity-90">Universitas Gadjah Mada</div>
            <div className="mb-4 text-[14px] opacity-75">Aug 2024 – Now</div>
            <p className="m-0 mb-[18px] text-[14.5px] leading-[1.6] opacity-90">
              Research focus: environmental injustice, gender inequality, and governance in
              Indonesia.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {["Environmental Governance", "Gender & Politics", "Public Policy"].map((tag) => (
                <span key={tag} className="rounded-full bg-cream/15 px-3 py-1.5 text-[12.5px] font-bold">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-cream/20 pt-4">
              <Icon name="star" size={16} />
              <span className="text-[14px] font-bold">GPA 3.74 / 4.00</span>
            </div>
          </div>
        </Reveal>

        {/* Bachelor's */}
        <Reveal delay={0.08}>
          <div
            className="flex h-full flex-col rounded-3xl border border-ink/5 bg-white px-8 py-[30px]"
            style={{ boxShadow: "0 24px 46px -30px rgba(31,61,56,.4)" }}
          >
            <div className="mb-[18px] flex items-center justify-between">
              <span
                className="grid h-16 w-16 place-items-center overflow-hidden rounded-[18px] border border-ink/10 bg-white"
                style={{ boxShadow: "0 12px 26px -14px rgba(31,61,56,.5)" }}
              >
                <ImageSlot label="Logo" className="h-16 w-16" bg="#fff" />
              </span>
              <span className="rounded-full bg-amber-tint px-3 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.4px] text-[#b07d22]">
                Bachelor&apos;s
              </span>
            </div>
            <div className="font-fred text-[24px] font-semibold">S.Sos Political Science</div>
            <div className="my-1 text-[15px] font-bold">Universitas Negeri Semarang</div>
            <div className="mb-4 text-[14px] text-muted">Aug 2019 – Jul 2023</div>
            <p className="m-0 mb-[18px] text-[14.5px] leading-[1.6] text-[#5c6b66]">
              Foundation in political theory, public policy, and civic engagement.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {["Political Theory", "Public Policy", "Civic Engagement"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/10 bg-cream px-3 py-1.5 text-[12.5px] font-bold text-[#3a4a45]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-4">
              <Icon name="star" size={16} style={{ color: "#E8A83C" }} />
              <span className="text-[14px] font-bold text-[#3a4a45]">GPA 3.82 / 4.00</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Training */}
      <div className="mb-4 mt-9 flex items-center gap-2.5">
        <Icon name="award" size={18} style={{ color: "#E85D3D" }} />
        <span className="text-[13px] font-extrabold uppercase tracking-[0.5px] text-coral">
          Training &amp; Certification
        </span>
      </div>
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {trainings.map((tr, i) => (
          <Reveal key={tr.title} delay={i * 0.08}>
            <div
              onClick={() => setActive(i)}
              className="flex h-full cursor-pointer flex-col rounded-[20px] border border-ink/5 bg-white px-[26px] py-6 transition-all hover:-translate-y-0.5"
              style={{ boxShadow: "0 20px 40px -32px rgba(31,61,56,.4)" }}
            >
              <div className="mb-3.5 flex items-start justify-between gap-3.5">
                <span
                  className="grid h-[46px] w-[46px] flex-none place-items-center rounded-[13px]"
                  style={{ background: tr.bg, color: tr.color }}
                >
                  <Icon name={tr.icon} size={21} />
                </span>
                <span
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.3px]"
                  style={{ background: tr.bg, color: tr.color }}
                >
                  <Icon name="badge-check" size={13} />
                  {tr.tag}
                </span>
              </div>
              <div className="font-fred text-[18px] font-semibold leading-[1.28]">{tr.title}</div>
              <div className="mt-2 text-[13.5px] font-semibold leading-[1.45] text-muted">{tr.org}</div>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-ink/10 pt-3.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-[12.5px] font-bold text-[#3a4a45]">
                  <Icon name="calendar" size={13} />
                  {tr.year}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-[12.5px] font-bold text-[#3a4a45]">
                  <Icon name="clock" size={13} />
                  {tr.duration}
                </span>
                <span
                  className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] font-bold"
                  style={{ color: tr.color }}
                >
                  View output <Icon name="arrow-up-right" size={14} />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Modal open={t !== null} onClose={() => setActive(null)}>
        {t && (
          <>
            <div className="rounded-t-[26px] px-10 pb-[26px] pt-[34px]" style={{ background: t.bg }}>
              <div className="mb-4 flex items-center gap-3.5">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white" style={{ color: t.color }}>
                  <Icon name={t.icon} size={26} />
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.3px]"
                  style={{ color: t.color }}
                >
                  <Icon name="badge-check" size={13} />
                  {t.tag}
                </span>
              </div>
              <div className="font-fred text-[27px] font-semibold leading-[1.15] text-ink">{t.title}</div>
              <div className="mt-2 text-[14px] font-bold text-[#5c6b66]">{t.org}</div>
              <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-[#5c6b66]">
                  <Icon name="calendar" size={13} />
                  {t.year}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-[#5c6b66]">
                  <Icon name="clock" size={13} />
                  {t.duration}
                </span>
              </div>
            </div>
            <div className="px-10 pb-9 pt-7">
              <div className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.5px] text-coral">
                About the training
              </div>
              <p className="m-0 mb-[30px] text-[15px] leading-[1.6] text-[#43544f]">{t.desc}</p>
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2.5">
                <div className="text-[13px] font-extrabold uppercase tracking-[0.5px] text-green">
                  Certificate &amp; output
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3.5">
                {t.outputs.map((o) => (
                  <div key={o} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                    <ImageSlot label="PDF / image" className="aspect-[3/4] w-full" />
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
