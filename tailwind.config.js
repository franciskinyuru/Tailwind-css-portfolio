const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        'cyan': colors.cyan,
        'emerald': colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}