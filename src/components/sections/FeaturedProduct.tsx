"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Recycle, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function FeaturedProduct() {
  return (
    <section
      className="py-20 lg:py-28 bg-neutral-50"
      aria-label="Featured product"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Featured Product"
          title="The Eco-Broom"
          description="Our flagship product that transforms waste into wealth."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/images/products/ecobroom.jpg"
                alt="Wezesha Industries Eco-Broom"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold font-heading text-neutral-900 mb-4">
              Handcrafted from Recycled Materials
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Our signature Eco-Broom is handcrafted from recycled PET bottles
              and locally sourced grass. Each broom diverts plastic waste from
              landfills while providing dignified employment to women in our
              production hubs. Built to last, gentle on surfaces, and kind to
              the planet.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-primary/10 flex items-center justify-center shrink-0">
                  <Recycle className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">
                    15+ PET Bottles Diverted
                  </h4>
                  <p className="text-sm text-neutral-500">
                    Each broom recycles approximately 15 plastic bottles from
                    landfills.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Women-Made</h4>
                  <p className="text-sm text-neutral-500">
                    Every purchase directly supports a woman artisan in Bulawayo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-primary/10 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">
                    100% Eco-Friendly
                  </h4>
                  <p className="text-sm text-neutral-500">
                    Made from sustainable, locally sourced materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/products"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                View All Products
              </Button>
              <Button href="/contact" variant="outline">
                Order Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
