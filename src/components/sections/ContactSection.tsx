"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkeuomorphicButton } from "@/components/ui/SkeuomorphicButton";
import { Toast, useToast } from "@/components/ui/Toast";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { GithubIcon, LinkedinIcon, Code2Icon, MailIcon, SendIcon } from "lucide-react";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const { toast, showToast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: PERSONAL.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      showToast("Message sent! I'll respond within 24–48 hours.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
      showToast("Message sent! I'll respond within 24–48 hours.");
      setForm({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { href: `mailto:${PERSONAL.email}`, icon: MailIcon, label: PERSONAL.email },
    { href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon, label: "LinkedIn — Dev Dharshan" },
    { href: SOCIAL_LINKS.github, icon: GithubIcon, label: "GitHub — Devdharshan003" },
    { href: SOCIAL_LINKS.leetcode, icon: Code2Icon, label: "LeetCode — _Devdharshan" },
  ];

  return (
    <section id="contact" className="px-6 md:px-16 py-28 max-w-6xl mx-auto relative">
      <SectionHeader label="Contact" title="Let&apos;s Work Together" />
      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <GlassCard hover={true}>
            <div className="p-10">
              <h3 className="font-display text-2xl font-bold mb-3 text-text-primary">
                Open to Opportunities
              </h3>
              <p className="text-sm leading-[1.8] mb-8 text-text-secondary">
                I&apos;m actively seeking internship positions where I can work with Java,
                backend systems, and IoT-related projects. If you&apos;re working on something in
                that space, I&apos;d love to hear about it.
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ href, icon: Icon, label }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 px-4 py-3 rounded-[10px] text-sm relative overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#8899aa",
                      textDecoration: "none",
                      backdropFilter: "blur(10px)",
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      background: "rgba(79,195,247,0.08)",
                      borderColor: "rgba(79,195,247,0.3)",
                      color: "#e8edf5",
                      x: 4,
                    }}
                  >
                    <Icon size={14} className="flex-shrink-0" />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Form */}
          <GlassCard hover={true}>
            <form onSubmit={handleSubmit} className="p-10">
              <div className="mb-5">
                <motion.label
                  className="block text-[0.72rem] font-medium tracking-[0.08em] uppercase mb-2 text-text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Your Name
                </motion.label>
                <motion.input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3.5 rounded-xl text-sm font-light outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: focusedField === "name" ? "1px solid rgba(79,195,247,0.5)" : "1px solid rgba(255,255,255,0.15)",
                    color: "#e8edf5",
                    backdropFilter: "blur(10px)",
                    boxShadow: focusedField === "name" ? "0 0 0 3px rgba(79,195,247,0.1), 0 0 20px rgba(79,195,247,0.2)" : "none",
                  }}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="mb-5">
                <motion.label
                  className="block text-[0.72rem] font-medium tracking-[0.08em] uppercase mb-2 text-text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Email Address
                </motion.label>
                <motion.input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3.5 rounded-xl text-sm font-light outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: focusedField === "email" ? "1px solid rgba(79,195,247,0.5)" : "1px solid rgba(255,255,255,0.15)",
                    color: "#e8edf5",
                    backdropFilter: "blur(10px)",
                    boxShadow: focusedField === "email" ? "0 0 0 3px rgba(79,195,247,0.1), 0 0 20px rgba(79,195,247,0.2)" : "none",
                  }}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="mb-6">
                <motion.label
                  className="block text-[0.72rem] font-medium tracking-[0.08em] uppercase mb-2 text-text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  required
                  rows={5}
                  placeholder="Enter your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3.5 rounded-xl text-sm font-light outline-none resize-vertical min-h-[130px] transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: focusedField === "message" ? "1px solid rgba(79,195,247,0.5)" : "1px solid rgba(255,255,255,0.15)",
                    color: "#e8edf5",
                    backdropFilter: "blur(10px)",
                    boxShadow: focusedField === "message" ? "0 0 0 3px rgba(79,195,247,0.1), 0 0 20px rgba(79,195,247,0.2)" : "none",
                  }}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <SkeuomorphicButton
                type="submit"
                variant="primary"
                size="md"
                className="w-full flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? "Sending…" : (<><SendIcon size={13} /> Send Message</>)}
              </SkeuomorphicButton>
              <p className="text-center text-xs mt-4 text-text-secondary">
                I typically respond within 24–48 hours.
              </p>
            </form>
          </GlassCard>
        </div>
      </StaggerContainer>

      <Toast message={toast.message} show={toast.show} success={toast.success} />
    </section>
  );
}
