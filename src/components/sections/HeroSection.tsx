"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS, STATS } from "@/lib/data";
import { DownloadIcon, ArrowRightIcon } from "lucide-react";
import { SkeuomorphicButton } from "@/components/ui/SkeuomorphicButton";
import { GlassButton } from "@/components/ui/GlassButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[72px] px-6 md:px-16 lg:px-24 relative"
      style={{ maxWidth: "100%" }}
    >
      <motion.div
        className="max-w-2xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Availability chip */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-7 relative overflow-hidden"
          style={{
            color: "#4fc3f7",
            border: "1px solid rgba(79,195,247,0.3)",
            background: "rgba(79,195,247,0.08)",
            backdropFilter: "blur(16px) saturate(150%)",
            WebkitBackdropFilter: "blur(16px) saturate(150%)",
            boxShadow: "0 4px 20px rgba(79,195,247,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
          whileHover={{ scale: 1.05, borderColor: "rgba(79,195,247,0.5)" }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-accent-primary"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {PERSONAL.availability} · {PERSONAL.location}
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-black leading-none tracking-tight mb-5"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          <motion.span
            className="text-text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Dev
          </motion.span>
          <br />
          <motion.span
            className="text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Dharshan L
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg font-light tracking-wide mb-3 text-text-secondary"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
        >
          {PERSONAL.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm leading-[1.9] mb-10 max-w-md text-text-secondary"
        >
          Pre-final year CSE student focused on writing reliable Java code and building practical
          systems that connect software with real-world infrastructure.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3.5 mb-14"
        >
          <SkeuomorphicButton href="#projects" variant="primary" size="md">
            View Projects <ArrowRightIcon size={14} />
          </SkeuomorphicButton>

          <SkeuomorphicButton
            href={SOCIAL_LINKS.resume}
            variant="primary"
            size="md"
            className="inline-flex items-center gap-2"
          >
            <DownloadIcon size={13} /> Resume
          </SkeuomorphicButton>

          <GlassButton href="#contact" variant="ghost" size="md">
            Get in Touch
          </GlassButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex gap-10 flex-wrap"
        >
          {STATS.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="font-display font-bold leading-none flex items-baseline gap-0.5 text-[1.8rem] text-text-primary">
                {s.num}
                <span className="text-[1rem] text-accent-primary">{s.suffix}</span>
              </div>
              <div className="text-xs tracking-wide mt-1 text-text-secondary">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(79,195,247,0.3), transparent)",
          filter: "blur(40px)",
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(38,198,218,0.3), transparent)",
          filter: "blur(30px)",
        }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
