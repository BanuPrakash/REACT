import React, { Component } from 'react'
import User from './User'
import Filter from './Filter'
import users from '../data';
export default class UserList extends Component {
    state = {
        users: users, //for display
        originalUsers:users
    }

    filterCustomers(txt) {
        let userdata = this.state.originalUsers.filter(user => (user.lastName.toLowerCase()
            .indexOf(txt.toLowerCase()) >= 0));
        // update the state
        this.setState({
            users: userdata
        })
    } 

    // adding behaviour / action / method
    deleteUser(id) {
        let userdata = this.state.originalUsers.filter(user => user.id !== id);
        // update the state
        this.setState({
            users: userdata,
            originalUsers: userdata
        })

       // this.state.users = userdata; // reconcillation won't happen
    }
    render() {
        return (
            <div>
                <h1>Users List</h1>
                <Filter filterEvt={(txt) => this.filterCustomers(txt)}/>
                {
                    this.state.users.map(user => <User key={user.id} customer={user} delEvent={(id) => this.deleteUser(id)} />)
                }
            </div>
        )
    }
}
