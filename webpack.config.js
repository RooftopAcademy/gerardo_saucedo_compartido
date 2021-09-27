module.exports = {
  entry: {
    index: ["./ts/app.ts", "./ts/index.ts"],
    products: ["./ts/app.ts", "./ts/products.ts"],
    detail: ["./ts/app.ts", "./ts/detail.ts"],
  },
  output: {
    filename: "./js/[name].js",
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  // Other options...
  mode: "production",
};
