"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { INTERNSHIPS } from "@/lib/data";
import { BriefcaseIcon, CalendarIcon, UsersIcon, AwardIcon } from "lucide-react";

export function InternshipsSection() {
    return (
        <section id="internships" className="px-6 md:px-16 py-28 max-w-6xl mx-auto relative">
            <SectionHeader
                label="Experience"
                title="Internships"
                sub="Professional experience where I've applied my skills in real-world environments."
            />

            <StaggerContainer staggerDelay={0.1}>
                <div className="flex flex-col gap-8">
                    {INTERNSHIPS.map((internship, index) => (
                        <GlassCard key={index} className="p-8 md:p-10 relative overflow-hidden" hover={true}>
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
                                {/* Left Column: Role & Company Info */}
                                <div className="lg:w-1/3 flex flex-col gap-4">
                                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                                        <BriefcaseIcon size={12} />
                                        {internship.mode}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-text-primary mb-1">{internship.role}</h3>
                                        <p className="text-lg text-text-secondary font-medium">{internship.company}</p>
                                    </div>

                                    <div className="flex flex-col gap-2 text-sm text-text-secondary/80 mt-2">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon size={14} className="text-accent-primary" />
                                            {internship.batch}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <AwardIcon size={14} className="text-accent-primary" />
                                            {internship.domain}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Project & Details */}
                                <div className="lg:w-2/3 flex flex-col gap-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-text-primary mb-2">
                                            Project: <span className="text-accent-primary">{internship.project}</span>
                                        </h4>
                                        <p className="text-text-secondary leading-relaxed">
                                            {internship.desc}
                                        </p>
                                    </div>

                                    {/* Recognition */}
                                    <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                                        <p className="font-medium text-yellow-200/90 flex items-center gap-2">
                                            {internship.recognition}
                                        </p>
                                    </div>

                                    {/* Team */}
                                    <div>
                                        <h5 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                                            <UsersIcon size={14} /> Team Members
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {internship.team.map((member, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-text-secondary hover:bg-white/10 transition-colors"
                                                >
                                                    {member}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </StaggerContainer>
        </section>
    );
}
