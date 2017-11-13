'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _AddCount = require('./AddCount');

var _AddCount2 = _interopRequireDefault(_AddCount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/staffdigital/Desktop/redux/with-redux/components/Page.js';
exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (_ref) {
  var title = _ref.title,
      linkTo = _ref.linkTo,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_AddCount2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Navigate'))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZS5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiY29ubmVjdCIsIkNsb2NrIiwiQWRkQ291bnQiLCJzdGF0ZSIsInRpdGxlIiwibGlua1RvIiwibGFzdFVwZGF0ZSIsImxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBYyxBQUVyQjs7Ozs7OzsyQ0FBdUIsaUJBQUE7U0FBQSxBQUFTO0FBQWpCLENBQUEsRUFBd0IsZ0JBQTBDO01BQXZDLEFBQXVDLGFBQXZDLEFBQXVDO01BQWhDLEFBQWdDLGNBQWhDLEFBQWdDO01BQXhCLEFBQXdCLGtCQUF4QixBQUF3QjtNQUFaLEFBQVksYUFBWixBQUFZLEFBQy9FOzt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFBb0I7QUFBcEI7cUJBQW9CLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUoxQixBQUNFLEFBRUUsQUFDRSxBQUFvQixBQUkzQjtBQVRELEFBQWUiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFmZmRpZ2l0YWwvRGVza3RvcC9yZWR1eC93aXRoLXJlZHV4In0=