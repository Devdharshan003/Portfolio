"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
