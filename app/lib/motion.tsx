"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { isLowEnd } from "./ua";

// Two gates, so components can tell "framer-motion is safe to mount" apart from
// "animations should actually play":
//
//  - Supported: framer-motion won't crash. Decided purely server-side from the
//    User-Agent (old Safari crashes on hydration). Never changes after mount, so
//    components that key off it never swap element type → no remount.
//  - Enabled: Supported AND the device should animate. The server folds in Client
//    Hints (device memory, reduced-motion); the client belt below adds signals
//    the server can't see (hardwareConcurrency, Safari, runtime reduced-motion).
//
// A component renders plain markup only when unsupported; when supported but not
// enabled it keeps the same motion element and just neutralizes the animation,
// avoiding a remount when Enabled flips off shortly after mount.
const SupportedContext = createContext(true);
const EnabledContext = createContext(true);

export function MotionProvider({
  value,
  children,
}: {
  value: boolean;
  children: React.ReactNode;
}) {
  const [clientOk, setClientOk] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const low = isLowEnd({
      deviceMemory: (navigator as Navigator & { deviceMemory?: number }).deviceMemory,
      hardwareConcurrency: navigator.hardwareConcurrency,
    });
    if (reduced || low) setClientOk(false);
  }, []);

  return (
    <SupportedContext.Provider value={value}>
      <EnabledContext.Provider value={value && clientOk}>{children}</EnabledContext.Provider>
    </SupportedContext.Provider>
  );
}

// framer-motion is safe to mount (server UA gate; stable after mount).
export const useMotionSupported = () => useContext(SupportedContext);
// Animations should actually play (support + client capability).
export const useAnimations = () => useContext(EnabledContext);
