const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  // devtool: "cheap-module-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new UglifyJSPlugin({
    //   sourceMap: true
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
          publicPath: "/project/"
          // publicPath:"../project/dsm/images/" //后台路径
        }
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react")
    }
  }
});
