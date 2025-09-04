/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        voyage: ["Voyage", "Arial Black", "Arial", "sans-serif"],
        sans: ["Helvetica", "sans-serif"],
      },
      colors: {
        "orange-custom": "#de5e40",
        "black-custom": "#0f0f0f",
      },
    },
  },
  plugins: [],
};
