/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'graysss': '#F3F3F3',
        'water-blue': '#CCEFEE',
        'mobi-pinl': '#FFBDBB',
        'mobi-red': '#ff3e5e'
      },
      screens : {
        'tablet': '380px',
        'iPhone-12' : '400px'
      }
    },
  },
  plugins: [],
}