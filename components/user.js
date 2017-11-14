import React, {Component} from 'react'

class AddCount extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <p>{ this.props.id } ) { this.props.name } | { this.props.form }</p>
      </div>
    )
  }
}

export default AddCount
