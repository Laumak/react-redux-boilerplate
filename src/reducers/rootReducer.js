import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import counter from "./counterReducer"

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
})

export default rootReducer
