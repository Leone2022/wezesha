import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Contact Wezesha Industries in Bulawayo, Zimbabwe. Visit our factory at Kelvin North, email info@wezeshaindustries.com, or call +263 77 280 9498. Bulk orders welcome.",
  keywords: [
    "Wezesha Industries contact",
    "Bulawayo green enterprise",
    "order eco-broom",
    "bulk orders Zimbabwe",
    "Wezesha Industries email",
    "Wezesha Industries phone",
  ],
  openGraph: {
    title: "Contact Wezesha Industries",
    description:
      "Visit our factory, email us, or call. We welcome inquiries, bulk orders, and partnership proposals.",
    url: "https://wezeshaindustries.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
