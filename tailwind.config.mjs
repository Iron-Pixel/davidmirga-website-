/** @type {import('tailwindcss').Config} */
export default {
  // WICHTIG: Die Pfade wurden erweitert, damit Tailwind ALLE verwendeten
  // Klassen findet und den ungenutzten Code (Purge) entfernt.
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/astro-layouts/**/*.{js,ts,jsx,tsx}',
    './node_modules/@astrojs/**/*.{js,ts}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3F',
          red: '#DC2626',
          white: '#FFFFFF',
          light: '#F4F7F9',
        },
        action: {
          DEFAULT: '#DC2626',
          hover: '#B91C1C',
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