import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wezeshaindustries.com"),
  title: {
    default:
      "Wezesha Industries — Green Economy & Women Empowerment | Bulawayo, Zimbabwe",
    template: "%s | Wezesha Industries",
  },
  description:
    "Wezesha Industries empowers women and youth through inclusive, gender-centric green entrepreneurship. We recycle, train, and build sustainable livelihoods in Bulawayo, Zimbabwe.",
  keywords: [
    "Wezesha Industries",
    "green economy Zimbabwe",
    "recycling Bulawayo",
    "women empowerment",
    "youth entrepreneurship",
    "eco-broom",
    "social enterprise Zimbabwe",
    "circular economy",
    "sustainable development",
    "Above Ground Mining Project",
  ],
  authors: [{ name: "Wezesha Industries" }],
  creator: "Wezesha Industries",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://wezeshaindustries.com",
    siteName: "Wezesha Industries",
    title: "Wezesha Industries — Green Economy & Women Empowerment",
    description:
      "Empowering communities through green innovation. Building tomorrow's green and inclusive industries today.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wezesha Industries — Empowering Communities Through Green Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wezesha Industries — Green Economy & Women Empowerment",
    description:
      "Empowering communities through green innovation in Bulawayo, Zimbabwe.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wezeshaindustries.com/#organization",
      name: "Wezesha Industries",
      alternateName: "The Above Ground Mining Project",
      url: "https://wezeshaindustries.com",
      logo: {
        "@type": "ImageObject",
        url: "https://wezeshaindustries.com/icon-512.png",
        width: 512,
        height: 512,
      },
      description:
        "Social enterprise empowering women and youth through inclusive, gender-centric green entrepreneurship in Bulawayo, Zimbabwe.",
      foundingDate: "2013",
      founder: {
        "@type": "Person",
        name: "Sinqobile Ndlovu",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kelvin North, Westondale",
        addressLocality: "Bulawayo",
        addressCountry: "ZW",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+263-77-280-9498",
        email: "info@wezeshaindustries.com",
        contactType: "customer service",
      },
      sameAs: [
        "https://facebook.com/wezeshaindustries",
        "https://linkedin.com/company/wezeshaindustries",
        "https://youtube.com/@wezeshaindustries",
      ],
      areaServed: {
        "@type": "Country",
        name: "Zimbabwe",
      },
      knowsAbout: [
        "Recycling",
        "Green Economy",
        "Women Empowerment",
        "Circular Economy",
        "Sustainable Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://wezeshaindustries.com/#website",
      url: "https://wezeshaindustries.com",
      name: "Wezesha Industries",
      publisher: {
        "@id": "https://wezeshaindustries.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#2E5F3D" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-neutral-900`}
      >
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
