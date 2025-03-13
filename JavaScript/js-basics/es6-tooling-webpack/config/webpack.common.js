const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  // 入口
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: "release_v0",
    }),
  ],
});
