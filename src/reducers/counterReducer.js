// @flow

type State = {
  count: number,
}

type Action = {
  type: string,
}

import * as types from "../actions/actionTypes"

const initialState = {
  count: 0,
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT: {
      return { ...state, "count": state.count + 1 }
    }
    case types.COUNTER_DECREMENT: {
      return { ...state, "count": state.count - 1 }
    }
    default: {
      return state
    }
  }
}
