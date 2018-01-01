import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import _ from 'lodash'

/* set Provider */
// import { Provider } from 'react-redux'

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

var middleware = [ thunkMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TICK: 'TICK',
  NUMBER: 'NUMBER',
  BOOLDATA: 'BOOLDATA',
  GIFT: 'GIFT',
  CART: 'CART',
  CART_ADD: 'CART_ADD',
  CART_REMOVE: 'CART_REMOVE',
  CART_UPDATE: 'CART_UPDATE',
  IMPROVE_ADD: 'IMPROVE_ADD',
  IMPROVE_REMOVE: 'IMPROVE_REMOVE',
  IMPROVE_UPDATE: 'IMPROVE_UPDATE'
}

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  value: 20,
  turning: false,
  cart: 0,
  gift: ''
}

const initialStatePost = {
  isFetching: false,
  didInvalidate: 'saludos'
}

const initialStateImprove = {
  items: ['a', 'b'],
  didInvalidate: 'saludos',
  carrito: {
    summary: {
      quantity: 7,
      subTotal: '11.000',
      igv: '1.000',
      total: '12.000'
    },
    items: [
      {
        id: 213,
        quantity: 4,
        name: 'poo A',
        price: '21.00',
        subTotal: '84.00'
      },
      {
        id: 21,
        quantity: 1,
        name: 'poo B',
        price: '11.00',
        subTotal: '49.00'
      },
      {
        id: 45,
        quantity: 2,
        name: 'poo C',
        price: '41.00',
        subTotal: '184.00'
      }
    ]
  }
}

// REDUCERS
export const posts = (state = initialStatePost, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return {
        ...state,
        didInvalidate: true
      }

    case actionTypes.CART_REMOVE:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }

    case actionTypes.CART_UPDATE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }

    default:
      return state
  }
}

export const main = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light
      }

    case actionTypes.ADD:
      return {
        ...state,
        count: state.count + 1
      }

    case actionTypes.REMOVE:
      return {
        ...state,
        count: state.count - 1
      }

    case actionTypes.NUMBER:
      return {
        ...state,
        value: state.value + 5
      }

    case actionTypes.BOOLDATA:
      return {
        ...state,
        turning: !state.turning
      }

    case actionTypes.CART:
      return {
        ...state,
        cart: action.cart
      }

    case actionTypes.GIFT:
      return {
        ...state,
        gift: action.text
      }

    default:
      return state
  }
}

export const cart = (state = initialStatePost, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return {
        ...state,
        turning: !state.isFetching
      }

    case actionTypes.CART_REMOVE:
      return {
        ...state,
        cart: action.didInvalidate
      }

    case actionTypes.CART_UPDATE:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }

    default:
      return state
  }
}

export const improve = (state = initialStateImprove, action) => {
  switch (action.type) {
    case actionTypes.IMPROVE_UPDATE:
      return {
        ...state,
        items: action.items
      }

    case actionTypes.CART_ADD:
      let product = action.product

      console.log('CALL ')

      // add producto de the cart
      state.carrito.items.push({
        id: 99,
        quantity: 3,
        name: 'poo New',
        price: '50.00',
        subTotal: '200.00'
      })

      return {
        ...state,
        carrito: state.carrito
      }

    case actionTypes.CART_REMOVE:

      let productID = action.productID

      // remove producto de the cart
      _.remove(state.carrito.items, (product) => {
        return product.id === productID;
      });

      return {
        ...state,
        carrito: state.carrito
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  main,
  cart,
  improve
})

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

export const updateCoupon = (text) => (dispatch, getState) => {
  return dispatch({ type: actionTypes.CART })
}

export const updateImprove = (items) => (dispatch, getState) => {
  return dispatch({ type: actionTypes.IMPROVE_UPDATE, items })
}

export const updateCartImprove = (product) => (dispatch, getState) => {
  console.log('product data', product);
  return dispatch({ type: actionTypes.CART_ADD, product })
}

export const deleteItemCartImprove = (productID) => (dispatch, getState) => {
  console.log('Item to delete', productID )
  return dispatch({ type: actionTypes.CART_REMOVE, productID })
}

/* actions set */
export const getText = text => ({
  type: actionTypes.GIFT,
  text
})

export const fetchData = text => dispatch => {
  return dispatch(getText(text))
}

export const fetchMainData = text => dispatch => {
  dispatch(getText(text))
  return { status: 'ok?' }
}

/* Init Store */
export const initStore = (initialState = exampleInitialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}




//

// var obj = {
//   name: 'joel',
//   lastName: 'gonzales',
//   age: 21,
//   phone: 21312321
// }


// const { selectedSubreddit, postsBySubreddit } = state
// var { name, lastName, ...info } = { name: 'alcachona' } || obj

// const {
//   name,
//   lastName,
//   lastAvegareAges: post(data),
//   ...info
// } = obj || { name: 'alcachofa', lastName: 'pp' }
