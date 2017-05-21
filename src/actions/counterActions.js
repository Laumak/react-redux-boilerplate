import * as types from "./actionTypes"

export const incrementAction = () => dispatch =>
  dispatch({ "type": types.COUNTER_INCREMENT })

export const decrementAction = () => dispatch =>
  dispatch({ "type": types.COUNTER_DECREMENT })
