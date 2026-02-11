import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Team",
  description:
    "Learn about Wezesha Industries — founded in 2013 in Bulawayo, Zimbabwe. Our story, mission, values, SDG alignment, and the team driving green economic transformation.",
  keywords: [
    "Wezesha Industries about",
    "Sinqobile Ndlovu",
    "green social enterprise Zimbabwe",
    "Above Ground Mining Project",
    "Bulawayo recycling",
    "women empowerment Bulawayo",
  ],
  openGraph: {
    title: "About Wezesha Industries — Our Story & Mission",
    description:
      "From a small community recycling initiative to a leading social enterprise driving green economic transformation in Bulawayo.",
    url: "https://wezeshaindustries.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
