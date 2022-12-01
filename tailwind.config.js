/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      serif: ["Mikado", "serif"],
    },
    extend: {
      colors: {
        primary: "#231942",
        secondary: "#5e548e",
        tertiary: "#9f86c0",
        fourth: "#be95c4",
        fifth: "#e0b1cb",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "10%": { opacity: ".1" },
          "20%": { opacity: ".2" },
          "30%": { opacity: ".3" },
          "40%": { opacity: ".4" },
          "50%": { opacity: ".5" },
          "60%": { opacity: ".6" },
          "70%": { opacity: ".7" },
          "80%": { opacity: ".8" },
          "90%": { opacity: ".9" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s linear forwards",
      },
    },
  },
  plugins: [],
};
