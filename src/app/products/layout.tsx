import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Products — Eco-Brooms, Plasticware & More",
  description:
    "Browse eco-friendly products from Wezesha Industries — handcrafted eco-brooms, recycled plasticware, bin liners, and refuse bins. Made by women artisans in Bulawayo, kind to the planet.",
  keywords: [
    "eco broom Zimbabwe",
    "recycled products Bulawayo",
    "eco-friendly broom",
    "recycled plasticware",
    "green products Zimbabwe",
    "sustainable cleaning products",
    "buy eco-broom",
  ],
  openGraph: {
    title: "Green Products — Wezesha Industries",
    description:
      "Sustainable products handcrafted by women artisans. Every purchase supports green livelihoods in Bulawayo.",
    url: "https://wezeshaindustries.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
