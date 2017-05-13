// @flow

import * as types from "./actionTypes"

export const increment = () => (dispatch: Function) =>
  dispatch({ "type": types.COUNTER_INCREMENT })

export const decrement = () => (dispatch: Function) =>
  dispatch({ "type": types.COUNTER_DECREMENT })
