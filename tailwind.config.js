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
    },
  },
  plugins: [],
};
