import { DynamicIcon, type IconName } from "lucide-react/dynamic";

export default function Icon({
  name,
  size = 18,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return <DynamicIcon name={name} size={size} className={className} style={style} />;
}
