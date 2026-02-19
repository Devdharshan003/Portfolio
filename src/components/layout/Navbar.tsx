"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";
import { GlassButton } from "@/components/ui/GlassButton";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#internships", label: "Internships" },
  { href: "#research", label: "Research" },
  { href: "#certifications", label: "Certs" },
  { href: "#skills", label: "Skills" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((sec) => {
        if (window.scrollY >= (sec as HTMLElement).offsetTop - 120) {
          current = sec.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[49] flex flex-col items-center justify-center gap-8"
            style={{
              background: "rgba(8,12,20,0.98)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {NAV_LINKS.map((l, index) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="font-display text-4xl font-bold text-gray-200 hover:text-accent-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.4 }}
              className="font-display text-2xl font-semibold mt-4 text-accent-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[50] flex items-center justify-between h-[72px] px-6 md:px-12"
        style={{
          background: "rgba(8,12,20,0.7)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          className="font-display text-lg font-bold tracking-wide text-text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Dev<span className="text-accent-primary">.</span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <li key={l.href}>
                <motion.a
                  href={l.href}
                  className="text-xs font-normal tracking-[0.08em] uppercase relative group"
                  style={{
                    color: isActive ? "#e8edf5" : "#8899aa",
                    textDecoration: "none",
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {l.label}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] origin-right"
                    style={{
                      background: "linear-gradient(90deg, #4fc3f7, #26c6da)",
                    }}
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <GlassButton
            href="#contact"
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Let&apos;s Connect
          </GlassButton>
          <motion.button
            className="flex md:hidden flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-0"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="block w-[22px] h-[1.5px] bg-text-secondary"
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-[22px] h-[1.5px] bg-text-secondary"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-[22px] h-[1.5px] bg-text-secondary"
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
}
