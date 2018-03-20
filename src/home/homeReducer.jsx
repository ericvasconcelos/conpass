const INITIAL_STATE = {
  hotspots: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DELETE_HOTSPOT':
      return { ...state, hotspots: action.payload }
    case 'ADD_HOTSPOT':
      return { ...state, hotspots: action.payload }
    default:
      return state
  }
}