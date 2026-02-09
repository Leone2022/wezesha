import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Wezesha Industries — our story, mission, values, and the team driving green economic transformation in Bulawayo, Zimbabwe.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
