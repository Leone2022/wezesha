"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, contactInfo } from "@/data/siteData";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-green-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <p className="text-neutral-200">
            Seedbed for tomorrow&apos;s green and inclusive industries
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-green-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-green-light transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Wezesha Industries — Home"
            >
              <img 
                src="/images/gallery/wezeshalogo2.png" 
                alt="Wezesha Industries Logo" 
                className="h-10 lg:h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span className="block text-lg lg:text-xl font-bold text-green-dark font-heading leading-tight">
                  Wezesha Industries
                </span>
                <span className="block text-[10px] lg:text-xs text-neutral-500 leading-tight">
                  The Above Ground Mining Project
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-green-primary bg-green-primary/10"
                      : "text-neutral-700 hover:text-green-primary hover:bg-green-primary/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/get-involved" size="sm">
                Get Involved
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
            >
              <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      pathname === link.href
                        ? "text-green-primary bg-green-primary/10"
                        : "text-neutral-700 hover:text-green-primary hover:bg-green-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 pb-2 px-4">
                  <Button href="/get-involved" className="w-full justify-center">
                    Get Involved
                  </Button>
                </div>
                <div className="border-t border-neutral-100 pt-4 px-4 space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-2 text-sm text-neutral-600"
                  >
                    <Phone className="w-4 h-4" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-2 text-sm text-neutral-600"
                  >
                    <Mail className="w-4 h-4" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
