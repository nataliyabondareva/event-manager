import { combineReducers } from 'redux'
import { dealWithEventsFetched } from './events'
import reducer from './events'
import event from './event'

export default combineReducers({
  reducer,
  event
})
