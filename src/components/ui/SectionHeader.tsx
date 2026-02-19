"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
}

export function SectionHeader({ label, title, sub }: SectionHeaderProps) {
  return (
    <ScrollReveal direction="up" distance={30}>
      <div className="mb-14">
        <motion.div
          className="inline-flex items-center gap-3 mb-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="block w-6 h-px bg-accent-primary"
            initial={{ width: 0 }}
            whileInView={{ width: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent-primary">
            {label}
          </span>
        </motion.div>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-text-primary"
          dangerouslySetInnerHTML={{ __html: title }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        {sub && (
          <motion.p
            className="text-base max-w-xl leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sub}
          </motion.p>
        )}
      </div>
    </ScrollReveal>
  );
}
