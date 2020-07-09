const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const now = new Date();
const bundleTime =
  now.getFullYear() +
  (now.getMonth() + 1).toString().padStart(2, "0") +
  now.getDate().toString().padStart(2, "0") +
  "-" +
  now.getHours().toString().padStart(2, "0") +
  now.getMinutes().toString().padStart(2, "0") +
  now.getSeconds().toString().padStart(2, "0");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html",
});

const config = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `bundle-${bundleTime}.js`,
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [htmlPlugin],
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
};

module.exports = config;
