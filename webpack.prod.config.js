import path              from "path"
import webpack           from "webpack"
import autoprefixer      from "autoprefixer"
import WebpackMd5Hash    from "webpack-md5-hash"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"

const extractVendorCSS = new ExtractTextPlugin("vendor.css")
const extractAppCSS    = new ExtractTextPlugin("styles.css")

export default {
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devtool: "source-map",
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index"),
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    extractVendorCSS,
    extractAppCSS,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      }, {
        test: /(globals\.sass)$/,
        use: extractVendorCSS.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [autoprefixer]
                },
                sourceMap: true,
              },
            },
            "sass-loader",
          ],
        }),
      }, {
        test: /\.sass$/,
        include: [
          path.resolve(__dirname, "src", "containers"),
          path.resolve(__dirname, "src", "components"),
        ],
        use: extractAppCSS.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [autoprefixer]
                },
                sourceMap: true,
              },
            },
            "sass-loader",
          ],
        }),
      }, {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: "file-loader",
      },
    ],
  },
}
