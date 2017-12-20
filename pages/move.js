import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import PropTypes from 'prop-types'

class Move extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    message: PropTypes.string,
    getAge: PropTypes.func.isRequired,
    getVal: PropTypes.func,
    getOption: PropTypes.object,
    posts: PropTypes.array.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
    values: PropTypes.arrayOf(
      PropTypes.object
    ).isRequired
  }

  static defaultProps = {
    count: 20,
    message: 'apple',
    getAge: function(){ alert("get Age"); },
    getVal: function(e) { console.log('CUrrent val =>=>', e.target.value) },
    getOption: { name: 'aa', age: 12, val: '1221' },
    posts: ['watermelon', 'apple', { name: 'aa', age: 12, val: '1221' }],
    options: ['watermelon', 'apple', 'orange'],
    values: [{ name: 'aa', age: 12, val: '1221' }, { name: 'bb', age: 20, val: 'aaaaaaa' }]
  };

  getA() {
    return 'aaa'
  }

  getB() {
    return 'bbb'
  }

  render () {
    const { values, getVal, message, options } = this.props
    const isEmpty = values.length === 0
    const isFetching = true // trick => state to mark when the fetching data start and finish

    return (
      <div>
        <p>Counter: { this.props.count }</p>
        <ul>
          {
            values.map((item, index) =>
              <li key={index}  {...item}> {item.name} </li>
            )
          }
        </ul>
        <ul>
          {
            values.map((item, index) => {
              return (
                <li key={index}  {...item}> {item.name} </li>
              )
            })
          }
        </ul>
        <select onChange={getVal}
                value={message}>
          {
            options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
        <div>
          {
            isEmpty
            ? (isFetching ? <h2>Loading...</h2> : <h2> Empty.</h2>)
            : (
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <a> HERE! </a>
              </div>
            )
          }
          {
            isFetching &&
            <p>hello!!!!!!!!!</p>
          }
          {
            !isFetching &&
            <p>hello x3</p>
          }
        </div>
        <div style={{ color: 'red', 'font-size': '20px' }}>
          hello
        </div>
      </div>
    )
  }
}

/* Set Props Types */
// Move.propTypes = {
//   count: PropTypes.number.isRequired,
//   message: PropTypes.string,
//   getAge: PropTypes.func.isRequired,
//   getVal: PropTypes.func,
//   getOption: PropTypes.object,
//   posts: PropTypes.array.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.string.isRequired
//   ).isRequired,
//   values: PropTypes.arrayOf(
//     PropTypes.object
//   ).isRequired
// }

/* Set Props Default */
// Move.defaultProps = {
//   count: 10,
//   message: 'Hello',
//   getAge: function(){ alert("get Age"); },
//   getVal: function() { alert("get Val"); },
//   getOption: { name: 'aa', age: 12, val: '1221' },
//   posts: ['watermelon', 'apple', { name: 'aa', age: 12, val: '1221' }],
//   options: ['watermelon', 'apple', 'orange'],
//   values: [{ name: 'aa', age: 12, val: '1221' }, { name: 'bb', age: 20, val: 'aaaaaaa' }]
// };

export default Move

