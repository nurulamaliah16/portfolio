import Icon from "./Icon";
import Reveal from "./Reveal";

const services = [
  { icon: "scale", bg: "#2C6B5E", title: "Political Analysis & Policy Research", sub: "Governance & policy gaps" },
  { icon: "megaphone", bg: "#E8A83C", title: "Social Media Strategy & Content", sub: "Advocacy campaigns" },
  { icon: "clapperboard", bg: "#E85D3D", title: "Content Creation", sub: "Engaging short-form video" },
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-center gap-10 bg-white px-6 py-16 sm:px-12 md:grid-cols-[1fr_1.08fr] md:gap-14"
    >
      <div className="flex flex-col gap-[18px]">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div
              className="flex items-center gap-5 rounded-[22px] bg-cream px-6 py-5"
              style={{ boxShadow: "0 20px 40px -26px rgba(31,61,56,.4)" }}
            >
              <span
                className="grid h-[60px] w-[60px] flex-none place-items-center rounded-full text-white"
                style={{ background: s.bg }}
              >
                <Icon name={s.icon} size={26} />
              </span>
              <div>
                <div className="font-fred text-[22px] font-semibold">{s.title}</div>
                <div className="text-[14px] font-semibold text-muted">{s.sub}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mb-1.5 text-[15px] font-bold text-coral">About</div>
        <h2 className="font-fred m-0 mb-[18px] text-[34px] font-semibold tracking-[-0.5px] sm:text-[44px]">
          What do I help with?
        </h2>
        <p className="max-w-[460px] text-[17px] leading-[1.7] text-[#43544f]">
          I help bring research-based insight and creative storytelling together — whether it&apos;s
          analyzing governance and policy gaps, building social media strategy for advocacy
          campaigns, or producing engaging short-form video content.
        </p>
      </Reveal>
    </section>
  );
}
