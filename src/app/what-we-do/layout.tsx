import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do — Services & Programs",
  description:
    "Discover Wezesha Industries' services — green entrepreneur training, recycling, eco-broom production, mentorship, market linkages, and flagship community programs.",
  keywords: [
    "green entrepreneur training Zimbabwe",
    "recycling programs Bulawayo",
    "women skills training",
    "eco-broom production",
    "green economy services",
    "community development Zimbabwe",
  ],
  openGraph: {
    title: "Services & Programs — Wezesha Industries",
    description:
      "From training green entrepreneurs to connecting producers with markets — we build the full ecosystem for inclusive green growth.",
    url: "https://wezeshaindustries.com/what-we-do",
  },
};

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
