/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        mutate: 'mutate 16s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
