"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, ShoppingBag, Handshake } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-br from-green-dark via-green-darker to-green-dark relative overflow-hidden"
      aria-label="Call to action"
    >
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-green-light text-sm font-semibold tracking-wider uppercase mb-2">
            Join Our Movement
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            Be Part of the Green Revolution
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Whether you buy our products, volunteer your time, or sponsor a
            programme, every contribution builds a greener, more inclusive
            future.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {[
            {
              icon: ShoppingBag,
              title: "Buy Our Products",
              desc: "Support green livelihoods with every purchase.",
              delay: 0.1,
            },
            {
              icon: Users,
              title: "Volunteer",
              desc: "Share your skills and make a difference.",
              delay: 0.2,
            },
            {
              icon: Handshake,
              title: "Sponsor Programs",
              desc: "Fund training and green enterprise development.",
              delay: 0.3,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-green-light/30 transition-colors"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-green-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-green-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            href="/get-involved"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Get Involved Today
          </Button>
        </div>
      </div>
    </section>
  );
}
