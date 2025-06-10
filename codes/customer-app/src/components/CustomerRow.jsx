import React, { Component } from 'react'

export default class CustomerRow extends Component {
   
  deleteCustomerRow(id) {
    console.log("<CustomerRow/> id", id)
    this.props.delEvent(id); // passed from CustomerList -Parent
  }
  render() {
    // destructuring
     let {id, name, played_by} = this.props.customer;
    return (
      <div>
        {name} as {played_by}
        &nbsp;
        <button type='button' onClick={() => this.deleteCustomerRow(id)}>Delete</button>
      </div>
    )
  }
}
