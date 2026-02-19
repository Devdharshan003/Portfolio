"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function GlassButton({
  children,
  onClick,
  href,
  className,
  variant = "primary",
  size = "md",
}: GlassButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary: "bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-teal-500/20 border-cyan-400/40 text-white",
    secondary: "bg-white/8 border-white/20 text-gray-300",
    ghost: "bg-transparent border-white/10 text-gray-400 hover:border-white/20",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-medium tracking-wide",
    "backdrop-blur-xl backdrop-saturate-150",
    "border transition-all duration-300",
    "relative overflow-hidden",
    "shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {/* Animated glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79,195,247,0.3) 0%, transparent 70%)",
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner highlight */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {content}
    </motion.button>
  );
}
