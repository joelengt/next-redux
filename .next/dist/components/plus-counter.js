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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/staffdigital/Desktop/redux/with-redux/components/plus-counter.js';


var PlusCounter = function (_Component) {
  (0, _inherits3.default)(PlusCounter, _Component);

  function PlusCounter(props) {
    (0, _classCallCheck3.default)(this, PlusCounter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PlusCounter.__proto__ || (0, _getPrototypeOf2.default)(PlusCounter)).call(this, props));

    _this.addEventCounter = _this.addEventCounter.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PlusCounter, [{
    key: 'addEventCounter',
    value: function addEventCounter() {
      this.props.getPlusNumber();
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.props.value;

      return _react2.default.createElement('div', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2569186640',
        css: 'div.jsx-2569186640{padding:0 0 20px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGx1cy1jb3VudGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFHZ0MsbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvcGx1cy1jb3VudGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0YWZmZGlnaXRhbC9EZXNrdG9wL3JlZHV4L3dpdGgtcmVkdXgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBnZXRQbHVzTnVtYmVyIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmNsYXNzIFBsdXNDb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmFkZEV2ZW50Q291bnRlciA9IHRoaXMuYWRkRXZlbnRDb3VudGVyLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZEV2ZW50Q291bnRlcigpIHtcbiAgICB0aGlzLnByb3BzLmdldFBsdXNOdW1iZXIoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHA+UGx1c0NvdW50ZXI6IDxzcGFuPnt2YWx1ZX08L3NwYW4+PC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkRXZlbnRDb3VudGVyfT5BZGQgVG8gQ291bnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB2YWx1ZSB9KSA9PiAoeyB2YWx1ZSB9KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXRQbHVzTnVtYmVyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0UGx1c051bWJlciwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGx1c0NvdW50ZXIpXG5cbiJdfQ== */\n/*@ sourceURL=components/plus-counter.js */'
      }), _react2.default.createElement('p', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'PlusCounter: ', _react2.default.createElement('span', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, value)), _react2.default.createElement('button', { onClick: this.addEventCounter, className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Add To Count'));
    }
  }]);

  return PlusCounter;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var value = _ref.value;
  return { value: value };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPlusNumber: (0, _redux.bindActionCreators)(_store.getPlusNumber, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlusCounter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGx1cy1jb3VudGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImdldFBsdXNOdW1iZXIiLCJQbHVzQ291bnRlciIsInByb3BzIiwiYWRkRXZlbnRDb3VudGVyIiwiYmluZCIsInZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQXFCOzs7Ozs7O0lBRXhCLEE7dUNBQ0o7O3VCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQUYzQixBQUVqQjtXQUNEOzs7OztzQ0FFaUIsQUFDaEI7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzZCQUVTO1VBQUEsQUFDQSxRQUFVLEtBRFYsQUFDZSxNQURmLEFBQ0EsQUFFUjs7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUE7aUJBQUE7YUFBQSxBQU1FO0FBTkYsMEJBTUUsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWdCLGlDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLFNBTmxCLEFBTUUsQUFBZ0IsQUFDaEIseUJBQUEsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0IsNEJBQXRCOztvQkFBQTtzQkFBQTtBQUFBO1NBUkosQUFDRSxBQU9FLEFBR0w7Ozs7O0EsQUF4QnVCOztBQTJCMUIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0Isc0JBQUE7TUFBQSxBQUFHLGFBQUgsQUFBRztTQUFhLEVBQUUsT0FBbEIsQUFBZ0I7QUFBeEM7O0FBRUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOzttQkFDaUIsQUFBbUIscURBRHBDLEFBQU8sQUFDVSxBQUFrQyxBQUVwRDtBQUhRLEFBQ0w7QUFGSixBQU1BOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF4QyxBQUFlLEFBQTZDIiwiZmlsZSI6InBsdXMtY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFmZmRpZ2l0YWwvRGVza3RvcC9yZWR1eC93aXRoLXJlZHV4In0=