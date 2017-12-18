import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  cartAddItem
} from '../store'

class Cart extends Component {
  static getInitialProps ({ store, isServer }) {
    // store.dispatch(addCount())
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.eventToClickUp = this.eventToClickUp.bind(this)
    this.eventToClickDown = this.eventToClickDown.bind(this)
    this.itemToDelete = this.itemToDelete.bind(this)

    // this.updateCart = this.updateCart.bind(this)
    // this.handlerButton = this.handlerButton.bind(this)

    this.state = { itemCounter: 0, inputText: 'haha' }

  }

  componentDidMount () {
    // this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    // clearInterval(this.timer)
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

  eventToClickUp() {
    console.log('hello! eventToClickUp', this.props.quantity)

  }

  eventToClickDown() {
    console.log('hello! eventToClickDowm', this.props.quantity)
  }

  itemToDelete() {

  }

  render () {
    return (
      <div>
        <p> { this.props.name }  S/ { this.props.price }</p>
        <p> cantidad: { this.props.quantity }</p>
        <section>
          <div onClick={ this.eventToClickUp }>+</div>
          <div onClick={ this.eventToClickDown }>-</div>
        </section>
        <section>
          <div onClick={ this.itemToDelete }>x</div>
        </section>
        <div>-------------------</div>
      </div>
    )
  }
}

const mapStateToProps = ({ value }) => ({ value })

const mapDispatchToProps = (dispatch) => {
  return {
    cartAddItem: bindActionCreators(cartAddItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
