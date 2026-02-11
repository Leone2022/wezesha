import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Green Economy Insights & Stories",
  description:
    "Read the latest articles, success stories, and green economy insights from Wezesha Industries. Updates from Bulawayo's green entrepreneurship movement.",
  keywords: [
    "Wezesha Industries blog",
    "green economy articles Zimbabwe",
    "recycling news Bulawayo",
    "women empowerment stories",
    "sustainable development blog",
  ],
  openGraph: {
    title: "Blog — Wezesha Industries",
    description:
      "Stories and insights from the green economy frontline in Bulawayo, Zimbabwe.",
    url: "https://wezeshaindustries.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
