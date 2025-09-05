import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid": "radial-gradient(currentColor 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "24px 24px",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
