"use client";

import { SKILLS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-16 py-28 max-w-6xl mx-auto relative">
      <SectionHeader
        label="Skills"
        title="Technical Toolkit"
        sub="Languages, frameworks, and tools I work with on a regular basis."
      />
      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((cat, catIndex) => (
            <GlassCard key={cat.label} delay={catIndex * 0.1} hover={true}>
              <div className="p-7">
                <div className="text-[0.68rem] font-medium tracking-[0.12em] uppercase mb-5 flex items-center gap-2 text-accent-primary">
                  {cat.label}
                  <span className="flex-1 h-px bg-white/15" />
                </div>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((s, skillIndex) => (
                    <motion.div
                      key={s.name}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-sm cursor-default relative overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#8899aa",
                        backdropFilter: "blur(10px)",
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{
                        background: "rgba(79,195,247,0.08)",
                        borderColor: "rgba(79,195,247,0.3)",
                        color: "#e8edf5",
                        x: 4,
                        scale: 1.02,
                      }}
                    >
                      <span className="w-5 text-center text-base">{s.icon}</span>
                      {s.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
