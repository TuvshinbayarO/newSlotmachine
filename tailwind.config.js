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
        'iPhone-12' : '405px',
        // 'iPhone-12-pro' : '385px',
        'iPhone-8' : '350px',
        'iPhone-8-plus': '410px',
        'iPhone-12-plus': '415px',
        'iPad' : '780px',
        'iPhone-5' : '310px'
      }
    },
  },
  plugins: [],
}