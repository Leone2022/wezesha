"use client";

import Link from "next/link";
import {
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Leaf,
} from "lucide-react";
import { contactInfo, navLinks } from "@/data/siteData";
import Button from "@/components/ui/Button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-darker text-white" role="contentinfo">
      {/* Newsletter CTA */}
      <div className="bg-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-heading">
                Stay Connected
              </h3>
              <p className="text-neutral-300 mt-1">
                Join our newsletter for updates on green entrepreneurship and
                impact stories.
              </p>
            </div>
            <form
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-light"
              />
              <Button variant="gold" size="md" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/gallery/wezeshalogo2.png"
                alt="Wezesha Industries Logo"
                className="h-10 w-auto"
              />
              <div>
                <span className="block text-lg font-bold font-heading leading-tight">
                  Wezesha Industries
                </span>
                <span className="block text-[10px] text-neutral-400 leading-tight">
                  The Above Ground Mining Project
                </span>
              </div>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Empowering women and youth through inclusive, decent,
              gender-centric green entrepreneurship.
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-primary transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-green-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-light shrink-0 mt-0.5" />
                <div className="text-sm text-neutral-300">
                  <p className="font-medium text-white">Training Centre</p>
                  <p>{contactInfo.trainingCentre.address}</p>
                  <p>{contactInfo.trainingCentre.city}</p>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-green-light transition-colors"
                >
                  <Phone className="w-5 h-5 text-green-light shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-green-light transition-colors"
                >
                  <Mail className="w-5 h-5 text-green-light shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Leaf className="w-4 h-4 text-green-primary" />
            <span>
              &copy; {currentYear} Wezesha Industries (PBC 362/2022). All
              rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-neutral-400 hover:text-green-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-neutral-400 hover:text-green-light transition-colors"
            >
              Terms of Use
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-primary transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Designer Credit */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center">
          <p className="text-xs text-neutral-500">
            Designed &amp; Developed by{" "}
            <a
              href="tel:+263784031310"
              className="text-white hover:text-green-light transition-colors font-bold"
            >
              LeeTec Solution
            </a>{" "}
            — +263 78 403 1310
          </p>
        </div>
      </div>
    </footer>
  );
}
