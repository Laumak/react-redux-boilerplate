import initialState from "./initialState"
import * as types from "../actions/actionTypes"

export default function CounterReducer(state = initialState.counter, action) {
    switch (action.type) {
        case types.COUNTER_INCREMENT: {
            return (Object.assign({}, state, { "count": state.count + 1 }))
        }
        case types.COUNTER_DECREMENT: {
            return (Object.assign({}, state, { "count": state.count - 1 }))
        }
        default: {
            return state
        }
    }
}
