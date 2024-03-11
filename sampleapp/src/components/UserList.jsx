import React, { Component } from 'react'
import User from './User'

export default class UserList extends Component {
  state = {
    users: [
        {
            id: 1,
            firstName: 'Rachel',
            lastName: 'Green'
        },
        {
            id: 2,
            firstName: 'Monica',
            lastName: 'Geller'
        },
        {
            id: 3,
            firstName: 'Joey',
            lastName: 'Tribuanni'
        },
        {
            id: 4,
            firstName: 'Ross',
            lastName: 'Geller'
        },
        {
            id: 5,
            firstName: 'Phobey',
            lastName: 'Buffay'
        },
        {
            id: 6,
            firstName: 'Chandler',
            lastName: 'Bing'
        }
    ]
  }
  render() {
    return (
      <div>
        <h1>Users List</h1> 
        {
            this.state.users.map(user => <User customer={user} />)
        }
      </div>
    )
  }
}
