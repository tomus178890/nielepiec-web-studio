import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(88, 210, 255, 0.2), 0 24px 70px rgba(6, 14, 26, 0.48)",
        panel: "0 24px 70px rgba(2, 12, 26, 0.48)",
        halo: "0 0 0 1px rgba(132, 93, 255, 0.16), 0 18px 42px rgba(8, 14, 28, 0.4)"
      },
      colors: {
        ink: "#07111f",
        panel: "#0d1728",
        line: "rgba(147, 194, 255, 0.18)",
        accent: "#58d2ff",
        accentDeep: "#1699dd",
        violetAccent: "#845dff",
        cyanAccent: "#84f3ff",
        amberAccent: "#ffbf74",
        text: "#f6fbff",
        muted: "#a5bad2"
      }
    }
  },
  plugins: []
};

export default config;
