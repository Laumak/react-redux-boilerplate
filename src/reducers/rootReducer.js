import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import counter from "./counterReducer";

const rootReducer = combineReducers({
    counter,
    routing: routerReducer
});

export default rootReducer;
