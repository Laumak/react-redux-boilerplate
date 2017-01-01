import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import routes from "./routes";
import configureStore from "./store/configureStore";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </AppContainer>, 
    
    document.getElementById("app")
);

if(module.hot) {
    module.hot.accept("./app", () => {
        require("./app");

        render(
            <AppContainer>
                <Provider store={store}>
                    <Router history={history} routes={routes} />
                </Provider>
            </AppContainer>, document.getElementById("app")
        );
    });
}
