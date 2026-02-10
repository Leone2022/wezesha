"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { blogPosts } from "@/data/siteData";
import { formatDate } from "@/lib/utils";

const categories = [
  "All",
  ...new Set(blogPosts.map((p) => p.category)),
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

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
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white mt-2 mb-4">
              News & Stories
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Insights, success stories, and updates from the green economy
              frontlines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
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
          </div>

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">
                No articles found. Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-green-primary/20 transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-[16/10] bg-gradient-to-br from-green-primary/10 to-green-dark/10 overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src="/images/gallery/wezeshalogo2.png" alt="" className="w-16 h-auto opacity-30" />
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
                      <h2 className="text-lg font-bold font-heading text-neutral-900 group-hover:text-green-primary transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-neutral-100 text-neutral-500 px-2 py-1 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-green-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
