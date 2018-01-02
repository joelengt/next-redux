import React from 'react'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import PlusCounter from '../components/plus-counter'
import User from '../components/user'
import Product from '../components/product'

import {
  initStore
} from '../store'

import {
  startClock,
  getPlusNumber,
  serverRenderClock,
  updateStateTurning,
  updateCart,
  updateGift,
  updateImprove,
  updateCartImprove,
  deleteItemCartImprove,
  fetchMainData,
  getText,
  eventPOST
} from '../actions'

class Refactor extends React.Component {
  static getInitialProps ({ store, isServer }) {
    /* store.dispatch to dispatch the action */
    store.dispatch(getPlusNumber())
    store.dispatch(updateCart(0))
    store.dispatch(updateGift('waiting'))

    /* store.getState to get the current state */
    console.log('stored value', store.getState())

    /* store subscribe*/
    store.subscribe(() => {
      console.log('event subs??', document)
      document.body.innerText = store.getState()
    })

    return { isServer }
  }

  constructor(props) {
    super(props)
    this.addEvent = this.addEvent.bind(this)
    this.switchButton = this.switchButton.bind(this)
    this.updateCart = this.updateCart.bind(this)
    this.handlerButton = this.handlerButton.bind(this)
    this.eventRandom = this.eventRandom.bind(this)

    this.state = { itemCounter: 0, inputText: 'haha' }
  }

  componentDidMount () {
    console.log('Event??? componentDidMount')
  }

  componentWillUnmount () {
    console.log('Event??? componentWillUnmount')
  }

  addEvent() {
    const { $storeDispatch } = this.props
    $storeDispatch.getPlusNumber()
  }

  switchButton() {
    const { $storeDispatch, $storeState } = this.props
    $storeDispatch.updateStateTurning()

    let va = $storeState.improve.items
    va.push('c')
    $storeDispatch.updateImprove(va)

    let product = {
      id: 12,
      sku: '212',
      quantity: 1
    }

    $storeDispatch.updateCartImprove(product)

    /* Try text to dispatch */
    console.log('Resturn DATA STRING==>', $storeDispatch.fetchMainData('hello :3') )


    $storeDispatch.eventPOST('human')

  }

  updateCart() {
    const { $storeDispatch } = this.props

    let cart = this.state.itemCounter
    let message = this.state.inputText

    $storeDispatch.updateCart(cart)
    $storeDispatch.updateGift(message)

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

  eventRandom() {
    const { $storeDispatch } = this.props

    console.log('Event procedure!!')
    $storeDispatch.getPlusNumber() /* event dispatch*/
  }

  render () {
    console.log('render is called??', this.props)

    const { $storeState } = this.props

    return (
      <div>
        <div>
          <div>
            a: { $storeState.improve.human.isFetching }
            b: { $storeState.improve.human.didInvalidate }
          </div>
          <p>Render redux from { this.props.isServer ? 'server': 'client' }!</p>
          <p>value: { $storeState.main.value }</p>
          <div>
            <p>switch: { $storeState.main.turning ? 'on':'off' }</p>
            <button onClick={ this.switchButton }>turn on/off</button>
          </div>
          <div>
            {
              $storeState.improve.items.map((element) => {
                return <p>{ element }</p>
              })
            }
          </div>
          <div>
            <h2>CART</h2>
            <div>
              <p>Cant: { $storeState.improve.carrito.summary.quantity }</p>
              <p>IGV: { $storeState.improve.carrito.summary.igv }</p>
              <p>Sub Total: { $storeState.improve.carrito.summary.subTotal }</p>
              <p>Total: { $storeState.improve.carrito.summary.total }</p>
            </div>
            <div>
              {
                $storeState.improve.carrito.items.map((product) => {
                  return (
                    <Product {...product} key={ product.id }/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Refactor.defaultProps = {
  days: [
    {
      id: 1,
      name: 'nichiyoubi',
      form: 'a',
    },
    {
      id: 2,
      name: 'getsuyoubi',
      form: 'b'
    },
    {
      id: 3,
      name: 'kayoubi',
      form: 'c'
    },
    {
      id: 4,
      name: 'suiyoubi',
      form: 'd'
    },
    {
      id: 5,
      name: 'mokuyoubi',
      form: 'e'
    },
    {
      id: 6,
      name: 'kinyoubi',
      form: 'f'
    },
    {
      id: 7,
      name: 'doyoubi',
      form: 'g'
    }
  ]
};

const mapStateToProps = (state) => {
  const { main, cart, improve } = state

  let $storeState = {
    main,
    cart,
    improve
  }

  return { $storeState }
}

const mapDispatchToProps = (dispatch) => {
  let $storeDispatch = {
    getPlusNumber: bindActionCreators(getPlusNumber, dispatch),
    updateStateTurning: bindActionCreators(updateStateTurning, dispatch),
    updateCart: bindActionCreators(updateCart, dispatch),
    updateGift: bindActionCreators(updateGift, dispatch),
    updateImprove: bindActionCreators(updateImprove, dispatch),
    updateCartImprove: bindActionCreators(updateCartImprove, dispatch),
    deleteItemCartImprove: bindActionCreators(deleteItemCartImprove, dispatch),
    fetchMainData: bindActionCreators(fetchMainData, dispatch),
    eventPOST: bindActionCreators(eventPOST, dispatch)
  }

  return { $storeDispatch }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Refactor)
