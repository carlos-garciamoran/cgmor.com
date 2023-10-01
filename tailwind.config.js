/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        mutate: 'mutate 16s ease-in-out infinite',
      },
      keyframes: {
        // IDEA: mutate each border corner independently (alternate between tr-bl <-> tl-br).
        mutate: {
          '0%': { borderRadius: 0 },
          '40%': { borderRadius: '50px' },
          '60%': { borderRadius: '50px' },
          '100%': { borderRadius: 0 },
        },
      },
    },
  },
  plugins: [],
};
