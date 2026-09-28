import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#faf8f2",
        ink: "#1b1b1b",
        coral: "#fd9284",
        surface: "rgba(64,64,64,0.89)",
        paper: "#faf8f2",
        grid: "rgba(59,157,221,0.15)",
      },
      boxShadow: {
        pill: "4px 6px 10px rgba(0,0,0,0.55)",
        card: "4px 7px 10px rgba(0,0,0,0.55)",
        project: "8px 8px 0 #faf8f2",
      },
      zIndex: { 1000: "1000" },
    },
  },
  plugins: [],
};

export default config;
