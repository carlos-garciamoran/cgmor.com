/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "mutate-border": "mutate-border 18s ease-in-out infinite",
        "mutate-border-tl": "mutate-border-tl 18s ease-in-out infinite",
      },
      keyframes: {
        "mutate-border": {
          "0%": { borderRadius: 0 },
          "40%": { borderRadius: "50px" },
          "60%": { borderRadius: "50px" },
          "100%": { borderRadius: 0 },
        },
        "mutate-border-tl": {
          "0%": { borderTopLeftRadius: 0 },
          "40%": { borderTopLeftRadius: "50px" },
          "60%": { borderTopLeftRadius: "50px" },
          "100%": { borderTopLeftRadius: 0 },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
