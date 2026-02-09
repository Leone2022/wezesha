import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the real impact of Wezesha Industries — statistics, success stories, photo gallery, and SDG contributions in Bulawayo, Zimbabwe.",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
