"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800);
    const timer2 = setTimeout(() => setVisible(false), 1600);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "#080c14",
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        transition: "opacity 0.8s ease, visibility 0.8s ease",
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: "2px solid rgba(79,195,247,0.15)",
          borderTopColor: "#4fc3f7",
          borderRightColor: "rgba(79,195,247,0.5)",
          animation: "spin 1.2s cubic-bezier(0.6,0,0.4,1) infinite",
          boxShadow:
            "0 0 30px rgba(79,195,247,0.2), inset 0 0 20px rgba(79,195,247,0.05)",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
