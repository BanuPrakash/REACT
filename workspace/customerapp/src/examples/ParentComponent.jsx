import React, { Component } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'

export default class ParentComponent extends Component {
    state = {
        name: "Roger",
        age: 25
    }

    constructor() {
        super();
        this.changeName = this.changeName.bind(this);
        this.incrementAge = this.incrementAge.bind(this);
    }
    incrementAge() {
        this.setState({
            age: this.state.age + 1
        })
    }

    changeName() {
        this.setState({
            name: this.state.name + "..."
        })
    }

    render() {
        console.log("Parent renders!!!")
        return (
            <div>
                Name : {this.state.name} <br />
                Age : {this.state.age} <br />
                <NameComponent name={this.state.name} />
                <AgeComponent age={this.state.age} />
                <button type='button' onClick={this.incrementAge}>Change Age</button> <br />
                <button type='button' onClick={() => this.changeName()}>Change Name</button> <br />
            </div>
        )
    }
}
