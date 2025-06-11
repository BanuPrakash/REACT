import React, { Component } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'

export default class ParentComponent extends Component {
    state = {
        name: 'Roger',
        age: 35
    }

    updateAge() {
        this.setState({
            age: this.state.age + 1
        })
    }

    updateName() {
        this.setState({
            name: this.state.name + ".."
        })
    }
    render() {
        console.log("Parent Renders")
        return (
            <div>
                <h1>Parent Component</h1>
                <NameComponent name={this.state.name} />
                <AgeComponent age={this.state.age} />
                <button type='button' onClick={() => this.updateName()}>Change Name</button>
                <button type='button' onClick={() => this.updateAge()}>Change Age</button>
            </div>
        )
    }
}
