import path              from "path"
import webpack           from "webpack"
import autoprefixer      from "autoprefixer"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"],
  },
  debug: true,
  devtool: "inline-source-map",
  noInfo: false,
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }, {
        test: /(globals\.sass)$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader?sourceMap",
        ],
      }, {
        test: /\.sass$/,
        include: [
          path.resolve(__dirname, "src", "containers"),
          path.resolve(__dirname, "src", "components"),
        ],
        loaders: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
          "sass-loader?sourceMap",
        ],
      }, {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: "file-loader",
      },
    ],
  },
  postcss: () => [autoprefixer],
}
