webpackHotUpdate(7,{

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(411);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(395);

var _redux = __webpack_require__(393);

var _store = __webpack_require__(402);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/staffdigital/Desktop/redux/with-redux/components/AddCount.js';


var AddCount = function (_Component) {
  (0, _inherits3.default)(AddCount, _Component);

  function AddCount() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AddCount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddCount.__proto__ || (0, _getPrototypeOf2.default)(AddCount)).call.apply(_ref, [this].concat(args))), _this), _this.add = function () {
      _this.props.addCount();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AddCount, [{
    key: 'render',
    value: function render() {
      var count = this.props.count;

      return _react2.default.createElement('div', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2569186640',
        css: 'div.jsx-2569186640{padding:0 0 20px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29CLEFBR2dDLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0FkZENvdW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0YWZmZGlnaXRhbC9EZXNrdG9wL3JlZHV4L3dpdGgtcmVkdXgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBhZGRDb3VudCB9IGZyb20gJy4uL3N0b3JlJ1xuXG5jbGFzcyBBZGRDb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGFkZCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmFkZENvdW50KClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8cD5BZGRDb3VudDogPHNwYW4+e2NvdW50fTwvc3Bhbj48L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGR9PkFkZCBUbyBDb3VudDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNvdW50IH0pID0+ICh7IGNvdW50IH0pIC8vIHRvIHRoaXMucHJvcHMuY291bnRcbi8vICogdGhpcyBjb21wb25lbnQgaXMgc3ViIGZyb20gc3RvcmUgdXBkYXRlOiBBbnkgdGltZSB0aGUgc3RvcmUgaXMgdXBkYXRlZCwgbWFwU3RhdGVUb1Byb3BzIHdpbGwgYmUgY2FsbGVkXG4vLyAqIHRoZSByZXN1bHQgaXMgYSBtdXN0IGJlIGEgcGxhbmUgdGV4dCwgd2hpY2ggd2lsbCBiZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50cyBwcm9wc1xuLy8gKiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzdWJzY3JpYmUgdG8gc3RvcmUgdXBkYXRlcywgcGFzcyBudWxsIG9yIHVuZGVmaW5lZCBpbiBwbGFjZSBvZiBtYXBTdGF0ZVRvUHJvcHMuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKVxuICB9XG59XG5cbi8vICogb2JqZWN0cyBvciBmdW5jdGlvbnNcbi8vICogb2JqZWN0OiBlYWNoIGZ1bmN0aW9uIGluc2F0ZSBpcyBhc3VtZWQgdG8gYmUgYSByZWR1eCBhY3Rpb25cbi8vICogZnVuY3Rpb246IHlvdSBnZXQgXCJkaXNwYXRjaFwiIGFzIGZpcnN0IHBhcmFtZXRlciwgdG8gYmluZCBkaXNwYXRjaCwgdXNlIGJpbmRBY3Rpb25DcmVhdG9ycygpXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkQ291bnQpXG5cblxuLyogbWFwIHN0YXRlIHRvIHByb3BzICovXG5mdW5jdGlvbiBtYXBTdGF0ZVRPUFJvcHMgKHsgY291bnQgfSkge1xuICByZXR1cm4gKHsgY291bnQgfSlcbn1cbiJdfQ== */\n/*@ sourceURL=components/AddCount.js */'
      }), _react2.default.createElement('p', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'AddCount: ', _react2.default.createElement('span', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, count)), _react2.default.createElement('button', { onClick: this.add, className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Add To Count'));
    }
  }]);

  return AddCount;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var count = _ref2.count;
  return { count: count };
}; // to this.props.count
// * this component is sub from store update: Any time the store is updated, mapStateToProps will be called
// * the result is a must be a plane text, which will be merged into the components props
// * If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch)
  };
};

// * objects or functions
// * object: each function insate is asumed to be a redux action
// * function: you get "dispatch" as first parameter, to bind dispatch, use bindActionCreators()


exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddCount);

/* map state to props */

