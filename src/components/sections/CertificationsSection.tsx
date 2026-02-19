"use client";

import { CERTIFICATIONS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { ExternalLinkIcon } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 md:px-16 py-28 max-w-6xl mx-auto relative">
      <SectionHeader
        label="Certifications"
        title="Credentials &amp; Courses"
        sub="Continuous learning across Java, cloud, AI, and web development."
      />
      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((c, index) => (
            <GlassCard key={c.name} delay={index * 0.1} hover={true}>
              <div className="p-7">
                <div className="text-[0.68rem] font-medium tracking-[0.1em] uppercase mb-2.5 text-accent-primary">
                  {c.org}
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug mb-2 text-text-primary">
                  {c.name}
                </h3>
                <div className="text-xs mb-5 text-text-secondary">
                  {c.date}
                </div>
                {c.credentialUrl ? (
                  <GlassButton
                    href={c.credentialUrl}
                    variant="ghost"
                    size="sm"
                    className="inline-flex items-center gap-1.5"
                  >
                    View Credential <ExternalLinkIcon size={10} />
                  </GlassButton>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(136,153,170,0.5)",
                    }}
                  >
                    Credential link coming soon
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
