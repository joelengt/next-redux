import { combineReducers } from 'redux'
import { actionTypes } from './actions'
import _ from 'lodash'

export const exampleInitialState = {
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
  human: {
    isFetching: 'gato',
    didInvalidate: 'perro',
  },
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

    case actionTypes.POST:
      return {
        ...state,
        isFetching: 'neko',
        didInvalidate: 'inu'
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

    case actionTypes.POST:
      console.log('READD??')
      return {
        ...state,
        [action.naming]: posts(state[action.naming], action)
      }

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  main,
  cart,
  improve
})
