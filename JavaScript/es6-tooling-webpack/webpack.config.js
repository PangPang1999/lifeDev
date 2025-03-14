const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口文件，假设 src/index.js 是主入口
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出目录
    clean: true, // 每次打包时清空 dist 目录
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 对所有 .js 文件使用 babel-loader
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    // 自动生成并注入 bundle 到 index.html 中
    new HtmlWebpackPlugin({
      template: "index.html", // 使用项目根目录下的 index.html 作为模板
    }),
  ],
  mode: "production", // 可根据需要选择 development 或 production
};
