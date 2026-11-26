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
          navy: '#132B2C',
          red: '#B4562F',
          redDark: '#94451F',
          white: '#FFFFFF',
          light: '#F2EFE7',
        },
        action: {
          DEFAULT: '#B4562F',
          hover: '#94451F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  // HIER IST DIE ÄNDERUNG: Das Plugin aktivieren
  plugins: [
    require('@tailwindcss/typography'),
  ],
}