/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', "monospace"],
        heebo: ['"Heebo"', "sans-serif"],
      },
      colors: {
        primary_yellow: "#ED7E22", //DD5353,FF6464,B73E3E
        primary_black: "#000000",
        primary_black_light: "#1f272e",
        primary_blue: "#5c7196",
        primary_grey: "#acb7c0",
      },
    },
  },
  plugins: [],
};
