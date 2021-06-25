module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(31, 77%, 52%)",
          cyan: "hsl(184, 100%, 22%)",
          darkCyan: "hsl(179, 100%, 13%)",
          neutralGray: "hsl(0, 0%, 95%)",
        },
      },
      fontSize: {
        15: ["15px", "1.4rem"],
      },
      maxWidth: {
        card: "920px",
      },
    },
    fontFamily: {
      lexendDeca: ["Lexend Deca", "sans-serif"],
      bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
