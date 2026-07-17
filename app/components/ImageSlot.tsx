import Icon from "./Icon";

/**
 * Placeholder for a photo / video / document that Ama will drop in later.
 * ponytail: static placeholder, swap for next/image when real assets exist.
 */
export default function ImageSlot({
  label = "Photo",
  className,
  bg = "#F0ECE2",
}: {
  label?: string;
  className?: string;
  bg?: string;
}) {
  return (
    <div
      className={`grid place-items-center text-center ${className ?? ""}`}
      style={{ background: bg }}
    >
      <div className="flex flex-col items-center gap-1.5 px-2 text-muted/70">
        <Icon name="image" size={22} />
        <span className="text-[11px] font-semibold leading-tight">{label}</span>
      </div>
    </div>
  );
}
