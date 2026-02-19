"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  show: boolean;
  success?: boolean;
}

export function Toast({ message, show, success = true }: ToastProps) {
  return (
    <div
      className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3 px-6 py-4 rounded-xl text-sm"
      style={{
        background: "rgba(8,12,20,0.95)",
        border: "1px solid rgba(79,195,247,0.3)",
        backdropFilter: "blur(20px)",
        color: "#e8edf5",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        transform: show ? "translateY(0)" : "translateY(100px)",
        opacity: show ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: success ? "#4fc3f7" : "#f87171" }}
      />
      {message}
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState({ show: false, message: "", success: true });

  const showToast = (message: string, success = true) => {
    setToast({ show: true, message, success });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
  };

  return { toast, showToast };
}
