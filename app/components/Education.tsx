"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Img from "./Img";
import Icon from "./Icon";
import Reveal from "./Reveal";
import DetailModal from "./DetailModal";
import SectionHeader from "./SectionHeader";
import { trainings } from "../data";
import { useIndexModal } from "../lib/useIndexModal";

export default function Education() {
  const { item: t, open, close } = useIndexModal(trainings);
  const [zoom, setZoom] = useState(false);

  // Close the fullscreen certificate on Escape (capture, so it beats the modal's
  // own Escape handler — you back out of the image first, not the whole modal).
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setZoom(false);
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [zoom]);

  // Drop the zoom when the modal closes, so reopening never starts fullscreen.
  useEffect(() => {
    if (!t) setZoom(false);
  }, [t]);

  return (
    <section id="education" className="px-6 py-16 sm:px-12">
      <div className="mb-[30px]">
        <SectionHeader eyebrow="Education" title="Where I Studied" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Master's */}
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl bg-green px-8 py-[30px] text-cream">
            <div className="mb-[18px] flex items-center justify-between">
              <span className="relative grid h-20 w-20 place-items-center overflow-hidden rounded-[18px]">
                <Image src="/images/education/ugm/logo.png" alt="Universitas Gadjah Mada logo" fill className="object-cover" sizes="80px" />
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
              <span className="relative grid h-20 w-20 place-items-center">
                <Image src="/images/education/unnes/logo.png" alt="Universitas Negeri Semarang logo" fill className="object-cover" sizes="80px" />
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
              onClick={() => open(i)}
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
                  <Icon name={tr.certificate ? "badge-check" : "clock"} size={13} />
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
                {tr.certificate && (
                  <span
                    className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] font-bold"
                    style={{ color: tr.color }}
                  >
                    View certificate <Icon name="arrow-up-right" size={14} />
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <DetailModal
        open={t !== null}
        onClose={close}
        bg={t?.bg ?? "#fff"}
        accent={t?.color ?? "#2C6B5E"}
        icon={t && <Icon name={t.icon} size={24} />}
        title={t?.title ?? ""}
        subtitle={t?.org ?? ""}
        meta={
          t && (
            <>
              <span
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.3px]"
                style={{ color: t.color }}
              >
                <Icon name={t.certificate ? "badge-check" : "clock"} size={13} />
                {t.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-[#5c6b66]">
                <Icon name="calendar" size={13} />
                {t.year}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-[#5c6b66]">
                <Icon name="clock" size={13} />
                {t.duration}
              </span>
            </>
          )
        }
      >
        {t && (
          <>
            <div className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.5px] text-coral">
              About the training
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#43544f]">{t.desc}</p>
            {t.certificate && (
              <>
                <div className="mb-2.5 mt-[30px] text-[13px] font-extrabold uppercase tracking-[0.5px] text-green">
                  Certificate
                </div>
                <button
                  type="button"
                  onClick={() => setZoom(true)}
                  aria-label="View certificate fullscreen"
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-ink/10 bg-white"
                >
                  <Img
                    src={t.certificate}
                    alt={`${t.title} certificate`}
                    width={2000}
                    height={1414}
                    className="h-auto w-full"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-[12px] font-semibold text-white transition-opacity group-hover:bg-black/70">
                    <Icon name="maximize" size={13} />
                    Fullscreen
                  </span>
                </button>
              </>
            )}
          </>
        )}
      </DetailModal>

      {/* Fullscreen certificate — rendered at section level (not inside the modal)
          so `fixed` positions to the viewport, not the modal's transformed panel. */}
      {zoom && t?.certificate && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoom(false)}
        >
          <button
            onClick={() => setZoom(false)}
            aria-label="Close fullscreen"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <Icon name="x" size={22} />
          </button>
          <div
            className="relative h-full max-h-[90vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Img
              src={t.certificate}
              alt={`${t.title} certificate`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
