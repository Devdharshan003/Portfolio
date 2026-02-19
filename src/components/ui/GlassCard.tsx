"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hover) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-gradient-to-br from-white/8 via-white/6 to-white/4",
        "backdrop-blur-xl backdrop-saturate-150",
        "border border-white/20",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
        hover && "transition-all duration-500 ease-out",
        className
      )}
      style={{
        transform: hover && isHovered
          ? `perspective(1000px) rotateX(${mousePosition.y * -0.5}deg) rotateY(${mousePosition.x * 0.5}deg) scale(1.02)`
          : undefined,
      }}
    >
      {/* Inner highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(255,255,255,0.15) 0%, transparent 70%)`,
          opacity: isHovered ? 1 : 0.3,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Edge glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: isHovered
            ? "inset 0 1px 0 rgba(255,255,255,0.3), 0 0 40px rgba(79,195,247,0.2)"
            : "inset 0 1px 0 rgba(255,255,255,0.2)",
          transition: "box-shadow 0.3s ease",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
