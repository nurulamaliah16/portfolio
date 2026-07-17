import Icon from "./Icon";
import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section className="px-6 py-16 sm:px-12">
      <div className="mb-[30px]">
        <div className="mb-1.5 text-[15px] font-bold text-coral">Recognition</div>
        <h2 className="font-fred m-0 mb-1.5 text-[34px] font-semibold tracking-[-0.5px] sm:text-[44px]">
          Achievements
        </h2>
        <p className="m-0 text-[16px] text-muted">
          Recognition across advocacy, public speaking, and leadership.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.06}>
            <div
              className="flex h-full flex-col overflow-hidden rounded-[20px] border border-ink/5 bg-white"
              style={{ boxShadow: "0 22px 44px -32px rgba(31,61,56,.42)" }}
            >
              <div className="relative" style={{ background: a.bg }}>
                <ImageSlot label="Photo (optional)" className="aspect-[4/3] w-full" bg={a.bg} />
                <span
                  className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 text-[11px] font-extrabold"
                  style={{ color: a.color }}
                >
                  <Icon name={a.icon} size={13} />
                  {a.rank}
                </span>
                <span className="absolute right-2.5 top-2.5 rounded-full bg-ink/80 px-2.5 py-1.5 text-[11px] font-extrabold text-white">
                  {a.year}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-4">
                <div className="font-fred text-[17px] font-semibold leading-[1.28]">{a.title}</div>
                <div className="mt-auto flex items-center gap-2.5 pt-3.5">
                  <span className="grid h-[30px] w-[30px] flex-none place-items-center overflow-hidden rounded-full border border-ink/10 bg-cream">
                    <ImageSlot label="" className="h-[30px] w-[30px]" bg="#fff" />
                  </span>
                  <span className="text-[12px] font-bold leading-[1.25] text-muted">{a.org}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
