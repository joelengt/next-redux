import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  value: 20,
  turning: false,
  cart: 0,
  gift: ''
}

export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TICK: 'TICK',
  NUMBER: 'NUMBER',
  BOOLDATA: 'BOOLDATA',
  CART: 'CART',
  GIFT: 'GIFT'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.REMOVE:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.NUMBER:
      return Object.assign({}, state, {
        value: state.value + 5
      })
    case actionTypes.BOOLDATA:
      return Object.assign({}, state, {
        turning: !state.turning
      })
    case actionTypes.CART:
      return Object.assign({}, state, {
        cart: action.cart
      })
    case actionTypes.GIFT:
      return Object.assign({}, state, {
        gift: action.text
      })
    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const removeCount = () => dispatch => {
  return dispatch({ type: actionTypes.REMOVE })
}

export const getPlusNumber = () => dispatch => {
  return dispatch({ type: actionTypes.NUMBER })
}

export const updateStateTurning = () => dispatch => {
  return dispatch({ type: actionTypes.BOOLDATA })
}

export const updateCart = (cart) => dispatch => {
  return dispatch({ type: actionTypes.CART, cart: cart })
}

export const updateGift = (text) => dispatch => {
  return dispatch({ type: actionTypes.GIFT, text: text })
}

export const updateCoupon = (text) => dispatch => {
  return dispatch({ type: actionTypes.CART })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}



// plus +1 (or other number) +
// switch true or false +
// update the current number +
// update the current text +

// product example + cart

// cart +1, -1, update number, remove,


