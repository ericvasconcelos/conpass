import React, { Component } from 'react'
import Header from '../template/header/header'
import Home from '../home/home'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addHotspot } from '../home/homeActions'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let hotspots = this.props.hotspots;

    console.log(hotspots)

    return (
      <div className="container general" onClick={this.props.addHotspot}>
        {
          hotspots.map((element, key) => {
            return (
              <span key={key} className="hotspot__element" style={element.style}>
              </span>
            )
          })
        }

        <Header />
        <Home />
      </div>
    )
  }
}

const mapStateToProps = state => ({hotspots: state.home.hotspots})
const mapDispatchToProps = dispatch => bindActionCreators({ 
  addHotspot
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)