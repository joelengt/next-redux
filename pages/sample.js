import React from 'react'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import PlusCounter from '../components/plus-counter'

import {
  initStore,
  startClock,
  getPlusNumber,
  serverRenderClock,
  updateStateTurning,
  updateCart,
  updateGift
} from '../store'

class Sample extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(getPlusNumber())
    store.dispatch(updateCart(0))
    store.dispatch(updateGift('waiting'))

    return { isServer }
  }

  constructor(props) {
    super(props)
    this.addEvent = this.addEvent.bind(this)
    this.switchButton = this.switchButton.bind(this)
    this.updateCart = this.updateCart.bind(this)
    this.handlerButton = this.handlerButton.bind(this)

    this.state = { itemCounter: 0, inputText: 'haha' }
  }

  componentDidMount () {
    console.log('Event??? componentDidMount')
  }

  componentWillUnmount () {
    console.log('Event??? componentWillUnmount')
  }

  addEvent() {
    this.props.getPlusNumber()
  }

  switchButton() {
    this.props.updateStateTurning()
  }

  updateCart() {
    let cart = this.state.itemCounter
    let message = this.state.inputText

    this.props.updateCart(cart)
    this.props.updateGift(message)

    console.log('cart state ==> ', this.state.itemCounter)
    console.log('message state ==> ', this.state.inputText)
    
  }

  handlerButton(e) {
    switch(e.target.name) {
      case 'cart':
          this.setState({ itemCounter: e.target.value })
        break
      case 'message':
          this.setState({ inputText: e.target.value })
        break
      default:
        console.log('haha')
    }
  }

  render () {
    return (
      <div>
        <p>Render redux from { this.props.isServer ? 'server': 'client' }!</p>
        <p>value: { this.props.value }</p>
        <div>
          <p>switch: { this.props.turning ? 'on':'off' }</p>
          <button onClick={ this.switchButton }>turn on/off</button>
        </div>
        <div>
          <PlusCounter/>
        </div>
        <nav>
          <Link href="/"><a>Navigate</a></Link>
        </nav>
        <div>
          <p>cart items: { this.props.cart }</p>
          <p>message: { this.props.gift }</p>
          <div>
            <input type="text" name="cart" placeholder="introduce a numero" value={ this.state.itemCounter } onChange={ this.handlerButton }/>
            <input type="text" name="message" placeholder="introduce a message" value={ this.state.inputText } onChange={ this.handlerButton }/>
            <button onClick={ this.updateCart }>Update items</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ value, turning, cart, gift }) => ({ value, turning, cart, gift })

const mapDispatchToProps = (dispatch) => {
  return {
    getPlusNumber: bindActionCreators(getPlusNumber, dispatch),
    updateStateTurning: bindActionCreators(updateStateTurning, dispatch),
    updateCart: bindActionCreators(updateCart, dispatch),
    updateGift: bindActionCreators(updateGift, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Sample)
