import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { exampleInitialState, rootReducer } from './reducers'

var middleware = [ thunkMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

/* Init Store */
export const initStore = (initialState = exampleInitialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}


/* set Provider */
// import { Provider } from 'react-redux'

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
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
