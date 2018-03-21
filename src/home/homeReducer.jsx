const INITIAL_STATE = {
  hotspots: [],
  allowCreate: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ACTIVE_CREATE_HOTSPOT':
      return {...state, allowCreate: action.allowCreate }
    case 'LOAD_HOTSPOTS':
      return {...state, hotspots: action.payload }
    case 'ADD_HOTSPOT':
      return {...state, hotspots: action.payload, allowCreate: action.allowCreate }
    case 'DELETE_HOTSPOT':
      return {...state, hotspots: action.payload }
    default:
      return state
  }
}