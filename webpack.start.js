const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader"
        // options: {
        //   name: "images/[name].[ext]",
        //   publicPath: "/project/dsm/images/"
        // }
      }
    ]
  }
});
