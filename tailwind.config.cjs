/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    navbar: {
      styles: {
        base: {
          navbar: {
            gray: "bg-gray-900"
          }
        }
      }
    },
    extend: {
      fontFamily:{
        'pop':['Poppins','sans-serif']
      },
      spacing: {
        '128': '38rem',
        '115': '25rem',
      }
    },
  },
  plugins: [],
})
