import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../store'

class AddCount extends Component {
  add = () => {
    this.props.addCount()
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <p>AddCount: <span>{count}</span></p>
        <button onClick={this.add}>Add To Count</button>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count }) // to this.props.count
// * this component is sub from store update: Any time the store is updated, mapStateToProps will be called
// * the result is a must be a plane text, which will be merged into the components props
// * If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

// * objects or functions
// * object: each function insate is asumed to be a redux action
// * function: you get "dispatch" as first parameter, to bind dispatch, use bindActionCreators()


export default connect(mapStateToProps, mapDispatchToProps)(AddCount)


/* map state to props */
function mapStateTOPRops ({ count }) {
  return ({ count })
}
