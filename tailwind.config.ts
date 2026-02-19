import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#080c14",
          secondary: "#0d1220",
          tertiary: "#121828",
        },
        text: {
          primary: "#e8edf5",
          secondary: "#8899aa",
          tertiary: "#5a6b7c",
        },
        accent: {
          primary: "#4fc3f7",
          secondary: "#26c6da",
          tertiary: "#42a5f5",
        },
        // Legacy support
        bg2: "#0d1220",
        accent2: "#81d4fa",
        teal: "#26c6da",
        blue: "#42a5f5",
        "text-dim": "#8899aa",
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
        "accent-gradient":
          "linear-gradient(135deg, #4fc3f7 0%, #26c6da 50%, #42a5f5 100%)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "24px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        glow: "0 0 40px rgba(79, 195, 247, 0.2)",
        depth: "0 20px 60px rgba(0, 0, 0, 0.4)",
        "glow-cyan": "0 0 20px rgba(79, 195, 247, 0.3), 0 0 40px rgba(66, 165, 245, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-dot": "pulseDot 2s ease infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        spin: "spin 1.2s cubic-bezier(0.6,0,0.4,1) infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
