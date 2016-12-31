import path from "path";
import open from "open";
import express from "express";
import webpack from "webpack";
import config from "../webpack.dev.config";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    stats: {
        colors: true
    },
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, err => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Dev server listening at http://localhost:${port}`);
        open("http://localhost:" + port);
    }
});