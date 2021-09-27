module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        desktop: "15%",
        mobile: "5%",
      },
      fontSize: {
        "title-desktop": "50px",
        "title-mobile": "40px",
      },
      fontFamily: {
        vollkorn: "Vollkorn",
      },
      textColor: {
        primary: "#282828",
        light: "#80A2B6",
        error: "#E03F3F",
      },
      backgroundColor: {
        highlight: "#EAF1F7",
        input: "#F6F7F8",
        primary: "#11B3FE",
        "primary-highlight": "#0095E0",
      },
      borderColor: {
        primary: "#E3EBEF",
        thick: "#C1D9E5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
