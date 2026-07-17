import Icon from "./Icon";
import Reveal from "./Reveal";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-16 sm:px-12">
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
              className="flex h-full flex-col rounded-[20px] border border-ink/5 bg-white p-[18px]"
              style={{ boxShadow: "0 22px 44px -32px rgba(31,61,56,.42)" }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="grid h-12 w-12 flex-none place-items-center rounded-[14px]"
                  style={{ background: a.bg, color: a.color }}
                >
                  <Icon name={a.icon} size={22} />
                </span>
                <span className="rounded-full bg-ink/80 px-2.5 py-1.5 text-[11px] font-extrabold text-white">
                  {a.year}
                </span>
              </div>
              <span
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-extrabold"
                style={{ background: a.bg, color: a.color }}
              >
                {a.rank}
              </span>
              <div className="font-fred mt-2.5 text-[17px] font-semibold leading-[1.28]">
                {a.title}
              </div>
              <div className="mt-auto pt-3.5 text-[12px] font-bold leading-[1.25] text-muted">
                {a.org}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
