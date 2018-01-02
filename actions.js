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
  IMPROVE_UPDATE: 'IMPROVE_UPDATE',
  POST: 'POST',
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


export const eventPOST = (naming) => (dispatch, getState) => {
  console.log('Item to read!', naming )
  return dispatch({ type: actionTypes.POST, naming })
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


export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

export const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}
