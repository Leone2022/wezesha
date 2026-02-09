"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "263775182522";
const DEFAULT_MESSAGE =
  "Hello Wezesha Industries! I'd like to learn more about your products and services.";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-xl border border-neutral-100 p-4 max-w-[260px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold text-neutral-900 mb-1">
              Chat with us!
            </p>
            <p className="text-xs text-neutral-500 mb-3">
              Hi there! How can we help you today?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#1fb855] transition-colors"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.598c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.81-8.064-7.126-.23-.316-1.932-2.572-1.932-4.904s1.224-3.48 1.658-3.956c.434-.478.948-.598 1.264-.598.316 0 .632.002.908.016.292.016.684-.11 1.07.816.39.948 1.328 3.24 1.444 3.474.118.236.196.51.04.826-.158.316-.236.512-.472.788-.236.278-.496.62-.708.832-.236.236-.482.492-.208.964s1.22 2.014 2.62 3.264c1.802 1.608 3.322 2.106 3.794 2.342.472.236.748.196 1.024-.118.276-.316 1.186-1.382 1.502-1.858.316-.478.632-.394 1.066-.236.434.158 2.762 1.302 3.234 1.54.472.236.788.354.906.55.116.196.116 1.136-.276 2.236z" />
        </svg>
      </motion.button>

      {/* Pulse ring */}
      <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
    </div>
  );
}
