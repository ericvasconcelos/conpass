export const loadHotspots = () => {
  let hotspotList = JSON.parse(localStorage.getItem("hotspots")) || [];

  return {
    type: 'LOAD_HOTSPOTS',
    payload: hotspotList
  }
}

export const activeCreateHotspot = e => {
  e.stopPropagation();

  return {
    type: 'ACTIVE_CREATE_HOTSPOT',
    allowCreate: true
  }
}

export const addHotspot = e => {

  return (dipsatch, getState) => {
    const allowCreate = getState().home.allowCreate
    
    if (allowCreate) {
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

      return dipsatch({
        type: 'ADD_HOTSPOT',
        payload: hotspotList,
        allowCreate: false
      })
    }
  }
}

export const deleteHotspot = (id) => {
  let hotspotList = JSON.parse(localStorage.getItem("hotspots")) || [];
  let newhotspotList = hotspotList.filter(item => item.id !== id)
  localStorage.setItem("hotspots", JSON.stringify(newhotspotList));

  return {
    type: 'DELETE_HOTSPOT',
    payload: newhotspotList
  }
}
