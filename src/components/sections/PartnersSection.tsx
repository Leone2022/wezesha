"use client";

import { motion } from "framer-motion";
import { partners } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-label="Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Partners"
          title="Trusted By Leading Organisations"
          description="We collaborate with partners who share our vision for a green and inclusive future."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-green-primary/20 hover:shadow-md transition-all duration-300 aspect-[3/2]"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <span className="text-green-primary font-bold text-sm">
                    {partner.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 font-medium leading-tight">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
