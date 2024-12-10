/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        'hebele': '#ff6347',
      },
      screens: {
        '3xl': '1700px',
      },
    },
    plugins: [],
  }
}
