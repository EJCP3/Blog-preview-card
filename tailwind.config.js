/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        "principal": ['Figtree, sans-serif'],
      },


      colors: {
        Yellow: "hsl(47, 88%, 63%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 50%)",
        Black: "hsl(0, 0%, 7%)",
      },

      screens: {
        'pc': '450px',
      },
    },
  },
  plugins: [],
};
