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

  render() {
    const { search, description } = this.props

    return (
      <div className="main">
        
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