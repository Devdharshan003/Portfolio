"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  distance?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Always define all transforms
  const opacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 0, 1]);
  const blur = useTransform(smoothProgress, [0, 0.3, 1], [10, 5, 0]);
  
  const y = useTransform(
    smoothProgress,
    [0, 1],
    direction === "up" ? [distance, 0] : direction === "down" ? [-distance, 0] : [0, 0]
  );
  
  const x = useTransform(
    smoothProgress,
    [0, 1],
    direction === "left" ? [distance, 0] : direction === "right" ? [-distance, 0] : [0, 0]
  );
  
  const scale = useTransform(
    smoothProgress,
    [0, 1],
    direction === "scale" ? [0.8, 1] : [1, 1]
  );

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{
        opacity,
        y: direction === "up" || direction === "down" ? y : undefined,
        x: direction === "left" || direction === "right" ? x : undefined,
        scale: direction === "scale" ? scale : undefined,
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
