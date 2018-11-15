import { combineReducers } from 'redux'

import counter from './counter'
import themes from './themes'

export default combineReducers({
  counter,
  themes
})
