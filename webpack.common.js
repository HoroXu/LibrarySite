const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle-[hash].js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  stats: {
    entrypoints: false,
    children: false,
    colors: true,
    env: true,
    performance: true
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    disableHostCheck: true,
    inline: true,
    port: 8080,
    proxy: {
      "/": {
        target:
          "http://47.100.245.81:80", //pre环境


        secure: true,
        changeOrigin: true
      }
    },
    stats: {
      entrypoints: false,
      children: false,
      colors: true,
      env: true,
      performance: true
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          comments: true
        }
        // sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],

    // splitChunks: {
    //   chunks: "all", //默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
    //   minSize: 30000, //合并前模块文件的体积
    //   minChunks: 1, //最少被引用次数
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   automaticNameDelimiter: "~", //自动命名连接符
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       minChunks: 1,
    //       priority: -10 //优先级更高
    //     },
    //     default: {
    //       test: /[\\/]src[\\/]js[\\/]/,
    //       minChunks: 2, //一般为非第三方公共模块
    //       priority: -20,
    //       reuseExistingChunk: true
    //     }
    //   }
    // },
    runtimeChunk: {
      name: "manifest"
    }
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, "public/dll", "manifest.json")
    // }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader?cacheDirectory"
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src") // 精确指定要处理的目录
      },
      {
        test: /\.(sa|sc|le)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",

          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
                autoprefixer({
                  // browsers: [
                  //   ">1%",
                  //   "last 4 versions",
                  //   "Firefox ESR",
                  //   "not ie < 9" // React doesn't support IE8 anyway
                  // ],
                  flexbox: "no-2009"
                })
              ],
              javascriptEnabled: true
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.css$/,

        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.styl$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                // require("autoprefixer"),
                // autoprefixer({
                //   browsers: [
                //     ">1%",
                //     "last 4 versions",
                //     "Firefox ESR",
                //     "not ie < 9" // React doesn't support IE8 anyway
                //   ],
                //   flexbox: "no-2009"
                // })
              ],
              import: [path.join(__dirname, "./src/assets/stylus/index.styl")],
              paths: [
                path.join(__dirname, "./src/assets/"),
                path.join(__dirname, "./")
              ]
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "images/[name].[ext]"
      //   }
      // },
      {
        test: /\.(woff|woff2|svg|ttf|eot)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000, //这里要足够大这样所有的字体图标都会打包到css中
            name: "images/[name].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src"),
      react: path.resolve("./node_modules/react")
    }
  }
  // externals: {
  //   'echarts': 'echarts'
  //   }
};
