"use client";

import {
  Sprout,
  Recycle,
  Leaf,
  Handshake,
  Link,
  Megaphone,
  Wheat,
  Briefcase,
  FileText,
  Heart,
  Users,
  Shield,
  CheckCircle,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  recycle: Recycle,
  leaf: Leaf,
  handshake: Handshake,
  link: Link,
  megaphone: Megaphone,
  wheat: Wheat,
  briefcase: Briefcase,
  "file-text": FileText,
  heart: Heart,
  users: Users,
  shield: Shield,
  "check-circle": CheckCircle,
  lightbulb: Lightbulb,
};

interface ServiceIconProps {
  icon: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ServiceIcon({
  icon,
  size = "md",
  className,
}: ServiceIconProps) {
  const IconComponent = iconMap[icon] || Leaf;

  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-2.5",
    lg: "w-16 h-16 p-3.5",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-green-primary/10 text-green-primary",
        sizeClasses[size],
        className
      )}
    >
      <IconComponent className={iconSizes[size]} />
    </div>
  );
}
