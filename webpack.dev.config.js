import path              from "path"
import webpack           from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "react-hot-loader/patch",
    path.resolve(__dirname, "src/index.js"),
  ],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: true,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      }, {
        test: /(globals\.sass)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }, {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: "file-loader",
      },
    ],
  },
}
