"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image + skeleton shimmer. Shows an animated placeholder until the image
 * loads, then fades the image in. Requires a positioned parent (relative) so the
 * absolute skeleton overlay covers the slot.
 */
export default function Img({ className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <span className="skeleton pointer-events-none absolute inset-0 z-0" aria-hidden />
      )}
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt passed through ...props */}
      <Image
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
      />
    </>
  );
}
