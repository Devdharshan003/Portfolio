"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9998]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #26c6da, #4fc3f7, #42a5f5)",
        boxShadow: "0 0 10px rgba(79,195,247,0.6)",
        transition: "width 0.1s linear",
      }}
    />
  );
}
