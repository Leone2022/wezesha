"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-green-light rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">
                Social Enterprise • Bulawayo, Zimbabwe
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Empowering Communities Through{" "}
              <span className="text-green-light">Green Innovation</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-neutral-200 leading-relaxed mb-10 max-w-2xl mx-auto">
              The seedbed for tomorrow&apos;s green and inclusive industries.
              We empower women and youth through sustainable entrepreneurship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                href="/products"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Explore Our Products
              </Button>
              <Button 
                href="/get-involved" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Get Involved
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-white">125+</p>
                <p className="text-sm text-neutral-300 mt-1">Active Members</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm text-neutral-300 mt-1">Years Impact</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-white">6,000+</p>
                <p className="text-sm text-neutral-300 mt-1">Lives Reached</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
