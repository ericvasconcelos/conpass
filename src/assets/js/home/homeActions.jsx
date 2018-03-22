var items = document.querySelectorAll("h1,h2,h3,h4,h5,div,ul,li,a")

const styleHoverElement = (event) => {
  event.stopPropagation()
  const target = event.target
  target.style.border = "2px solid red"
}

const removeStyleHoverElement = (event) => {
  event.stopPropagation()
  const target = event.target
  target.style.border = ""
}


export const loadHotspots = () => {
  let hotspotList = JSON.parse(localStorage.getItem("hotspots")) || [];

  return {
    type: 'LOAD_HOTSPOTS',
    payload: hotspotList
  }
}

export const activeCreateHotspot = e => {
  e.stopPropagation();

  setTimeout(() => {
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseover", styleHoverElement)
      items[i].addEventListener("mouseout", removeStyleHoverElement)
    }
  }, 500)
  
  return {
    type: 'ACTIVE_CREATE_HOTSPOT',
    allowCreate: true
  }
}

export const addHotspot = e => {

  return (dipsatch, getState) => {
    const allowCreate = getState().home.allowCreate
    
    if (allowCreate) {
      let hotspotList = JSON.parse(localStorage.getItem("hotspots")) || []
      const native = e.nativeEvent;
      const hotspot = {
        id: Math.ceil(Math.random() * 10000),
        name: 'Hotspots #',
        element: {
          id: native.srcElement.id,
          class: native.srcElement.class,
          tagName: native.srcElement.tagName,
          outerHTML: native.srcElement.outerHTML,
          clientY: native.clientY,
          clientX: native.clientX
        },
        style: {
          top: native.clientY,
          left: native.clientX
        }
      }

      hotspotList.push(hotspot)
      localStorage.setItem("hotspots", JSON.stringify(hotspotList))

      e.target.style.border = ""
      for (var i = 0; i < items.length; i++) {
        items[i].removeEventListener("mouseover", styleHoverElement)
        items[i].removeEventListener("mouseout", removeStyleHoverElement)
      }

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
  localStorage.setItem("hotspots", JSON.stringify(newhotspotList))

  return {
    type: 'DELETE_HOTSPOT',
    payload: newhotspotList
  }
}
