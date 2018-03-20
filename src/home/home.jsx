import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription, search, clear} from './homeActions'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { search, description } = this.props
    if (e.key === 'Enter') {
      search()
    } else if (e.key === 'Escape') {
      this.props.clear()
    }
  }

  createHotspot() {
    console.log('creating...')
  }

  deleteHotspot(key) {
    console.log(`Deleting hotspot #${key}`)
  }

  renderHotsPotsList() {
    let hotspots = [
      {
        id: 1,
        name: 'Hotspot #',
        infos: []
      },
      {
        id: 2,
        name: 'Hotspot #',
        infos: []
      },
      {
        id: 3,
        name: 'Hotspot #',
        infos: []
      },
      {
        id: 4,
        name: 'Hotspot #',
        infos: []
      }
    ]


    return (
      <div className="hotspots">
        <h2 className="hotspots__title">List of hotspots</h2>
        <ul className="hotspots__list">
          {
            hotspots.map((hotspot, key) => {
              return (
                <li className="hotspots__list__item" key={key}>
                  <span>{`${hotspot.name}${hotspot.id}`}</span>
                  <a href="#" onClick={() => this.deleteHotspot(hotspot.id)} className="hotspots__list__item__delete">Delete</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    const { search, description } = this.props

    return (
      <div className="home">
        <a onClick={() => this.createHotspot()} className="home__btn">Create Hotspot</a>
        {this.renderHotsPotsList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.home.description})
const mapDispatchToProps = dispatch => bindActionCreators({ 
  changeDescription,
  search,
  clear
 }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Todo)