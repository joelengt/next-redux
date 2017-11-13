import React from 'react'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import AddCount from '../components/AddCount'

import {
  initStore,
  startClock,
  addCount,
  serverRenderClock
} from '../store'

class Sample extends React.Component {
  static getInitialProps ({ store, isServer }) {
    //store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())
    return { isServer }
  }

  render () {
    return (
      <div>
        <p>Render redux from { this.props.isServer ? 'server': 'client' }!</p>
        <AddCount />
        <nav>
          <Link href="/"><a>Navigate</a></Link>
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Sample)
