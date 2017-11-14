'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _user = require('../components/user');

var _user2 = _interopRequireDefault(_user);

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

      /* store.dispatch to dispatch the action */
      store.dispatch((0, _store.getPlusNumber)());
      store.dispatch((0, _store.updateCart)(0));
      store.dispatch((0, _store.updateGift)('waiting'));

      /* store.getState to get the current state */
      console.log('stored value', store.getState());

      /* store subscribe*/
      store.subscribe(function () {
        console.log('event subs??', document);
        document.body.innerText = store.getState();
      });

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
    _this.eventRandom = _this.eventRandom.bind(_this);

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
    key: 'eventRandom',
    value: function eventRandom() {
      console.log('Event procedure!!');
      this.props.getPlusNumber(); /* event dispatch*/
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('render is called??', this.props);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Render redux from ', this.props.isServer ? 'server' : 'client', '!'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'value: ', this.props.value), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'switch: ', this.props.turning ? 'on' : 'off'), _react2.default.createElement('button', { onClick: this.switchButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'turn on/off')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement(_plusCounter2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })), _react2.default.createElement('nav', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'Navigate'))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'cart items: ', this.props.cart), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'message: ', this.props.gift), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('input', { type: 'text', name: 'cart', placeholder: 'introduce a numero', value: this.state.itemCounter, onChange: this.handlerButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('input', { type: 'text', name: 'message', placeholder: 'introduce a message', value: this.state.inputText, onChange: this.handlerButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement('button', { onClick: this.updateCart, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Update items')))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, 'event click subscribe'), _react2.default.createElement('button', { onClick: this.eventRandom, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, 'Event??')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, this.props.days.map(function (day) {
        return _react2.default.createElement(_user2.default, (0, _extends3.default)({}, day, { key: day.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }));
      })));
    }
  }]);

  return Sample;
}(_react2.default.Component);

Sample.defaultProps = {
  days: [{
    id: 1,
    name: 'nichiyoubi',
    form: 'a'
  }, {
    id: 2,
    name: 'getsuyoubi',
    form: 'b'
  }, {
    id: 3,
    name: 'kayoubi',
    form: 'c'
  }, {
    id: 4,
    name: 'suiyoubi',
    form: 'd'
  }, {
    id: 5,
    name: 'mokuyoubi',
    form: 'e'
  }, {
    id: 6,
    name: 'kinyoubi',
    form: 'f'
  }, {
    id: 7,
    name: 'doyoubi',
    form: 'g'
  }]
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NhbXBsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJ3aXRoUmVkdXgiLCJQbHVzQ291bnRlciIsIlVzZXIiLCJpbml0U3RvcmUiLCJzdGFydENsb2NrIiwiZ2V0UGx1c051bWJlciIsInNlcnZlclJlbmRlckNsb2NrIiwidXBkYXRlU3RhdGVUdXJuaW5nIiwidXBkYXRlQ2FydCIsInVwZGF0ZUdpZnQiLCJTYW1wbGUiLCJzdG9yZSIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJzdWJzY3JpYmUiLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lclRleHQiLCJwcm9wcyIsImFkZEV2ZW50IiwiYmluZCIsInN3aXRjaEJ1dHRvbiIsImhhbmRsZXJCdXR0b24iLCJldmVudFJhbmRvbSIsInN0YXRlIiwiaXRlbUNvdW50ZXIiLCJpbnB1dFRleHQiLCJjYXJ0IiwibWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInR1cm5pbmciLCJnaWZ0IiwiZGF5cyIsIm1hcCIsImRheSIsImlkIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZm9ybSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBVTs7OztBQUVqQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0s7Ozs7Ozs7SSxBQUVEOzs7OzswQ0FDeUM7VUFBbkIsQUFBbUIsYUFBbkIsQUFBbUI7VUFBWixBQUFZLGdCQUFaLEFBQVksQUFDM0M7O0FBQ0E7WUFBQSxBQUFNLFNBQU4sQUFBZSxBQUNmO1lBQUEs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QVYsQUFBbUIsYUFBbkIsQUFBbUI7TUFBbkIsQUFBeUIsYUFBekIsQUFBeUI7U0FBWSxFQUFFLE9BQUYsT0FBUyxTQUFULFNBQWtCLE1BQWxCLE1BQXdCLE1BQTdELEFBQXFDO0FBQTdEOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7bUJBQ2lCLEFBQW1CLHFEQUQ3QixBQUNVLEFBQWtDLEFBQ2pEO3dCQUFvQixBQUFtQiwwREFGbEMsQUFFZSxBQUF1QyxBQUMzRDtnQkFBWSxBQUFtQixrREFIMUIsQUFHTyxBQUErQixBQUMzQztnQkFBWSxBQUFtQixrREFKakMsQUFBTyxBQUlPLEFBQStCLEFBRTlDO0FBTlEsQUFDTDtBQUZKLEFBU0E7O2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsaUJBQXJCLEFBQXNDLG9CQUFyRCxBQUFlLEFBQTBEIiwiZmlsZSI6InNhbXBsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFmZmRpZ2l0YWwvRGVza3RvcC9yZWR1eC93aXRoLXJlZHV4In0=