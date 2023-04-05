/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        zenDots: ['Zen Dots'],
        exo: ['Exo 2'],
      },
      colors: {
        primary: '#8A2BE2',
        light: 'rgb(226 232 240)',
        dark: '#151515',
      },
    },
    plugins: [],
  },
}