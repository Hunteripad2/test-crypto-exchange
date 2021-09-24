module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        main: "15%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
