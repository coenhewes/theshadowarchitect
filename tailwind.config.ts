import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shadow: {
          dark: "#0a0a0a",
          darker: "#050505",
          gold: "#d4af37",
          "gold-light": "#f5e6a3",
          slate: "#1a1a1a",
          "slate-light": "#2a2a2a",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
