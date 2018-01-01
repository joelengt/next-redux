import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Link from 'next/link'

class Second extends React.Component {
  static getInitialProps ({ req, store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.eventToClick = this.eventToClick.bind(this)
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  eventToClick() {
    console.log('hello!')

    this.props.addCount()
  }

  render () {
    return (
      <div>
        <p>Render redux from { this.props.isServer ? 'server': 'client' }!</p>
        <div>
          <p>Second: { this.props.hello } -> { this.props.count }</p>
          <div onClick={ this.eventToClick }>Event??</div>
          <Link href='/'><a>Navigate</a></Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

const mapStateToProps = ({ count }) => ({ count })


Second.defaultProps = {
  hello: 'It is me'
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Second)
