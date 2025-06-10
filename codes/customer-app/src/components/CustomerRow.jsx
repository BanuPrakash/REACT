import React, { Component } from 'react'

export default class CustomerRow extends Component {
   
  render() {
    // destructuring
     let {id, name, played_by} = this.props.customer;
    return (
      <div>
        {name} as {played_by}
        &nbsp;
        <button type='button'>Delete</button>
      </div>
    )
  }
}
