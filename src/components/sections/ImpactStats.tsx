"use client";

import { impactStats } from "@/data/siteData";
import StatCounter from "@/components/ui/StatCounter";

export default function ImpactStats() {
  return (
    <section
      className="py-16 lg:py-20 bg-green-dark relative overflow-hidden"
      aria-label="Impact statistics"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-light rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-green-light mb-10">
          Our impact at a glance
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {impactStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              icon={stat.icon}
              light
            />
          ))}
        </div>
      </div>
    </section>
  );
}
