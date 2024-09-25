/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainfont: ['"Public Sans"', 'sans-serif'],
      },
      colors: {
        containerGray: '#f5f5f5',
      },
    },
  },
  plugins: [],
}