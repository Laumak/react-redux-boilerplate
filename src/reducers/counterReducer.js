import * as types from "../actions/actionTypes"

const initialState = {
  counter: {
    count: 0,
  },
}

export default (state = initialState.counter, action) => {
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
