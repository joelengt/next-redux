'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.updateGift = exports.updateCart = exports.updateStateTurning = exports.getPlusNumber = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  value: 20,
  turning: false,
  cart: 0,
  gift: ''
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  NUMBER: 'NUMBER',
  BOOLDATA: 'BOOLDATA',
  CART: 'CART',
  GIFT: 'GIFT'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.TICK:
      return (0, _assign2.default)({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.ADD:
      return (0, _assign2.default)({}, state, {
        count: state.count + 1
      });
    case actionTypes.NUMBER:
      return (0, _assign2.default)({}, state, {
        value: state.value + 5
      });
    case actionTypes.BOOLDATA:
      return (0, _assign2.default)({}, state, {
        turning: !state.turning
      });
    case actionTypes.CART:
      return (0, _assign2.default)({}, state, {
        cart: action.cart
      });
    case actionTypes.GIFT:
      return (0, _assign2.default)({}, state, {
        gift: action.text
      });
    default:
      return state;
  }
};

// ACTIONS
var serverRenderClock = exports.serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
  };
};

var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
    }, 800);
  };
};

var addCount = exports.addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

var getPlusNumber = exports.getPlusNumber = function getPlusNumber() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.NUMBER });
  };
};

var updateStateTurning = exports.updateStateTurning = function updateStateTurning() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.BOOLDATA });
  };
};

var updateCart = exports.updateCart = function updateCart(cart) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.CART, cart: cart });
  };
};

var updateGift = exports.updateGift = function updateGift(text) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.GIFT, text: text });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

// plus +1 (or other number) +
// switch true or false +
// update the current number +
// update the current text +


// product example + cart

// cart +1, -1, update number, remove,
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsInZhbHVlIiwidHVybmluZyIsImNhcnQiLCJnaWZ0IiwiYWN0aW9uVHlwZXMiLCJBREQiLCJUSUNLIiwiTlVNQkVSIiwiQk9PTERBVEEiLCJDQVJUIiwiR0lGVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0cyIsInRleHQiLCJzZXJ2ZXJSZW5kZXJDbG9jayIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJEYXRlIiwibm93Iiwic3RhcnRDbG9jayIsInNldEludGVydmFsIiwiYWRkQ291bnQiLCJnZXRQbHVzTnVtYmVyIiwidXBkYXRlU3RhdGVUdXJuaW5nIiwidXBkYXRlQ2FydCIsInVwZGF0ZUdpZnQiLCJpbml0U3RvcmUiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFhOztBQUN0QixBQUFTOztBQUNULEFBQU87Ozs7OztBQUVQLElBQU07Y0FBc0IsQUFDZCxBQUNaO1NBRjBCLEFBRW5CLEFBQ1A7U0FIMEIsQUFHbkIsQUFDUDtTQUowQixBQUluQixBQUNQO1dBTDBCLEFBS2pCLEFBQ1Q7UUFOMEIsQUFNcEIsQUFDTjtRQVBGLEFBQTRCLEFBT3BCLEFBR1I7QUFWNEIsQUFDMUI7O0FBU0ssSUFBTTtPQUFjLEFBQ3BCLEFBQ0w7UUFGeUIsQUFFbkIsQUFDTjtVQUh5QixBQUdqQixBQUNSO1lBSnlCLEFBSWYsQUFDVjtRQUx5QixBQUtuQixBQUNOO1FBQU0sQUFHUjs7QUFUTyxBQUFvQixBQVUzQjtBQVYyQixBQUN6QixNQVNXLDRCQUFVLFNBQVYsQUFBVSxVQUF5QztNQUF4QyxBQUF3Qyw0RUFBaEMsQUFBZ0M7TUFBWCxBQUFXLG1C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