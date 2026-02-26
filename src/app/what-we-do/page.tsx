"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Button from "@/components/ui/Button";
import { services, programs } from "@/data/siteData";

export default function WhatWeDoPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white mt-2 mb-4">
              Services & Programs
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              From training green entrepreneurs to connecting producers with
              markets, we build the full ecosystem for inclusive green growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 lg:py-28 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Securing green, gainful and gender-centric livelihoods"
            description="Through green manufacturing, training, mentorship and incubation we empower differently-abled women and youths to monetise green skills and to make climate action part of every day life."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-green-primary text-sm font-semibold tracking-wider uppercase">
                Our Approach
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-neutral-900 mt-2 mb-6">
                A Hybrid Model for Inclusive Growth
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We dismantle traditional economic barriers by commercialising
                prototypes and providing specialised technical capacity building.
                We are dedicated to transitioning informal players and aspiring
                entrepreneurs into formal, resilient enterprises.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Fast-track green business model launches (MVPs) with reduced capital risk",
                  "Provide hands-on vocational training in PET recycling, beadwork, and agro-value addition",
                  "Incubate early-stage start-ups through the fragile initial phases",
                  "Connect producers to formal markets, bypassing exploitative middlemen",
                  "Build ecosystems and green movements for systemic change",
                  "Gender-centric design ensuring women and youth lead and benefit",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-primary shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-green-primary pl-5 text-neutral-600 italic text-sm leading-relaxed">
                &ldquo;The Wezesha business model is an economic prototype of a hybrid
                economy that embraces the traditional with the modern, the small
                scale and the big scale, the informal and the formal. The Wezesha
                model allows the least powerful to operate alongside the most
                powerful economic players.&rdquo;
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/gallery/training.jpg"
                  alt="Wezesha Industries hybrid approach"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-28 bg-white" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Programs"
            title="Flagship Initiatives"
            description="Impactful programs that drive community transformation."
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-green-primary/10 to-green-dark/10 flex items-center justify-center">
                  <img src="/images/gallery/wezeshalogo2.png" alt="" className="w-16 h-auto opacity-30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  {program.target && (
                    <p className="text-xs text-green-primary font-semibold">
                      Target: {program.target}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-green-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Go Green?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Whether you want to learn, produce, trade, or partner — we have a
            pathway for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/get-involved"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Get Involved
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-dark"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
