import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./app";

render(
    <AppContainer>
        <App/>
    </AppContainer>, document.getElementById("app")
);

if(module.hot) {
    module.hot.accept("./app", () => {
        require("./app");

        render(
            <AppContainer>
                <App/>
            </AppContainer>, document.getElementById("app")
        );
    });
}
