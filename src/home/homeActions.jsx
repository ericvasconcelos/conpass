
export const deleteHotspot = e => {
  // let oldHotspots = this.state.hotspots;
  // let newHotspots = oldHotspots.filter(item => item.id !== id)

  return {
    type: 'DELETE_HOTSPOT',
    payload: event.target.value
  }
}

export const addHotspot = e => {


  const hotspot = {
    id: Math.ceil(Math.random() * 10000),
    name: 'Hotspots #',
    style: {
      top: e.nativeEvent.clientY,
      left: e.nativeEvent.clientX
    }
  }

  console.log(hotspot)

  return {
    type: 'ADD_HOTSPOT',
    payload: [hotspot]
  }
}