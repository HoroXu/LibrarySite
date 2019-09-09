const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          drop_debugger: true,
          drop_console: true
        }
      }
      // sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),

    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      filename: '[path].gz[query]',
    })
    //     new webpack.DllReferencePlugin({
    //       manifest: path.resolve(__dirname, "public/dll", "manifest.json")
    //     })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
          publicPath: "/project/"
        }
      }
    ]
  }
});
