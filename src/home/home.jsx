import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadHotspots, deleteHotspot } from './homeActions'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadHotspots()
  }

  createHotspot() {
    console.log('creating...')
  }

  renderHotsPotsList() {
    let hotspots = this.props.hotspots;

    return (
      <div className="hotspots">
        <h2 className="hotspots__title">List of hotspots</h2>
        <ul className="hotspots__list">
          {
            hotspots.map((hotspot, key) => {
              return (
                <li className="hotspots__list__item"
                  key={key}>
                  <span>{`${hotspot.name}${hotspot.id}`}</span>
                  <a onClick={() => this.props.deleteHotspot(hotspot.id)} className="hotspots__list__item__delete">Delete</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="home">
        <a className="home__btn">Create Hotspot</a>
        {this.renderHotsPotsList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({hotspots: state.home.hotspots})
const mapDispatchToProps = dispatch => bindActionCreators({
  loadHotspots,
  deleteHotspot
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)