import Icon from "./Icon";
import Reveal from "./Reveal";
import { expertise, tools } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 sm:px-12">
      <div className="mb-[22px]">
        <div className="mb-1.5 text-[15px] font-bold text-coral">Toolkit</div>
        <h2 className="font-fred m-0 text-[34px] font-semibold tracking-[-0.5px] sm:text-[44px]">
          Skills &amp; Tools
        </h2>
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

          <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
            <span className="mr-1 text-[12px] font-extrabold uppercase tracking-[0.5px] text-coral">Tools</span>
            {tools.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-1.5 rounded-full bg-amber-tint px-3 py-[7px] text-[12.5px] font-bold text-[#b07d22]"
              >
                <Icon name={t.icon} size={14} />
                {t.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mr-1 text-[12px] font-extrabold uppercase tracking-[0.5px] text-green">
              Languages
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-green px-3.5 py-[7px] text-[12.5px] font-extrabold text-cream">
              <Icon name="badge-check" size={15} style={{ color: "#E8A83C" }} />
              English · IELTS <span className="text-amber">6.0</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-tint px-3 py-[7px] text-[12.5px] font-bold text-green">
              <Icon name="globe" size={14} />
              Bahasa Indonesia · Native
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
