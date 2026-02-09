import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Discover Wezesha Industries' services — green entrepreneur training, recycling, eco-broom production, mentorship, and market linkages.",
};

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
