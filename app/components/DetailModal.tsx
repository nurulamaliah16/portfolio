"use client";

import Icon from "./Icon";
import Modal from "./Modal";
import { useShrinkOnScroll } from "../lib/useShrinkOnScroll";

export default function DetailModal({
  open,
  onClose,
  bg,
  accent,
  icon,
  title,
  subtitle,
  meta,
  children,
}: {
  open: boolean;
  onClose: () => void;
  bg: string;
  accent: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  const { headerRef, compact } = useShrinkOnScroll(open);
  const pick = <T,>(big: T, small: T) => (compact ? small : big);

  return (
    <Modal open={open} onClose={onClose} hideClose>
      <div
        ref={headerRef}
        className="sticky top-0 z-[5] rounded-t-[26px] px-10 transition-all duration-300 ease-out"
        style={{ background: bg, paddingTop: pick(32, 15), paddingBottom: pick(25, 13) }}
      >
        <button
          onClick={onClose}
          className="absolute right-6 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink transition-all duration-300 ease-out"
          style={{ top: pick(20, 13) }}
          aria-label="Close"
        >
          <Icon name="x" size={16} />
        </button>
        <div className="flex items-center transition-all duration-300 ease-out" style={{ gap: pick(15, 12) }}>
          <span
            className="grid flex-none place-items-center overflow-hidden bg-white transition-all duration-300 ease-out"
            style={{ width: pick(56, 38), height: pick(56, 38), borderRadius: pick(16, 11), color: accent }}
          >
            {icon}
          </span>
          <div className="min-w-0 flex-1 pr-12">
            <div
              className="font-fred font-semibold leading-[1.18] text-ink transition-all duration-300 ease-out"
              style={{ fontSize: pick(24, 16) }}
            >
              {title}
            </div>
            <div
              className="font-extrabold transition-all duration-300 ease-out"
              style={{ color: accent, fontSize: pick(15, 12.5), marginTop: pick(5, 1) }}
            >
              {subtitle}
            </div>
          </div>
        </div>
        {meta && (
          <div
            className="transition-all duration-300 ease-out"
            style={{ opacity: compact ? 0 : 1, maxHeight: pick(70, 0), overflow: "hidden", marginTop: pick(14, 0) }}
          >
            <div className="flex flex-wrap items-center gap-2.5">{meta}</div>
          </div>
        )}
      </div>
      <div className="px-10 pb-9 pt-7">{children}</div>
    </Modal>
  );
}
