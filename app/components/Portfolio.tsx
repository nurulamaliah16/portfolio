"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import ImageSlot from "./ImageSlot";
import SectionHeader from "./SectionHeader";
import { works, type Work } from "../data";

const filters = [
  { key: "all", label: "All", accent: "#1F3D38" },
  { key: "Post", label: "Posts", accent: "#2C6B5E" },
  { key: "Reel", label: "Reels", accent: "#E85D3D" },
] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "Post" | "Reel">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "all" ? works : works.filter((w) => w.format === filter);
  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="portfolio" className="bg-white px-6 py-16 sm:px-12">
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

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
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
              <Card item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length > 8 && (
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

function Card({ item }: { item: Work }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener"
      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-ink/5 bg-cream text-inherit transition-transform hover:-translate-y-1"
      style={{ boxShadow: "0 24px 46px -32px rgba(31,61,56,.45)" }}
    >
      <div className="relative">
        <ImageSlot label="Post / reel" className="aspect-[4/5] w-full" />
        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 text-[11px] font-extrabold text-ink">
          <Icon name={item.platformIcon} size={13} />
          {item.platformLabel}
        </span>
        <span
          className="absolute right-2.5 top-2.5 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-extrabold text-white"
          style={{ background: item.roleColor }}
        >
          {item.format}
        </span>
        <span className="absolute bottom-2.5 right-2.5 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-coral">
          <Icon name="external-link" size={13} />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-4 pb-4 pt-3.5">
        <span
          className="inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.3px]"
          style={{ background: item.roleTint, color: item.roleColor }}
        >
          <Icon name="at-sign" size={12} />
          {item.role}
        </span>
        <div className="text-[13.5px] font-bold leading-[1.4] text-[#3a4a45]">{item.caption}</div>
        <div className="mt-auto flex items-center gap-2 border-t border-ink/10 pt-2.5">
          <span className="grid h-[30px] w-[30px] flex-none place-items-center overflow-hidden rounded-full border border-ink/10 bg-white">
            <ImageSlot label="" className="h-[30px] w-[30px]" bg="#fff" />
          </span>
          <span className="text-[12.5px] font-bold leading-[1.2] text-[#5c6b66]">{item.account}</span>
        </div>
      </div>
    </a>
  );
}
