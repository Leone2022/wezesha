import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do – Our Services — Green Training, Incubation & Consultancy",
  description:
    "Wezesha Industries offers green technical skills training, business incubation, and environmental consultancy in Bulawayo. PET recycling, beadwork, agro-value addition, and more.",
  keywords: [
    "green entrepreneur training Zimbabwe",
    "PET recycling training Bulawayo",
    "paper recycling beadwork training",
    "green business incubation Zimbabwe",
    "eco-preneur training",
    "green incubator accelerator",
    "environmental management consultancy Zimbabwe",
    "women skills training Bulawayo",
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
