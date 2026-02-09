import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the green revolution — buy products, volunteer, sponsor programs, become a member, or engage Wezesha Industries for consultancy.",
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
