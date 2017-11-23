webpackHotUpdate(5,{

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.updateGift = exports.updateCart = exports.updateStateTurning = exports.getPlusNumber = exports.removeCount = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

var _assign = __webpack_require__(76);

var _assign2 = _interopRequireDefault(_assign);

var _redux = __webpack_require__(393);

var _reduxDevtoolsExtension = __webpack_require__(428);

var _reduxThunk = __webpack_require__(429);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsInZhbHVlIiwidHVybmluZyIsImNhcnQiLCJnaWZ0IiwiYWN0aW9uVHlwZXMiLCJBREQiLCJSRU1PVkUiLCJUSUNLIiwiTlVNQkVSIiwiQk9PTERBVEEiLCJDQVJUIiwiR0lGVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0cyIsInRleHQiLCJzZXJ2ZXJSZW5kZXJDbG9jayIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJEYXRlIiwibm93Iiwic3RhcnRDbG9jayIsInNldEludGVydmFsIiwiYWRkQ291bnQiLCJyZW1vdmVDb3VudCIsImdldFBsdXNOdW1iZXIiLCJ1cGRhdGVTdGF0ZVR1cm5pbmciLCJ1cGRhdGVDYXJ0IiwidXBkYXRlR2lmdCIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O0FBRVAsSUFBTTtjQUFzQixBQUNkLEFBQ1o7U0FGMEIsQUFFbkIsQUFDUDtTQUgwQixBQUduQixBQUNQO1NBSjBCLEFBSW5CLEFBQ1A7V0FMMEIsQUFLakIsQUFDVDtRQU4wQixBQU1wQixBQUNOO1FBUEYsQUFBNEIsQUFPcEIsQUFHUjtBQVY0QixBQUMxQjs7QUFTSyxJQUFNO09BQWMsQUFDcEIsQUFDTDtVQUZ5QixBQUVqQixBQUNSO1FBSHlCLEFBR25CLEFBQ047VUFKeUIsQUFJakIsQUFDUjtZQUx5QixBQUtmLEFBQ1Y7UUFOeUIsQUFNbkIsQUFDTjtRQUFNLEFBR1I7O0FBVk8sQUFBb0IsQUFXM0I7QUFYMkIsQUFDekIsTUFVVyw0QkFBVSxTQUFWLEFBQVUsVUFBeUM7TUFBeEMsQUFBd0MsNEVBQWhDLEFBQWdDO01BQVgsQUFBVyxtQkFDOUQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBSyxZQUFMLEFBQWlCLEFBQ2Y7bUNBQU8sQUFBYyxJQUFkLEFBQWtCO29CQUNYLE9BRGtCLEFBQ1gsQUFDbkI7ZUFBTyxDQUFDLENBQUMsT0FGWCxBQUFPLEFBQXlCLEFBRWQsQUFFcEI7QUFKa0MsQUFDOUIsT0FESztTQUlKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7ZUFDaEIsTUFBQSxBQUFNLFFBRGYsQUFBTyxBQUF5QixBQUNULEFBRXpCO0FBSGtDLEFBQzlCLE9BREs7U0FHSixZQUFMLEFBQWlCLEFBQ2Y7bUNBQU8sQUFBYyxJQUFkLEFBQWtCO2VBQ2hCLE1BQUEsQUFBTSxRQURmLEFBQU8sQUFBeUIsQUFDVCxBQUV6QjtBQUhrQyxBQUM5QixPQURLO1NBR0osWUFBTCxBQUFpQixBQUNmO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtlQUNoQixNQUFBLEFBQU0sUUFEZixBQUFPLEFBQXlCLEFBQ1QsQUFFekI7QUFIa0MsQUFDOUIsT0FESztTQUdKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7aUJBQ2QsQ0FBQyxNQURaLEFBQU8sQUFBeUIsQUFDZCxBQUVwQjtBQUhrQyxBQUM5QixPQURLO1NBR0osWUFBTCxBQUFpQixBQUNmO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtjQUNqQixPQURSLEFBQU8sQUFBeUIsQUFDakIsQUFFakI7QUFIa0MsQUFDOUIsT0FESztTQUdKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7Y0FDakIsT0FEUixBQUFPLEFBQXlCLEFBQ2pCLEFBRWpCO0FBSGtDLEFBQzlCLE9BREs7QUFHQTthQTlCWCxBQThCVyxBQUFPLEFBRW5COztBQWpDTSxDQUFBOztBQW1DUCxBQUNBO0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBQyxVQUFEO1NBQWMsb0JBQVksQUFDekQ7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBTyxDQUFqQyxBQUFrQyxVQUFVLElBQUksS0FBaEUsQUFBTyxBQUFTLEFBQWdELEFBQUssQUFDdEU7QUFGZ0M7QUFBMUIsQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxhQUFBO1NBQU0sb0JBQVksQUFDMUM7dUJBQW1CLFlBQUE7YUFBTSxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBMUIsQUFBaUMsTUFBTSxJQUFJLEtBQTFELEFBQU0sQUFBUyxBQUEyQyxBQUFLO0FBQTNFLEtBQUEsRUFBUCxBQUFPLEFBQXFGLEFBQzdGO0FBRnlCO0FBQW5CLEFBSVA7O0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsV0FBQTtTQUFNLG9CQUFZLEFBQ3hDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBeEIsQUFBTyxBQUFTLEFBQW9CLEFBQ3JDO0FBRnVCO0FBQWpCLEFBSVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsY0FBQTtTQUFNLG9CQUFZLEFBQzNDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBeEIsQUFBTyxBQUFTLEFBQW9CLEFBQ3JDO0FBRjBCO0FBQXBCLEFBSVA7O0FBQU8sSUFBTSx3Q0FBZ0IsU0FBaEIsQUFBZ0IsZ0JBQUE7U0FBTSxvQkFBWSxBQUM3QztXQUFPLFNBQVMsRUFBRSxNQUFNLFlBQXhCLEFBQU8sQUFBUyxBQUFvQixBQUNyQztBQUY0QjtBQUF0QixBQUlQOztBQUFPLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLHFCQUFBO1NBQU0sb0JBQVksQUFDbEQ7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUF4QixBQUFPLEFBQVMsQUFBb0IsQUFDckM7QUFGaUM7QUFBM0IsQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxXQUFBLEFBQUMsTUFBRDtTQUFVLG9CQUFZLEFBQzlDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBUixBQUFvQixNQUFNLE1BQTFDLEFBQU8sQUFBUyxBQUFnQyxBQUNqRDtBQUZ5QjtBQUFuQixBQUlQOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLFdBQUEsQUFBQyxNQUFEO1NBQVUsb0JBQVksQUFDOUM7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sTUFBMUMsQUFBTyxBQUFTLEFBQWdDLEFBQ2pEO0FBRnlCO0FBQW5CLEFBSVA7O0FBQU8sSUFBTSxnQ0FBWSxTQUFaLEFBQVksWUFBd0M7TUFBdkMsQUFBdUMsbUZBQXhCLEFBQXdCLEFBQy9EOztTQUFPLHdCQUFBLEFBQVksU0FBWixBQUFxQixjQUFjLGlEQUExQyxBQUFPLEFBQW1DLEFBQW9CLEFBQWdCLEFBQy9FO0FBRk07O0FBTVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3RhZmZkaWdpdGFsL0Rlc2t0b3AvcmVkdXgvd2l0aC1yZWR1eCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/staffdigital/Desktop/redux/with-redux/store.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/staffdigital/Desktop/redux/with-redux/store.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xYTkwYjFkM2NkZjg3YjdkZWM1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/MzRlOGQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcblxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcbiAgbGFzdFVwZGF0ZTogMCxcbiAgbGlnaHQ6IGZhbHNlLFxuICBjb3VudDogMCxcbiAgdmFsdWU6IDIwLFxuICB0dXJuaW5nOiBmYWxzZSxcbiAgY2FydDogMCxcbiAgZ2lmdDogJydcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBBREQ6ICdBREQnLFxuICBSRU1PVkU6ICdSRU1PVkUnLFxuICBUSUNLOiAnVElDSycsXG4gIE5VTUJFUjogJ05VTUJFUicsXG4gIEJPT0xEQVRBOiAnQk9PTERBVEEnLFxuICBDQVJUOiAnQ0FSVCcsXG4gIEdJRlQ6ICdHSUZUJ1xufVxuXG4vLyBSRURVQ0VSU1xuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuVElDSzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsYXN0VXBkYXRlOiBhY3Rpb24udHMsXG4gICAgICAgIGxpZ2h0OiAhIWFjdGlvbi5saWdodFxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFERDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxXG4gICAgICB9KVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVNT1ZFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCAtIDFcbiAgICAgIH0pXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5OVU1CRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlICsgNVxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLkJPT0xEQVRBOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHR1cm5pbmc6ICFzdGF0ZS50dXJuaW5nXG4gICAgICB9KVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0FSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjYXJ0OiBhY3Rpb24uY2FydFxuICAgICAgfSlcbiAgICBjYXNlIGFjdGlvblR5cGVzLkdJRlQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2lmdDogYWN0aW9uLnRleHRcbiAgICAgIH0pXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuLy8gQUNUSU9OU1xuZXhwb3J0IGNvbnN0IHNlcnZlclJlbmRlckNsb2NrID0gKGlzU2VydmVyKSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLlRJQ0ssIGxpZ2h0OiAhaXNTZXJ2ZXIsIHRzOiBEYXRlLm5vdygpIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzdGFydENsb2NrID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5USUNLLCBsaWdodDogdHJ1ZSwgdHM6IERhdGUubm93KCkgfSksIDgwMClcbn1cblxuZXhwb3J0IGNvbnN0IGFkZENvdW50ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5BREQgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvdW50ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkUgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBsdXNOdW1iZXIgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLk5VTUJFUiB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RhdGVUdXJuaW5nID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5CT09MREFUQSB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydCA9IChjYXJ0KSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLkNBUlQsIGNhcnQ6IGNhcnQgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdpZnQgPSAodGV4dCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5HSUZULCB0ZXh0OiB0ZXh0IH0pXG59XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSlcbn1cblxuXG5cbi8vIHBsdXMgKzEgKG9yIG90aGVyIG51bWJlcikgK1xuLy8gc3dpdGNoIHRydWUgb3IgZmFsc2UgK1xuLy8gdXBkYXRlIHRoZSBjdXJyZW50IG51bWJlciArXG4vLyB1cGRhdGUgdGhlIGN1cnJlbnQgdGV4dCArXG5cbi8vIHByb2R1Y3QgZXhhbXBsZSArIGNhcnRcblxuLy8gY2FydCArMSwgLTEsIHVwZGF0ZSBudW1iZXIsIHJlbW92ZSxcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVRBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQVZBO0FBVUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTs7QUFqQ0E7QUFDQTtBQW1DQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=