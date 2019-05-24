const initialState = null ;

export default function reducer (state = initialState, action = action.event) {
  switch (action.type) {
  case 'EVENT_FETCHED':
    return action.event
  default:
    return state;
  }
}


