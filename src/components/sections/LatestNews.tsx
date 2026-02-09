"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/siteData";
import { formatDate } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function LatestNews() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="Latest news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Latest News"
          title="Stories & Updates"
          description="Stay up to date with our latest projects, success stories, and green economy insights."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-green-primary/20 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/10] bg-gradient-to-br from-green-primary/10 to-green-dark/10 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">📰</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-neutral-900 group-hover:text-green-primary transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1 text-green-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/blog"
            variant="outline"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
