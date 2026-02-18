"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Handshake, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-neutral-900 overflow-hidden" aria-label="Hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/gallery/workshop.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/85 via-neutral-900/80 to-green-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-20 lg:pt-36 lg:pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-green-light rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">
                Social Enterprise • Bulawayo, Zimbabwe
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              We make green products and empower differently-abled women and youths{" "}
              <span className="text-green-light">to do the same.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed mb-10 max-w-2xl mx-auto">
              Work with us to build tomorrow&apos;s green and inclusive industries today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 items-center">
              {/* Primary row */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
                <Button
                  href="/what-we-do"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Explore our Products and Services
                </Button>
                <Button
                  href="https://ourtake.app/store/wezesha-industries"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  size="lg"
                  icon={<ShoppingBag className="w-5 h-5" />}
                >
                  Buy our Products
                </Button>
              </div>
              {/* Secondary row */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
                <Button
                  href="/get-involved"
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white"
                  icon={<Handshake className="w-5 h-5" />}
                >
                  Work with Us
                </Button>
                <Button
                  href="/impact"
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                  icon={<TrendingUp className="w-5 h-5" />}
                >
                  Our Traction
                </Button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
