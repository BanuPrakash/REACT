import React, { Component } from 'react'
import User from './User'
import Filter from './Filter'

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
    // adding behaviour / action / method
    deleteUser(id) {
        let userdata = this.state.users.filter(user => user.id !== id);
        // update the state
        this.setState({
            users: userdata
        })
    }
    render() {
        return (
            <div>
                <h1>Users List</h1>
                <Filter />
                {
                    this.state.users.map(user => <User customer={user} delEvent={(id) => this.deleteUser(id)} />)
                }
            </div>
        )
    }
}
