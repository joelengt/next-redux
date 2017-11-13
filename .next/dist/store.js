'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

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
  count: 0
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'

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

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsImFjdGlvblR5cGVzIiwiQUREIiwiVElDSyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0cyIsInNlcnZlclJlbmRlckNsb2NrIiwiaXNTZXJ2ZXIiLCJkaXNwYXRjaCIsIkRhdGUiLCJub3ciLCJzdGFydENsb2NrIiwic2V0SW50ZXJ2YWwiLCJhZGRDb3VudCIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O0FBRVAsSUFBTTtjQUFzQixBQUNkLEFBQ1o7U0FGMEIsQUFFbkIsQUFDUDtTQUhGLEFBQTRCLEFBR25CLEFBR1Q7QUFONEIsQUFDMUI7O0FBS0ssSUFBTTtPQUFjLEFBQ3BCLEFBQ0w7UUFBTSxBQUdSOztBQUxPLEFBQW9CLEFBTTNCO0FBTjJCLEFBQ3pCLE1BS1csNEJBQVUsU0FBVixBQUFVLFVBQXlDO01BQXhDLEFBQXdDLDRFQUFoQyxBQUFnQztNQUFYLEFBQVcsbUJBQzlEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUssWUFBTCxBQUFpQixBQUNmO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtvQkFDWCxPQURrQixBQUNYLEFBQ25CO2VBQU8sQ0FBQyxDQUFDLE9BRlgsQUFBTyxBQUF5QixBQUVkLEFBRXBCO0FBSmtDLEFBQzlCLE9BREs7U0FJSixZQUFMLEFBQWlCLEFBQ2Y7bUNBQU8sQUFBYyxJQUFkLEFBQWtCO2VBQ2hCLE1BQUEsQUFBTSxRQURmLEFBQU8sQUFBeUIsQUFDVCxBQUV6QjtBQUhrQyxBQUM5QixPQURLO0FBR0E7YUFWWCxBQVVXLEFBQU8sQUFFbkI7O0FBYk0sQ0FBQTs7QUFlUCxBQUNBO0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBQyxVQUFEO1NBQWMsb0JBQVksQUFDekQ7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBTyxDQUFqQyxBQUFrQyxVQUFVLElBQUksS0FBaEUsQUFBTyxBQUFTLEFBQWdELEFBQUssQUFDdEU7QUFGZ0M7QUFBMUIsQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxhQUFBO1NBQU0sb0JBQVksQUFDMUM7dUJBQW1CLFlBQUE7YUFBTSxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBMUIsQUFBaUMsTUFBTSxJQUFJLEtBQTFELEFBQU0sQUFBUyxBQUEyQyxBQUFLO0FBQTNFLEtBQUEsRUFBUCxBQUFPLEFBQXFGLEFBQzdGO0FBRnlCO0FBQW5CLEFBSVA7O0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsV0FBQTtTQUFNLG9CQUFZLEFBQ3hDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBeEIsQUFBTyxBQUFTLEFBQW9CLEFBQ3JDO0FBRnVCO0FBQWpCLEFBSVA7O0FBQU8sSUFBTSxnQ0FBWSxTQUFaLEFBQVksWUFBd0M7TUFBdkMsQUFBdUMsbUZBQXhCLEFBQXdCLEFBQy9EOztTQUFPLHdCQUFBLEFBQVksU0FBWixBQUFxQixjQUFjLGlEQUExQyxBQUFPLEFBQW1DLEFBQW9CLEFBQWdCLEFBQy9FO0FBRk0iLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3RhZmZkaWdpdGFsL0Rlc2t0b3AvcmVkdXgvd2l0aC1yZWR1eCJ9