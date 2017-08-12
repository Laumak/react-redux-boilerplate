import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter } from "react-router-dom"

import App from "./containers/app"
import configureStore from "./store/configureStore"

const store = configureStore()
const appEl = document.getElementById("app")

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>, appEl
)

if(module.hot) {
  module.hot.accept("./containers/app", () => {
    const NewApp = require("./containers/app").default

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <BrowserRouter>
            <NewApp store={store} />
          </BrowserRouter>
        </Provider>
      </AppContainer>, appEl
    )
  })
}
