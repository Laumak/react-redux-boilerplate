import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Router, browserHistory } from "react-router";

import routes from "./routes";

render(
    <AppContainer>
        <Router history={browserHistory} routes={routes} />
    </AppContainer>, 
    
    document.getElementById("app")
);

if(module.hot) {
    module.hot.accept("./app", () => {
        require("./app");

        render(
            <AppContainer>
                <Router history={browserHistory} routes={routes} />
            </AppContainer>, document.getElementById("app")
        );
    });
}
