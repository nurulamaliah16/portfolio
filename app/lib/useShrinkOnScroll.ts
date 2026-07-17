"use client";

import { useEffect, useRef, useState } from "react";
import { shouldCompact } from "./shrink";

/**
 * Shrinking sticky header on scroll. Walks up from the header to the nearest scroll container,
 * watches its scrollTop through a rAF-throttled listener, and returns a binary compact state.
 * Reset to expanded whenever `active` clears (modal closed).
 */
export function useShrinkOnScroll(active: boolean) {
  const [compact, setCompact] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
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
        setCompact((c) => shouldCompact(c, s.scrollTop, s.scrollHeight - s.clientHeight));
      });
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      setCompact(false); // reset on close so the next open starts expanded (no compact flash)
    };
  }, [active]);

  // Belt-and-suspenders: also derive false while closed, covering the no-scroller path where
  // the cleanup above never registered.
  return { headerRef, compact: active ? compact : false };
}