function mapStateTOPRops(_ref3) {
  var count = _ref3.count;

  return { count: count };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYWRkQ291bnQiLCJBZGRDb3VudCIsImFkZCIsInByb3BzIiwiY291bnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVE9QUm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBZ0I7Ozs7Ozs7SUFFbkIsQTs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDSixNQUFNLFlBQU0sQUFDVjtZQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7QTs7Ozs7NkJBRVM7VUFBQSxBQUNBLFFBQVUsS0FEVixBQUNlLE1BRGYsQUFDQSxBQUNSOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBTUU7QUFORiwwQkFNRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBYSw4QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQU5mLEFBTUUsQUFBYSxBQUNiLHlCQUFBLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCLGdCQUF0Qjs7b0JBQUE7c0JBQUE7QUFBQTtTQVJKLEFBQ0UsQUFPRSxBQUdMOzs7OztBLEFBbEJvQjs7QUFxQnZCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO01BQUEsQUFBRyxjQUFILEFBQUc7U0FBYSxFQUFFLE9BQWxCLEFBQWdCO0FBQXhDLEEsR0FBbUQ7QUFDbkQ7QUFDQTtBQUNBOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEL0IsQUFBTyxBQUNLLEFBQTZCLEFBRTFDO0FBSFEsQUFDTDtBQUZKOztBQU1BO0FBQ0E7QUFDQSxBQUdBOzs7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2Qzs7QUFHNUQ7O0FBQ0EsU0FBQSxBQUFTLHVCQUE0QjtNQUFULEFBQVMsY0FBVCxBQUFTLEFBQ25DOztTQUFRLEVBQUUsT0FBVixBQUFRLEFBQ1QiLCJmaWxlIjoiQWRkQ291bnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3RhZmZkaWdpdGFsL0Rlc2t0b3AvcmVkdXgvd2l0aC1yZWR1eCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/staffdigital/Desktop/redux/with-redux/components/AddCount.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/staffdigital/Desktop/redux/with-redux/components/AddCount.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy40YmViZmI2ZDc0ZDJjZDJhZDlhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRDb3VudC5qcz9hMWI1NWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGFkZENvdW50IH0gZnJvbSAnLi4vc3RvcmUnXG5cbmNsYXNzIEFkZENvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgYWRkID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuYWRkQ291bnQoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxwPkFkZENvdW50OiA8c3Bhbj57Y291bnR9PC9zcGFuPjwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZH0+QWRkIFRvIENvdW50PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY291bnQgfSkgPT4gKHsgY291bnQgfSkgLy8gdG8gdGhpcy5wcm9wcy5jb3VudFxuLy8gKiB0aGlzIGNvbXBvbmVudCBpcyBzdWIgZnJvbSBzdG9yZSB1cGRhdGU6IEFueSB0aW1lIHRoZSBzdG9yZSBpcyB1cGRhdGVkLCBtYXBTdGF0ZVRvUHJvcHMgd2lsbCBiZSBjYWxsZWRcbi8vICogdGhlIHJlc3VsdCBpcyBhIG11c3QgYmUgYSBwbGFuZSB0ZXh0LCB3aGljaCB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnRzIHByb3BzXG4vLyAqIElmIHlvdSBkb24ndCB3YW50IHRvIHN1YnNjcmliZSB0byBzdG9yZSB1cGRhdGVzLCBwYXNzIG51bGwgb3IgdW5kZWZpbmVkIGluIHBsYWNlIG9mIG1hcFN0YXRlVG9Qcm9wcy5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkQ291bnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhhZGRDb3VudCwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuLy8gKiBvYmplY3RzIG9yIGZ1bmN0aW9uc1xuLy8gKiBvYmplY3Q6IGVhY2ggZnVuY3Rpb24gaW5zYXRlIGlzIGFzdW1lZCB0byBiZSBhIHJlZHV4IGFjdGlvblxuLy8gKiBmdW5jdGlvbjogeW91IGdldCBcImRpc3BhdGNoXCIgYXMgZmlyc3QgcGFyYW1ldGVyLCB0byBiaW5kIGRpc3BhdGNoLCB1c2UgYmluZEFjdGlvbkNyZWF0b3JzKClcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRDb3VudClcblxuXG4vKiBtYXAgc3RhdGUgdG8gcHJvcHMgKi9cbmZ1bmN0aW9uIG1hcFN0YXRlVE9QUm9wcyAoeyBjb3VudCB9KSB7XG4gIHJldHVybiAoeyBjb3VudCB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BZGRDb3VudC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBTkE7QUFNQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=