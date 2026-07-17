export default function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div>
      <div className="mb-1.5 text-[15px] font-bold text-coral">{eyebrow}</div>
      <h2 className="font-fred m-0 text-[34px] font-semibold tracking-[-0.5px] sm:text-[44px]">
        {title}
      </h2>
      {sub && <p className="mt-2 text-[16px] text-muted">{sub}</p>}
    </div>
  );
}
