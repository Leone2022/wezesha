"use client";

import { motion } from "framer-motion";
import { partners } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

export default function PartnersSection() {
  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 lg:py-24 bg-white" aria-label="Supporters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Supporters"
          title="Our Journey has been supported by the following leading organisations"
          description="We collaborate with supporters who share our vision for a green and inclusive future."
        />

        {/* Infinite scrolling container */}
        <div className="relative overflow-hidden mt-12">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling content */}
          <motion.div
            className="flex gap-8 lg:gap-12"
            animate={{
              x: [0, -1 * (partners.length * 180)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-28 bg-white rounded-lg border border-neutral-100 p-4 hover:border-green-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
