import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
  Camera,
  Clapperboard,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  ImageIcon,
  Library,
  Mail,
  Megaphone,
  Menu,
  Scale,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "at-sign": AtSign,
  award: Award,
  "badge-check": BadgeCheck,
  briefcase: Briefcase,
  calendar: Calendar,
  camera: Camera,
  clapperboard: Clapperboard,
  clock: Clock,
  "external-link": ExternalLink,
  globe: Globe,
  "graduation-cap": GraduationCap,
  image: ImageIcon,
  library: Library,
  mail: Mail,
  megaphone: Megaphone,
  menu: Menu,
  scale: Scale,
  star: Star,
  x: X,
};

export default function Icon({
  name,
  size = 18,
  className,
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} style={style} />;
}
