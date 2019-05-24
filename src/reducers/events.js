import {
  EVENTS_FETCHED,
  EVENT_CREATE_SUCCESS,
  EVENT_DELETE_SUCCESS,
  EVENT_UPDATED
} from '../actions/events'

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events
    case EVENT_CREATE_SUCCESS:
      return [...state, action.event]
    case EVENT_DELETE_SUCCESS:
      return state.filter(event => event.id !== action.id)
    case EVENT_UPDATED:
      return state && state.map(event => event.id === action.event.id
        ? action.event
        : event
      )
    default:
      return state
  }
}

export default reducer
