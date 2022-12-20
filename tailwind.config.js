/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        glossyred: "#fc0b03",
        bloodred: "#f01a13"
      },

      fontFamily:{
        name: "Georgia, serif",
        cursive: "cursive"
      },
      animation:{
        aboutme: "rotatex 5s ease-in-out infinite"
      },
      keyframes:{
        rotatex:{
          "0%": {transform: "rotateX(0deg)"},
          "50%": {transform: "rotateX(180deg)"},
          "100%": {transform: "rotateX(0deg)"},
        }
      }
    },
    
  },
  plugins: [],
}
