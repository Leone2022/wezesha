import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved — Volunteer, Partner & Support",
  description:
    "Join the green revolution — buy products, volunteer, sponsor programs, become a member, or partner with Wezesha Industries for consultancy and CSR initiatives.",
  keywords: [
    "volunteer Bulawayo",
    "support green economy Zimbabwe",
    "CSR Zimbabwe",
    "partner Wezesha Industries",
    "green volunteering",
    "sponsor green programs",
  ],
  openGraph: {
    title: "Get Involved — Wezesha Industries",
    description:
      "Whether you want to learn, produce, trade, or partner — we have a pathway for you to join the green economy.",
    url: "https://wezeshaindustries.com/get-involved",
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
