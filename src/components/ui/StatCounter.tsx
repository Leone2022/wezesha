"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";
import {
  Users,
  Calendar,
  Globe,
  GraduationCap,
  Recycle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  calendar: Calendar,
  globe: Globe,
  "graduation-cap": GraduationCap,
  recycle: Recycle,
};

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  icon?: string;
  light?: boolean;
}

export default function StatCounter({
  value,
  suffix,
  label,
  icon,
  light = false,
}: StatCounterProps) {
  const { count, ref } = useCountUp(value, 2000);
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div ref={ref} className="text-center px-4">
      {IconComponent && (
        <div
          className={cn(
            "inline-flex items-center justify-center w-14 h-14 rounded-full mb-4",
            light ? "bg-white/10" : "bg-green-primary/10"
          )}
        >
          <IconComponent
            className={cn(
              "w-7 h-7",
              light ? "text-green-light" : "text-green-primary"
            )}
          />
        </div>
      )}
      <div
        className={cn(
          "text-4xl md:text-5xl font-bold font-heading",
          light ? "text-white" : "text-green-dark"
        )}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <p
        className={cn(
          "mt-2 text-sm md:text-base font-medium",
          light ? "text-neutral-200" : "text-neutral-600"
        )}
      >
        {label}
      </p>
    </div>
  );
}
