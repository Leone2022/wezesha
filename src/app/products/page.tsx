"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingBag, Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { products } from "@/data/siteData";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
            className="max-w-3xl"
          >
            <span className="text-green-light text-sm font-semibold tracking-wider uppercase">
              Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white mt-2 mb-4">
              Green Products
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Sustainable products handcrafted by our network of women and youth
              producers. Every purchase supports green livelihoods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-neutral-400 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-green-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filtered.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-green-primary/20 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-green-primary/5 to-green-dark/5 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-neutral-900 group-hover:text-green-primary transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>
                    {product.impact && (
                      <p className="text-xs text-green-primary bg-green-primary/5 rounded-lg px-3 py-2 mb-4">
                        {product.impact}
                      </p>
                    )}
                    {product.price && (
                      <p className="text-lg font-bold text-green-dark mb-4">
                        {product.price}
                      </p>
                    )}
                    <Button
                      href="/contact"
                      size="sm"
                      className="w-full justify-center"
                      icon={<ShoppingBag className="w-4 h-4" />}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle="Bulk Orders"
              title="Order in Quantity"
              description="We welcome bulk and institutional orders. Contact us for wholesale pricing and custom requirements."
            />

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-md">
              <h3 className="text-xl font-bold font-heading text-neutral-900 mb-4">
                How to Order
              </h3>
              <div className="space-y-4 text-left mb-8">
                {[
                  "Contact us via email or phone with your order details",
                  "We&apos;ll provide a quotation based on quantity and delivery requirements",
                  "Confirm your order and arrange payment",
                  "We produce and deliver your green products",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-green-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-neutral-600">{step}</span>
                  </div>
                ))}
              </div>
              <Button
                href="/contact"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
