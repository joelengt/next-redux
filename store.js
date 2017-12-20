import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

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
  CART_UPDATE: 'CART_UPDATE'
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
  didInvalidate: false,
  items: []
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

export const reducer = (state = exampleInitialState, action) => {
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

export const cart = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return {
        ...state,
        turning: !state.turning
      }

    case actionTypes.CART_REMOVE:
      return {
        ...state,
        cart: action.cart
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

const rootReducer = combineReducers({
  reducer,
  cart
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
