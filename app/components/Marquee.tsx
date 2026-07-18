"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useAnimations } from "../lib/motion";

// useLayoutEffect warns during SSR; fall back to useEffect on server.
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Marquee({
  children,
  speed = 40, // px per second
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [reduced, setReduced] = useState(false);
  const animate = useAnimations();

  useIso(() => {
    const track = trackRef.current;
    if (!track || !animate) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    const ctx = gsap.context(() => {
      // Track holds two identical copies; travelling -50% loops seamlessly.
      const half = track.scrollWidth / 2;
      tweenRef.current = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration: half / speed,
      });
    }, track);

    return () => ctx.revert();
  }, [speed, animate]);

  // Static wrap fallback for reduced-motion / unsupported browsers.
  if (reduced || !animate) {
    return <div className={`flex flex-wrap gap-2.5 ${className ?? ""}`}>{children}</div>;
  }

  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.resume()}
    >
      <div ref={trackRef} className="flex w-max">
        <div className="flex shrink-0 gap-2.5 pr-2.5">{children}</div>
        <div aria-hidden className="flex shrink-0 gap-2.5 pr-2.5">
          {children}
        </div>
      </div>
    </div>
  );
}
