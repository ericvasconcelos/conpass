const INITIAL_STATE = {
  hotspots: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOAD_HOTSPOTS':
      return { hotspots: action.payload }
    case 'ADD_HOTSPOT':
      return { hotspots: action.payload }
    case 'DELETE_HOTSPOT':
      return { hotspots: action.payload }
    default:
      return state
  }
}