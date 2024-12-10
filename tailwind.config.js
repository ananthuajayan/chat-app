/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      md:'1000px'
    },
    extend: {
      height:{
        'heightdef':"87%"
      }
    },
  },
  plugins: [],
}