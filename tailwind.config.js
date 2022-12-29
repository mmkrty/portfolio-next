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
    },
  },
  plugins: [],
};
