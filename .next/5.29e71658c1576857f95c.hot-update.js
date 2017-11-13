webpackHotUpdate(5,{

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(413);

var _link2 = _interopRequireDefault(_link);

var _redux = __webpack_require__(393);

var _nextReduxWrapper = __webpack_require__(439);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _plusCounter = __webpack_require__(450);

var _plusCounter2 = _interopRequireDefault(_plusCounter);

var _store = __webpack_require__(410);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/staffdigital/Desktop/redux/with-redux/pages/sample.js?entry';


var Sample = function (_React$Component) {
  (0, _inherits3.default)(Sample, _React$Component);

  (0, _createClass3.default)(Sample, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch((0, _store.getPlusNumber)());
      store.dispatch((0, _store.updateCart)(0));
      store.dispatch((0, _store.updateGift)('waiting'));

      return { isServer: isServer };
    }
  }]);

  function Sample(props) {
    (0, _classCallCheck3.default)(this, Sample);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Sample.__proto__ || (0, _getPrototypeOf2.default)(Sample)).call(this, props));

    _this.addEvent = _this.addEvent.bind(_this);
    _this.switchButton = _this.switchButton.bind(_this);
    _this.updateCart = _this.updateCart.bind(_this);
    _this.handlerButton = _this.handlerButton.bind(_this);

    _this.state = { itemCounter: 0, inputText: 'haha' };
    return _this;
  }

  (0, _createClass3.default)(Sample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Event??? componentDidMount');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('Event??? componentWillUnmount');
    }
  }, {
    key: 'addEvent',
    value: function addEvent() {
      this.props.getPlusNumber();
    }
  }, {
    key: 'switchButton',
    value: function switchButton() {
      this.props.updateStateTurning();
    }
  }, {
    key: 'updateCart',
    value: function updateCart() {
      var cart = this.state.itemCounter;
      var message = this.state.inputText;

      this.props.updateCart(cart);
      this.props.updateGift(message);

      console.log('cart state ==> ', this.state.itemCounter);
      console.log('message state ==> ', this.state.inputText);
    }
  }, {
    key: 'handlerButton',
    value: function handlerButton(e) {
      switch (e.target.name) {
        case 'cart':
          this.setState({ itemCounter: e.target.value });
          break;
        case 'message':
          this.setState({ inputText: e.target.value });
          break;
        default:
          console.log('haha');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Render redux from ', this.props.isServer ? 'server' : 'client', '!'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'value: ', this.props.value), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'switch: ', this.props.turning ? 'on' : 'off'), _react2.default.createElement('button', { onClick: this.switchButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'turn on/off')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_plusCounter2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement('nav', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Navigate'))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'cart items: ', this.props.cart), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'message: ', this.props.gift), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('input', { type: 'text', name: 'cart', placeholder: 'introduce a numero', value: this.state.itemCounter, onChange: this.handlerButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement('input', { type: 'text', name: 'message', placeholder: 'introduce a message', value: this.state.inputText, onChange: this.handlerButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement('button', { onClick: this.updateCart, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Update items'))));
    }
  }]);

  return Sample;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var value = _ref2.value,
      turning = _ref2.turning,
      cart = _ref2.cart,
      gift = _ref2.gift;
  return { value: value, turning: turning, cart: cart, gift: gift };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPlusNumber: (0, _redux.bindActionCreators)(_store.getPlusNumber, dispatch),
    updateStateTurning: (0, _redux.bindActionCreators)(_store.updateStateTurning, dispatch),
    updateCart: (0, _redux.bindActionCreators)(_store.updateCart, dispatch),
    updateGift: (0, _redux.bindActionCreators)(_store.updateGift, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, mapDispatchToProps)(Sample);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NhbXBsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJ3aXRoUmVkdXgiLCJQbHVzQ291bnRlciIsImluaXRTdG9yZSIsInN0YXJ0Q2xvY2siLCJnZXRQbHVzTnVtYmVyIiwic2VydmVyUmVuZGVyQ2xvY2siLCJ1cGRhdGVTdGF0ZVR1cm5pbmciLCJ1cGRhdGVDYXJ0IiwidXBkYXRlR2lmdCIsIlNhbXBsZSIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJkaXNwYXRjaCIsInByb3BzIiwiYWRkRXZlbnQiLCJiaW5kIiwic3dpdGNoQnV0dG9uIiwiaGFuZGxlckJ1dHRvbiIsInN0YXRlIiwiaXRlbUNvdW50ZXIiLCJpbnB1dFRleHQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIm1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInNldFN0YXRlIiwidmFsdWUiLCJ0dXJuaW5nIiwiZ2lmdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNLOzs7Ozs7O0ksQUFFRDs7Ozs7MENBQ3lDO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQzNDOztZQUFBLEFBQU0sU0FBTixBQUFlLEFBQ2Y7WUFBQSxBQUFNLFNBQVMsdUJBQWYsQUFBZSxBQUFXLEFBQzFCO1lBQUEsQUFBTSxTQUFTLHVCQUFmLEFBQWUsQUFBVyxBQUUxQjs7YUFBTyxFQUFFLFVBQVQsQUFBTyxBQUNSO0FBRUQ7OztrQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1gsQUFDTjs7VUFBQSxB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/staffdigital/Desktop/redux/with-redux/pages/sample.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/staffdigital/Desktop/redux/with-redux/pages/sample.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/sample")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yOWU3MTY1OGMxNTc2ODU3Zjk1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2FtcGxlLmpzP2NhYzhiZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCBQbHVzQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL3BsdXMtY291bnRlcidcblxuaW1wb3J0IHtcbiAgaW5pdFN0b3JlLFxuICBzdGFydENsb2NrLFxuICBnZXRQbHVzTnVtYmVyLFxuICBzZXJ2ZXJSZW5kZXJDbG9jayxcbiAgdXBkYXRlU3RhdGVUdXJuaW5nLFxuICB1cGRhdGVDYXJ0LFxuICB1cGRhdGVHaWZ0XG59IGZyb20gJy4uL3N0b3JlJ1xuXG5jbGFzcyBTYW1wbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHN0b3JlLCBpc1NlcnZlciB9KSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goZ2V0UGx1c051bWJlcigpKVxuICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZUNhcnQoMCkpXG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlR2lmdCgnd2FpdGluZycpKVxuXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmFkZEV2ZW50ID0gdGhpcy5hZGRFdmVudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zd2l0Y2hCdXR0b24gPSB0aGlzLnN3aXRjaEJ1dHRvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVDYXJ0ID0gdGhpcy51cGRhdGVDYXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZXJCdXR0b24gPSB0aGlzLmhhbmRsZXJCdXR0b24uYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHsgaXRlbUNvdW50ZXI6IDAsIGlucHV0VGV4dDogJ2hhaGEnIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zb2xlLmxvZygnRXZlbnQ/Pz8gY29tcG9uZW50RGlkTW91bnQnKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGNvbnNvbGUubG9nKCdFdmVudD8/PyBjb21wb25lbnRXaWxsVW5tb3VudCcpXG4gIH1cblxuICBhZGRFdmVudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldFBsdXNOdW1iZXIoKVxuICB9XG5cbiAgc3dpdGNoQnV0dG9uKCkge1xuICAgIHRoaXMucHJvcHMudXBkYXRlU3RhdGVUdXJuaW5nKClcbiAgfVxuXG4gIHVwZGF0ZUNhcnQoKSB7XG4gICAgbGV0IGNhcnQgPSB0aGlzLnN0YXRlLml0ZW1Db3VudGVyXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnN0YXRlLmlucHV0VGV4dFxuXG4gICAgdGhpcy5wcm9wcy51cGRhdGVDYXJ0KGNhcnQpXG4gICAgdGhpcy5wcm9wcy51cGRhdGVHaWZ0KG1lc3NhZ2UpXG5cbiAgICBjb25zb2xlLmxvZygnY2FydCBzdGF0ZSA9PT4gJywgdGhpcy5zdGF0ZS5pdGVtQ291bnRlcilcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZSBzdGF0ZSA9PT4gJywgdGhpcy5zdGF0ZS5pbnB1dFRleHQpXG4gICAgXG4gIH1cblxuICBoYW5kbGVyQnV0dG9uKGUpIHtcbiAgICBzd2l0Y2goZS50YXJnZXQubmFtZSkge1xuICAgICAgY2FzZSAnY2FydCc6XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1Db3VudGVyOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VGV4dDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYWhhJylcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5SZW5kZXIgcmVkdXggZnJvbSB7IHRoaXMucHJvcHMuaXNTZXJ2ZXIgPyAnc2VydmVyJzogJ2NsaWVudCcgfSE8L3A+XG4gICAgICAgIDxwPnZhbHVlOiB7IHRoaXMucHJvcHMudmFsdWUgfTwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5zd2l0Y2g6IHsgdGhpcy5wcm9wcy50dXJuaW5nID8gJ29uJzonb2ZmJyB9PC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17IHRoaXMuc3dpdGNoQnV0dG9uIH0+dHVybiBvbi9vZmY8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFBsdXNDb3VudGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5OYXZpZ2F0ZTwvYT48L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPmNhcnQgaXRlbXM6IHsgdGhpcy5wcm9wcy5jYXJ0IH08L3A+XG4gICAgICAgICAgPHA+bWVzc2FnZTogeyB0aGlzLnByb3BzLmdpZnQgfTwvcD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNhcnRcIiBwbGFjZWhvbGRlcj1cImludHJvZHVjZSBhIG51bWVyb1wiIHZhbHVlPXsgdGhpcy5zdGF0ZS5pdGVtQ291bnRlciB9IG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVyQnV0dG9uIH0vPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cImludHJvZHVjZSBhIG1lc3NhZ2VcIiB2YWx1ZT17IHRoaXMuc3RhdGUuaW5wdXRUZXh0IH0gb25DaGFuZ2U9eyB0aGlzLmhhbmRsZXJCdXR0b24gfS8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyB0aGlzLnVwZGF0ZUNhcnQgfT5VcGRhdGUgaXRlbXM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgdmFsdWUsIHR1cm5pbmcsIGNhcnQsIGdpZnQgfSkgPT4gKHsgdmFsdWUsIHR1cm5pbmcsIGNhcnQsIGdpZnQgfSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZ2V0UGx1c051bWJlcjogYmluZEFjdGlvbkNyZWF0b3JzKGdldFBsdXNOdW1iZXIsIGRpc3BhdGNoKSxcbiAgICB1cGRhdGVTdGF0ZVR1cm5pbmc6IGJpbmRBY3Rpb25DcmVhdG9ycyh1cGRhdGVTdGF0ZVR1cm5pbmcsIGRpc3BhdGNoKSxcbiAgICB1cGRhdGVDYXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnModXBkYXRlQ2FydCwgZGlzcGF0Y2gpLFxuICAgIHVwZGF0ZUdpZnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyh1cGRhdGVHaWZ0LCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2FtcGxlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc2FtcGxlLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFTQTtBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFBQTs7OztBQUlBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUtBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBOzs7OztBQUtBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7OztBQXRGQTtBQUNBO0FBd0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=