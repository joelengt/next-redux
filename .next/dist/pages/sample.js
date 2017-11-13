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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _redux = require('redux');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _AddCount = require('../components/AddCount');

var _AddCount2 = _interopRequireDefault(_AddCount);

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/staffdigital/Desktop/redux/with-redux/pages/sample.js?entry';


var Sample = function (_React$Component) {
  (0, _inherits3.default)(Sample, _React$Component);

  function Sample() {
    (0, _classCallCheck3.default)(this, Sample);

    return (0, _possibleConstructorReturn3.default)(this, (Sample.__proto__ || (0, _getPrototypeOf2.default)(Sample)).apply(this, arguments));
  }

  (0, _createClass3.default)(Sample, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Render redux from ', this.props.isServer ? 'server' : 'client', '!'), _react2.default.createElement(_AddCount2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('nav', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Navigate'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      //store.dispatch(serverRenderClock(isServer))
      store.dispatch((0, _store.addCount)());
      return { isServer: isServer };
    }
  }]);

  return Sample;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Sample);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NhbXBsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJ3aXRoUmVkdXgiLCJBZGRDb3VudCIsImluaXRTdG9yZSIsInN0YXJ0Q2xvY2siLCJhZGRDb3VudCIsInNlcnZlclJlbmRlckNsb2NrIiwiU2FtcGxlIiwicHJvcHMiLCJpc1NlcnZlciIsInN0b3JlIiwiZGlzcGF0Y2giLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7QUFFckIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNLOzs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7NkJBT00sQUFDUjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUF1QiwyQkFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFdBQTdDLEFBQXVELFVBRHpELEFBQ0UsQUFDQSxzQkFBQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQWU7QUFBZjt5QkFBZSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMckIsQUFDRSxBQUdFLEFBQ0UsQUFBZSxBQUl0Qjs7OzswQ0FoQjRDO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQzNDOztBQUNBO1lBQUEsQUFBTSxTQUFOLEFBQWUsQUFDZjthQUFPLEVBQUUsVUFBVCxBQUFPLEFBQ1I7Ozs7O0VBTGtCLGdCQUFNLEE7O0FBb0IzQixJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksQUFBbUIsZ0RBRC9CLEFBQU8sQUFDSyxBQUE2QixBQUUxQztBQUhRLEFBQ0w7QUFGSixBQU1BOztrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLE1BQXJCLEFBQTJCLG9CQUExQyxBQUFlLEFBQStDIiwiZmlsZSI6InNhbXBsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFmZmRpZ2l0YWwvRGVza3RvcC9yZWR1eC93aXRoLXJlZHV4In0=