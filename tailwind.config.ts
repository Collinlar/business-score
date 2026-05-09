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
        navy:   { DEFAULT: "#0A0E1A" },
        teal:   { DEFAULT: "#1D9E75", light: "#E1F5EE", dark: "#085041" },
        gold:   { DEFAULT: "#E8A020", light: "#FEF3E2", dark: "#633806" },
        bblue:  { DEFAULT: "#185FA5", light: "#E6F1FB" },
        ink:    { DEFAULT: "#111827" },
        mid:    { DEFAULT: "#4B5563" },
        subtle: { DEFAULT: "#F3F4F6" },
        border: { DEFAULT: "#E5E7EB" },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      lineHeight: {
        body:    "1.65",
        display: "1.2",
      },
    },
  },
  plugins: [],
};
export default config;
