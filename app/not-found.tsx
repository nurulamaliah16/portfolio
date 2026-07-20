import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Nurul Amaliah",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[#e8f0ec] px-6 text-ink">
      <div className="max-w-md rounded-[30px] bg-cream px-8 py-12 text-center shadow-[0_40px_80px_-30px_rgba(31,61,56,.45)]">
        <p className="font-caveat m-0 text-[40px] font-bold text-green">404</p>
        <h1 className="font-fred m-0 mt-2 text-[32px] font-semibold tracking-[-0.5px]">
          Page not found
        </h1>
        <p className="m-0 mt-3 text-[16px] leading-[1.6] text-[#43544f]">
          That URL isn&apos;t on this portfolio. Head back to the home page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-green px-6 py-3 text-[15px] font-bold text-cream"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
