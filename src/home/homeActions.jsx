
export const deleteHotspot = e => {
  // let oldHotspots = this.state.hotspots;
  // let newHotspots = oldHotspots.filter(item => item.id !== id)

  return [
    {
      type: 'DELETE_HOTSPOT',
      payload: event.target.value
    },
    loadHotspots()
  ]
}

export const loadHotspots = () => {
  let hotspotList = JSON.parse(localStorage.getItem("hotspots")) || [];

  return {
    type: 'LOAD_HOTSPOTS',
    payload: hotspotList
  }
}

export const addHotspot = e => {
  let hotspotList = JSON.parse(localStorage.getItem("hotspots")) || [];

  const hotspot = {
    id: Math.ceil(Math.random() * 10000),
    name: 'Hotspots #',
    style: {
      top: e.nativeEvent.clientY,
      left: e.nativeEvent.clientX
    }
  }

  hotspotList.push(hotspot);
  localStorage.setItem("hotspots", JSON.stringify(hotspotList));
  
  return [
    {
      type: 'ADD_HOTSPOT',
      payload: hotspotList
    },
    loadHotspots()
  ]
}