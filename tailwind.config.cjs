/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,svelte,ts,tsx,js,jsx,md,mdx,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10b981', // emerald-500
          fg: '#34d399',
          bg: '#0b1a14',
        },
      },
      fontFamily: {
        numbers: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
