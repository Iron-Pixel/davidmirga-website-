/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3F',   // ZURÜCK ZUM ALTEN BLAU (Dein Favorit)
          red: '#DC2626',    // DAS NEUE ROT (Knalliger)
          white: '#FFFFFF',
          light: '#F4F7F9',  // Der leicht bläuliche Hintergrund passend zum Navy
        },
        action: {
          DEFAULT: '#DC2626', // Neues Rot
          hover: '#B91C1C',   // Dunkleres Rot beim Hover
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}