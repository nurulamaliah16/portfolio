import Icon from "./Icon";
import { EMAIL } from "../data";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-green px-6 pb-8 pt-16 text-cream sm:px-12">
      <div className="blob-a pointer-events-none absolute -right-10 -top-[70px] h-[260px] w-[260px] bg-amber opacity-[0.16]" />
      <div className="blob-b pointer-events-none absolute -bottom-[90px] -left-[50px] h-[220px] w-[220px] bg-coral opacity-[0.14]" />
      <div className="relative">
        <div className="mx-auto mb-11 max-w-[760px] text-center">
          <div className="mb-[22px] inline-flex items-center gap-2 rounded-full bg-amber/15 px-[18px] py-2 text-[13px] font-bold uppercase tracking-[0.4px] text-amber">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#8fe3b0" }} />
            Open to opportunities
          </div>
          <h2 className="font-fred m-0 mb-3.5 text-[40px] font-semibold leading-[1.05] tracking-[-0.8px] sm:text-[58px]">
            Let&apos;s create something
            <br />
            <span className="text-amber">meaningful</span> together.
          </h2>
          <p className="mx-auto m-0 mb-[30px] max-w-[520px] text-[17px] leading-[1.6] opacity-85">
            Research, storytelling, or a campaign that needs both — I&apos;d love to hear what
            you&apos;re working on.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={`mailto:${EMAIL}`}
              className="wiggle inline-flex items-center gap-2.5 rounded-full bg-amber px-7 py-3.5 text-[16px] font-extrabold text-ink"
              style={{ boxShadow: "0 18px 34px -16px rgba(232,168,60,.6)" }}
            >
              <Icon name="mail" size={18} />
              Say hello
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-cream/20 pt-[30px]">
          <a
            href="https://www.linkedin.com/in/nurulamaliah16/"
            target="_blank"
            rel="noopener noreferrer"
            className="wiggle inline-flex items-center gap-2 rounded-full bg-cream/10 px-[18px] py-2.5 text-[14px] font-bold text-cream hover:bg-cream/20"
          >
            <Icon name="briefcase" size={16} />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/nurulaamaliahh"
            target="_blank"
            rel="noopener noreferrer"
            className="wiggle inline-flex items-center gap-2 rounded-full bg-cream/10 px-[18px] py-2.5 text-[14px] font-bold text-cream hover:bg-cream/20"
          >
            <Icon name="camera" size={16} />
            Instagram
          </a>
        </div>

        <div className="mt-[34px] flex flex-wrap items-center justify-between gap-3 border-t border-cream/20 pt-[22px]">
          <span className="font-caveat text-[28px] font-bold">Nurul Amaliah</span>
          <span className="text-[13px] opacity-65">© 2026 Nurul Amaliah. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
