const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./*.html"],
      css: ["./assets/style.css", "./assets/bootstrap/bootstrap.min.css"],
      safelist: [],
    }),
  ],
};
