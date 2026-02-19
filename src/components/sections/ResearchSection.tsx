"use client";

import { RESEARCH, type ResearchItem, type ResearchStatus } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";

const STATUS_CONFIG: Record<ResearchStatus, { label: string; color: string; bg: string; border: string }> = {
  ongoing: { label: "Ongoing", color: "#4fc3f7", bg: "rgba(79,195,247,0.12)", border: "rgba(79,195,247,0.25)" },
  "in-progress": { label: "In Progress", color: "#26c6da", bg: "rgba(38,198,218,0.12)", border: "rgba(38,198,218,0.25)" },
  planned: { label: "Planned", color: "#8899aa", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.12)" },
};

function TimelineItem({ item, index }: { item: ResearchItem; index: number }) {
  const cfg = STATUS_CONFIG[item.status];

  return (
    <motion.div
      className="flex gap-8 mb-7 pl-14 relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Animated Dot */}
      <motion.div
        className="absolute left-3 top-7 w-[17px] h-[17px] rounded-full z-10"
        style={{
          background: "#080c14",
          border: "2px solid #4fc3f7",
          boxShadow: "0 0 12px rgba(79,195,247,0.4)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 12px rgba(79,195,247,0.4)",
            "0 0 20px rgba(79,195,247,0.6)",
            "0 0 12px rgba(79,195,247,0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Card */}
      <GlassCard hover={true} delay={index * 0.1}>
        <div className="px-8 py-7">
          <motion.span
            className="inline-block text-[0.65rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-3"
            style={{
              color: cfg.color,
              background: cfg.bg,
              border: `1px solid ${cfg.border}`,
              backdropFilter: "blur(10px)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            {cfg.label}
          </motion.span>
          <h3 className="font-display text-base font-semibold mb-2 leading-snug text-text-primary">
            {item.title}
          </h3>
          <div className="flex gap-3 flex-wrap mb-3">
            <span className="text-xs text-text-secondary">{item.period}</span>
            <span className="text-xs text-text-secondary">·</span>
            <span className="text-xs text-text-secondary">{item.institution}</span>
          </div>
          <p className="text-sm leading-[1.8] text-text-secondary">
            {item.desc}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function ResearchSection() {
  return (
    <section id="research" className="px-6 md:px-16 py-28 max-w-6xl mx-auto relative">
      <SectionHeader
        label="Research"
        title="Academic Work"
        sub="Work rooted in practical Java and IoT systems for real-world infrastructure and safety use cases."
      />
      <div
        className="relative"
        style={{
          borderLeft: "1px solid rgba(255,255,255,0.15)",
          marginLeft: 20,
        }}
      >
        <StaggerContainer staggerDelay={0.1}>
          {RESEARCH.map((r, i) => (
            <TimelineItem key={r.title} item={r} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
