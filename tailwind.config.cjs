/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e20",
        secondary: "rgba(235, 235, 245, .6);",
        tertiary: "rgba(255, 255, 245, .86)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}