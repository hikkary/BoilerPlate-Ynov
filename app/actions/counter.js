export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'

export const increaseCounter = () => ({
  type: INCREASE_COUNTER
})

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER
})

export const resetCounter = () => ({
  type: RESET_COUNTER
})
