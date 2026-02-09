"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  variant?: "default" | "bordered" | "elevated";
}

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
  variant = "default",
}: CardProps) {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const variantStyles = {
    default: "bg-white",
    bordered: "bg-white border border-neutral-200",
    elevated: "bg-white shadow-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-xl transition-all duration-300",
        variantStyles[variant],
        paddingStyles[padding],
        hover && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
