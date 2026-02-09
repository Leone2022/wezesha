import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse eco-friendly products from Wezesha Industries — eco-brooms, recycled plasticware, bin liners, and refuse bins. Made by women, kind to the planet.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
