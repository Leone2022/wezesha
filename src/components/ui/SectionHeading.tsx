"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-3xl mb-12", alignClasses[align], className)}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-sm font-semibold tracking-wider uppercase mb-2",
            light ? "text-green-light" : "text-green-primary"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight",
          light ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-neutral-200" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-20 rounded-full",
          light ? "bg-gold" : "bg-green-primary",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </motion.div>
  );
}
