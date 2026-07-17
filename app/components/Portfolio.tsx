"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { works, type Work } from "../data";

const filters = [
  { key: "all", label: "All", accent: "#1F3D38" },
  { key: "Post", label: "Posts", accent: "#2C6B5E" },
  { key: "Reel", label: "Reels", accent: "#E85D3D" },
] as const;

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "Post" | "Reel">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "all" ? works : works.filter((w) => w.format === filter);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  // Load Instagram embed script once, then re-process whenever the visible set changes.
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(s);
  }, [filter, showAll, visible.length]);

  return (
    <section id="portfolio" className="bg-white px-6 py-16 sm:px-12">
      {/* ponytail: force IG embeds to fill grid cell + strip their default chrome; embed.js sets min-width:326px, 1px border, radius otherwise */}
      <style>{`.instagram-media{min-width:0 !important;width:100% !important;margin:0 !important;border:none !important;border-radius:0 !important;box-shadow:none !important;}`}</style>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-5">
        <SectionHeader eyebrow="Portfolio" title="My Latest Work" />
        <div className="flex gap-2 rounded-full bg-cream p-1.5">
          {filters.map((f) => {
            const on = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setShowAll(false);
                }}
                className="cursor-pointer rounded-full px-5 py-2.5 text-[14px] font-bold transition-all"
                style={
                  on
                    ? { background: f.accent, color: "#fff", boxShadow: `0 10px 20px -12px ${f.accent}` }
                    : { background: "transparent", color: "#6b756f" }
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="m-0 mb-[26px] max-w-[620px] text-[16px] leading-[1.6] text-muted">
        Two hats, one feed: managing content across NGO &amp; brand social accounts as a{" "}
        <strong className="text-green">social media specialist</strong>, and creating collaborative
        posts &amp; reels as a <strong className="text-coral">content creator</strong>. Tap any card
        to open it on Instagram.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <IgEmbed item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length > 6 && (
        <div className="mt-[26px] flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-cream px-[26px] py-3 text-[14px] font-bold text-ink transition-colors hover:border-green hover:bg-green hover:text-cream"
          >
            {showAll ? "Show less" : "Show all work"}
            <Icon name={showAll ? "chevron-up" : "chevron-down"} size={16} />
          </button>
        </div>
      )}
    </section>
  );
}

function IgEmbed({ item }: { item: Work }) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-ink/5 bg-white transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 24px 46px -32px rgba(31,61,56,.45)" }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={item.url}
        data-instgrm-version="14"
      />
    </div>
  );
}
