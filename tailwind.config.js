const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      tyrianPurple: {
        50: "#8c6474",
        100: "#815566",
        200: "#744457",
        300: "#663146",
        400: "#571C33",
        500: "#4F192E",
        600: "#48172A",
        700: "#411526",
        800: "#3b1323",
        900: "#361120",
      },
      black: colors.black,
      blue: colors.blue,
      blueGray: colors.blueGray,
      yellow: colors.yellow,
      cyan: colors.cyan,
      red: colors.red,
      emerald: colors.emerald,
      gray: colors.gray,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      indigo: colors.indigo,
      white: colors.white,
    },
    extend: {
      colors: {
        "warm-gray": colors.warmGray,
        teal: colors.teal,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
