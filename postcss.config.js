const purgecss = require(require.resolve("@fullhuman/postcss-purgecss"));

module.exports = {
  plugins: [
    purgecss({
      content: ["./*.html"],
      css: ["./assets/style.css", "./assets/bootstrap/bootstrap.min.css"],
      safelist: [
        "container",
        "row",
        "col",
        /^col-/,
        "col-md-4",
        "col-sm-6",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "img-fluid",
        "mb-3",
        "mt-3",
        "p-2",
        /^p-/,
        /^m-/,
        /^d-/,
        /^align-/,
        /^justify-/,
      ],
    }),
  ],
};
