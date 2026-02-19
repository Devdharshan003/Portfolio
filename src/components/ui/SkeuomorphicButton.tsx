"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkeuomorphicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function SkeuomorphicButton({
  children,
  onClick,
  href,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
}: SkeuomorphicButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4.5 text-base",
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(135deg, rgba(79,195,247,0.25) 0%, rgba(38,198,218,0.2) 100%)",
      border: "1px solid rgba(79,195,247,0.4)",
      shadowLight: "0 2px 8px rgba(79,195,247,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
      shadowDark: "0 8px 24px rgba(0,0,0,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)",
      shadowPressed: "0 2px 4px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.2)",
    },
    secondary: {
      background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      border: "1px solid rgba(255,255,255,0.2)",
      shadowLight: "0 2px 8px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
      shadowDark: "0 8px 24px rgba(0,0,0,0.3), inset 0 -1px 0 rgba(0,0,0,0.15)",
      shadowPressed: "0 2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.15)",
    },
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-medium tracking-wide",
    "backdrop-blur-xl backdrop-saturate-150",
    "relative overflow-hidden",
    "transition-all duration-200",
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {/* Dual shadow layers for depth */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: variantStyles[variant].background,
          border: variantStyles[variant].border,
          boxShadow: variantStyles[variant].shadowLight,
        }}
        whileHover={{
          boxShadow: variantStyles[variant].shadowDark,
        }}
        whileTap={{
          boxShadow: variantStyles[variant].shadowPressed,
        }}
      />

      {/* Inset highlight */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
          opacity: 0.6,
        }}
      />

      {/* Press depth effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(79,195,247,0.15) 0%, transparent 70%)",
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        whileTap={{ opacity: 0.8 }}
        transition={{ duration: 0.2 }}
      />

      {/* Content */}
      <span className="relative z-10 text-white">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97, y: 2 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97, y: 2 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
      style={{
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {content}
    </motion.button>
  );
}
