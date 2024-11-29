import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1366px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1100px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "900px" },
      // => @media (max-width: 767px) { ... }
      smd: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "565px" },
      // => @media (max-width: 639px) { ... }
      esm: { max: "300px" },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        "2xl": "6rem",
        xl: "5rem",
        lg: "40px",
        md: "3rem",
        smd: "2rem",
        sm: "1rem",
        esm: "0.5rem",
      },
      screens: {
        lg: "1070px",

        // esm: '290px',
      },
    },
    extend: {
      keyframes: {
        rotated: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotated: "rotated 10s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
