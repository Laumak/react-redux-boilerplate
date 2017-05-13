import * as types from "./actionTypes"

export const increment = () => dispatch =>
  dispatch({ "type": types.COUNTER_INCREMENT })

export const decrement = () => dispatch =>
  dispatch({ "type": types.COUNTER_DECREMENT })
