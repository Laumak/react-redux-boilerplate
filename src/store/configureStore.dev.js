import { createStore, applyMiddleware } from "redux"

import reduxImmutableStateInvariant from "redux-immutable-state-invariant"
import thunk from "redux-thunk"

import rootReducer from "../reducers/rootReducer"

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk, reduxImmutableStateInvariant())
        )
    )
}
