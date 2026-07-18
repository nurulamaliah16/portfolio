import Icon from "./Icon";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import SectionHeader from "./SectionHeader";
import { expertise, tools } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 sm:px-12">
      <div className="mb-[22px]">
        <SectionHeader eyebrow="Toolkit" title="Skills & Tools" />
      </div>
      <Reveal>
        <div
          className="rounded-[22px] border border-ink/5 bg-white px-[30px] py-[26px]"
          style={{ boxShadow: "0 24px 46px -34px rgba(31,61,56,.4)" }}
        >
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e) => (
              <div key={e.title} className="flex items-start gap-3">
                <span
                  className="grid h-[42px] w-[42px] flex-none place-items-center rounded-xl"
                  style={{ background: e.bg, color: e.color }}
                >
                  <Icon name={e.icon} size={20} />
                </span>
                <div className="min-w-0">
                  <div className="font-fred text-[16.5px] font-semibold leading-[1.15]">{e.title}</div>
                  <div className="mt-1 text-[12.5px] font-semibold leading-[1.45] text-muted">{e.line}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="my-[22px] h-px bg-ink/10" />

          <div className="mb-3.5 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center">
            <span className="mr-1 flex-none text-[12px] font-extrabold uppercase tracking-[0.5px] text-coral">
              Tools
            </span>
            <Marquee speed={22} className="w-full sm:flex-1">
              {tools.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-tint px-3 py-[7px] text-[12.5px] font-bold text-[#b07d22]"
                >
                  <Icon name={t.icon} size={14} />
                  {t.name}
                </span>
              ))}
            </Marquee>
          </div>

          <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="mr-1 text-[12px] font-extrabold uppercase tracking-[0.5px] text-green">
              Languages
            </span>
            <div className="flex flex-wrap gap-2.5 sm:contents">
              <span className="wiggle inline-flex items-center gap-2 rounded-full bg-green px-3.5 py-[7px] text-[12.5px] font-extrabold text-cream">
                <Icon name="badge-check" size={15} style={{ color: "#E8A83C" }} />
                English · IELTS <span className="text-amber">6.0</span>
              </span>
              <span className="wiggle inline-flex items-center gap-1.5 rounded-full bg-green-tint px-3 py-[7px] text-[12.5px] font-bold text-green">
                <Icon name="globe" size={14} />
                Bahasa Indonesia · Native
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
