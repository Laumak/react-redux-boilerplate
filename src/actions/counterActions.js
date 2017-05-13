import * as types from "./actionTypes"

export function increment() {
    return function(dispatch) {
        dispatch({
            "type": types.COUNTER_INCREMENT,
        })
    }
}

export function decrement() {
    return function(dispatch) {
        dispatch({
            "type": types.COUNTER_DECREMENT,
        })
    }
}
