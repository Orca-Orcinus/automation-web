import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Industrial dark blue
        secondary: "#334155", // Slate
        accent: "#3b82f6", // Blue highlight
        metallic: "#cbd5e1", // Silver/grey
        machine: "#475569", // Darker machine grey
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
