"use client";

import { ABOUT_HIGHLIGHTS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-16 py-28 max-w-6xl mx-auto relative">
      <SectionHeader
        label="About Me"
        title="Building intelligent systems<br/>from the ground up"
      />
      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Bio card */}
          <GlassCard hover={true}>
            <div className="p-10">
              <motion.p
                className="text-sm leading-[1.9] mb-5 text-text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I&apos;m a pre-final year Computer Science and Engineering student at Panimalar
                Engineering College, interested in building robust backend systems that solve
                concrete problems.
              </motion.p>
              <motion.p
                className="text-sm leading-[1.9] mb-5 text-text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                My strongest foundation is in Java — I&apos;ve used it to architect maintainable,
                well-structured backends while diving into data structures and system design. I also
                use AI tools where they make sense to speed up development, but my core focus is on
                solid Java fundamentals.
              </motion.p>
              <motion.p
                className="text-sm leading-[1.9] mb-5 text-text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                My flagship project,{" "}
                <strong className="text-text-primary">SafeStruct</strong>, is an IoT-based structural
                health monitoring system that combines sensor networks, real-time data pipelines, and
                clear alerting rules to help civil engineers reason about infrastructure safety.
              </motion.p>
              <motion.p
                className="text-sm leading-[1.9] text-text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Long term, I&apos;m interested in dependable systems engineering: using Java and
                simple IoT building blocks to make our physical world safer and more observable.
              </motion.p>
            </div>
          </GlassCard>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {ABOUT_HIGHLIGHTS.map((h, index) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="px-5 py-4 rounded-xl relative overflow-hidden"
                style={{
                  background: "rgba(79,195,247,0.08)",
                  border: "1px solid rgba(79,195,247,0.2)",
                  backdropFilter: "blur(16px) saturate(150%)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(79,195,247,0.4)",
                  boxShadow: "0 8px 30px rgba(79,195,247,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <div className="text-[0.65rem] font-medium tracking-[0.12em] uppercase mb-1 text-accent-primary">
                  {h.label}
                </div>
                <div className="text-sm font-normal text-text-primary">
                  {h.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StaggerContainer>
    </section>
  );
}
