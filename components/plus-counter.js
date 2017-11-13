import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPlusNumber } from '../store'

class PlusCounter extends Component {
  constructor(props) {
    super(props)
    this.addEventCounter = this.addEventCounter.bind(this)
  }

  addEventCounter() {
    this.props.getPlusNumber()
  }

  render () {
    const { value } = this.props

    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <p>PlusCounter: <span>{value}</span></p>
        <button onClick={this.addEventCounter}>Add To Count</button>
      </div>
    )
  }
}

const mapStateToProps = ({ value }) => ({ value })

const mapDispatchToProps = (dispatch) => {
  return {
    getPlusNumber: bindActionCreators(getPlusNumber, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlusCounter)

