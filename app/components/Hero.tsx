"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import Img from "./Img";
import Icon from "./Icon";
import { EMAIL } from "../data";
import { useAnimations } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

// useLayoutEffect flashes a warning during SSR; fall back to useEffect on server.
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const chips = [
  { icon: "scale", label: "Governance Research", bg: "#E4F0EC", color: "#2C6B5E" },
  { icon: "megaphone", label: "Social Media Strategy", bg: "#FDF2E0", color: "#b07d22" },
  { icon: "clapperboard", label: "Content Creation", bg: "#FBE4DE", color: "#E85D3D" },
] as const;

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const animate = useAnimations();

  // gsap: entrance timeline (once) + scroll parallax, both reduced-motion aware
  useIso(() => {
    const root = rootRef.current;
    if (!root || !animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let split: SplitText | undefined;

    const ctx = gsap.context(() => {
      const ease = "power3.out";
      gsap.set(
        "[data-hero]",
        { opacity: 0, y: 20 },
      );
      gsap.set("[data-hero='portrait']", { scale: 0.94, y: 0 });
      gsap.set("[data-blob]", { scale: 0.8, opacity: 0 });

      // Title pops in char by char; split after fonts load so font-fred measures right.
      // The typing word stays unsplit so TextPlugin can rewrite its text.
      const wordEl = root.querySelector<HTMLElement>("[data-typing]");
      const cursorEl = root.querySelector<HTMLElement>("[data-cursor]");
      document.fonts.ready.then(() => {
        if (cancelled) return;
        split = new SplitText(root.querySelectorAll("[data-split]"), { type: "chars" });
        const pieces = [...split.chars, ...(wordEl ? [wordEl] : [])];
        gsap.set(pieces, { opacity: 0, y: 26, scale: 0.5, display: "inline-block" });
        gsap.set("[data-hero='title']", { opacity: 1, y: 0 });
        gsap.to(pieces, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.028,
          duration: 0.55,
          ease: "back.out(2)",
          delay: 0.15,
          onComplete: () => {
            if (cancelled || !wordEl || !cursorEl) return;
            // typing loop: Ama -> Nurul -> Ama, blinking cursor alongside
            gsap.set(cursorEl, { display: "inline-block" });
            gsap
              .timeline({ repeat: -1 })
              .to(wordEl, { text: "", duration: 0.3, ease: "none" }, "+=5")
              .to(wordEl, { text: "Nurul", duration: 0.5, ease: "none" })
              .to(wordEl, { text: "", duration: 0.35, ease: "none" }, "+=5")
              .to(wordEl, { text: "Ama", duration: 0.35, ease: "none" });
          },
        });
      });

      const tl = gsap.timeline({ defaults: { ease, duration: 0.7 } });
      tl.to("[data-blob]", { scale: 1, opacity: 1, duration: 0.9, stagger: 0.12 }, 0)
        .to("[data-hero='portrait']", { opacity: 1, scale: 1, duration: 0.9 }, 0.1)
        .to("[data-hero='intro']", { opacity: 1, y: 0 }, 0.3)
        .to("[data-hero='email']", { opacity: 1, y: 0 }, 0.42)
        .to("[data-chip]", { opacity: 1, y: 0, stagger: 0.09, duration: 0.5 }, 0.5)
        .to("[data-hero='cta']", { opacity: 1, y: 0 }, 0.62)
        .to("[data-hero='badge']", { opacity: 1, y: 0 }, 0.7);

      // scroll parallax: portrait drifts up, badge down, for depth
      gsap.to("[data-parallax='portrait']", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-parallax='badge']", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);

    return () => {
      cancelled = true;
      split?.revert();
      ctx.revert();
      // TextPlugin mutates textContent; ctx.revert doesn't restore it
      const w = root.querySelector("[data-typing]");
      if (w) w.textContent = "Ama";
    };
  }, [animate]);

  // gsap: gentle parallax drift of the hero blobs following the cursor
  useEffect(() => {
    const el = blobRef.current;
    if (!el || !animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
  }, [animate]);

  return (
    <header
      ref={rootRef}
      id="home"
      className="grid grid-cols-1 items-center gap-5 px-6 pb-5 pt-8 sm:px-12 lg:grid-cols-[1.05fr_1fr]"
    >
      <div>
        <h1
          data-hero="title"
          className="font-fred mb-6 text-[46px] font-semibold leading-[1.02] tracking-[-1px] sm:text-[72px]"
        >
          <span className="sr-only">Nurul Amaliah — </span>
          <span aria-hidden="true" data-hero-title-text>
            <span data-split>Hey There,</span>
            <br />
            <span data-split>I&apos;m</span>{" "}
            <span data-typing className="text-green">
              Ama
            </span>
            <span data-cursor className="typing-cursor hidden text-green">
              |
            </span>
          </span>
        </h1>
        <p data-hero="intro" className="mb-6 max-w-[440px] text-[17px] leading-[1.6] text-[#43544f]">
          Political Science graduate &amp; Master&apos;s student in Politics and Government, working
          at the intersection of governance research, digital storytelling, and social media
          strategy.
        </p>
        <a
          data-hero="email"
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
              data-chip
              className="wiggle inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-bold"
              style={{ background: c.bg, color: c.color }}
            >
              <Icon name={c.icon} size={15} />
              {c.label}
            </span>
          ))}
        </div>
        <div data-hero="cta" className="flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="wiggle inline-flex items-center gap-2.5 rounded-full bg-green px-[26px] py-3.5 text-[16px] font-bold text-cream"
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
        <div
          data-hero="portrait"
          data-parallax="portrait"
          className="relative z-[1] h-[380px] w-[280px] overflow-hidden rounded-[36px] sm:w-[340px]"
        >
          <Img
            src="/images/gf.png"
            alt="Portrait of Ama"
            fill
            className="object-cover object-[50%_30%]"
            sizes="(max-width: 640px) 380px, 460px"
            priority
          />
        </div>
        <div
          data-hero="badge"
          data-parallax="badge"
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
