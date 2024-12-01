/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#dabf6e',
        secondary: {
          100: '#FF0000',
          200: '#913333'
        }
      },
      fontSize: {
        'very-huge-tan': '10rem'
      }
    },
  },
  plugins: [],
}

