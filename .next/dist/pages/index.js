'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/staffdigital/Desktop/redux/with-redux/pages/index.js?entry';


var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.startClock();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Render redux from ', this.props.isServer ? 'server' : 'client', '!'), _react2.default.createElement(_Page2.default, { title: 'Index Page', linkTo: '/sample', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch((0, _store.serverRenderClock)(isServer));
      store.dispatch((0, _store.addCount)());
      return { isServer: isServer };
    }
  }]);

  return Counter;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch),
    startClock: (0, _redux.bindActionCreators)(_store.startClock, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Counter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwic3RhcnRDbG9jayIsImFkZENvdW50Iiwic2VydmVyUmVuZGVyQ2xvY2siLCJ3aXRoUmVkdXgiLCJQYWdlIiwiQ291bnRlciIsInRpbWVyIiwicHJvcHMiLCJjbGVhckludGVydmFsIiwiaXNTZXJ2ZXIiLCJzdG9yZSIsImRpc3BhdGNoIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFZLEFBQVUsQUFBeUI7O0FBQ25FLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7O3dDQU9pQixBQUNuQjtXQUFBLEFBQUssUUFBUSxLQUFBLEFBQUssTUFBbEIsQUFBYSxBQUFXLEFBQ3pCOzs7OzJDQUV1QixBQUN0QjtvQkFBYyxLQUFkLEFBQW1CLEFBQ3BCOzs7OzZCQUVTLEFBQ1I7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBdUIsMkJBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixXQUE3QyxBQUF1RCxVQUR6RCxBQUNFLEFBQ0Esc0JBQUEsQUFBQyxnQ0FBSyxPQUFOLEFBQVksY0FBYSxRQUF6QixBQUFnQztvQkFBaEM7c0JBSEosQUFDRSxBQUVFLEFBR0w7QUFISzs7Ozs7MENBbEJ1QztVQUFuQixBQUFtQixhQUFuQixBQUFtQjtVQUFaLEFBQVksZ0JBQVosQUFBWSxBQUMzQzs7WUFBQSxBQUFNLFNBQVMsOEJBQWYsQUFBZSxBQUFrQixBQUNqQztZQUFBLEFBQU0sU0FBTixBQUFlLEFBQ2Y7YUFBTyxFQUFFLFVBQVQsQUFBTyxBQUNSOzs7OztFQUxtQixnQkFBTSxBOztBQXlCNUIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO2dCQUFZLEFBQW1CLGtEQUZqQyxBQUFPLEFBRU8sQUFBK0IsQUFFOUM7QUFKUSxBQUNMO0FBRkosQUFPQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixNQUFyQixBQUEyQixvQkFBMUMsQUFBZSxBQUErQyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFmZmRpZ2l0YWwvRGVza3RvcC9yZWR1eC93aXRoLXJlZHV4In0=