"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Button from "@/components/ui/Button";

export default function WhatWeDoPreview() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="What we do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Do – Our Services"
          title="Securing green, gainful and gender-centric livelihoods"
          description="We go beyond training and empower women and youths to be the engines driving green value chains."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-neutral-50 rounded-xl p-6 lg:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-primary/20"
            >
              <ServiceIcon icon={service.icon} size="lg" />
              <h3 className="mt-5 text-xl font-bold font-heading text-neutral-900 group-hover:text-green-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-neutral-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/what-we-do"
            variant="outline"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
