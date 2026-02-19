"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";
import { GithubIcon, LinkedinIcon, Code2Icon } from "lucide-react";

export function SocialStrip() {
  const links = [
    { href: SOCIAL_LINKS.github, icon: GithubIcon, label: "GitHub" },
    { href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: SOCIAL_LINKS.leetcode, icon: Code2Icon, label: "LeetCode" },
  ];

  return (
    <motion.div
      className="fixed left-7 bottom-0 z-[100] hidden lg:flex flex-col items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      {links.map(({ href, icon: Icon, label }, index) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="flex items-center justify-center w-9 h-9 rounded-[10px] relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(16px) saturate(150%)",
            color: "#8899aa",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
          whileHover={{
            background: "rgba(79,195,247,0.15)",
            borderColor: "rgba(79,195,247,0.4)",
            color: "#4fc3f7",
            y: -4,
            scale: 1.1,
            boxShadow: "0 8px 30px rgba(79,195,247,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon size={14} className="relative z-10" />
        </motion.a>
      ))}
      <motion.div
        className="w-px h-32"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
        }}
        initial={{ height: 0 }}
        animate={{ height: 128 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />
    </motion.div>
  );
}
