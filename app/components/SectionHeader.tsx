"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useAnimations } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

// useLayoutEffect warns during SSR; fall back to useEffect on server.
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const animate = useAnimations();

  useIso(() => {
    const root = rootRef.current;
    if (!root || !animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let split: SplitText | undefined;

    const ctx = gsap.context(() => {
      const eyebrowEl = root.querySelector("[data-eyebrow]");
      const titleEl = root.querySelector<HTMLElement>("[data-title]");
      const subEl = root.querySelector("[data-sub]");
      if (!titleEl) return;

      // Split after fonts load — font-fred is a custom face; splitting early mis-measures.
      document.fonts.ready.then(() => {
        if (cancelled) return;
        split = new SplitText(titleEl, { type: "words" });

        gsap.set([eyebrowEl, subEl].filter(Boolean), { opacity: 0, y: 12 });
        gsap.set(split.words, { opacity: 0, y: 24 });

        ScrollTrigger.create({
          trigger: root,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            if (eyebrowEl) tl.to(eyebrowEl, { opacity: 1, y: 0, duration: 0.5 }, 0);
            tl.to(split!.words, { opacity: 1, y: 0, stagger: 0.06, duration: 0.6 }, 0.1);
            if (subEl) tl.to(subEl, { opacity: 1, y: 0, duration: 0.5 }, 0.25);
          },
        });

        ScrollTrigger.refresh();
      });
    }, root);

    return () => {
      cancelled = true;
      split?.revert();
      ctx.revert();
    };
  }, [animate]);

  return (
    <div ref={rootRef}>
      <div data-eyebrow className="mb-1.5 text-[15px] font-bold text-coral">
        {eyebrow}
      </div>
      <h2
        data-title
        className="font-fred m-0 text-[34px] font-semibold tracking-[-0.5px] sm:text-[44px]"
      >
        {title}
      </h2>
      {sub && (
        <p data-sub className="mt-2 text-[16px] text-muted">
          {sub}
        </p>
      )}
    </div>
  );
}
