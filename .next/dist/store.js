'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.updateGift = exports.updateCart = exports.updateStateTurning = exports.getPlusNumber = exports.removeCount = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

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
  REMOVE: 'REMOVE',
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
    case actionTypes.REMOVE:
      return (0, _assign2.default)({}, state, {
        count: state.count - 1
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

var removeCount = exports.removeCount = function removeCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.REMOVE });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsInZhbHVlIiwidHVybmluZyIsImNhcnQiLCJnaWZ0IiwiYWN0aW9uVHlwZXMiLCJBREQiLCJSRU1PVkUiLCJUSUNLIiwiTlVNQkVSIiwiQk9PTERBVEEiLCJDQVJUIiwiR0lGVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0cyIsInRleHQiLCJzZXJ2ZXJSZW5kZXJDbG9jayIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJEYXRlIiwibm93Iiwic3RhcnRDbG9jayIsInNldEludGVydmFsIiwiYWRkQ291bnQiLCJyZW1vdmVDb3VudCIsImdldFBsdXNOdW1iZXIiLCJ1cGRhdGVTdGF0ZVR1cm5pbmciLCJ1cGRhdGVDYXJ0IiwidXBkYXRlR2lmdCIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O0FBRVAsSUFBTTtjQUFzQixBQUNkLEFBQ1o7U0FGMEIsQUFFbkIsQUFDUDtTQUgwQixBQUduQixBQUNQO1NBSjBCLEFBSW5CLEFBQ1A7V0FMMEIsQUFLakIsQUFDVDtRQU4wQixBQU1wQixBQUNOO1FBUEYsQUFBNEIsQUFPcEIsQUFHUjtBQVY0QixBQUMxQjs7QUFTSyxJQUFNO09BQWMsQUFDcEIsQUFDTDtVQUZ5QixBQUVqQixBQUNSO1FBSHlCLEFBR25CLEFBQ047VUFKeUIsQUFJakIsQUFDUjtZQUx5QixBQUtmLEFBQ1Y7UUFOeUIsQUFNbkIsQUFDTjtRQUFNLEFBR1I7O0FBVk8sQUFBb0IsQUFXM0I7QUFYMkIsQUFDekIsTUFVVyw0QkFBVSxTQUFWLEFBQVUsVUFBeUM7TUFBeEMsQUFBd0MsNEVBQWhDLEFBQWdDO01BQVgsQUFBVyxtQkFDOUQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBSyxZQUFMLEFBQWlCLEFBQ2Y7bUNBQU8sQUFBYyxJQUFkLEFBQWtCO29CQUNYLE9BRGtCLEFBQ1gsQUFDbkI7ZUFBTyxDQUFDLENBQUMsT0FGWCxBQUFPLEFBQXlCLEFBRWQsQUFFcEI7QUFKa0MsQUFDOUIsT0FESztTQUlKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7ZUFDaEIsTUFBQSxBQUFNLFFBRGYsQUFBTyxBQUF5QixBQUNULEFBRXpCO0FBSGtDLEFBQzlCLE9BREs7U0FHSixZQUFMLEFBQWlCLEFBQ2Y7bUNBQU8sQUFBYyxJQUFkLEFBQWtCO2VBQ2hCLE1BQUEsQUFBTSxRQURmLEFBQU8sQUFBeUIsQUFDVCxBQUV6QjtBQUhrQyxBQUM5QixPQURLO1NBR0osWUFBTCxBQUFpQixBQUNmO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtlQUNoQixNQUFBLEFBQU0sUUFEZixBQUFPLEFBQXlCLEFBQ1QsQUFFekI7QUFIa0MsQUFDOUIsT0FESztTQUdKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7aUJBQ2QsQ0FBQyxNQURaLEFBQU8sQUFBeUIsQUFDZCxBQUVwQjtBQUhrQyxBQUM5QixPQURLO1NBR0osWUFBTCxBQUFpQixBQUNmO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtjQUNqQixPQURSLEFBQU8sQUFBeUIsQUFDakIsQUFFakI7QUFIa0MsQUFDOUIsT0FESztTQUdKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7Y0FDakIsT0FEUixBQUFPLEFBQXlCLEFBQ2pCLEFBRWpCO0FBSGtDLEFBQzlCLE9BREs7QUFHQTthQTlCWCxBQThCVyxBQUFPLEFBRW5COztBQWpDTSxDQUFBOztBQW1DUCxBQUNBO0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBQyxVQUFEO1NBQWMsb0JBQVksQUFDekQ7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBTyxDQUFqQyxBQUFrQyxVQUFVLElBQUksS0FBaEUsQUFBTyxBQUFTLEFBQWdELEFBQUssQUFDdEU7QUFGZ0M7QUFBMUIsQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxhQUFBO1NBQU0sb0JBQVksQUFDMUM7dUJBQW1CLFlBQUE7YUFBTSxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBMUIsQUFBaUMsTUFBTSxJQUFJLEtBQTFELEFBQU0sQUFBUyxBQUEyQyxBQUFLO0FBQTNFLEtBQUEsRUFBUCxBQUFPLEFBQXFGLEFBQzdGO0FBRnlCO0FBQW5CLEFBSVA7O0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsV0FBQTtTQUFNLG9CQUFZLEFBQ3hDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBeEIsQUFBTyxBQUFTLEFBQW9CLEFBQ3JDO0FBRnVCO0FBQWpCLEFBSVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsY0FBQTtTQUFNLG9CQUFZLEFBQzNDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBeEIsQUFBTyxBQUFTLEFBQW9CLEFBQ3JDO0FBRjBCO0FBQXBCLEFBSVA7O0FBQU8sSUFBTSx3Q0FBZ0IsU0FBaEIsQUFBZ0IsZ0JBQUE7U0FBTSxvQkFBWSxBQUM3QztXQUFPLFNBQVMsRUFBRSxNQUFNLFlBQXhCLEFBQU8sQUFBUyxBQUFvQixBQUNyQztBQUY0QjtBQUF0QixBQUlQOztBQUFPLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLHFCQUFBO1NBQU0sb0JBQVksQUFDbEQ7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUF4QixBQUFPLEFBQVMsQUFBb0IsQUFDckM7QUFGaUM7QUFBM0IsQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxXQUFBLEFBQUMsTUFBRDtTQUFVLG9CQUFZLEFBQzlDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBUixBQUFvQixNQUFNLE1BQTFDLEFBQU8sQUFBUyxBQUFnQyxBQUNqRDtBQUZ5QjtBQUFuQixBQUlQOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLFdBQUEsQUFBQyxNQUFEO1NBQVUsb0JBQVksQUFDOUM7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sTUFBMUMsQUFBTyxBQUFTLEFBQWdDLEFBQ2pEO0FBRnlCO0FBQW5CLEFBSVA7O0FBQU8sSUFBTSxnQ0FBWSxTQUFaLEFBQVksWUFBd0M7TUFBdkMsQUFBdUMsbUZBQXhCLEFBQXdCLEFBQy9EOztTQUFPLHdCQUFBLEFBQVksU0FBWixBQUFxQixjQUFjLGlEQUExQyxBQUFPLEFBQW1DLEFBQW9CLEFBQWdCLEFBQy9FO0FBRk07O0FBTVA7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0YWZmZGlnaXRhbC9EZXNrdG9wL3JlZHV4L3dpdGgtcmVkdXgifQ==