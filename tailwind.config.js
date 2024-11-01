/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#fcf6ba',
          DEFAULT: '#bf953f',
          dark: '#b38728',
        },
        dark: {
          lighter: '#2a2a2a',
          light: '#1a1a1a',
          DEFAULT: '#0a0a0a',
          deep: '#050505',
        },
      },
    },
  },
  plugins: [],
};