'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _redux = require('redux');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _plusCounter = require('../components/plus-counter');

var _plusCounter2 = _interopRequireDefault(_plusCounter);

var _store = require('../store');

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