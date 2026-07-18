// Decide whether the animation libraries (framer-motion, gsap) should run for a
// given User-Agent. iOS <16 / Safari <16 crash on framer-motion 12 during
// hydration, freezing every SSR-hidden element. On those we disable animation
// and render content plain-visible instead.
//
// ponytail: UA sniff, not feature-detect. A parse/hydration crash happens before
// any client feature check could run, so the decision must be made at server
// render time — UA is the only signal available then. Bump the 16 floor if a
// newer Safari turns out to break too.
export function animationsSupported(ua: string | null | undefined): boolean {
  if (!ua) return true; // unknown (bots, missing header) → assume modern

  // Every browser on iOS is capped by the OS's WebKit, so gate on iOS version.
  if (/iPhone|iPad|iPod/.test(ua)) {
    const ios = ua.match(/OS (\d+)_/);
    return ios ? parseInt(ios[1], 10) >= 16 : true;
  }

  // Desktop Safari (and iPadOS reporting as Macintosh). Chrome/Chromium/Android
  // also contain "Safari" but no "Version/N", so exclude them.
  const safari = ua.match(/Version\/(\d+)[\d.]* Safari/);
  if (safari && !/Chrome|Chromium|Android/.test(ua)) {
    return parseInt(safari[1], 10) >= 16;
  }

  return true;
}

// Low-end heuristic from Device Memory API (GB, caps at 8) + logical CPU cores.
// <=4GB or <=4 cores → treat as low-end and skip animation to avoid jank.
// deviceMemory is Chrome/Android only; Safari exposes only hardwareConcurrency.
// ponytail: coarse on purpose. iPhone 11+ report 6 cores → stay enabled; budget
// phones / old iPhones fall under the line. Nudge thresholds if it over/under-cuts.
export function isLowEnd(specs: {
  deviceMemory?: number;
  hardwareConcurrency?: number;
}): boolean {
  const { deviceMemory, hardwareConcurrency } = specs;
  if (typeof deviceMemory === "number" && deviceMemory <= 4) return true;
  if (typeof hardwareConcurrency === "number" && hardwareConcurrency <= 4) return true;
  return false;
}

// Server-side animation decision from request signals: UA (old-browser crash
// guard) + Client Hints (Sec-CH-Device-Memory, Sec-CH-Prefers-Reduced-Motion).
// Deciding low-end at the server means low-end devices get plain-visible HTML
// instead of framer's opacity:0 markup — no blank paint waiting on hydration.
// Chromium sends the hints; Safari doesn't, so it falls back to the UA gate here
// plus the client-side belt in MotionProvider.
export function computeServerAnimate(opts: {
  ua: string | null | undefined;
  deviceMemory?: number;
  prefersReducedMotion?: boolean;
}): boolean {
  if (!animationsSupported(opts.ua)) return false;
  if (opts.prefersReducedMotion) return false;
  if (isLowEnd({ deviceMemory: opts.deviceMemory })) return false;
  return true;
}
