module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": {
            transform: "scale(1) translate(0px, 0px)",
          },
          "33%": {
            transform: "scale(1.2) translate(20px, -20px)",
          },
          "66%": {
            transform: "scale(0.9) translate(10px, -10px)",
          },
          "100%": {
            transform: "scale(1) translate(0px, 0px)",
          },
        },
        spinner: {
          "0%": {
            transform: "rotate(40deg)",
          },
          "50%": {
            transform: "rotate(220deg)",
          },
          "100%": {
            transform: "rotate(400deg)",
          },
        },
      },
      animation: {
        move: "move 7s ease infinite",
        spinner: "spinner 2s ease infinite",
      },
    },
  },
  plugins: [],
};
