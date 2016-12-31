import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./app";
import Home from "./demo/home";
import Counter from "./demo/counter";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="counter" component={Counter} />
    </Route>
);