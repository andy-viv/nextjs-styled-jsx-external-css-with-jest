module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("precss")({
      path: ["./styles", "./node_modules"],
    }),
  ],
};
