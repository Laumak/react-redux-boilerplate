import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { AppContainer } from "react-hot-loader"
import { Router, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import routes from "./routes"
import configureStore from "./store/configureStore"

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const appEl = document.getElementById("app")

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </AppContainer>, appEl
)

if(module.hot) {
    module.hot.accept("./routes", () => {
        require("./routes")

        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <Router history={history} routes={routes} />
                </Provider>
            </AppContainer>, appEl
        )
    })
}
