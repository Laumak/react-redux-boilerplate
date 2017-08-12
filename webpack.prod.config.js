import path              from "path"
import webpack           from "webpack"
import WebpackMd5Hash    from "webpack-md5-hash"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"

const extractCSS = new ExtractTextPlugin("styles.css")

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
    extractCSS,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      }, {
        test: /(globals\.sass)$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
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
