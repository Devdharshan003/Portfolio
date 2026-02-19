"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="relative z-[2] flex items-center justify-between flex-wrap gap-4 px-6 md:px-16 py-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(8,12,20,0.7)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-display text-sm font-semibold text-text-secondary">
        Dev Dharshan<span className="text-accent-primary">.</span>
      </div>
      <div className="text-xs text-text-secondary">
        © {new Date().getFullYear()} Dev Dharshan L · Built with Next.js · Chennai, India
      </div>
    </motion.footer>
  );
}
