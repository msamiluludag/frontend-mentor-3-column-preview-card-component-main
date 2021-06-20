module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          orange: {
            dark: "#BE6E18",
            light: "hsl(31, 77%, 52%)",
          },
          cyan: {
            dark: "#00393D",
            light: "hsl(184, 100%, 22%)",
          },

          darkCyan: {
            dark: "#000F0F",
            light: "hsl(179, 100%, 13%)",
          },
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
