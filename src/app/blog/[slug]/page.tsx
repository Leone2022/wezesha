"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { blogPosts } from "@/data/siteData";
import { formatDate } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-heading text-neutral-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-neutral-600 mb-6">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button href="/blog">Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark to-green-darker py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-light text-sm font-medium mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="inline-block bg-green-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-neutral-300 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {/* Featured Image */}
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-green-primary/10 to-green-dark/10 mb-10 flex items-center justify-center not-prose">
              <img src="/images/gallery/wezeshalogo2@1.5x.png" alt="" className="w-24 h-auto opacity-30" />
            </div>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="text-neutral-600 leading-relaxed space-y-6">
              <p>
                Wezesha Industries continues to drive positive change in
                Bulawayo&apos;s green economy, empowering women and youth through
                innovative recycling programs and sustainable enterprise
                development.
              </p>
              <p>
                Through our community-driven approach, we are transforming waste
                into wealth while creating dignified employment opportunities
                for women and youth across Bulawayo&apos;s high-density suburbs.
              </p>
              <p>
                Our work demonstrates that environmental sustainability and
                economic empowerment go hand in hand. By training green
                entrepreneurs and building inclusive value chains, we are
                creating a model for community-led green economic transformation
                that can be replicated across Zimbabwe and beyond.
              </p>
            </div>
          </article>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-neutral-200">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-neutral-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 pt-8 border-t border-neutral-200 text-center">
            <Button
              href="/blog"
              variant="outline"
              icon={<ArrowLeft className="w-5 h-5" />}
            >
              Back to All Articles
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
