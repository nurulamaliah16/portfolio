"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Icon from "./Icon";
import { EMAIL } from "../data";

const chips = [
  { icon: "scale", label: "Governance Research", bg: "#E4F0EC", color: "#2C6B5E" },
  { icon: "megaphone", label: "Social Media Strategy", bg: "#FDF2E0", color: "#b07d22" },
  { icon: "clapperboard", label: "Content Creation", bg: "#FBE4DE", color: "#E85D3D" },
] as const;

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  // gsap: gentle parallax drift of the hero blobs following the cursor
  useEffect(() => {
    const el = blobRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const blobs = el.querySelectorAll<HTMLElement>("[data-blob]");
    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      blobs.forEach((b, i) => {
        const depth = (i + 1) * 10;
        gsap.to(b, { x: cx * depth, y: cy * depth, duration: 0.8, ease: "power2.out" });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header
      id="home"
      className="grid grid-cols-1 items-center gap-5 px-6 pb-5 pt-8 sm:px-12 lg:grid-cols-[1.05fr_1fr]"
    >
      <div>
        <h1 className="font-fred mb-6 text-[46px] font-semibold leading-[1.02] tracking-[-1px] sm:text-[72px]">
          <span className="sr-only">Nurul Amaliah — </span>
          <span aria-hidden="true">
            Hey There,
            <br />
            I&apos;m <span className="text-green">Ama</span>
          </span>
        </h1>
        <p className="mb-6 max-w-[440px] text-[17px] leading-[1.6] text-[#43544f]">
          Political Science graduate &amp; Master&apos;s student in Politics and Government, working
          at the intersection of governance research, digital storytelling, and social media
          strategy.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mb-[30px] inline-flex items-center gap-2.5 text-[16px] font-bold text-coral hover:text-[#c8492d]"
        >
          <Icon name="mail" size={18} />
          {EMAIL}
        </a>
        <div className="mb-[30px] flex flex-wrap gap-2.5">
          {chips.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-bold"
              style={{ background: c.bg, color: c.color }}
            >
              <Icon name={c.icon} size={15} />
              {c.label}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2.5 rounded-full bg-green px-[26px] py-3.5 text-[16px] font-bold text-cream transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "0 16px 30px -16px rgba(44,107,94,.7)" }}
          >
            View my work <Icon name="arrow-right" size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center px-2 py-3.5 text-[16px] font-bold text-ink">
            Let&apos;s talk
          </a>
        </div>
      </div>

      <div ref={blobRef} className="relative flex h-[420px] items-end justify-center sm:h-[520px]">
        <div
          data-blob
          className="blob-a absolute left-1/2 top-[34px] h-[340px] w-[300px] -translate-x-1/2 -rotate-6 bg-green sm:h-[430px] sm:w-[400px]"
        />
        <div
          data-blob
          className="blob-b absolute left-[calc(50%+80px)] top-[70px] h-[120px] w-[120px] rotate-[10deg] bg-amber opacity-75 sm:left-[calc(50%+110px)] lg:left-auto lg:right-3"
        />
        <div className="relative z-[1] h-[380px] w-[280px] overflow-hidden rounded-[36px] sm:w-[340px]">
          <Image
            src="/images/gf.png"
            alt="Portrait of Ama"
            fill
            className="object-cover object-[50%_30%]"
            sizes="(max-width: 640px) 380px, 460px"
            priority
          />
        </div>
        <div
          className="absolute bottom-4 left-[-6px] z-[2] max-w-[220px] rounded-2xl bg-white p-3.5"
          style={{ boxShadow: "0 18px 34px -18px rgba(31,61,56,.45)" }}
        >
          <div className="flex items-center gap-2.5">
            <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-green text-white">
              <Icon name="graduation-cap" size={16} />
            </span>
            <span className="text-[12.5px] font-bold leading-[1.3]">
              Master&apos;s student in Politics &amp; Government, Universitas Gadjah Mada
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
