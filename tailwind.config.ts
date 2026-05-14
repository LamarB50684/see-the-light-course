import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C878",
          muted: "#8B6B2A",
          dim: "rgba(201,168,76,0.10)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
