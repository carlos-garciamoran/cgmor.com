/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        mutate: 'mutate 20s ease-in-out alternate infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        // IDEA: mutate each border corner independently.
        mutate: {
          '0%': { borderRadius: '0px' },
          '50%': { borderRadius: '30px' },
          '100%': { borderRadius: '60px' },
        },
      },
    },
  },
  plugins: [],
};
