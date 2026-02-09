"use client";

import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative",
        className
      )}
    >
      <Quote className="w-10 h-10 text-green-primary/20 absolute top-6 right-6" />
      <blockquote className="text-neutral-700 text-base md:text-lg leading-relaxed italic mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center">
          <span className="text-green-primary font-bold text-lg">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">{testimonial.author}</p>
          <p className="text-sm text-neutral-500">
            {testimonial.role}
            {testimonial.location && ` — ${testimonial.location}`}
          </p>
        </div>
      </div>
    </div>
  );
}
