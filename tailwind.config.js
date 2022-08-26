/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{html,js}"],

  theme: {
    colors: {
      Blue: "hsl(231,71%,63%)",
      Red: "hsl(348,91%,59%)",
      White: "hsl(0, 100%, 100%)",
      Grey: "hsl(240,20%,88%)",
      smolbg: "hsl(0, 30%, 88%)",
      bigbg: " hsl(230,75%,98%)",
    },

    extend: {
      screens: {
        Mobile: { min: "320px", max: "1439px" },
        Desktop: { min: "1440px" },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
