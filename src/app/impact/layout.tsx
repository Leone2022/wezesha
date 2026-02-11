import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact — Stats, Stories & SDG Contributions",
  description:
    "See the real impact of Wezesha Industries — 500+ women trained, 50+ tonnes recycled, community transformation stories, and UN Sustainable Development Goals contributions.",
  keywords: [
    "Wezesha Industries impact",
    "women empowerment results Zimbabwe",
    "recycling impact Bulawayo",
    "SDG Zimbabwe",
    "social enterprise impact",
    "community transformation",
  ],
  openGraph: {
    title: "Our Impact — Wezesha Industries",
    description:
      "Measurable impact: women trained, waste diverted, communities transformed. See how we contribute to the SDGs.",
    url: "https://wezeshaindustries.com/impact",
  },
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
