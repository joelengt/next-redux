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

var _jsxFileName = '/home/staffdigital/Desktop/redux/with-redux/components/AddCount.js';


var AddCount = function (_Component) {
  (0, _inherits3.default)(AddCount, _Component);

  function AddCount(props) {
    (0, _classCallCheck3.default)(this, AddCount);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddCount.__proto__ || (0, _getPrototypeOf2.default)(AddCount)).call(this, props));

    _this.addEventCounter = _this.addEventCounter.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddCount, [{
    key: 'addEventCounter',
    value: function addEventCounter() {
      this.props.addCount();
    }
  }, {
    key: 'render',
    value: function render() {
      var count = this.props.count;

      return _react2.default.createElement('div', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2569186640',
        css: 'div.jsx-2569186640{padding:0 0 20px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUdnQyxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9BZGRDb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFmZmRpZ2l0YWwvRGVza3RvcC9yZWR1eC93aXRoLXJlZHV4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgYWRkQ291bnQgfSBmcm9tICcuLi9zdG9yZSdcblxuY2xhc3MgQWRkQ291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuYWRkRXZlbnRDb3VudGVyID0gdGhpcy5hZGRFdmVudENvdW50ZXIuYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkRXZlbnRDb3VudGVyKCkge1xuICAgIHRoaXMucHJvcHMuYWRkQ291bnQoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNvdW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHA+QWRkQ291bnQ6IDxzcGFuPntjb3VudH08L3NwYW4+PC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkRXZlbnRDb3VudGVyfT5BZGQgVG8gQ291bnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vKmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICBsZXQgZGF0YSA9IHtcbiAgICBjb3VudDogc3RhdGUuY291bnRcbiAgfVxuICByZXR1cm4gZGF0YVxufSovXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNvdW50IH0pID0+ICh7IGNvdW50IH0pIC8vIHRvIHRoaXMucHJvcHMuY291bnRcblxuLy8gKiB0aGlzIGNvbXBvbmVudCBpcyBzdWIgZnJvbSBzdG9yZSB1cGRhdGU6IEFueSB0aW1lIHRoZSBzdG9yZSBpcyB1cGRhdGVkLCBtYXBTdGF0ZVRvUHJvcHMgd2lsbCBiZSBjYWxsZWRcbi8vICogdGhlIHJlc3VsdCBpcyBhIG11c3QgYmUgYSBwbGFuZSB0ZXh0LCB3aGljaCB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnRzIHByb3BzXG4vLyAqIElmIHlvdSBkb24ndCB3YW50IHRvIHN1YnNjcmliZSB0byBzdG9yZSB1cGRhdGVzLCBwYXNzIG51bGwgb3IgdW5kZWZpbmVkIGluIHBsYWNlIG9mIG1hcFN0YXRlVG9Qcm9wcy5cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDb3VudDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZENvdW50LCBkaXNwYXRjaClcbiAgfVxufVxuXG4vLyAqIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4vLyAqIG9iamVjdDogZWFjaCBmdW5jdGlvbiBpbnNhdGUgaXMgYXN1bWVkIHRvIGJlIGEgcmVkdXggYWN0aW9uXG4vLyAqIGZ1bmN0aW9uOiB5b3UgZ2V0IFwiZGlzcGF0Y2hcIiBhcyBmaXJzdCBwYXJhbWV0ZXIsIHRvIGJpbmQgZGlzcGF0Y2gsIHVzZSBiaW5kQWN0aW9uQ3JlYXRvcnMoKVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRDb3VudClcblxuIl19 */\n/*@ sourceURL=components/AddCount.js */'
      }), _react2.default.createElement('p', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'AddCount: ', _react2.default.createElement('span', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, count)), _react2.default.createElement('button', { onClick: this.addEventCounter, className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Add To Count'));
    }
  }]);

  return AddCount;
}(_react.Component);

/*function mapStateToProps(state) {
  let data = {
    count: state.count
  }
  return data
}*/

var mapStateToProps = function mapStateToProps(_ref) {
  var count = _ref.count;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYWRkQ291bnQiLCJBZGRDb3VudCIsInByb3BzIiwiYWRkRXZlbnRDb3VudGVyIiwiYmluZCIsImNvdW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQWdCOzs7Ozs7O0ksQUFFbkI7b0NBQ0o7O29CQUFBLEFBQVksT0FBTzt3Q0FBQTs7MElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQUYzQixBQUVqQjtXQUNEOzs7OztzQ0FFaUIsQUFDaEI7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzZCQUVTO1VBQUEsQUFDQSxRQUFVLEtBRFYsQUFDZSxNQURmLEFBQ0EsQUFFUjs7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUE7aUJBQUE7YUFBQSxBQU1FO0FBTkYsMEJBTUUsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWEsOEJBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FOZixBQU1FLEFBQWEsQUFDYix5QkFBQSxjQUFBLFlBQVEsU0FBUyxLQUFqQixBQUFzQiw0QkFBdEI7O29CQUFBO3NCQUFBO0FBQUE7U0FSSixBQUNFLEFBT0UsQUFHTDs7Ozs7QSxBQXhCb0I7O0FBMkJ2Qjs7Ozs7OztBQU9BLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHNCQUFBO01BQUEsQUFBRyxhQUFILEFBQUc7U0FBYSxFQUFFLE9BQWxCLEFBQWdCO0EsQUFBeEMsR0FBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLEFBQW1CLGdEQUQvQixBQUFPLEFBQ0ssQUFBNkIsQUFFMUM7QUFIUSxBQUNMO0FBRko7O0FBTUE7QUFDQTtBQUNBLEFBRUE7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsb0JBQXhDLEFBQWUsQUFBNkMiLCJmaWxlIjoiQWRkQ291bnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3RhZmZkaWdpdGFsL0Rlc2t0b3AvcmVkdXgvd2l0aC1yZWR1eCJ9