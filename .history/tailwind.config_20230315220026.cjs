/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
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
}
