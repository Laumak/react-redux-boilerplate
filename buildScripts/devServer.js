import path from "path"
import open from "open"
import express from "express"
import webpack from "webpack"
import config from "../webpack.dev.config"

/* eslint-disable no-console */

const port = process.env.PORT || 3000
const app = express()
const compiler = webpack(config)

app.use(require("webpack-dev-middleware")(compiler, {
  hot: true,
  noInfo: true,
  stats: {
    colors: true,
  },
  publicPath: config.output.publicPath,
}))

app.use(require("webpack-hot-middleware")(compiler))
app.use(express.static(path.resolve(__dirname, "..", "src/assets")))

app.use("*", (req, res, next) => {
  const filename = path.join(compiler.outputPath, "index.html")

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) return next(err)

    res.set("content-type","text/html")
    res.send(result)
    res.end()
  })
})

app.listen(port, err => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Dev server listening at http://localhost:${port}`)
    open("http://localhost:" + port)
  }
})
