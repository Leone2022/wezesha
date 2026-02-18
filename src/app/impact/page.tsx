"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Button from "@/components/ui/Button";
import {
  impactStats,
  testimonials,
  sdgGoals,
} from "@/data/siteData";

export default function ImpactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-dark to-green-darker py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-green-light text-sm font-semibold tracking-wider uppercase">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white mt-2 mb-4">
              Measuring Change
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Real impact, real stories. See how our work is transforming
              communities and building a greener future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-16 lg:py-20 bg-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {impactStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                light
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Success Stories"
            title="Voices of Transformation"
            description="Hear directly from the people whose lives have been changed."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Gallery"
            title="Our Work in Pictures"
            description="A glimpse into our production hubs, training programs, and community impact."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl bg-gradient-to-br from-green-primary/10 to-green-dark/10 overflow-hidden ${
                  i === 1 || i === 6 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div
                  className={`${
                    i === 1 || i === 6 ? "aspect-square" : "aspect-[4/3]"
                  } flex items-center justify-center`}
                >
                  <img src="/images/gallery/wezeshalogo2.png" alt="" className="w-12 h-auto opacity-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Documentary"
            title="Untold Stories: Waste Harvesters of Bulawayo"
            description="Watch our documentary exploring the lives and aspirations of waste harvesters in Bulawayo."
          />

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-dark/10 to-green-primary/10 border border-green-primary/20 overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <img src="/images/gallery/wezeshalogo2.png" alt="Wezesha Industries" className="w-24 h-auto mx-auto opacity-40 mb-4" />
                <p className="text-neutral-500 text-sm font-medium">Documentary coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Contributions */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Global Goals"
            title="Our SDG Contributions"
            description="How our work aligns with the United Nations Sustainable Development Goals."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl p-5 text-white text-center hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: goal.color }}
              >
                <span className="text-3xl font-bold font-heading block mb-1">
                  {goal.number}
                </span>
                <h4 className="text-sm font-semibold mb-1">{goal.title}</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-green-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Help Us Grow Our Impact
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Join us in building a greener, more inclusive future for Zimbabwe.
          </p>
          <Button
            href="/get-involved"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Get Involved
          </Button>
        </div>
      </section>
    </>
  );
}
