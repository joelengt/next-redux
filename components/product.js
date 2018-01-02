import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  updateCartImprove,
  deleteItemCartImprove,
  getText
} from '../actions'

class Product extends Component {
  constructor(props) {
    super(props)
    this.btnToDelete = this.btnToDelete.bind(this)

  }

  btnToDelete() {
    const { $storeDispatch } = this.props
    $storeDispatch.deleteItemCartImprove(this.props.id)
  }

  render () {
    return (
      <div style={{ 'border-bottom': '1px solid lightgray'}}>
        <p>{ this.props.name }</p>
        <p>Cant: { this.props.quantity }</p>
        <p>S/{ this.props.subTotal }</p>
        <button onClick={ this.btnToDelete }>Delete</button>
      </div>
    )
  }
}

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
    deleteItemCartImprove: bindActionCreators(deleteItemCartImprove, dispatch),
  }

  return { $storeDispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
