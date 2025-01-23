/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          600: '#800000',
          700: '#660000',
        },
        ivory: '#FFFFF0',
        gold: {
          500: '#FFD700',
        },
      },
    },
  },
  plugins: [],
}
