"use client";

import { PROJECTS, type Project } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { GithubIcon, ExternalLinkIcon, StarIcon } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  if (project.featured) {
    return (
      <GlassCard
        className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-8 p-10"
        delay={index * 0.1}
        hover={true}
      >
        <div className="relative z-10">
          <motion.div
            className="inline-flex items-center gap-1.5 text-[0.65rem] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-4"
            style={{
              color: "#4fc3f7",
              background: "rgba(79,195,247,0.12)",
              border: "1px solid rgba(79,195,247,0.3)",
              backdropFilter: "blur(10px)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <StarIcon size={9} fill="currentColor" /> Featured Project
          </motion.div>
          <h3 className="font-display text-3xl font-bold mb-3 text-text-primary">
            {project.name}
          </h3>
          <p className="text-sm leading-[1.85] mb-5 text-text-secondary">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t) => (
              <motion.span
                key={t}
                className="text-[0.7rem] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#8899aa",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{ scale: 1.05, borderColor: "rgba(79,195,247,0.4)" }}
              >
                {t}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <GlassButton
                href={project.github}
                variant="ghost"
                size="sm"
                className=""
              >
                <span className="flex items-center gap-3">
                  <GithubIcon size={16} /> GitHub
                </span>
              </GlassButton>
            )}
            {project.demo && (
              <GlassButton
                href={project.demo}
                variant="ghost"
                size="sm"
                className=""
              >
                <span className="flex items-center gap-3">
                  <ExternalLinkIcon size={16} /> Live Demo
                </span>
              </GlassButton>
            )}
          </div>
        </div>
        <motion.div
          className="relative z-10 flex items-center justify-center rounded-xl"
          style={{
            background: "rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.1)",
            minHeight: 200,
            backdropFilter: "blur(10px)",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.span
            style={{
              fontSize: "5rem",
              filter: "drop-shadow(0 0 30px rgba(79,195,247,0.3))",
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {project.icon}
          </motion.span>
        </motion.div>
      </GlassCard>
    );
  }

  return (
    <GlassCard delay={index * 0.1} hover={true}>
      <div className="relative z-10 p-8">
        <motion.div
          className="text-4xl mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {project.icon}
        </motion.div>
        <h3 className="font-display text-xl font-bold mb-3 text-text-primary">
          {project.name}
        </h3>
        <p className="text-sm leading-[1.85] mb-5 text-text-secondary">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((t) => (
            <motion.span
              key={t}
              className="text-[0.7rem] px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#8899aa",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, borderColor: "rgba(79,195,247,0.4)" }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <GlassButton
              href={project.github}
              variant="ghost"
              size="sm"
              className=""
            >
              <span className="flex items-center gap-3">
                <GithubIcon size={16} /> GitHub
              </span>
            </GlassButton>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-16 py-28 max-w-6xl mx-auto relative">
      <SectionHeader
        label="Projects"
        title="What I&apos;ve Built"
        sub="A selection of projects that demonstrate my approach to engineering: thoughtful architecture, real-world impact."
      />
      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, index) => (
            <ProjectCard key={p.name} project={p} index={index} />
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
