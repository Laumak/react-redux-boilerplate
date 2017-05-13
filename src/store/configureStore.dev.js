import { createStore, applyMiddleware } from "redux"

import reduxImmutableStateInvariant from "redux-immutable-state-invariant"
import thunk from "redux-thunk"

import rootReducer from "../reducers"

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
  )

  if(module.hot) {
    module.hot.accept("../reducers", () => {
      const newStore = require("../reducers").default
      store.replaceReducer(newStore)
    })
  }

  return store
}
