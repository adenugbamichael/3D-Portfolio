/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1e1e20",
        secondary: "rgba(235, 235, 245, .6)",
        tertiary: "rgba(255, 255, 245, .86)",
        back: "#000000",
        boxes: "#252529",
        rectangle: "#4B5563",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/wave2.png')",
      },
    },
  },
  plugins: [],
}
