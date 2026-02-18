import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Products — Eco-Brooms, Home Décor & Educational Kits",
  description:
    "Browse eco-friendly products from Wezesha Industries — handcrafted eco-brooms, upcycled home décor, designer lamps, decorative cushions, and climate literacy board games. Made by women artisans in Bulawayo.",
  keywords: [
    "eco broom Zimbabwe",
    "recycled products Bulawayo",
    "upcycled home decor Zimbabwe",
    "decorative cushions upcycled PET",
    "designer lamps upcycled",
    "climate literacy board game",
    "green products Zimbabwe",
    "sustainable products Bulawayo",
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
