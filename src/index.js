import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter } from "react-router-dom"

import App from "./containers/app"
import configureStore from "./store/configureStore"

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>, document.getElementById("app")
)
