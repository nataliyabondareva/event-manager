import { EVENT_FETCHED, EVENT_UPDATED } from '../actions/events'

const initialState = null

export default function reducer (
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event
    case EVENT_UPDATED:
      return action.event
    default:
      return state
  }
}
