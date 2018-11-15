import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
} from '../actions/counter'

const initialState = {
  counter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    case RESET_COUNTER:
      return {
        ...state,
        counter: 0
      }
    default:
      return state
  }
}
