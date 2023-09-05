/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'graysss': '#F3F3F3',
        'water-blue': '#CCEFEE',
        'mobi-pinl': '#FFBDBB',
        'mobi-red': '#ff3e5e',
        'rank-yellow-1': '#FFD752',
        'rank-gray-2' : '#8F9A98',
        'rank-brown-3' : '#C68474',
        'rank-green-4' : '#40C5B4',
        'rank-blue-6' : '#191F65'
      },
      screens : {
        'tablet': '380px',
        'iPhone-12' : '370px',
        'iPhone-12-pro' : '385px',
        'iPhone-8' : '350px',
        'iPhone-8-plus': '410px',
        'iPhone-12-plus': '415px',
        'iPad' : '780px',
        'iPhone-5' : '310px',
        'Fold' : '760px'
        // 'iPhone-14-promax' : '420px'
        // 'iPhone-14-promax' : '420px'
        // 'iPhone-14-promax' : '420px'
      }
    },
  },
  plugins: [],
}